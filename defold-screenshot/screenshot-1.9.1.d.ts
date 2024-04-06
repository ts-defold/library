/// <library version="1.9.1" src="https://github.com/britzl/defold-screenshot/archive/refs/tags/1.9.1.zip" />
/** @noSelfInFile */

/**
 * Screenshot extension for the Defold game engine
 * @url https://github.com/britzl/defold-screenshot
 */
declare namespace screenshot {
	/**
	 * Fullscreen screenshot as png - asynchronous.
	 */
	export function png(
		callback?: (this: any, png_data: string, w: number, h: number) => void,
	): void;
	/**
	 * Partial screenshot as png - asynchronous. 0,0 is lower left corner.
	 */
	export function png(
		x: number,
		y: number,
		w: number,
		h: number,
		callback?: (this: any, png_data: string, w: number, h: number) => void,
	): void;
	/**
	 * Fullscreen screenshot as png - synchronous. Not available on HTML5.
	 */
	export function png(): LuaMultiReturn<[string, number, number]>;
	/**
	 * Partial screenshot as png - synchronous. Not available on HTML5. 0,0 is lower left corner.
	 */
	export function png(
		x: number,
		y: number,
		w: number,
		h: number,
	): LuaMultiReturn<[string, number, number]>;

	/**
	 * Fullscreen screenshot as buffer - asynchronous.
	 */
	export function buffer(
		callback?: (this: any, buffer: buffer, w: number, h: number) => void,
	): void;
	/**
	 * Partial screenshot as buffer - asynchronous. 0,0 is lower left corner.
	 */
	export function buffer(
		x: number,
		y: number,
		w: number,
		h: number,
		callback?: (this: any, buffer: buffer, w: number, h: number) => void,
	): void;
	/**
	 * Fullscreen screenshot as buffer - synchronous. Not available on HTML5.
	 */
	export function buffer(): LuaMultiReturn<[buffer, number, number]>;
	/**
	 * Partial screenshot as buffer - synchronous. Not available on HTML5. 0,0 is lower left corner.
	 */
	export function buffer(
		x: number,
		y: number,
		w: number,
		h: number,
	): LuaMultiReturn<[buffer, number, number]>;

	/**
	 * Fullscreen screenshot as raw pixels - asynchronous.
	 */
	export function pixels(
		callback?: (this: any, pixels: string, w: number, h: number) => void,
	): void;
	/**
	 * Partial screenshot as raw pixels - asynchronous. 0,0 is lower left corner.
	 */
	export function pixels(
		x: number,
		y: number,
		w: number,
		h: number,
		callback?: (this: any, pixels: string, w: number, h: number) => void,
	): void;
	/**
	 * Fullscreen screenshot as raw pixels - synchronous. Not available on HTML5.
	 */
	export function pixels(): LuaMultiReturn<[string, number, number]>;
	/**
	 * Partial screenshot as raw pixels - synchronous. Not available on HTML5. 0,0 is lower left corner.
	 */
	export function pixels(
		x: number,
		y: number,
		w: number,
		h: number,
	): LuaMultiReturn<[string, number, number]>;
}
