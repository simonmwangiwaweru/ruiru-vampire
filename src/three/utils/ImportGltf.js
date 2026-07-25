import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");
loader.setDRACOLoader(dracoLoader);

export default class ImportGltf {
	constructor(url, { onLoad }) {
		this.ready = new Promise((resolve, reject) => {
			loader.load(
				url,
				(gltf) => {
					onLoad?.(gltf.scene);
					resolve();
				},
				undefined,
				(error) => {
					console.error("GLTF load error:", error);
					reject(error);
				},
			);
		});
	}
}
