/**
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.extended.timer' {
	type Timer = typeof import('druid.extended.timer');

	export function init(
		this: Timer,
		node: node,
		seconds_from: number | undefined,
		seconds_to?: number | undefined,
		callback?: Function | undefined,
	): void;
	export function set_interval(this: Timer, from: number, to: number): void;
	export function set_state(this: Timer, is_on: boolean | undefined): void;
	export function set_to(this: Timer, set_to: number): void;

	export const from: number;
	export const node: node;
	export const on_set_enabled: import('druid.druid').DruidEvent;
	export const on_tick: import('druid.druid').DruidEvent;
	export const on_timer_end: import('druid.druid').DruidEvent;
	export const target: number;
	export const value: number;
}
