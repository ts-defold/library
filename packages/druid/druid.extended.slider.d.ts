/**
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.extended.slider' {
	type Slider = typeof import('druid.extended.slider');
	export function init(
		this: Slider,
		node: node,
		end_pos: vmath.vector3,
		callback?: Function, // TO-DO
	): void;
	export function is_enabled(this: Slider): boolean;
	export function set(this: Slider, value: number, is_silent?: boolean): void;
	export function set_enabled(this: Slider, is_enabled: boolean): void;
	export function set_input_node(
		this: Slider,
		input_node: node | string | undefined,
	): Slider;
	export function set_steps(this: Slider, steps: number[]): Slider;

	export const dist: vmath.vector3;
	export const end_pos: vmath.vector3;
	export const is_drag: boolean;
	export const node: node;
	export const on_change_value: import('druid.druid').DruidEvent;
	export const pos: vmath.vector3;
	export const start_pos: vmath.vector3;
	export const target_pos: vmath.vector3;
	export const value: number;
}
