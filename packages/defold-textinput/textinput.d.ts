/** @noSelfInFile */

/**
 * Native Text Input Field for Defold. Supports Android, iOS, HTML5.
 * @see {@link https://github.com/baochungit/defold-textinput|Github Source}
 */
declare namespace textinput {
	type KeyboardType = number & {
		readonly __brand: 'textinput.KEYBOARDTYPE';
	};
	type Capitalize = number & {
		readonly __brand: 'textinput.CAPITALIZE';
	};
	type ReturnKeyType = number & {
		readonly __brand: 'textinput.RETURNKEYTYPE';
	};
	type Event = number & {
		readonly __brand: 'textinput.EVENT';
	};
	type Id = number & {
		readonly __brand: 'textinput.Id';
	};

	export function create(is_hidden: boolean, listener: (this: any, event: Event, data: unknown) => void): Id;
	export function set_visible(id: Id, visible: boolean): void;
	export function set_position(id: Id, x: number, y: number): void;
	export function set_size(id: Id, width: number, height: number): void;
	export function set_text(id: Id, text: string): void;
	export function set_text_color(id: Id, color: string): void;
	export function set_text_size(id: Id, text_size: number): void;
	export function set_hint(id: Id, hint: string): void;
	export function set_hint_text_color(id: Id, color: number): void;
	export function set_max_length(id: Id, max_length: number): void;
	export function set_keyboard_type(id: Id, keyboard_type: KeyboardType): void;
	export function set_auto_capitalize(id: Id, capitalize: Capitalize): void;
	export function set_return_key_type(id: Id, return_key_type: ReturnKeyType): void;
	export function get_text(id: Id): string;
	export function focus(id: Id): void;
	export function clear_focus(id: Id): void;
	export function destroy(id: Id): void;

	export const KEYBOARD_TYPE_DEFAULT: KeyboardType;
	export const KEYBOARD_TYPE_NUMBER_PAD: KeyboardType;
	export const KEYBOARD_TYPE_EMAIL: KeyboardType;
	export const KEYBOARD_TYPE_PASSWORD: KeyboardType;

	export const CAPITALIZE_NONE: Capitalize;
	export const CAPITALIZE_SENTENCES: Capitalize;
	export const CAPITALIZE_WORDS: Capitalize;
	export const CAPITALIZE_CHARACTERS: Capitalize;

	export const RETURN_KEY_TYPE_DONE: ReturnKeyType;
	export const RETURN_KEY_TYPE_GO: ReturnKeyType;
	export const RETURN_KEY_TYPE_NEXT: ReturnKeyType;
	export const RETURN_KEY_TYPE_SEARCH: ReturnKeyType;
	export const RETURN_KEY_TYPE_SEND: ReturnKeyType;

	export const EVENT_ON_SUBMIT: Event;
	export const EVENT_ON_TEXT_CHANGED: Event;
	export const EVENT_ON_FOCUS_CHANGE: Event;
}
