/// <library version="1.0.0" src="https://github.com/defold/extension-ironsource/archive/refs/tags/1.0.0.zip" />
/** @noSelfInFile */

/**
 * Defold native extension which provides access to IronSource ad mediation on Android and iOS.
 * @see {@link https://github.com/defold/extension-ironsource|Github Source}
 */
declare namespace ironsource {
	/**
	 * Initialize the IronSource SDK
	 * @param {string} app_key App key you can get in the IronSource dashboard
	 */
	export function init(app_key: string): void;

	/**
	 * Sets a callback function for receiving events from the SDK. Call `ironsource.set_callback(nil)` to remove callback
	 * @param {function} callback Callback function that is executed on any event in the SDK.
	 * @example ```lua
		local function ironsource_callback(self, message_id, message)
			callback_logger(self, message_id, message)
			if message_id == ironsource.MSG_INIT then
					if message.event == ironsource.EVENT_INIT_COMPLETE then
							-- ironSource SDK is initialized
							-- massage{}
					end
			elseif message_id == ironsource.MSG_REWARDED then
					if message.event == ironsource.EVENT_AD_AVAILABLE then
							-- Indicates that there's an available ad. 
							-- The adInfo object includes information about the ad that was loaded successfully
							-- massage{AdInfo}
					elseif message.event == ironsource.EVENT_AD_UNAVAILABLE then
							-- Indicates that no ads are available to be displayed
							-- massage{}
					elseif message.event == ironsource.EVENT_AD_OPENED then
							-- The Rewarded Video ad view has opened. Your activity will loose focus
							-- massage{AdInfo}
					elseif message.event == ironsource.EVENT_AD_CLOSED then
							-- The Rewarded Video ad view is about to be closed. Your activity will regain its focus
							-- massage{AdInfo}
					elseif message.event == ironsource.EVENT_AD_REWARDED then
							-- The user completed to watch the video, and should be rewarded.
							-- The placement parameter will include the reward data.
							-- When using server-to-server callbacks, you may ignore this event and wait for the ironSource server callback
							-- massage{AdInfo, Placement}
					elseif message.event == ironsource.EVENT_AD_SHOW_FAILED then
							-- The rewarded video ad was failed to show
							-- massage{AdInfo, IronSourceError}
					elseif message.event == ironsource.EVENT_AD_CLICKED then
							-- Invoked when the video ad was clicked.
							-- This callback is not supported by all networks, and we recommend using it 
							-- only if it's supported by all networks you included in your build
							-- massage{AdInfo, Placement}
					end
			elseif message_id == ironsource.MSG_INTERSTITIAL then
					if message.event == ironsource.EVENT_AD_READY then
							-- Invoked when the interstitial ad was loaded successfully.
							-- AdInfo parameter includes information about the loaded ad
							-- massage{AdInfo}
					elseif message.event == ironsource.EVENT_AD_LOAD_FAILED then
							-- Indicates that the ad failed to be loaded
							-- massage{IronSourceError}
					elseif message.event == ironsource.EVENT_AD_OPENED then
							-- Invoked when the Interstitial Ad Unit has opened, and user left the application screen.
							-- This is the impression indication.
							-- massage{AdInfo}
					elseif message.event == ironsource.EVENT_AD_CLOSED then
							-- Invoked when the interstitial ad closed and the user went back to the application screen.
							-- massage{AdInfo}
					elseif message.event == ironsource.EVENT_AD_SHOW_FAILED then
							-- Invoked when the ad failed to show
							-- massage{AdInfo, IronSourceError}
					elseif message.event == ironsource.EVENT_AD_CLICKED then
							-- Invoked when end user clicked on the interstitial ad
							-- massage{AdInfo}
					elseif message.event == ironsource.EVENT_AD_SHOW_SUCCEEDED then
							-- Invoked before the interstitial ad was opened, and before the InterstitialOnAdOpenedEvent is reported.
							-- This callback is not supported by all networks, and we recommend using it only if
							-- it's supported by all networks you included in your build.
							-- massage{AdInfo}
					end
			elseif message_id == ironsource.MSG_CONSENT then
					if message.event == ironsource.EVENT_CONSENT_LOADED then
							-- Consent View was loaded successfully
							-- massage.consent_view_type
					elseif message.event == ironsource.EVENT_CONSENT_SHOWN then
							-- Consent view was displayed successfully 
							-- massage.consent_view_type
					elseif message.event == ironsource.EVENT_CONSENT_LOAD_FAILED then
							-- Consent view was failed to load
							-- massage.consent_view_type, massage.error_code, massage.error_message
					elseif message.event == ironsource.EVENT_CONSENT_SHOW_FAILED then
							-- Consent view was not displayed, due to error
							-- massage.consent_view_type, massage.error_code, massage.error_message
					elseif message.event == ironsource.EVENT_CONSENT_ACCEPTED then
							-- The user pressed the Settings or Next buttons
							-- massage.consent_view_type
					elseif message.event == ironsource.EVENT_CONSENT_DISMISSED then
							-- The user dismiss consent
							-- massage.consent_view_type
					end
			elseif message_id == ironsource.MSG_IDFA then
					if message.event == ironsource.EVENT_STATUS_AUTHORIZED then
							-- ATTrackingManagerAuthorizationStatusAuthorized
					elseif message.event == ironsource.EVENT_STATUS_DENIED then
							-- ATTrackingManagerAuthorizationStatusDenied
					elseif message.event == ironsource.EVENT_STATUS_NOT_DETERMINED then
							-- ATTrackingManagerAuthorizationStatusNotDetermined
					elseif message.event == ironsource.EVENT_STATUS_RESTRICTED then
							-- ATTrackingManagerAuthorizationStatusRestricted
					end
			end
		end
		```
 */
	export function set_callback(
		callback: (
			self: any,
			message_id: number,
			message: { event: number },
		) => void,
	): void;

