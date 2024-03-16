/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @url https://github.com/ts-defold/library
 * @url https://insality.github.io/druid/modules/Druid.html
 * @noResolution
 */
declare module 'druid.extended.checkbox_group' {
	export function get_state(this: CheckboxGroup): boolean[];
	export function init(
		this: CheckboxGroup,
		nodes: node[],
		callback: (...args: any[]) => any,
		click_nodes?: node[],
	): void;
	export function set_state(
		this: CheckboxGroup,
		indexes: boolean[],
		is_instant: boolean,
	): void;

	export const checkboxes: CheckboxGroup[];
	export const on_checkbox_click: (this: any, index: number) => void;
}

type CheckboxGroup = typeof import('druid.extended.checkbox_group');
