/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.extended.dynamic_grid' {
	export function _get_side_vector(
		this: DynamicGrid,
		side: any,
		is_forward: any,
	): unknown;
	export function add(
		this: DynamicGrid,
		node: node,
		index?: number,
		shift_policy?: number,
		is_instant?: boolean,
	): void;
	export function clear(this: DynamicGrid): DynamicGrid;
	export function get_all_pos(this: DynamicGrid): vmath.vector3[];
	export function get_borders(this: DynamicGrid): vmath.vector3;
	export function get_index_by_node(this: DynamicGrid, node: node): number;
	export function get_offset(this: DynamicGrid): vmath.vector3;
	export function get_pos(
		this: DynamicGrid,
		index: number,
		node: node,
		origin_index?: number,
	): vmath.vector3;
	export function get_size(
		this: DynamicGrid,
		border: vmath.vector3,
	): vmath.vector3;
	export function init(this: DynamicGrid, parent: node): void;
	export function remove(
		this: DynamicGrid,
		index: number,
		shift_policy?: number,
		is_instant?: boolean,
	): node;
	export function set_position_function(
		this: DynamicGrid,
		callback: Function,
	): DynamicGrid;

	export const border: vmath.vector4;
	export const first_index: number;
	export const last_index: number;
	export const node_size: vmath.vector3;
	export const nodes: node[];
	export const on_add_item: typeof import('druid.druid').DruidEvent;
	export const on_change_items: typeof import('druid.druid').DruidEvent;
	export const on_clear: typeof import('druid.druid').DruidEvent;
	export const on_remove_item: typeof import('druid.druid').DruidEvent;
	export const on_update_positions: typeof import('druid.druid').DruidEvent;
	export const parent: node;
}

type DynamicGrid = typeof import('druid.extended.dynamic_grid');
