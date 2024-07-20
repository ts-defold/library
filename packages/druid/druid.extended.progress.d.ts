/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.extended.progress' {
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
	export function set_to(this: Progress, to: number): void;
	export function to(
		this: Progress,
		to: number,
		callback?: (this: Progress) => void,
	): void;

	export const key: string;
	export const max_size: number;
	export const node: node;
	export const on_change: (this: Progress, new_value: number) => void;
	export const scale: vmath.vector3;
	export const size: vmath.vector3;
	export const slice: vmath.vector4;
}

type Progress = typeof import('druid.extended.progress');
