/** @noSelfInFile */

/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions to improve the accuracy of these types are welcome.
 * @url https://github.com/ts-defold/library
 * @noResolution
 */
declare module 'in.mapper' {
	export function bind(
		trigger: {},
		action: {},
		player?: any,
		gamepad?: any,
	): unknown;
	export function unbind(trigger: {}, player?: any): void;
	export function unbind_all(player?: any): void;
	export function on_input(
		trigger: {},
		player?: any,
		gamepad?: any,
	): {} | undefined;
}
