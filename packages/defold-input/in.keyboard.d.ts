/** @noSelfInFile */

/**
 * @see {@link https://github.com/britzl/defold-input|Github Source}
 * @noResolution
 */
declare module 'in.keyboard' {
	export const KEYBOARD_INPUT: hash;

	type KeyboardTypes =
		| typeof gui.KEYBOARD_TYPE_DEFAULT
		| typeof gui.KEYBOARD_TYPE_EMAIL
		| typeof gui.KEYBOARD_TYPE_NUMBER_PAD
		| typeof gui.KEYBOARD_TYPE_PASSWORD;

	export function show(keyboard_type?: KeyboardTypes): void;
	export function hide(): void;
}
