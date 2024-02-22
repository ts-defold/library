/// <library version="0.0.1" src="https://github.com/indiesoftby/defold-webgl-memory/archive/main.zip" />
/** @noSelfInFile */

/**
 * A quick and easy way to find out the GPU and CPU memory usage of your Defold game on HTML5 platform.
 * @url https://github.com/indiesoftby/defold-webgl-memory
 * @noResolution
 */
declare namespace webgl_memory {
	type memory = {
		wasmheap: number;
		buffer: number;
		renderbuffer: number;
		total: number;
		drawingbuffer: number;
		texture: number;
	};

	type context = {
		renderer: string;
		unmasked_vendor: string;
		vendor: string;
		unmasked_renderer: string;
	};

	type resources = {
		buffer: number;
		program: number;
		shader: number;
		sampler: number;
		framebuffer: number;
		sync: number;
		query: number;
		vertexArray: number;
		transformFeedback: number;
		renderbuffer: number;
		texture: number;
	};

	/**
	 * Returns a table with memory info data
	 * @returns {object}
	 */
	export function get_info(): {
		memory: memory;
		context: context;
		resources: resources;
	};
}
