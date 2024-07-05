/// <library version="0.0.1" src="https://github.com/Lerg/extension-nativetext/archive/master.zip" />
/** @noSelfInFile */

/**
 * @see {@link https://github.com/Lerg/extension-nativetext|Github Source}
 */
declare namespace nativetext {
	/**
	 * Optionally init the extension and set maximum texture size, default is 1024x1024.
	 * @param {table} params table with the max_texture_width and max_texture_height parameters.
	 */
	export function init(params: {
		max_texture_width: number;
		max_texture_height: number;
	}): void;

	/**
	 * Generate an image resource with rendered text.
	 * @param {table} params table with the text parameters.
	 */
	function new_(params: {
		text: string;
		width?: number;
		size?: number;
		underline?: boolean;
		spacing_add?: number;
		align?: Alignment;
		color?: vmath.vector4;
		outline_size?: number;
		outline_color?: vmath.vector4;
		shadow_size?: number;
		shadow_x?: number;
		shadow_y?: number;
		shadow_color?: vmath.vector4;
		background_color?: vmath.vector4;
	}): void;
	export { new_ as new };

	type Alignment = number & Readonly<{ __brand: 'Alignment' }>;
	/**
	 * Normal alignment.
	 */
	export const align_normal: Alignment;
	/**
	 * Left alignment.
	 */
	export const align_left: Alignment;
	/**
	 * Right alignment.
	 */
	export const align_right: Alignment;
	/**
	 * Center alignment.
	 */
	export const align_center: Alignment;
	/**
	 * Justified alignment. iOS/macOS only.
	 */
	export const align_justified: Alignment;
}
