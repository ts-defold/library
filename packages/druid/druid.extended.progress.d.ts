/**
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.extended.progress' {
	type Progress = typeof import('druid.extended.progress');

	export function empty(this: Progress): void;
	export function fill(this: Progress): void;
	export function get(this: Progress): number;
	export function init(
		this: Progress,
		node: node | string,
		key: string,
		init_value?: number,
	): void;
	export function set_max_size(
		this: Progress,
		max_size: vmath.vector3,
	): Progress;
	export function set_steps(
		this: Progress,
		steps: number[],
		callback: (this: Progress, step: number) => void,
	): void;
	export function set_to(this: Progress, to: number, callback?: Function): void; // TO-DO
	export function to(this: Progress, to: number, callback?: Function): void; // TO-DO

	export const style: {
		SPEED: number | undefined;
		MIN_DELTA: number | undefined;
	};
	export const key: string;
	export const max_size: number;
	export const node: node;
	export const on_change: import('druid.druid').DruidEvent;
	export const scale: vmath.vector3;
	export const size: vmath.vector3;
	export const slice: vmath.vector4;
}
