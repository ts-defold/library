/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @url https://github.com/ts-defold/library
 * @url https://insality.github.io/druid/modules/Druid.html
 * @noResolution
 */
declare module 'druid.extended.data_list' {
	export function clear(this: DataList): void;
	export function get_created_components(this: DataList): Component[];
	export function get_created_nodes(this: DataList): node[];
	export function get_data(this: DataList): {};
	export function get_first_index(this: DataList): number;
	export function get_index(this: DataList, data: {}): number;
	export function get_last_index(this: DataList): number;
	export function get_length(this: DataList): number;
	export function init(
		this: DataList,
		scroll: typeof import('druid.druid').Scroll,
		grid: DynamicGrid | typeof import('druid.druid').StaticGrid,
		create_function: Function,
	): void;
	export function on_remove(this: DataList): void;
	export function scroll_to_index(this: DataList, index: number): void;
	export function set_data(this: DataList, data: {}): DataList;

	export const grid: DynamicGrid | typeof import('druid.druid').StaticGrid;
	export const last_index: number;
	export const on_element_add: (
		this: void,
		index: number,
		node: node,
		instance: any,
	) => void;
	export const on_element_remove: (this: void, index: number) => void;
	export const on_scroll_progress_change: (
		this: void,
		progress_value: number,
	) => void;
	export const scroll: typeof import('druid.druid').Scroll;
	export const scroll_progress: number;
	export const top_index: number;
}

type DataList = typeof import('druid.extended.data_list');
