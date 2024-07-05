/// <library version="1.0.1" src="https://github.com/defold/extension-videoplayer-native/archive/refs/tags/1.0.1.zip" />
/** @noSelfInFile */

/**
 * Videoplayer extension using native views
 * @see {@link https://github.com/defold/extension-videoplayer-native|Github Source}
 */
declare namespace videoplayer {
	type VnHandle = Readonly<{ __brand: 'videoplayer.create' }>;
	type VnEvent = Readonly<{ __brand: 'videoplayer.VIDEO_EVENT' }>;
	type VNCallback = (
		this: any,
		video: VnHandle,
		event: VnEvent,
		data: {},
	) => void;
	type VNSettings = { play_sound?: boolean };

	export const VIDEO_EVENT_READY: VnEvent;
	export const VIDEO_EVENT_FINISHED: VnEvent;
	export const VIDEO_EVENT_FAILED: VnEvent;

	/** Opens a video from a uri, and returns a handle to the videoplayer. */
	export function create(
		uri: string,
		settings?: VNSettings,
		callback?: VNCallback,
	): VnHandle;
	/** Destroys the video */
	export function destroy(handle: VnHandle): void;
	/** Shows or hides the video player view */
	export function set_visible(handle: VnHandle, visible: boolean): void;
	export function start(handle: VnHandle): void;
	export function stop(handle: VnHandle): void;
	export function pause(handle: VnHandle): void;
}