	/**
	 * If the user provided consent, set the following flag to true (must be called before `ironsource.init()`). [Original docs](https://developers.is.com/ironsource-mobile/general/making-sure-youre-compliant-post-gdpr/#step-2) [Android](https://developers.is.com/ironsource-mobile/android/regulation-advanced-settings/), [iOS](https://developers.is.com/ironsource-mobile/ios/regulation-advanced-settings/)
	 * @param {boolean} is_consent_provided
	 */
	export function set_consent(is_consent_provided: boolean): void;

	/**
	 * The ironSource SDK provides an easy way to verify that you’ve successfully integrated the ironSource SDK and any additional adapters; it also makes sure all required dependencies and frameworks were added for the various mediated ad networks. The Integration Helper will now also portray the compatibility between the SDK and adapter versions. Original docs [Android](https://developers.is.com/ironsource-mobile-android/integration-helper-android/), [iOS](https://developers.is.com/ironsource-mobile/ios/integration-helper-ios/)
	 */
	export function validate_integration(): void;

	/**
	 * Function used for setting different parameterd for adapters and the SDK itself.
	 * @param {String} key
	 * @param {String} value
	 */
	export function set_metadata(key: string, value: string): void;

	/**
	 * If you’re serving the offerwall ad unit or using server-to-server callbacks to reward your users with ironSource SDK rewarded ad units, you must define a unique identifier for each user (“UserID”), using the setUserID method.
	 * Set the UserID before the init request, to make sure you avoid any data loses, related to the user. Use a unique identifier, with up to 64 alphanumeric characters.
	 * Original docs [Android](https://developers.is.com/ironsource-mobile/android/advanced-settings/), [iOS](https://developers.is.com/ironsource-mobile/ios/advanced-settings-2/)
	 * @param {string} user_id
	 */
	export function set_user_id(user_id: string): void;

	/**
	 * The LevelPlay integration test suite enables you to quickly and easily test your app’s integration, verify platform setup and review ads related to your configured networks. Original docs [Android](https://developers.is.com/ironsource-mobile/android/unity-levelplay-test-suite/#step-1), [iOS](https://developers.is.com/ironsource-mobile/ios/unity-levelplay-test-suite/)
	 */
	export function launch_test_suite(): void;

	/**
	 * iOS Only. Display the App Tracking Transparency authorization request for accessing the IDFA. Original docs [iOS](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/3547037-requesttrackingauthorization)
	 */
	export function request_idfa(): void;

	/**
	 * iOS Only. Returns current authorization status for the IDFA One of event types: `ironsource.EVENT_STATUS_AUTHORIZED` `ironsource.EVENT_STATUS_DENIED` `ironsource.EVENT_STATUS_NOT_DETERMINED` `ironsource.EVENT_STATUS_RESTRICTED` or nil if not supported Original docs [iOS](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/3547037-requesttrackingauthorization)
	 */
	export function get_idfa_status(): void;

	/**
	 * Manage the debug logs for your integrated mediation ad networks with this boolean. When set to TRUE it enables debug logs to help you troubleshoot issues with all of the mediation ad networks that permit to do so. Remove this code before your app goes live with our ad units!
	 * @returns {boolean}
	 */
	export function set_adapters_debug(): boolean;

