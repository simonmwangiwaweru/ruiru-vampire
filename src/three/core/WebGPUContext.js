import * as THREE from "three/webgpu";

class WebGPUContext {
	constructor(container) {
		this.container = container;
		this.renderer = null;
		this.canvas = null;
		this.pixelRatio = Math.min(window.devicePixelRatio, 1.5);
	}

	async init() {
		this.canvas = this.#createCanvas();
		this.renderer = new THREE.WebGPURenderer({
			canvas: this.canvas,
			antialias: false,
		});

		await this.renderer.init();

		const { width, height } = this.getFullScreenDimensions();
		this.renderer.setSize(width, height);
		this.renderer.setPixelRatio(this.pixelRatio);
		this.renderer.shadowMap.enabled = false;
		this.renderer.autoClear = false;
		this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
	}

	getFullScreenDimensions() {
		const rect = this.container.getBoundingClientRect();
		return { width: Math.max(1, rect.width), height: Math.max(1, rect.height) };
	}

	#createCanvas() {
		const canvas = document.createElement("canvas");
		canvas.style.position = "absolute";
		canvas.style.inset = "0";
		canvas.style.width = "100%";
		canvas.style.height = "100%";
		canvas.style.pointerEvents = "auto";
		canvas.style.display = "block";
		this.container.appendChild(canvas);
		return canvas;
	}

	onResize(width, height) {
		this.pixelRatio = Math.min(window.devicePixelRatio, 1.5);
		this.renderer.setSize(width, height);
		this.renderer.setPixelRatio(this.pixelRatio);
	}

	dispose() {
		this.renderer?.dispose();
		if (this.canvas?.parentNode) {
			this.canvas.parentNode.removeChild(this.canvas);
		}
	}
}

export default WebGPUContext;
