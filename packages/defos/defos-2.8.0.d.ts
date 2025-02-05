/// <library version="2.8.0" src="https://github.com/subsoap/defos/archive/refs/tags/v2.8.0.zip" />
/// <reference path="./defos.d.ts" />

/** @noSelfInFile */

/** */
declare namespace defos {
	/** 
	 * Only for windows and macos
	 * @since 2.8.0
	 */
	export function set_borderless(bool_value: boolean): void;
	/** 
	 * Only for windows and macos
	 * @since 2.8.0
	 */
	export function toggle_borderless(): void;
	/** 
	 * Only for windows and macos
	 * @since 2.8.0
	 */
	export function is_borderless(): boolean;
}
