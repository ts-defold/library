/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @url https://github.com/ts-defold/library
 * @url https://insality.github.io/druid/modules/Druid.html
 * @noResolution
 */
declare module 'druid.extended.hotkey' {
	export function add_hotkey(
		this: Hotkey,
		keys: Record<string, unknown> | string[] | string,
		callback_argument?: any,
	): void;
	export function init(
		this: Hotkey,
		keys: string[] | string,
		callback: (...args: any[]) => void,
		callback_argument?: any,
	): void;

	export const style: { MODIFICATORS: string[] };
	export const button: import('druid.druid').Button;
	export const click_node: node;
	export const node: node;
	export const on_change_state: typeof import('druid.druid').DruidEvent;
}

type Hotkey = typeof import('druid.extended.hotkey');
