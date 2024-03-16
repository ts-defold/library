/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @url https://github.com/ts-defold/library
 * @url https://insality.github.io/druid/modules/Druid.html
 * @noResolution
 */
declare module 'druid.extended.input' {
	export function get_text(this: Input): string;
	export function init(
		this: Input,
		click_node: node,
		text_node: node | import('druid.druid').Text,
		keyboard_type?: number,
	): void;
	export function reset_changes(this: Input): void;
	export function select(this: Input): void;
	export function set_allowed_characters(
		this: Input,
		characters: string,
	): Input;
	export function set_max_length(this: Input, max_length: number | null): Input;
	export function set_text(this: Input, input_text: string): void;
	export function unselect(this: Input): void;
	export const style: {
		IS_LONGTAP_ERASE: boolean;
		MASK_DEFAULT_CHAR: string;
		IS_UNSELECT_ON_RESELECT: boolean;
		NO_CONSUME_INPUT_WHILE_SELECTED: boolean;
		on_select: (this: Input, button_node: node) => void;
		on_unselect: (this: Input, button_node: node) => void;
		on_input_wrong: (this: Input, button_node: node) => void;
		button_style: {};
	};
	export const allowerd_characters: string | undefined;
	export const button: import('druid.druid').Button;
	export const is_empty: boolean;
	export const is_selected: boolean;
	export const keyboard_type: number;
	export const max_length: number | undefined;
	export const on_input_empty: import('druid.druid').DruidEvent;
	export const on_input_full: import('druid.druid').DruidEvent;
	export const on_input_select: import('druid.druid').DruidEvent;
	export const on_input_text: import('druid.druid').DruidEvent;
	export const on_input_unselect: import('druid.druid').DruidEvent;
	export const on_input_wrong: import('druid.druid').DruidEvent;
	export const text: import('druid.druid').Text;
}

type Input = typeof import('druid.extended.input');
