/** @noSelfInFile */

/**
 * @url https://github.com/defold/extension-admob
 * @noResolution
 */
declare namespace admob {
	/**
	 * Initialize the Mobile Ads SDK. Warning: If you need to obtain consent from users in the European Economic Area (EEA), set any request-specific flags, or otherwise take action before loading ads, ensure you do so before initializing the Mobile Ads SDK.
	Original docs [Android](https://developers.google.com/admob/android/quick-start#initialize_the_mobile_ads_sdk), [iOS](https://developers.google.com/admob/ios/quick-start#initialize_the_mobile_ads_sdk)
	*/
	export function initialize(): void;

	/**
	 * Sets a callback function for receiving events from the SDK. Call `admob.set_callback(nil)` to remove callback
	 * @param {function} callback Callback function that is executed on any event in the SDK.
	 * @example ```lua
	local function admob_callback(self, message_id, message)
			pprint(message_id, message)
			if message_id == admob.MSG_INITIALIZATION then
				if message.event == admob.EVENT_COMPLETE then
						print("EVENT_COMPLETE: Initialization complete")
				elseif message.event == admob.EVENT_JSON_ERROR then
						print("EVENT_JSON_ERROR: Internal NE json error "..message.error)
				end
		elseif message_id == admob.MSG_IDFA then
				if message.event == admob.EVENT_STATUS_AUTHORIZED then
						print("EVENT_STATUS_AUTHORIZED: ATTrackingManagerAuthorizationStatusAuthorized")
				elseif message.event == admob.EVENT_STATUS_DENIED then
						print("EVENT_STATUS_DENIED: ATTrackingManagerAuthorizationStatusDenied")
				elseif message.event == admob.EVENT_STATUS_NOT_DETERMINED then
						print("EVENT_STATUS_NOT_DETERMINED: ATTrackingManagerAuthorizationStatusNotDetermined")
				elseif message.event == admob.EVENT_STATUS_RESTRICTED then
						print("EVENT_STATUS_RESTRICTED: ATTrackingManagerAuthorizationStatusRestricted")
				elseif message.event == admob.EVENT_NOT_SUPPORTED then
						print("EVENT_NOT_SUPPORTED: IDFA request not supported on this platform or OS version")
				end
		elseif message_id == admob.MSG_INTERSTITIAL then
				if message.event == admob.EVENT_CLOSED then
						print("EVENT_CLOSED: Interstitial AD closed")
				elseif message.event == admob.EVENT_FAILED_TO_SHOW then
						print("EVENT_FAILED_TO_SHOW: Interstitial AD failed to show\nCode: "..message.code.."\nError: "..message.error)
				elseif message.event == admob.EVENT_OPENING then
						print("EVENT_OPENING: Interstitial AD is opening")
				elseif message.event == admob.EVENT_FAILED_TO_LOAD then
						print("EVENT_FAILED_TO_LOAD: Interstitial AD failed to load\nCode: "..message.code.."\nError: "..message.error)
				elseif message.event == admob.EVENT_LOADED then
						print("EVENT_LOADED: Interstitial AD loaded")
				elseif message.event == admob.EVENT_NOT_LOADED then
						print("EVENT_NOT_LOADED: can't call show_interstitial() before EVENT_LOADED\nError: "..message.error)
				elseif message.event == admob.EVENT_IMPRESSION_RECORDED then
						print("EVENT_IMPRESSION_RECORDED: Interstitial did record impression")
				elseif message.event == admob.EVENT_JSON_ERROR then
						print("EVENT_JSON_ERROR: Internal NE json error: "..message.error)
				end
		elseif message_id == admob.MSG_REWARDED then
				if message.event == admob.EVENT_CLOSED then
						print("EVENT_CLOSED: Rewarded AD closed")
				elseif message.event == admob.EVENT_FAILED_TO_SHOW then
						print("EVENT_FAILED_TO_SHOW: Rewarded AD failed to show\nCode: "..message.code.."\nError: "..message.error)
				elseif message.event == admob.EVENT_OPENING then
						print("EVENT_OPENING: Rewarded AD is opening")
				elseif message.event == admob.EVENT_FAILED_TO_LOAD then
						print("EVENT_FAILED_TO_LOAD: Rewarded AD failed to load\nCode: "..message.code.."\nError: "..message.error)
				elseif message.event == admob.EVENT_LOADED then
						print("EVENT_LOADED: Rewarded AD loaded")
				elseif message.event == admob.EVENT_NOT_LOADED then
						print("EVENT_NOT_LOADED: can't call show_rewarded() before EVENT_LOADED\nError: "..message.error)
				elseif message.event == admob.EVENT_EARNED_REWARD then
						print("EVENT_EARNED_REWARD: Reward: " .. tostring(message.amount) .. " " .. tostring(message.type))
				elseif message.event == admob.EVENT_IMPRESSION_RECORDED then
						print("EVENT_IMPRESSION_RECORDED: Rewarded did record impression")
				elseif message.event == admob.EVENT_JSON_ERROR then
						print("EVENT_JSON_ERROR: Internal NE json error: "..message.error)
				end
		elseif message_id == admob.MSG_BANNER then
				if message.event == admob.EVENT_LOADED then
						print("EVENT_LOADED: Banner AD loaded. Height: "..message.height.."px Width: "..message.width.."px")
				elseif message.event == admob.EVENT_OPENING then
						print("EVENT_OPENING: Banner AD is opening")
				elseif message.event == admob.EVENT_FAILED_TO_LOAD then
						print("EVENT_FAILED_TO_LOAD: Banner AD failed to load\nCode: "..message.code.."\nError: "..message.error)
				elseif message.event == admob.EVENT_CLICKED then
						print("EVENT_CLICKED: Banner AD loaded")
				elseif message.event == admob.EVENT_CLOSED then
						print("EVENT_CLOSED: Banner AD closed")
				elseif message.event == admob.EVENT_DESTROYED then
						print("EVENT_DESTROYED: Banner AD destroyed")
				elseif message.event == admob.EVENT_IMPRESSION_RECORDED then
						print("EVENT_IMPRESSION_RECORDED: Banner did record impression")
				elseif message.event == admob.EVENT_JSON_ERROR then
						print("EVENT_JSON_ERROR: Internal NE json error: "..message.error)
				end
		end
	end

	function init(self)
			if admob then
					admob.set_callback(admob_callback)
					admob.initialize()
			end
	end
	```
	*/
	export function set_callback(
		callback: (
			this: any,
			message_id: number,
			message: { event: number; code?: number; message?: string },
		) => void,
	): void;

