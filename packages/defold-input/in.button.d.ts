/** @noSelfInFile */

/**
 * @see {@link https://github.com/britzl/defold-input|Github Source}
 * @noResolution
 */
declare module 'in.button' {
	export const TOUCH: hash;

	export function acquire(): void;
	export function release(): void;
	export function register(
		node_or_string: node | string,
		callback: () => void,
	): node;
	export function unregister(node_or_string?: node | string): void;
	export function dump(): void;
	export function effect(node: node, initial_scale: vmath.vector3): void;
	export function on_input(action_id: hash, action: {}): boolean;
}