	/**
	 * iOS Only. Load the IronSource permission pop-up. [iOS](https://developers.is.com/ironsource-mobile/ios/permission-popup-ios/#step-1)
	 * @returns {string} one of the folowing values "pre" or "post"
	 */
	export function load_consent_view(): string;

	/**
	 * iOS Only. Display the IronSource permission pop-up. [iOS](https://developers.is.com/ironsource-mobile/ios/permission-popup-ios/#step-1)
	 * @returns {string} one of the folowing values "pre" or "post"
	 */
	export function show_consent_view(): string;

	/**
	 * You can determine and monitor the internet connection on the user’s device through the ironSource Network Change Status function. This enables the SDK to change its availability according to network modifications, i.e. in the case of no network connection, the availability will turn to FALSE. The default of this function is false; if you’d like to listen to it for changes in connectivity, activate it in the SDK initialization [Android shouldTrackNetworkState](https://developers.is.com/ironsource-mobile/android/rewarded-video-integration-android/#step-1), [iOS shouldTrackReachability](https://developers.is.com/ironsource-mobile/ios/rewarded-video-integration-ios/#step-1)
	 * @param {boolean} should_track
	 */
	export function should_track_network_state(should_track: boolean): void;

	/**
	 * You can receive the availability status of the AD Unit through the callback. Alternatively, ask for ad availability directly by calling this function. [Android](https://developers.is.com/ironsource-mobile/android/rewarded-video-integration-android/#step-1), [iOS](https://developers.is.com/ironsource-mobile/ios/rewarded-video-integration-ios/#step-1)
	 * @returns {boolean}
	 */
	export function is_rewarded_video_available(): boolean;

	/**
	 * You can show a video ad to your users and define the exact Placement you want to show an ad. The Reward settings of this Placement will be pulled from the ironSource server. Original docs [Android](https://developers.is.com/ironsource-mobile/android/rewarded-video-integration-android/#step-1), [iOS](https://developers.is.com/ironsource-mobile/ios/rewarded-video-integration-ios/#step-1)
	 * @param {String} placement_name maybe nil - then default placement used
	 */
	export function show_rewarded_video(placement_name: string): void;

	/**
	 * Get details about the specific Reward associated with each Ad Placement. Original docs [Android](https://developers.is.com/ironsource-mobile/android/rewarded-video-integration-android/#step-1), [iOS](https://developers.is.com/ironsource-mobile/ios/rewarded-video-integration-ios/#step-1)
	 * @param {String} placement_name
	 */
	export function get_rewarded_video_placement_info(
		placement_name: string,
	): void;

	type VideoPlacementInfo = {
		placement_id: unknown;
		placement_name: unknown;
		is_default: unknown;
		reward_name: unknown;
		reward_amount: unknown;
	};

	/**
	 * Get details about the specific Reward associated with each Ad Placement. Original docs [Android](https://developers.is.com/ironsource-mobile/android/rewarded-video-integration-android/#step-1), [iOS](https://developers.is.com/ironsource-mobile/ios/rewarded-video-integration-ios/#step-1)
	 * @param {String} placement_name
	 * @returns {table} contains the following fields `placement_id`, `placement_name`, `is_default`, `reward_name`, `reward_amount`
	 */
	export function get_rewarded_video_placement_info(
		placement_name: string,
	): VideoPlacementInfo;

	/**
	 * To ensure you don’t show the traffic driver (Rewarded Video button) to prompt the user to watch an ad when the placement is capped, you must call the below method to verify if a specific placement has reached its ad limit. When requesting availability, you might receive a TRUE response but in the case your placement has reached its capping limit, the ad will not be served to the user. Original docs [Android isRewardedVideoPlacementCapped](https://developers.is.com/ironsource-mobile/android/rewarded-video-integration-android/#step-2), [iOS isRewardedVideoCappedForPlacement](https://developers.is.com/ironsource-mobile/ios/rewarded-video-integration-ios/#step-2)
	 * @param {String} placement_name
	 * @returns {boolean}
	 */
	export function is_rewarded_video_placement_capped(
		placement_name: string,
	): boolean;

