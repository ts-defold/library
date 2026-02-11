/**
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.extended.data_list' {
	type DataList = typeof import('druid.extended.data_list');
	type SHIFT_POLICY =
		(typeof import('druid.const').SHIFT)[keyof typeof import('druid.const').SHIFT];

	export function add(
		this: DataList,
		data: {},
		index?: number,
		shift_policy?: SHIFT_POLICY,
	): void;
	export function clear(this: DataList): void;
	export function get_created_components(
		this: DataList,
	): import('druid.druid').Component[];
	export function get_created_nodes(this: DataList): node[];
	export function get_data(this: DataList): {};
	export function get_index(this: DataList, data: {}): number; // TO-DO
	export function init(
		this: DataList,
		scroll: typeof import('druid.druid').Scroll,
		grid: typeof import('druid.druid').StaticGrid,
		// The create function callback(self, data, index, data_list). Function should return (node, [component])
		create_function: Function, // TO-DO
	): void;
	export function on_remove(this: DataList): void;
	export function remove(
		this: DataList,
		index: number | undefined,
		shift_policy?: SHIFT_POLICY,
	): void;
	export function remove_by_data(
		this: DataList,
		data: {},
		shift_policy?: SHIFT_POLICY,
	): void;
	export function scroll_to_index(this: DataList, index: number): void;
	export function set_data(this: DataList, data: {}): DataList; // TO-DO
	export function set_use_cache(
		this: DataList,
		is_use_cache: boolean,
	): DataList;

	export const grid: typeof import('druid.druid').StaticGrid;
	export const last_index: number;
	export const on_element_add: typeof import('druid.druid').DruidEvent;
	export const on_element_remove: typeof import('druid.druid').DruidEvent;
	export const on_scroll_progress_change: typeof import('druid.druid').DruidEvent;
	export const scroll: typeof import('druid.druid').Scroll;
	export const scroll_progress: number;
	export const top_index: number;
}
