/** @noSelfInFile */

/**
 * @see {@link https://github.com/britzl/defold-input|Github Source}
 * @noResolution
 */
declare module 'in.textbox' {
	export const TOUCH: hash;
	export const TYPE: hash;
	export const BACKSPACE: hash;

	export function acquire(): void;
	export function release(): void;
	export function register(
		box_node_or_string: node | string,
		text_node_or_string: node | string,
		is_masked?: boolean,
	): node;
	export function unregister(node_or_string?: node | string): void;
	export function effect(node: node, scale: { x: number; y: number }): void;
	export function text(
		node_or_string: node | string,
		text?: string,
	): string | undefined;
	export function on_input(action_id: hash, action: {}): boolean;
}