	/**
	 * The Dynamic UserID is a parameter to verify AdRewarded transactions and can be changed throughout the session. To receive this parameter through the server to server callbacks, it must be set before calling showRewardedVideo. You will receive a dynamicUserId parameter in the callback URL with the reward details. [Android](https://developers.is.com/ironsource-mobile/android/rewarded-video-integration-android/#step-2), [iOS](https://developers.is.com/ironsource-mobile/ios/rewarded-video-integration-ios/#step-2)
	 * @param {String} dynamic_user_id
	 */
	export function set_dynamic_user_id(dynamic_user_id: string): void;

	/**
	 * We recommend requesting an Interstitial Ad a short while before you plan on showing it to your users as the loading process can take time. [Android](https://developers.is.com/ironsource-mobile/android/interstitial-mediation-integration-android/#step-2), [iOS](https://developers.is.com/ironsource-mobile/ios/interstitial-integration-ios/#step-2)
	 */
	export function load_interstitial(): void;

	/**
	 * You can receive the availability status of the AD Unit through the callback. Alternatively, ask for ad availability directly by calling this function. [Android](https://developers.is.com/ironsource-mobile/android/interstitial-mediation-integration-android/#step-2), [iOS](https://developers.is.com/ironsource-mobile/ios/interstitial-integration-ios/#step-2)
	 * @returns {boolean}
	 */
	export function is_interstitial_ready(): boolean;

	type InterstitialPlacementInfo = {
		placement_id: unknown;
		placement_name: unknown;
		is_default: unknown;
	};

	/**
	 * Android Only. Get details about the specific Ad Placement. Original docs [Android](https://developers.is.com/ironsource-mobile/android/interstitial-mediation-integration-android/#step-3), [iOS](https://developers.is.com/ironsource-mobile/ios/interstitial-integration-ios/#step-3)
	 * @param {String} placement_name
	 * @returns {table} contains the following fields `placement_id`, `placement_name`, `is_default`
	 */
	export function get_interstitial_placement_info(
		placement_name: string,
	): InterstitialPlacementInfo;

	/**
	 * In addition to LevelPlay‘s Ad Placements, you can now configure capping and pacing settings for selected placements. Capping and pacing improve the user experience in your app by limiting the number of ads served within a defined timeframe. Original docs [Android](https://developers.is.com/ironsource-mobile/android/interstitial-mediation-integration-android/#step-3), [iOS](https://developers.is.com/ironsource-mobile/ios/interstitial-integration-ios/#step-3)
	 * @param {String} placement_name
	 * @returns {boolean}
	 */
	export function is_interstitial_placement_capped(
		placement_name: string,
	): boolean;

	/**
	 * Serve an Interstitial ad to your users. Call it once you receive the ironsource.EVENT_AD_READY callback, you are ready to show an Interstitial Ad to your users. To provide the best experience for your users, make sure to pause any game action, including audio, during the time the ad is displayed. Original docs [Android](https://developers.is.com/ironsource-mobile/android/rewarded-video-integration-android/#step-1), [iOS](https://developers.is.com/ironsource-mobile/ios/rewarded-video-integration-ios/#step-1)
	 * @param {String} placement_name maybe nil - then default placement used
	 */

	export function show_interstitial(placement_name: string): void;

	export const MSG_INTERSTITIAL: number;
	export const MSG_REWARDED: number;
	export const MSG_CONSENT: number;
	export const MSG_INIT: number;
	export const MSG_IDFA: number;
	export const EVENT_AD_AVAILABLE: number;
	export const EVENT_AD_UNAVAILABLE: number;
	export const EVENT_AD_OPENED: number;
	export const EVENT_AD_CLOSED: number;
	export const EVENT_AD_REWARDED: number;
	export const EVENT_AD_CLICKED: number;
	export const EVENT_AD_SHOW_FAILED: number;
	export const EVENT_AD_READY: number;
	export const EVENT_AD_SHOW_SUCCEEDED: number;
	export const EVENT_AD_LOAD_FAILED: number;
	export const EVENT_JSON_ERROR: number;
	export const EVENT_INIT_COMPLETE: number;
	export const EVENT_CONSENT_LOADED: number;
	export const EVENT_CONSENT_SHOWN: number;
	export const EVENT_CONSENT_LOAD_FAILED: number;
	export const EVENT_CONSENT_SHOW_FAILED: number;
	export const EVENT_CONSENT_ACCEPTED: number;
	export const EVENT_CONSENT_DISMISSED: number;
	export const EVENT_STATUS_AUTHORIZED: number;
	export const EVENT_STATUS_DENIED: number;
	export const EVENT_STATUS_NOT_DETERMINED: number;
	export const EVENT_STATUS_RESTRICTED: number;
}
