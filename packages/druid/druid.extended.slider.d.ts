/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.extended.slider' {
	export function init(
		this: Slider,
		node: node,
		end_pos: vmath.vector3,
		callback?: Function,
	): void;
	export function set(this: Slider, value: number, is_silent?: boolean): void;
	export function set_input_node(this: Slider, input_node: node): Slider;
	export function set_steps(this: Slider, steps: number[]): Slider;

	export const dist: number;
	export const end_pos: vmath.vector3;
	export const is_drag: boolean;
	export const node: node;
	export const on_change_value: import('druid.druid').DruidEvent;
	export const pos: vmath.vector3;
	export const start_pos: vmath.vector3;
	export const target_pos: vmath.vector3;
	export const value: number;
}

type Slider = typeof import('druid.extended.slider');
