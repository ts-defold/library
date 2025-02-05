/**
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.extended.layout' {
	// TO-DO
	type Layout = typeof import('druid.extended.layout');

	interface RowData {
		width: number;
		height: number;
		count: number;
	}

	interface RowsData {
		total_width: number;
		total_height: number;
		nodes_width: LuaMap<node, number>;
		nodes_height: LuaMap<node, number>;
		rows: RowData[];
	}

	export function init(
		this: Layout,
		node: node,
		layout_type: string,
		on_size_changed_callback?: Function, // TO-DO
	): Layout;
	export function update(this: Layout): void;
	export function set_margin(
		this: Layout,
		margin_x: number,
		margin_y: number,
	): Layout;
	export function set_padding(this: Layout, padding: vmath.vector4): Layout;
	export function set_dirty(this: Layout): Layout;
	export function set_justify(this: Layout, is_justify: boolean): Layout;
	export function set_type(this: Layout, type: string): Layout;

	export function set_hug_content(
		this: Layout,
		is_hug_width: boolean,
		is_hug_height: boolean,
	): Layout;
	export function add(this: Layout, node_or_node_id: node | string): Layout;
	export function refresh_layout(this: Layout): Layout;
	export function clear_layout(this: Layout): Layout;

	export function get_node_size(
		this: Layout,
		node: node,
	): LuaMultiReturn<[number, number]>;
	export function calculate_rows_data(this: Layout): RowsData;
	export function set_node_position(
		this: Layout,
		node: node,
		x: number,
		y: number,
	): node;

	export const mode: string; // TO-DO is this real?
	export const node: node;
	export const type: string;
	export const margin: { x: number; y: number };
	export const padding: ReturnType<typeof gui.get_slice9>;
	export const isDirty: boolean;
	export const entities: node[];
	export const isJustify: boolean;
	export const isResizeWidth: boolean;
	export const isResizeHeight: boolean;
}
