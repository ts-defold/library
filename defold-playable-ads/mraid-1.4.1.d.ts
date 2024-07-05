/// <library version="1.4.1" src="https://github.com/indiesoftby/defold-playable-ads/archive/refs/tags/1.4.1.zip" />
/** @noSelfInFile */

/**
 * @see {@link https://github.com/indiesoftby/defold-playable-ads|Github Source}
 */
declare namespace mraid {
	export function set_listener(
		callback: (
			this: any,
			event: typeof EVENT_VIEWABLE_CHANGE,
			data: unknown,
		) => void,
	): void;
	/**
	 * @returns {boolean} true - container is on-screen and viewable by the user; false - container is offscreen and not viewable.
	 */
	export function is_viewable(): boolean;
	export const EVENT_VIEWABLE_CHANGE: string;
}