	/**
	 * Sets user privacy preferences (must be called before `admob.initialize()`). Original docs [Android](https://developers.google.com/admob/android/ccpa), [iOS](https://developers.google.com/admob/ios/ccpa)
	 * @param {boolean} bool
	 */
	export function set_privacy_settings(bool: boolean): void;

	/**
	 * Display the App Tracking Transparency authorization request for accessing the IDFA. Original docs [iOS](https://developers.google.com/admob/ios/ios14#request)
	 */
	export function request_idfa(): void;

	/**
	 * Show Ad Inspector. This is an in-app overlay that enables authorized devices to perform realtime analysis of test ad requests directly within a mobile app. Ad Inspector only launces on [test devices](https://support.google.com/admob/answer/9691433). Original docs [Android](https://developers.google.com/admob/android/ad-inspector), [iOS](https://developers.google.com/admob/ios/ad-inspector)
	 */
	export function show_ad_inspector(): void;

	/**
	 * Starts loading an Interstitial Ad, can only be called after `admob.MSG_INITIALIZATION` event Original docs [Android](https://developers.google.com/admob/android/interstitial-fullscreen), [iOS](https://developers.google.com/admob/ios/interstitial)
	 * @param {string} ad_unit_id Ad unit ID, for test ads use on Android `"ca-app-pub-3940256099942544/1033173712"`, or on iOS `"ca-app-pub-3940256099942544/4411468910"` Original docs [Android](https://developers.google.com/admob/android/interstitial-fullscreen), [iOS](https://developers.google.com/admob/ios/interstitial)
	 */
	export function load_interstitial(ad_unit_id: string): void;

	/**
	 * Shows loaded Interstitial Ad, can only be called after `admob.EVENT_LOADED` Original docs [Android](https://developers.google.com/admob/android/interstitial-fullscreen), [iOS](https://developers.google.com/admob/ios/interstitial)
	 * @example ```lua
	if admob and admob.is_interstitial_loaded() then
			admob.show_interstitial()
	end
	```
	*/
	export function show_interstitial(): void;

	/**
	 * Checks if Interstitial Ad is loaded and ready to show Original docs [Android](https://developers.google.com/admob/android/interstitial-fullscreen), [iOS](https://developers.google.com/admob/ios/interstitial)
	 * @returns {boolean}
	 */
	export function is_interstitial_loaded(): boolean;

