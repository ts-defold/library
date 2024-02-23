/** @noSelfInFile */

/**
 * @url https://github.com/farism/defold-yoga
 * @noResolution
 */
declare namespace yoga {
	export function update(node: node): void;

	export function set_parent(node: node, parent: node): void;

	export function delete_node(node: node): void;

	export function set_width_height(
		node: node,
		width: number,
		height: number,
	): void;

	export function new_node(node: node): void;

	export function delete_node(node: node): void;

	export function free_node(node: node): void;

	export function reset_node(node: node): void;

	export function calculate_layout(node: node): void;

	export function get_overflow(node: node): void;

	export function set_overflow(node: node, overflow: number): void;

	export function get_direction(node: node): void;

	export function set_direction(node: node, direction: number): void;

	export function get_flex_direction(node: node): void;

	export function set_flex_direction(node: node, flex_direction: number): void;

	export function get_align_items(node: node): void;

	export function set_align_items(node: node, align_items: number): void;

	export function get_align_content(node: node): void;

	export function set_align_content(node: node, align_content: number): void;

	export function get_justify_content(node: node): void;

	export function set_justify_content(
		node: node,
		justify_content: number,
	): void;

	export function get_grow(node: node): void;

	export function set_grow(node: node, grow: number): void;

	export function get_shrink(node: node): void;

	export function set_shrink(node: node, shrink: number): void;

	export function get_basis(node: node): void;

	export function set_basis(node: node, basis: number): void;

	export function set_basis_percent(node: node, basis_percent: number): void;

	export function get_flex_position(node: node): void;

	export function set_flex_position(node: node, flex_position: number): void;

	export function get_position(node: node): void;

	export function set_position(node: node, position: number): void;

	export function set_position_percent(
		node: node,
		edge: number,
		position_percent: number,
	): void;

	export function get_width(node: node): void;

	export function set_width(node: node, width: number): void;

	export function get_min_width(node: node): void;

	export function set_min_width(node: node, min_width: number): void;

	export function get_max_width(node: node): void;

	export function set_max_width(node: node, max_width: number): void;

	export function set_width_percent(node: node, width_percent: number): void;

	export function set_min_width_percent(
		node: node,
		min_width_percent: number,
	): void;

	export function set_max_width_percent(
		node: node,
		max_width_percent: number,
	): void;

	export function get_height(node: node): void;

	export function set_height(node: node, height: number): void;

	export function set_height_percent(node: node, height_percent: number): void;

	export function get_min_height(node: node): void;

	export function set_min_height(node: node, min_height: number): void;

	export function set_min_height_percent(
		node: node,
		min_height_percent: number,
	): void;

	export function get_max_height(node: node): void;

	export function set_max_height(node: node, max_height: number): void;

	export function set_max_height_percent(
		node: node,
		max_height_percent: number,
	): void;

	export function get_aspect_ratio(node: node): void;

	export function set_aspect_ratio(node: node, aspect_ratio: number): void;

	export function get_border(node: node): void;

	export function set_border(node: node, edge: number, border: number): void;

	export function get_margin(node: node): void;

	export function set_margin(node: node, edge: number, margin: number): void;

	export function set_margin_percent(
		node: node,
		edge: number,
		margin_percent: number,
	): void;

	export function get_padding(node: node): void;

	export function set_padding(node: node, edge: number, padding: number): void;

	export function set_padding_percent(
		node: node,
		edge: number,
		padding_percent: number,
	): void;

	export function get_layout(node: node): void;

	export function get_layout_left(node: node): void;

	export function get_layout_top(node: node): void;

	export function get_layout_right(node: node): void;

	export function get_layout_bottom(node: node): void;

	export function get_layout_width(node: node): void;

	export function get_layout_height(node: node): void;

	export function get_layout_border(node: node): void;

	export function get_layout_margin(node: node): void;

	export function get_layout_padding(node: node): void;
	/**
	 * Sets whether the coordinate system should be inverted on the Y axis.
	 * @param {boolean} invert
	 */
	export function set_invert_y(invert: boolean): void;
	/**
	 * Sets the underlying capacity of the yoga node cache
	 * @param {number} capacity
	 */
	export function set_capacity(capacity: number): void;
	export const ALIGN_AUTO: unknown;
	export const ALIGN_START: unknown;
	export const ALIGN_CENTER: unknown;
	export const ALIGN_END: unknown;
	export const ALIGN_STRETCH: unknown;
	export const ALIGN_BASELINE: unknown;
	export const ALIGN_SPACE_BETWEEN: unknown;
	export const ALIGN_SPACE_AROUND: unknown;
	export const DISPLAY_FLEX: unknown;
	export const DISPLAY_NONE: unknown;
	export const DIRECTION_INHERIT: unknown;
	export const DIRECTION_LTR: unknown;
	export const DIRECTION_RTL: unknown;
	export const EDGE_LEFT: unknown;
	export const EDGE_TOP: unknown;
	export const EDGE_RIGHT: unknown;
	export const EDGE_BOTTOM: unknown;
	export const EDGE_START: unknown;
	export const EDGE_END: unknown;
	export const EDGE_HORIZONTAL: unknown;
	export const EDGE_VERTICAL: unknown;
	export const EDGE_ALL: unknown;
	export const FLEX_DIRECTION_COLUMN: unknown;
	export const FLEX_DIRECTION_COLUMN_REVERSE: unknown;
	export const FLEX_DIRECTION_ROW: unknown;
	export const FLEX_DIRECTION_ROW_REVERSE: unknown;
	export const JUSTIFY_START: unknown;
	export const JUSTIFY_CENTER: unknown;
	export const JUSTIFY_END: unknown;
	export const JUSTIFY_SPACE_BETWEEN: unknown;
	export const JUSTIFY_SPACE_AROUND: unknown;
	export const JUSTIFY_SPACE_EVENLY: unknown;
	export const OVERFLOW_VISIBLE: unknown;
	export const OVERFLOW_HIDDEN: unknown;
	export const OVERFLOW_SCROLL: unknown;
	export const POSITION_TYPE_STATIC: unknown;
	export const POSITION_TYPE_RELATIVE: unknown;
	export const POSITION_TYPE_ABSOLUTE: unknown;
	export const WRAP_NOWRAP: unknown;
	export const WRAP_WRAP: unknown;
	export const WRAP_WRAP_REVERSE: unknown;
}
