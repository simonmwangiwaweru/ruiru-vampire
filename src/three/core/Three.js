import * as THREE from "three/webgpu";
import WebGPUContext from "./WebGPUContext";
import Scene from "../scenes/Scene";
import MouseTrail from "../utils/MouseTrail";
import FluidSim from "../postprocessing/FluidSim";
import PostProcessing from "../postprocessing/PostProcessing";

// The fluid sim is a soft, blurry mask — it doesn't need native display
// resolution. Sampling/writing a full-screen×devicePixelRatio render target
// 5x per pixel every frame (as the darken-blend shader does) is the single
// biggest cost in this pipeline on high-DPI displays. Cap its resolution
// independently of the main render size.
const FLUID_SIM_MAX_DIM = 640;

function getFluidSimSize(width, height) {
	const scale = Math.min(1, FLUID_SIM_MAX_DIM / Math.max(width, height));
	return {
		width: Math.max(1, Math.round(width * scale)),
		height: Math.max(1, Math.round(height * scale)),
	};
}

class Three {
	constructor(container) {
		this.container = container;
		this.clock = new THREE.Clock();
		this._raf = null;
		this._disposed = false;
		this._paused = false;
	}

	async run() {
		this.context = new WebGPUContext(this.container);
		await this.context.init();

		if (this._disposed) return;

		this.#setup();
		this.#animate();
		this.#addResizeListener();
	}

	#setup() {
		const { width, height } = this.context.getFullScreenDimensions();
		const pr = this.context.pixelRatio;
		const fluidSize = getFluidSimSize(width * pr, height * pr);
		this.scene = new Scene(this.context, this.container);
		this.mouseTrail = new MouseTrail(fluidSize.width, fluidSize.height);
		this.fluidSim = new FluidSim(fluidSize.width, fluidSize.height);

		this.postProcessing = new PostProcessing(
			this.context.renderer,
			this.scene.solidScene,
			this.scene.wireScene,
			this.scene.camera,
			this.fluidSim.texture,
		);
	}

	pause() {
		this._paused = true;
	}

	resume() {
		if (!this._paused || this._disposed) return;
		this._paused = false;
		this.clock.getDelta(); // discard time elapsed while paused
		this.#animate();
	}

	#animate() {
		if (this._disposed || this._paused) return;

		const delta = this.clock.getDelta();

		this.scene.animate(delta, this.clock.elapsedTime);

		// Update mouse trail → fluid sim
		this.mouseTrail.update(
			this.scene.cameraRig.mouseNormalized.x,
			this.scene.cameraRig.mouseNormalized.y,
		);
		this.fluidSim.update(this.context.renderer, this.mouseTrail.texture);

		// Render everything (scene passes + effects)
		this.postProcessing.render();

		this._raf = requestAnimationFrame(() => this.#animate());
	}

	#addResizeListener() {
		this._onResize = () => this.#onResize();
		window.addEventListener("resize", this._onResize);
	}

	#onResize() {
		const { width, height } = this.context.getFullScreenDimensions();
		const pr = this.context.pixelRatio;
		const fluidSize = getFluidSimSize(width * pr, height * pr);

		this.context.onResize(width, height);
		this.scene.onResize(width, height);
		this.fluidSim.onResize(fluidSize.width, fluidSize.height);
	}

	dispose() {
		this._disposed = true;
		if (this._raf) cancelAnimationFrame(this._raf);
		if (this._onResize) window.removeEventListener("resize", this._onResize);

		this.scene?.dispose();
		this.fluidSim?.dispose();
		this.postProcessing?.dispose();
		this.mouseTrail?.dispose();
		this.context?.dispose();
	}
}

export default Three;
