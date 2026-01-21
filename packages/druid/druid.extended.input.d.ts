/**
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.extended.input' {
	type Input = typeof import('druid.extended.input');

	export function get_text(this: Input): string;
	export function get_text_selected_replaced(this: Input, text: string): string;
	export function init(
		this: Input,
		click_node: node,
		text_node: node | import('druid.druid').Text,
		keyboard_type?: number,
	): void;
	export function move_selection(
		this: Input,
		delta: number,
		is_add_to_selection: boolean,
		is_move_to_end: boolean,
	): void;
	export function reset_changes(this: Input): void;
	export function select(this: Input): void;
	export function select_cursor(
		this: Input,
		cursor_index: number | undefined,
		start_index: number | undefined,
		end_index: number | undefined,
	): Input;
	export function set_allowed_characters(
		this: Input,
		characters: string,
	): Input;
	export function set_max_length(this: Input, max_length: number): Input;
	export function set_text(this: Input, input_text: string): void;
	export function unselect(this: Input): void;
	export const style: {
		IS_LONGTAP_ERASE: boolean;
		MASK_DEFAULT_CHAR: string;
		IS_UNSELECT_ON_RESELECT: boolean;
		// NO_CONSUME_INPUT_WHILE_SELECTED: boolean;
		on_select: (this: Input, button_node: node) => void;
		on_unselect: (this: Input, button_node: node) => void;
		on_input_wrong: (this: Input, button_node: node) => void;
		// button_style: {};
	};
	export const allowerd_characters: string | undefined;
	export const button: import('druid.druid').Button;
	export const current_value: string;
	export const cursor_index: number;
	export const end_index: number;
	export const is_empty: boolean;
	export const is_selected: boolean;
	export const keyboard_type: number;
	export const marked_text_width: number;
	export const marked_value: string;
	export const max_length: number | undefined;
	export const on_input_empty: import('druid.druid').DruidEvent;
	export const on_input_full: import('druid.druid').DruidEvent;
	export const on_input_select: import('druid.druid').DruidEvent;
	export const on_input_text: import('druid.druid').DruidEvent;
	export const on_input_unselect: import('druid.druid').DruidEvent;
	export const on_input_wrong: import('druid.druid').DruidEvent;
	export const on_select_cursor_change: import('druid.druid').DruidEvent;
	export const previous_value: string;
	export const start_index: number;
	export const text: import('druid.druid').Text;
	export const text_width: number;
	export const value: string;
}
