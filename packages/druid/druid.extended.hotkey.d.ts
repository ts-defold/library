/**
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.extended.hotkey' {
	type Hotkey = typeof import('druid.extended.hotkey');

	export function add_hotkey(
		this: Hotkey,
		keys: hash[] | string[] | string | hash,
		callback_argument?: any,
	): void;
	export function init(
		this: Hotkey,
		keys: string[] | string,
		callback: (...args: any[]) => void,
		callback_argument?: any,
	): void;
	export function set_repeat(
		this: Hotkey,
		is_enabled_repeated: boolean,
	): Hotkey;

	export const style: { MODIFICATORS: string[] };
	export const button: import('druid.druid').Button;
	export const click_node: node;
	export const node: node;
	export const on_hotkey_pressed: typeof import('druid.druid').DruidEvent;
	export const on_change_state: typeof import('druid.druid').DruidEvent;
}
