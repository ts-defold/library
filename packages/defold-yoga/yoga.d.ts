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

	export const ALIGN_AUTO: number;
	export const ALIGN_START: number;
	export const ALIGN_CENTER: number;
	export const ALIGN_END: number;
	export const ALIGN_STRETCH: number;
	export const ALIGN_BASELINE: number;
	export const ALIGN_SPACE_BETWEEN: number;
	export const ALIGN_SPACE_AROUND: number;
	export const DISPLAY_FLEX: number;
	export const DISPLAY_NONE: number;
	export const DIRECTION_INHERIT: number;
	export const DIRECTION_LTR: number;
	export const DIRECTION_RTL: number;
	export const EDGE_LEFT: number;
	export const EDGE_TOP: number;
	export const EDGE_RIGHT: number;
	export const EDGE_BOTTOM: number;
	export const EDGE_START: number;
	export const EDGE_END: number;
	export const EDGE_HORIZONTAL: number;
	export const EDGE_VERTICAL: number;
	export const EDGE_ALL: number;
	export const FLEX_DIRECTION_COLUMN: number;
	export const FLEX_DIRECTION_COLUMN_REVERSE: number;
	export const FLEX_DIRECTION_ROW: number;
	export const FLEX_DIRECTION_ROW_REVERSE: number;
	export const JUSTIFY_START: number;
	export const JUSTIFY_CENTER: number;
	export const JUSTIFY_END: number;
	export const JUSTIFY_SPACE_BETWEEN: number;
	export const JUSTIFY_SPACE_AROUND: number;
	export const JUSTIFY_SPACE_EVENLY: number;
	export const OVERFLOW_VISIBLE: number;
	export const OVERFLOW_HIDDEN: number;
	export const OVERFLOW_SCROLL: number;
	export const POSITION_TYPE_STATIC: number;
	export const POSITION_TYPE_RELATIVE: number;
	export const POSITION_TYPE_ABSOLUTE: number;
	export const WRAP_NOWRAP: number;
	export const WRAP_WRAP: number;
	export const WRAP_WRAP_REVERSE: number;
}
