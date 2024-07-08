/// <library version="1.5.1" src="https://github.com/defold/extension-safearea/archive/refs/tags/1.5.1.zip" />
/// <reference path="./safearea.d.ts" />

/** @noSelfInFile */

declare namespace safearea {
	/**
	 * Android 12.0+ only
	 * @since 1.5.0
	 * @returns table with radius for rounded corners of the device screen
	 */
	export function get_corners_radius(): LuaMultiReturn<
		[
			{
				bottom_left: number;
				bottom_right: number;
				top_left: number;
				top_right: number;
			},
			StatusType,
		]
	>;
}
