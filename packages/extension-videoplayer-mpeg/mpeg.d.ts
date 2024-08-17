/** @noSelfInFile **/

/**
 * @see {@link https://github.com/defold/extension-videoplayer-mpeg|Github Source}
 */
declare namespace mpeg {
	interface MpegInfo {
		width: number;
		height: number;
		bytes_per_pixel: number;
		framerate: number;
		samplerate: number;
		is_looping: boolean;
		is_streaming: boolean;
		eos: boolean;
		streaming_buffer_bytes_remaining: number;
		streaming_buffer_capacity: number;
	}

	type Handle = number & { readonly __brand: 'mpeg.Handle' };

	export function open(
		video: buffer | string,
	): LuaMultiReturn<[Handle, string | undefined]>;
	export function close(handle: Handle): void;
	export function decode(handle: Handle, seconds: number): void;
	export function write(
		handle: Handle,
		data: string,
	): LuaMultiReturn<[number | undefined, string | undefined]>;
	export function seek(handle: Handle, time: number, seekExact?: boolean): void;
	export function rewind(handle: Handle): void;
	export function get_frame(handle: Handle): buffer | undefined;
	export function get_info(handle: Handle): MpegInfo;
}
