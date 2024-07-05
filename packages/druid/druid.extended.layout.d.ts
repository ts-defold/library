/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.extended.layout' {
	export function fit_into_node(this: Layout, node?: node): Layout;
	export function fit_into_size(
		this: Layout,
		target_size: vmath.vector3,
	): Layout;
	export function fit_into_window(this: Layout): Layout;
	export function init(
		this: Layout,
		node: node,
		mode: string,
		on_size_changed_callback?: () => void,
	): void;
	export function set_max_gui_upscale(
		this: Layout,
		max_gui_upscale: number,
	): Layout;
	export function set_max_size(this: Layout, max_size: vmath.vector3): Layout;
	export function set_min_size(this: Layout, min_size: vmath.vector3): Layout;
	export function set_origin_position(
		this: Layout,
		new_origin_position: vmath.vector3,
	): Layout;
	export function set_origin_size(
		this: Layout,
		new_origin_size: vmath.vector3,
	): Layout;

	export const mode: string;
	export const node: node;
	export const on_size_changed: (
		new_size: import('druid.druid').DruidEvent,
	) => void;
}

type Layout = typeof import('druid.extended.layout');
