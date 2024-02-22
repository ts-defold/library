/// <library version="1.2.0" src="https://github.com/GameDistribution/gd-defold/releases/tag/1.2.0" />
/** @noSelfInFile */

/**
 * @url https://github.com/GameDistribution/gd-defold
 * @noResolution
 */
declare namespace gdsdk {
	/**
	 * Sets the listener function for GameDistribution events.
	 * @param {function} callback function to call when a GameDistribution event is received from the SDK.
	 * @example ```lua
	gdsdk.set_listener(function(self, event, message)
			print(event, message)
	end)
	```
	*/
	export function set_listener(
		callback: (this: any, event: GDConstant, message: unknown) => void,
	): void;

	/**
	 * Show an interstitial ad
	 * @example ```lua
	gdsdk.show_interstitial_ad()
	```
	*/
	export function show_interstitial_ad(): void;

	/**
	 * Show a rewarded ad
	 * @example ```lua
	gdsdk.show_rewarded_ad()
	```
	*/
	export function show_rewarded_ad(): void;

	/**
	 * Show a display/banner ad
	 * @param {string} container_id id of the div in which to load the ad. This will set the CSS display style of the div to 'block'.
	 * @example ```lua
	gdsdk.show_display_ad("bottom-ad-container")
	```
	*/
	export function show_display_ad(container_id: string): void;

	/**
	 * Hide a display/banner ad
	 * @param {string} container_id id of the div to hide. This sets the CSS display style to 'none' for the div.
	 * @example ```lua
	gdsdk.hide_display_ad("bottom-ad-container")
	```
	*/
	export function hide_display_ad(container_id: string): void;

	/**
	 * This will open a tiny toolbar, which allows you to call fake advertisements, making the implementation much easier and reliable. Clear your localStorage to disable debugging.
	 * @example ```lua
	gdsdk.open_console()
	```
	*/
	export function open_console(): void;

	type GDConstant = string & Readonly<{ __brand: 'GDConstant' }>;
	/**
	 * When the SDK is ready
	 */
	export const SDK_READY: GDConstant;
	/**
	 * When the SDK has hit a critical error.
	 */
	export const SDK_ERROR: GDConstant;
	/**
	 * When the game should start.
	 */
	export const SDK_GAME_START: GDConstant;
	/**
	 * When the game should pause.
	 */
	export const SDK_GAME_PAUSE: GDConstant;
	/**
	 * When the publishers' client has requested to not track his/ her data. Hook into this event to find out if you can record client tracking data.
	 */
	export const SDK_GDPR_TRACKING: GDConstant;
	/**
	 * When the publishers' client has requested to not get personalized advertisements. Hook into this event to find out if you can display personalized advertisements in case you use another ad solution.
	 */
	export const SDK_GDPR_TARGETING: GDConstant;
	/**
	 * When the publishers' client has requested to not load third party services. Hook into this event to find out if you can third party services like Facebook, AddThis, and such alike.
	 */
	export const SDK_GDPR_THIRD_PARTY: GDConstant;
	/**
	 * When the adsManager instance is ready with ads.
	 */
	export const AD_SDK_MANAGER_READY: GDConstant;
	/**
	 * When the ad is cancelled or stopped because it's done running an ad.
	 */
	export const AD_SDK_CANCELED: GDConstant;
	export const AD_ERROR: GDConstant;
	export const AD_BREAK_READY: GDConstant;
	export const AD_METADATA: GDConstant;
	export const ALL_ADS_COMPLETED: GDConstant;
	export const CLICK: GDConstant;
	export const COMPLETE: GDConstant;
	export const CONTENT_PAUSE_REQUESTED: GDConstant;
	export const CONTENT_RESUME_REQUESTED: GDConstant;
	export const DURATION_CHANGE: GDConstant;
	export const FIRST_QUARTILE: GDConstant;
	export const IMPRESSION: GDConstant;
	export const INTERACTION: GDConstant;
	export const LINEAR_CHANGED: GDConstant;
	export const LOADED: GDConstant;
	export const LOG: GDConstant;
	export const MIDPOINT: GDConstant;
	export const PAUSED: GDConstant;
	export const RESUMED: GDConstant;
	export const SKIPPABLE_STATE_CHANGED: GDConstant;
	export const SKIPPED: GDConstant;
	export const STARTED: GDConstant;
	export const THIRD_QUARTILE: GDConstant;
	export const USER_CLOSE: GDConstant;
	export const VOLUME_CHANGED: GDConstant;
	export const VOLUME_MUTED: GDConstant;
}
