/// <library version="1.1.2" src="https://github.com/defold/extension-kaiads/archive/refs/tags/1.1.2.zip" />
/** @noSelfInFile */

/**
 * @see {@link https://github.com/defold/extension-kaiads|Github Source}
 */
declare namespace kaiads {
	/**
	 * Initialise KaiAds.
	 * @param {string} publisher_id Id of the publisher
	 * @example ```lua
	kaiads.init("2b30c65e-efde-4930-990e-ded207899766")
	```
	*/
	export function init(publisher_id: string): void;

	/**
	 * Listen to events from the KaiAds SDK.
	 * @param {function} listener function to call when a KaiAds event is received from the SDK.
	 * @example ```lua
	local function = on_kaiads_event(self, event, code)
			if event == kaiads.PRELOAD_OK then
					print("KaiAds has successfully preloaded an ad")
			elseif event == kaiads.AD_DISPLAY then
					print("KaiAds is showing an ad")
			elseif event == kaiads.AD_CLOSE then
					print("The user closed the ad!")
			elseif event == kaiads.AD_CLICK then
					print("The user clicked on the ad!")
			else
					print("Something went wrong", code)
			end
	end
	kaiads.set_listener(on_kaiads_event)
	```
 */
	export function set_listener(
		listener: (this: any, event: unknown, code: unknown) => void,
	): void;

	/**
	 * Preload an ad.
	 * @param {string} config Ad configuration as a JSON encoded string.
	 * @example ```lua
	local banner_config = {
		app = "mygame",
		slot = "menu",
		test = 0,
		timeout = 5 * 1000,
		h = 264,
		w = 240,
		container = "ad-container"
	}
	kaiads.preload(json.encode(banner_config))

	local fullscreen_config = {
		app = "mygame",
		slot = "gameover",
	}
	kaiads.preload(json.encode(fullscreen_config))
	```
 */
	export function preload(config: string): void;

	/**
	 * Show an ad. You must have called preload() and received a callback that the ad was preloaded before attempting to show an ad.
	 * @example ```lua
	kaiads.set_listener(function(self, event, code)
			if event == kaiads.PRELOAD_OK then
					kaiads.show()
			end
	end)
	kaiads.preload(config)
	```
 */
	export function show(): void;

	/**
	 * Event sent when an error occurred while trying to preload an ad
	 */
	export const PRELOAD_ERROR: number;
	/**
	 * Event sent when an ad was successfully preloaded
	 */
	export const PRELOAD_OK: number;
	/**
	 * Event sent when an error occurred while trying to show an ad
	 */
	export const SHOW_ERROR: number;
	/**
	 * Event sent when an ad is displayed
	 */
	export const AD_DISPLAY: number;
	/**
	 * Event sent when an ad is clicked
	 */
	export const AD_CLICK: number;
	/**
	 * Event sent when an ad is closed
	 */
	export const AD_CLOSE: number;
}
