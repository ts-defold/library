/** @noSelfInFile */

/**
 * @url https://github.com/britzl/defold-input
 * @noResolution
 */
declare module 'in.state' {
	type StateInstance = {
		acquire: () => void;
		release: (url?: url) => void;
		is_pressed: (action_id: hash | string) => boolean;
		on_input: (action_id: hash | string, action: {}) => void;
		clear: () => void;
	};

	export function create(): StateInstance;
	export function acquire(url: url, instance?: StateInstance): void;
	export function release(url: url, instance?: StateInstance): void;
	export function is_pressed(
		action_id: hash | string,
		instance?: StateInstance,
	): boolean;
	export function update(
		action_id: hash | string,
		action: {},
		instance?: StateInstance,
	): void;
	export function on_input(
		action_id: hash | string,
		action: {},
		instance?: StateInstance,
	): void;
	export function clear(instance?: StateInstance): void;
}
