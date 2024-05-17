/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @url https://github.com/ts-defold/library
 * @url https://insality.github.io/druid/modules/Druid.html
 * @noResolution
 */
declare module 'druid.extended.radio_group' {
	export function get_state(this: RadioGroup): number;
	export function init(
		this: RadioGroup,
		nodes: node[],
		callback: Function,
		click_nodes?: node[],
	): void;
	export function set_state(
		this: RadioGroup,
		index: number,
		is_instant: boolean,
	): void;

	export const checkboxes: Checkbox[];
	export const on_radio_click: import('druid.druid').DruidEvent;
}

type RadioGroup = typeof import('druid.extended.radio_group');
