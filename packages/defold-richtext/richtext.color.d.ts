/**
 * @see {@link https://github.com/britzl/defold-richtext|Github Source}
 * @example `import * as color from 'richtext.color'`
 * @noResolution
 */
declare module 'richtext.color' {
	export function add(name: string, color: number | string): void;

	export const COLORS: {
		aqua: vmath.vector4;
		black: vmath.vector4;
		blue: vmath.vector4;
		brown: vmath.vector4;
		cyan: vmath.vector4;
		darkblue: vmath.vector4;
		fuchsia: vmath.vector4;
		green: vmath.vector4;
		grey: vmath.vector4;
		lightblue: vmath.vector4;
		lime: vmath.vector4;
		magenta: vmath.vector4;
		maroon: vmath.vector4;
		navy: vmath.vector4;
		olive: vmath.vector4;
		orange: vmath.vector4;
		purple: vmath.vector4;
		red: vmath.vector4;
		silver: vmath.vector4;
		teal: vmath.vector4;
		white: vmath.vector4;
		yellow: vmath.vector4;
	};
}
