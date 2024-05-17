/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @url https://github.com/ts-defold/library
 * @url https://insality.github.io/druid/modules/Druid.html
 * @noResolution
 */
declare module 'druid.extended.swipe' {
	export function init(
		this: Swipe,
		node: node,
		on_swipe_callback: (swipe: Swipe) => void,
	): void;
	export function set_click_zone(this: Swipe, zone: node): void;

	export const style: {
		SWIPE_TIME: number;
		SWIPE_THRESHOLD: number;
		SWIPE_TRIGGER_ON_MOVE: boolean;
	};

	export const click_zone: node | undefined;
	export const node: node;
	export const on_swipe: (
		this: Swipe,
		swipe_side: string,
		dist: number,
		delta_time: number,
	) => void;
}

type Swipe = typeof import('druid.extended.swipe');
