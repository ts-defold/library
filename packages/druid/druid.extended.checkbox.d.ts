/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @url https://github.com/ts-defold/library
 * @url https://insality.github.io/druid/modules/Druid.html
 * @noResolution
 */
declare module 'druid.extended.checkbox' {
	export function get_state(this: Checkbox): boolean[];
	export function init(
		this: Checkbox,
		nodes: node,
		callback: (...args: any[]) => any,
		click_nodes?: node,
		initial_state?: boolean,
	): void;
	export function set_state(
		this: Checkbox,
		state: boolean,
		is_silent: boolean,
		is_instant: boolean,
	): void;

	export const style: {
		on_change_state: (this: Checkbox, node: node, state: boolean) => void;
	};
	export const button: typeof import('druid.druid').Button;
	export const click_node: node;
	export const node: node;
	export const on_change_state: typeof import('druid.druid').DruidEvent;
}

type Checkbox = typeof import('druid.extended.checkbox');
