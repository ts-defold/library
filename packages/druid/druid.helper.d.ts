/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.helper' {
	type Pivot =
		| typeof gui.PIVOT_CENTER
		| typeof gui.PIVOT_E
		| typeof gui.PIVOT_N
		| typeof gui.PIVOT_NE
		| typeof gui.PIVOT_NW
		| typeof gui.PIVOT_S
		| typeof gui.PIVOT_SE
		| typeof gui.PIVOT_SW
		| typeof gui.PIVOT_W;

	export function add_array<T1, T2>(target: T1[], source?: T2[]): (T1 | T2)[];
	export function centrate_nodes(margin?: number, ...nodes: node[]): void;
	export function clamp(a: number, min: number, max: number): number;
	export function contains(t: any[], value: any): number | undefined;
	export function deepcopy<T>(orig_table: T): T;
	export function distance(
		x1: number,
		y1: number,
		x2: number,
		y2: number,
	): number;
	export function get_border(node: node, offset?: vmath.vector3): vmath.vector4;
	export function get_closest_stencil_node(node: node): node | undefined;
	export function get_gui_scale(): LuaMultiReturn<[number, number]>;
	export function get_pivot_offset(pivot: Pivot): vmath.vector3;
	export function get_scaled_size(node: node): vmath.vector3;
	export function get_scene_scale(
		node: node,
		include_passed_node_scale?: boolean,
	): vmath.vector3;
	export function get_screen_aspect_koef(): LuaMultiReturn<[number, number]>;
	export function get_text_metrics_from_node(text_node: any): GUITextMetrics;
	export function insert_with_shift<T>(
		array: any[],
		item: T,
		index?: number,
		shift_policy?: keyof typeof import('druid.const').SHIFT,
	): T;
	export function is_mobile(): boolean;
	export function is_web(): boolean;
	export function lerp(a: number, b: number, t: number): number;
	export function remove_with_shift<T>(
		array: T[],
		index?: number,
		shift_policy?: keyof typeof import('druid.const').SHIFT,
	): T;
	export function round(num: number, num_decimal_places?: number): number;
	export function sign(val: number): -1 | 0 | 1;
	export function step(current: number, target: number, step: number): number;
	export function table_to_string(
		t: any[] | LuaMap | LuaSet | LuaTable | object,
	): string;

	interface GUITextMetrics {
		width: number;
		height: number;
		max_ascent: number;
		max_descent: number;
	}
}
