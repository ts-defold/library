/// <library version="0.0.1" src="https://github.com/defold/extension-videoplayer/archive/refs/heads/master.zip" />
/** @noSelfInFile */

/**
 * Videoplayer for the Defold engine
 * @see {@link https://github.com/defold/extension-videoplayer|Github Source}
 */
declare namespace videoplayer {
	type VideoHandle = Readonly<{ __brand: 'videoplayerHandle' }>;
	type VideoResource = ReturnType<typeof resource.load>;

	export function close(video: VideoHandle): void;

	/** Opens a video resource, and returns a handle to the instance. */
	export function open(resource: VideoResource): VideoHandle;
	/**
	 * Gets the info about the video:
	 * ```
	 * width - in pixels
	 * height - in pixels
	 * bytes_per_pixel
	 * frame - current frame
	 * time - current time in seconds
	 * eos - true if end of stream was reached
	 * ```
	 */
	export function get_info(video: VideoHandle): {
		width: number;
		height: number;
		bytes_per_pixel: number;
		get_frame: number;
		time: number;
		eos: boolean;
	};
	/**
	 * Gets the video buffer. This is allocated when opening the video.
	 * The buffer has one stream, with signature `{hash("rgb"), buffer.VALUE_TYPE_UINT8, 3}`. */
	export function get_frame(video: VideoHandle): buffer;
	/** Updates the video with a delta time */
	export function update(video: VideoHandle, dt: number): void;
}
