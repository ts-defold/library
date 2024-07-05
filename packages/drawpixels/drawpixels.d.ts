/** @noSelfInFile */

/**
 * @see {@link https://github.com/AGulev/drawpixels|Github Source}
 */
declare namespace drawpixels {
	interface BufferInfo {
		buffer: buffer;
		width: number;
		height: number;
		channels: 3 | 4;
		premultiply_alpha?: boolean;
	}

	export function circle(
		buffer_info: BufferInfo,
		pos_x: number,
		pos_y: number,
		diameter: number,
		red: number,
		green: number,
		blue: number,
		alpha: number,
		antialiasing?: boolean,
		width?: number,
	): void;

	export function filled_circle(
		buffer_info: BufferInfo,
		pos_x: number,
		pos_y: number,
		diameter: number,
		red: number,
		green: number,
		blue: number,
		alpha: number,
		antialiasing?: boolean,
	): void;

	export function rect(
		buffer_info: BufferInfo,
		pos_x: number,
		pos_y: number,
		rect_width: number,
		rect_height: number,
		red: number,
		green: number,
		blue: number,
		alpha?: number,
	): void;

	export function filled_rect(
		buffer_info: BufferInfo,
		pos_x: number,
		pos_y: number,
		rect_width: number,
		rect_height: number,
		red: number,
		green: number,
		blue: number,
		alpha?: number,
		angle?: number,
	): void;

	export function fill(
		buffer_info: BufferInfo,
		red: number,
		green: number,
		blue: number,
		alpha?: number,
	): void;

	export function line(
		buffer_info: BufferInfo,
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		red: number,
		green: number,
		blue: number,
		alpha?: number,
		antialiasing?: boolean,
		width?: number,
	): void;

	export function gradient_line(
		buffer_info: BufferInfo,
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		red1: number,
		green1: number,
		blue1: number,
		red2: number,
		green2: number,
		blue2: number,
		alpha: number,
		antialiasing?: boolean,
		width?: number,
	): void;

	export function arc(
		buffer_info: BufferInfo,
		x: number,
		y: number,
		radius: number,
		from: number,
		to: number,
		red: number,
		green: number,
		blue: number,
		alpha: number,
	): void;

	export function filled_arc(
		buffer_info: BufferInfo,
		x: number,
		y: number,
		radius: number,
		from: number,
		to: number,
		red: number,
		green: number,
		blue: number,
		alpha: number,
	): void;

	export function gradient_arc(
		buffer_info: BufferInfo,
		x: number,
		y: number,
		radius: number,
		from: number,
		to: number,
		red1: number,
		green1: number,
		blue1: number,
		red2: number,
		green2: number,
		blue2: number,
		alpha: number,
	): void;

	export function pixel(
		buffer_info: BufferInfo,
		x: number,
		y: number,
		red: number,
		green: number,
		blue: number,
		alpha?: number,
	): void;

	export function color(
		buffer_info: BufferInfo,
		x: number,
		y: number,
	): { red: number; green: number; blue: number; alpha?: number };

	export function bezier(
		buffer_info: BufferInfo,
		x0: number,
		y0: number,
		xc: number,
		yc: number,
		x1: number,
		y1: number,
		red: number,
		green: number,
		blue: number,
		alpha?: number,
	): void;

	export function start_fill(): void;

	export function end_fill(): void;

	export function fill_area(
		buffer_info: BufferInfo,
		x: number,
		y: number,
		red: number,
		green: number,
		blue: number,
		alpha: number,
	): void;
}