	/**
	 * Starts loading a Rewarded Ad, can only be called after `admob.MSG_INITIALIZATION` event Original docs [Android](https://developers.google.com/admob/android/rewarded-fullscreen), [iOS](https://developers.google.com/admob/ios/rewarded-ads)
	 * @param {string} ad_unit_id Ad unit ID, for test ads use on Android `"ca-app-pub-3940256099942544/1712485313"`, or on iOS `"ca-app-pub-3940256099942544/4411468910"` Original docs [Android](https://developers.google.com/admob/android/rewarded-fullscreen), [iOS](https://developers.google.com/admob/ios/rewarded-ads)
	 */
	export function load_rewarded(ad_unit_id: string): void;

	/**
	 * Shows loaded Rewarded Ad, can only be called after `admob.EVENT_LOADED` Original docs [Android](https://developers.google.com/admob/android/rewarded-fullscreen), [iOS](https://developers.google.com/admob/ios/rewarded-ads)
	 * @example ```lua
	if admob and admob.is_rewarded_loaded() then
			admob.show_rewarded()
	end
	```
	*/
	export function show_rewarded(): void;

	/**
	 * Checks if Rewarded Ad is loaded and ready to show Original docs [Android](https://developers.google.com/admob/android/rewarded-fullscreen), [iOS](https://developers.google.com/admob/ios/rewarded-ads)
	 * @returns {boolean}
	 */
	export function is_rewarded_loaded(): boolean;

	/**
	 * Starts loading a Rewarded Interstitial Ad, can only be called after `admob.MSG_INITIALIZATION` event Original docs [Android](https://developers.google.com/admob/android/rewarded-interstitial#load_an_ad), [iOS](https://developers.google.com/admob/ios/rewarded-interstitial#load_an_ad)
	 * @param {string} ad_unit_id Ad unit ID, for test ads use on Android `"ca-app-pub-3940256099942544/5354046379"`, or on iOS `"ca-app-pub-3940256099942544/6978759866"` Original docs [Android](https://developers.google.com/admob/android/rewarded-interstitial#load_an_ad), [iOS](https://developers.google.com/admob/ios/rewarded-interstitial#load_an_ad)
	 */
	export function load_rewarded_interstitial(ad_unit_id: string): void;

	/**
	 * Shows loaded Rewarded Interstitial Ad, can only be called after `admob.EVENT_LOADED` Original docs [Android](https://developers.google.com/admob/android/rewarded-interstitial#show_the_ad), [iOS](https://developers.google.com/admob/ios/rewarded-interstitial#display_the_ad_and_handle_the_reward_event)
	 * @example ```lua
	if admob and admob.is_rewarded_interstitial_loaded() then
			admob.show_rewarded_interstitial()
	end
	```
	*/
	export function show_rewarded_interstitial(): void;

	/**
	 * Checks if Rewarded Interstitial Ad is loaded and ready to show Original docs [Android](https://developers.google.com/admob/android/rewarded-interstitial), [iOS](https://developers.google.com/admob/ios/rewarded-interstitial)
	 * @returns {boolean}
	 */
	export function is_rewarded_interstitial_loaded(): boolean;

	/**
	 * Starts loading a Banner Ad, can only be called after `admob.MSG_INITIALIZATION` event Original docs [Android](https://developers.google.com/admob/android/banner), [iOS](https://developers.google.com/admob/ios/banner)
	 * @param {string} ad_unit_id Ad unit ID, for test ads use on Android `"ca-app-pub-3940256099942544/6300978111"`, or on iOS `"ca-app-pub-3940256099942544/2934735716"` Original docs [Android](https://developers.google.com/admob/android/banner), [iOS](https://developers.google.com/admob/ios/banner)
	 * @param {number} size Requested Banner Ad size, possible values: `admob.SIZE_ADAPTIVE_BANNER` (default), `admob.SIZE_BANNER`, `admob.SIZE_FLUID`, `admob.SIZE_FULL_BANNER`, `admob.SIZE_LARGE_BANNER`, `admob.SIZE_LEADEARBOARD`, `admob.SIZE_MEDIUM_RECTANGLE`, `admob.SIZE_SEARH`, `admob.SIZE_SKYSCRAPER`, `admob.SIZE_SMART_BANNER`. Original docs [Android](https://developers.google.com/admob/android/banner#banner_sizes), [iOS](https://developers.google.com/admob/ios/banner#banner_sizes)
	 */
	export function load_banner(ad_unit_id: string, size?: number): void;

