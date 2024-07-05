/** @noSelfInFile */

/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions to improve the accuracy of these types are welcome.
 * @see {@link https://github.com/britzl/gooey|Github Source}
 * @noResolution
 */
declare module 'gooey.gooey' {
	type table = {};

	type ButtonState = {
		node: node;
		node_id: hash;
		enabled: boolean;
		consumed: boolean;
		clicked: boolean;
		over: boolean;
		over_now: boolean;
		out_now: boolean;
		pressed: boolean;
		pressed_now: boolean;
		long_pressed: boolean;
		released_now: boolean;
	};

	type CheckboxState = {
		node: node;
		node_id: hash;
		enabled: boolean;
		consumed: boolean;
		clicked: boolean;
		over: boolean;
		over_now: boolean;
		out_now: boolean;
		checked: boolean;
		pressed: boolean;
		pressed_now: boolean;
		long_pressed: boolean;
		released_now: boolean;
		checked_now: boolean;
		unchecked_now: boolean;
	};

	type RadioState = {
		node: node;
		node_id: hash;
		enabled: boolean;
		consumed: boolean;
		clicked: boolean;
		over: boolean;
		over_now: boolean;
		out_now: boolean;
		selected: boolean;
		pressed: boolean;
		pressed_now: boolean;
		long_pressed: boolean;
		released_now: boolean;
		selected_now: boolean;
		deselected_now: boolean;
	};

	type ListState = {
		id: string;
		enabled: boolean;
		consumed: boolean;
		items: {
			root: node;
			nodes: LuaMap<hash, node>;
			data: unknown;
			index: number;
		}[];
		over: boolean;
		over_item: {
			root: node;
			nodes: LuaMap<hash, node>;
			data: unknown;
			index: number;
		};
		over_item_now: {
			root: node;
			nodes: LuaMap<hash, node>;
			data: unknown;
			index: number;
		};
		out_item_now: {
			root: node;
			nodes: LuaMap<hash, node>;
			data: unknown;
			index: number;
		};
		selected_item: number | undefined;
		pressed_item: number | undefined;
		pressed_item_now: number | undefined;
		long_pressed: boolean;
		released_item_now: number | undefined;
		scroll: vmath.vector3;
		is_horizontal: boolean;
	};

	type ScrollbarState = {
		enabled: boolean;
		pressed: boolean;
		pressed_now: boolean;
		released_now: boolean;
		over: boolean;
		over_now: boolean;
		out_now: boolean;
		clicked: boolean;
		scroll: vmath.vector3;
	};

	type InputState = {
		node: node;
		node_id: hash | string;
		enabled: boolean;
		consumed: boolean;
		over: boolean;
		over_now: boolean;
		out_now: boolean;
		selected: boolean;
		pressed: boolean;
		pressed_now: boolean;
		long_pressed: boolean;
		released_now: boolean;
		selected_now: boolean;
		deselected_now: boolean;
		text: string;
		marked_text: string;
		keyboard_type: number;
		masked_text: string;
		masked_marked_text: string;
		text_width: number;
		marked_text_width: number;
		total_width: number;
	};

	export function button(
		node_id: hash | string,
		action_id: hash,
		action: table,
		fn: (button: ButtonState) => void,
		refresh_fn?: (button: ButtonState) => void,
	): ButtonState;

	export function checkbox(
		node_id: hash | string,
		action_id: hash,
		action: table,
		fn: (checkbox: CheckboxState) => void,
		refresh_fn?: (checkbox: CheckboxState) => void,
	): CheckboxState;

	export function radio(
		node_id: hash | string,
		group: string,
		action_id: hash,
		action: table,
		fn: (radio: RadioState) => void,
		refresh_fn?: (radio: RadioState) => void,
	): RadioState;

	export function static_list(
		list_id: string,
		stencil_id: hash | string,
		item_ids: (hash | string)[],
		action_id: hash,
		action: table,
		config: { horizontal?: boolean } | undefined,
		fn: (list: ListState) => void,
		refresh_fn?: (list: ListState) => void,
		is_horizontal?: boolean,
	): ListState;

	export function dynamic_list(
		list_id: string,
		root_id: string,
		stencil_id: hash | string,
		item_id: hash | string,
		data: table,
		action_id: hash,
		action: table,
		config: { horizontal?: boolean; carousel?: boolean } | undefined,
		fn: (list: ListState) => void,
		refresh_fn?: (list: ListState) => void,
		is_horizontal?: boolean,
	): ListState;

	export function horizontal_dynamic_list(
		list_id: string,
		root_id: string,
		stencil_id: hash | string,
		item_id: hash | string,
		data: table,
		action_id: hash,
		action: table,
		config: { carousel?: boolean } | undefined,
		fn: (list: ListState) => void,
		refresh_fn?: (list: ListState) => void,
	): ListState;

	export function vertical_dynamic_list(
		list_id: string,
		root_id: string,
		stencil_id: hash | string,
		item_id: hash | string,
		data: table,
		action_id: hash,
		action: table,
		config: { carousel?: boolean } | undefined,
		fn: (list: ListState) => void,
		refresh_fn?: (list: ListState) => void,
	): ListState;

	export function horizontal_static_list(
		list_id: string,
		stencil_id: hash | string,
		item_ids: (hash | string)[],
		action_id: hash,
		action: table,
		config: undefined,
		fn: (list: ListState) => void,
		refresh_fn?: (list: ListState) => void,
	): ListState;

	export function vertical_static_list(
		list_id: string,
		stencil_id: hash | string,
		item_ids: (hash | string)[],
		action_id: hash,
		action: table,
		config: undefined,
		fn: (list: ListState) => void,
		refresh_fn?: (list: ListState) => void,
	): ListState;

	export function vertical_scrollbar(
		handle_id: hash | string,
		bounds_id: hash | string,
		action_id: hash,
		action: table,
		fn: (scrollbar: ScrollbarState) => void,
		refresh_fn?: (scrollbar: ScrollbarState) => void,
	): ScrollbarState;

	export function input(
		node_id: hash | string,
		keyboard_type: number,
		action_id: hash,
		action: table,
		config?: {
			max_length?: number;
			empty_text?: string;
			allowed_characters?: string;
			use_marked_text?: boolean;
		},
		refresh_fn?: (input: InputState) => void,
	): InputState;

	export function group(group_id: string, fn: () => void): table;
}
