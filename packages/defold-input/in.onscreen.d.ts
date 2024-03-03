/** @noSelfInFile */

/**
 * @url https://github.com/britzl/defold-input
 * @noResolution
 */
declare module 'in.onscreen' {
	export const BUTTON: hash;
	export const ANALOG: hash;
	export const BUTTON_PRESSED: hash;
	export const BUTTON_RELEASED: hash;
	export const ANALOG_PRESSED: hash;
	export const ANALOG_RELEASED: hash;
	export const ANALOG_MOVED: hash;
	export const ANALOG_LEFT: hash;
	export const ANALOG_RIGHT: hash;
	export const ANALOG_UP: hash;
	export const ANALOG_DOWN: hash;

	type OnscreenInstance = {
		reset: () => void;
		register_button: (
			node: node,
			settings: {} | undefined,
			fn: (action: hash, node: node, touch: {}) => void,
		) => void;
		register_analog: (
			node: node,
			settings: { radius?: number; threshold?: number } | undefined,
			fn: (action: hash, node: node, touch: {}) => void,
		) => void;
		on_input: (action_id: hash, action: {}) => boolean;
	};

	function create(config?: { touch: hash }): OnscreenInstance;

	export function reset(instance?: OnscreenInstance): void;

	export function register_button(
		node: node,
		settings: {} | undefined,
		fn: (action: hash, node: node, touch: {}) => void,
		instance?: OnscreenInstance,
	): void;

	export function register_analog(
		node: node,
		settings: { radius?: number; threshold?: number } | undefined,
		fn: (action: hash, node: node, touch: {}) => void,
		instance?: OnscreenInstance,
	): void;

	export function on_input(
		action_id: hash,
		action: {},
		instance?: OnscreenInstance,
	): boolean;
}