	/**
	 * Shows loaded Banner Ad, can only be called after `admob.EVENT_LOADED` Original docs [Android](https://developers.google.com/admob/android/banner), [iOS](https://developers.google.com/admob/ios/banner)
	 * @param {number} position Banner Ad position, possible values: `admob.POS_NONE` (default), `admob.POS_TOP_LEFT`, `admob.POS_TOP_CENTER`, `admob.POS_TOP_RIGHT`, `admob.POS_BOTTOM_LEFT`, `admob.POS_BOTTOM_CENTER`, `admob.POS_BOTTOM_RIGHT`, `admob.POS_CENTER`
	 * @example ```lua
	if admob and admob.is_banner_loaded() then
			admob.show_banner(admob.POS_TOP_CENTER)
	end
	```
	*/
	export function show_banner(position?: number): void;

	/**
	 * Sets a maximum ad content rating. AdMob ads returned for your app will have a content rating at or below that level. Original docs [Android](https://developers.google.com/admob/android/targeting#ad_content_filtering), [iOS](https://developers.google.com/admob/ios/targeting#ad_content_filtering)
	 * @param {number} max_ad_rating Max Ad Rating, possible values: `admob.MAX_AD_CONTENT_RATING_G`, `admob.MAX_AD_CONTENT_RATING_PG`, `admob.MAX_AD_CONTENT_RATING_T`, `admob.MAX_AD_CONTENT_RATING_MA`
	 * @example ```lua
		admob.set_max_ad_content_rating(admob.MAX_AD_CONTENT_RATING_PG)
	```
	*/
	export function set_max_ad_content_rating(max_ad_rating: number): void;

	/**
	 * Temporarily hides Banner Ad, banner can be shown again using `admob.show_banner()` Original docs [Android](https://developers.google.com/admob/android/banner), [iOS](https://developers.google.com/admob/ios/banner)
	 */
	export function hide_banner(): void;

	/**
	 * Checks if Banner Ad is loaded and ready to show Original docs [Android](https://developers.google.com/admob/android/banner), [iOS](https://developers.google.com/admob/ios/banner)
	 * @returns {boolean}
	 */
	export function is_banner_loaded(): boolean;

	/**
	 * Hides and unloads Banner Ad (needs to call `admob.load_banner()` later to show Banner Ad) Original docs [Android](https://developers.google.com/admob/android/banner), [iOS](https://developers.google.com/admob/ios/banner)
	 */
	export function destroy_banner(): void;

	export const MSG_INITIALIZATION: number;
	export const MSG_INTERSTITIAL: number;
	export const MSG_REWARDED: number;
	export const MSG_BANNER: number;
	export const MSG_IDFA: number;
	export const MSG_REWARDED_INTERSTITIAL: number;
	export const EVENT_CLOSED: number;
	export const EVENT_FAILED_TO_SHOW: number;
	export const EVENT_OPENING: number;
	export const EVENT_FAILED_TO_LOAD: number;
	export const EVENT_LOADED: number;
	export const EVENT_NOT_LOADED: number;
	export const EVENT_EARNED_REWARD: number;
	export const EVENT_COMPLETE: number;
	export const EVENT_CLICKED: number;
	export const EVENT_DESTROYED: number;
	export const EVENT_JSON_ERROR: number;
	export const EVENT_IMPRESSION_RECORDED: number;
	export const EVENT_STATUS_AUTHORIZED: number;
	export const EVENT_STATUS_DENIED: number;
	export const EVENT_STATUS_NOT_DETERMINED: number;
	export const EVENT_STATUS_RESTRICTED: number;
	export const EVENT_NOT_SUPPORTED: number;
	export const SIZE_ADAPTIVE_BANNER: number;
	export const SIZE_BANNER: number;
	export const SIZE_FLUID: number;
	export const SIZE_FULL_BANNER: number;
	export const SIZE_LARGE_BANNER: number;
	export const SIZE_LEADEARBOARD: number;
	export const SIZE_MEDIUM_RECTANGLE: number;
	export const SIZE_SEARH: number;
	export const SIZE_SKYSCRAPER: number;
	export const SIZE_SMART_BANNER: number;
	export const POS_NONE: number;
	export const POS_TOP_LEFT: number;
	export const POS_TOP_CENTER: number;
	export const POS_TOP_RIGHT: number;
	export const POS_BOTTOM_LEFT: number;
	export const POS_BOTTOM_CENTER: number;
	export const POS_BOTTOM_RIGHT: number;
	export const POS_CENTER: number;
	export const MAX_AD_CONTENT_RATING_G: number;
	export const MAX_AD_CONTENT_RATING_PG: number;
	export const MAX_AD_CONTENT_RATING_T: number;
	export const MAX_AD_CONTENT_RATING_MA: number;
}
