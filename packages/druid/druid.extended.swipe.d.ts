/**
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.extended.swipe' {
	type Swipe = typeof import('druid.extended.swipe');

	export function init(
		this: Swipe,
		node: node,
		on_swipe_callback: (
			this: Swipe,
			swipe_side: string,
			dist: number,
			delta_time: number,
		) => void,
	): void;
	export function set_click_zone(
		this: Swipe,
		zone: node | string | undefined,
	): void;

	export const style: {
		SWIPE_TIME: number | undefined;
		SWIPE_THRESHOLD: number | undefined;
		SWIPE_TRIGGER_ON_MOVE: boolean | undefined;
	};
	export const click_zone: node | undefined;
	export const node: node;
	export const on_swipe: import('druid.druid').DruidEvent;
}
