/// <library version="1.5.1" src="https://github.com/defold/extension-safearea/archive/refs/tags/1.5.1.zip" />
/** @noSelfInFile */

/**
 * @see {@link https://github.com/defold/extension-safearea|Github Source}
 * @see {@link https://defold.com/extension-safearea/|Documentation}
 */
declare namespace safearea {
	/**
	 * iOS only
	 * Set background color in runtime
	 * @param {vector4} color Color will be used as background color.
	 * @since 1.4.0
	 */
	export function set_background_color(color: vmath.vector4): void;

	/**
	 * @returns table with top, left, right, bottom values of insets and status
	 */
	export function get_insets(): LuaMultiReturn<
		[
			{
				top: number;
				right: number;
				bottom: number;
				left: number;
			},
			StatusType,
		]
	>;

	type StatusType = number & Readonly<{ __brand: 'StatusType' }>;
	/** value is avaliable and valid, you may fully trust it. */
	export const STATUS_OK: StatusType;
	/** functionality isn't available on this platform or OS version. Values will be 0 */
	export const STATUS_NOT_AVAILABLE: StatusType;
	/** values aren't ready yet. Depends on platform and OS it may take a while (usually up to 200ms) to be ready, check later. Values will be 0 */
	export const STATUS_NOT_READY_YET: StatusType;
}


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
