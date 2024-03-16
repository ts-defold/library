/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @url https://github.com/ts-defold/library
 * @url https://insality.github.io/druid/modules/Druid.html
 * @noResolution
 */
declare module 'druid.extended.timer' {
	export function init(
		this: Timer,
		node: node,
		seconds_from: number,
		seconds_to?: number,
		callback?: Function,
	): void;
	export function set_interval(this: Timer, from: number, to: number): void;
	export function set_state(this: Timer, is_on: boolean): void;
	export function set_to(this: Timer, set_to: number): void;

	export const from: number;
	export const node: node;
	export const on_set_enabled: (
		this: Timer,
		is_enabled: import('druid.druid').DruidEvent,
	) => void;
	export const on_tick: (
		this: Timer,
		value: import('druid.druid').DruidEvent,
	) => void;
	export const on_timer_end: (this: Timer) => import('druid.druid').DruidEvent;
	export const target: number;
	export const value: number;
}

type Timer = typeof import('druid.extended.timer');
