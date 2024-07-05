/** @noSelfInFile */

/**
 * AppLovin MAX Defold Plugin for Android and iOS
 * @see {@link https://github.com/AppLovin/AppLovin-MAX-Defold|Github Source}
 */
declare namespace applovin {
	/**
	 * Initialize the AppLovin SDK with the provided SDK key.
	 * @param {string} sdk_key
	 */
	export function initialize(sdk_key: string): void;

	/**
	 * Sets a callback function for receiving events from the SDK. Call `applovin.set_callback(nil)` to remove callback
	 * @param {function} callback Callback function that is executed on any event in the SDK.
	 */
	export function set_callback(
		callback: (this: any, name: string, params: {}) => void,
	): void;

	/**
	 * Checks if the AppLovin SDK has been initialized.
	 * @returns {boolean} Returns true if the SDK is initialized, false otherwise.
	 */
	export function is_initialized(): boolean;

	/**
	 * Displays the Mediation Debugger.
	 */
	export function show_mediation_debugger(): void;

	/**
	 * Sets whether the user has provided consent for interest-based advertising.
	 * @param {boolean} has_user_consent
	 */
	export function set_has_user_consent(has_user_consent: boolean): void;

	/**
	 * Checks if the user has provided consent for interest-based advertising.
	 * @returns {boolean}
	 */
	export function has_user_consent(): boolean;

	/**
	 * Sets whether the user is considered to be in an age-restricted category.
	 * @param {boolean} is_age_restricted_user
	 */
	export function set_is_age_restricted_user(
		is_age_restricted_user: boolean,
	): void;

	/**
	 * Checks if the user is considered to be in an age-restricted category.
	 * @returns {boolean}
	 */
	export function is_age_restricted_user(): boolean;

	/**
	 * Sets whether the user has chosen to opt out of the sale of their personal information.
	 * @param {boolean} do_not_sell
	 */
	export function set_do_not_sell(do_not_sell: boolean): void;

	/**
	 * Checks if the user has chosen to opt out of the sale of their personal information.
	 * @returns {boolean}
	 */
	export function is_do_not_sell(): boolean;

	/**
	 * Enables or disables the MAX Terms and Privacy Policy Flow.
	 * @param {boolean} enabled
	 */
	export function set_terms_and_privacy_policy_flow_enabled(
		enabled: boolean,
	): void;

	/**
	 * Sets the privacy policy URL for MAX Terms and Privacy Policy Flow.
	 * @param {string} url_string
	 */
	export function set_privacy_policy_url(url_string: string): void;

	/**
	 * Sets terms of service URL for MAX Terms and Privacy Policy Flow.
	 * @param {string} url_string
	 */
	export function set_terms_of_service_url(url_string: string): void;

	/**
	 * Sets the user geography for debugging purposes in the consent flow.
	 * @param {string} user_geography_string gdpr other
	 */
	export function set_consent_flow_debug_user_geography(
		user_geography_string: string,
	): void;

	/**
	 * Shows the integrated consent management platform (CMP) flow for existing users.
	 */
	export function show_cmp_for_existing_user(): void;

	/**
	 * Checks if a supported consent management platform is integrated.
	 * @returns {boolean}
	 */
	export function has_supported_cmp(): boolean;

	/**
	 * Checks if the current device is a tablet.
	 * @returns {boolean}
	 */
	export function is_tablet(): boolean;

	/**
	 * Set internal user ID before initializing the SDK.
	 * @param {string} user_id
	 */
	export function set_user_id(user_id: string): void;

	/**
	 * Sets whether ads from certain mediated SDK networks should be muted.
	 * @param {boolean} muted
	 */
	export function set_muted(muted: boolean): void;

	/**
	 * Checks if ads are set to be muted.
	 * @returns {boolean}
	 */
	export function is_muted(): boolean;

	/**
	 * Enables or disables verbose logging.
	 * @param {boolean} enabled
	 */
	export function set_verbose_logging_enabled(enabled: boolean): void;

	/**
	 * Checks if verbose logging is enabled.
	 * @returns {boolean}
	 */
	export function is_verbose_logging_enabled(): boolean;

	/**
	 * Enables or disables the creative debugger.
	 * @param {boolean} enabled
	 */
	export function set_creative_debugger_enabled(enabled: boolean): void;

	/**
	 * Enables devices to receive test ads.
	 * @param {array} advertising_ids Array of device IDs. IDFA for iOS / GAID for Android
	 * @param {number} count Number of IDs in the array.
	 */
	export function set_test_device_advertising_ids(
		advertising_ids: string[],
		count: number,
	): void;

	/**
	 * Tracks a custom event.
	 * @param {string} event
	 * @param {string} parameters JSON string of parameters.
	 */
	export function track_event(event: string, parameters: string): void;

	/**
	 * Loads an interstitial ad for the given ad unit ID.
	 * @param {string} ad_unit_id
	 */
	export function load_interstitial(ad_unit_id: string): void;

	/**
	 * Checks if an interstitial ad is ready to be shown.
	 * @param {string} ad_unit_id
	 * @returns {boolean}
	 */
	export function is_interstitial_ready(ad_unit_id: string): boolean;

	/**
	 * Shows an interstitial ad for the given ad unit ID.
	 * @param {string} ad_unit_id
	 */
	export function show_interstitial(ad_unit_id: string): void;

	/**
	 * Shows an interstitial ad for the given ad unit ID and the placement name.
	 * @param {string} ad_unit_id
	 * @param {string} placement
	 */
	export function show_interstitial(
		ad_unit_id: string,
		placement: string,
	): void;

	/**
	 * Sets extra parameters for an interstitial ad.
	 * @param {string} ad_unit_id
	 * @param {string} key
	 * @param {string} value
	 */
	export function set_interstitial_extra_parameter(
		ad_unit_id: string,
		key: string,
		value: string,
	): void;

	/**
	 * Loads a rewarded ad for the given ad unit ID.
	 * @param {string} ad_unit_id
	 */
	export function load_rewarded_ad(ad_unit_id: string): void;

	/**
	 * Checks if a rewarded ad is ready to be shown.
	 * @param {string} ad_unit_id
	 * @returns {boolean}
	 */
	export function is_rewarded_ad_ready(ad_unit_id: string): boolean;

	/**
	 * Shows a rewarded ad for the given ad unit ID.
	 * @param {string} ad_unit_id
	 */
	export function show_rewarded_ad(ad_unit_id: string): void;

	/**
	 * Shows a rewarded ad for the given ad unit ID and the placement name.
	 * @param {string} ad_unit_id
	 * @param {string} placement
	 */
	export function show_rewarded_ad(ad_unit_id: string, placement: string): void;

	/**
	 * Sets extra parameters for a rewarded ad.
	 * @param {string} ad_unit_id
	 * @param {string} key
	 * @param {string} value
	 */
	export function set_rewarded_ad_extra_parameter(
		ad_unit_id: string,
		key: string,
		value: string,
	): void;

	/**
	 * Create and load a banner ad.
	 * @param {string} ad_unit_id
	 * @param {string} banner_position Possible options are "top_left", "top_center", "top_right", "centered", "bottom_left", "bottom_center", "bottom_right"
	 */
	export function create_banner(
		ad_unit_id: string,
		banner_position: string,
	): void;

	/**
	 * Sets the background color of a banner ad with the Ad Unit ID.
	 * @param {string} ad_unit_id
	 * @param {string} hex_color_code Supported formats are "#RRGGBB" and "#AARRGGBB".
	 */
	export function set_banner_background_color(
		ad_unit_id: string,
		hex_color_code: string,
	): void;

	/**
	 * Sets the placement name for a banner ad unit.
	 * @param {string} ad_unit_id
	 * @param {string} placement
	 */
	export function set_banner_placement(
		ad_unit_id: string,
		placement: string,
	): void;

	/**
	 * Sets extra parameters for a banner ad.
	 * @param {string} ad_unit_id
	 * @param {string} key
	 * @param {string} value
	 */
	export function set_banner_extra_parameter(
		ad_unit_id: string,
		key: string,
		value: string,
	): void;

	/**
	 * Updates the position of a banner ad.
	 * @param {string} ad_unit_id
	 * @param {string} banner_position Possible options are "top_left", "top_center", "top_right", "centered", "bottom_left", "bottom_center", "bottom_right"
	 */
	export function update_banner_position(
		ad_unit_id: string,
		banner_position: string,
	): void;

	/**
	 * Starts auto refresh for a banner ad.
	 * @param {string} ad_unit_id
	 */
	export function start_banner_auto_refresh(ad_unit_id: string): void;

	/**
	 * Stops auto refresh for a banner ad.
	 * @param {string} ad_unit_id
	 */
	export function stop_banner_auto_refresh(ad_unit_id: string): void;

	/**
	 * Displays a banner ad.
	 * @param {string} ad_unit_id
	 */
	export function show_banner(ad_unit_id: string): void;

	/**
	 * Hides a banner ad.
	 * @param {string} ad_unit_id
	 */
	export function hide_banner(ad_unit_id: string): void;

	/**
	 * Destroys a banner ad.
	 * @param {string} ad_unit_id
	 */
	export function destroy_banner(ad_unit_id: string): void;

	/**
	 * Creates an MRec ad with the specified ad unit ID and position.
	 * @param {string} ad_unit_id
	 * @param {string} mrec_position Possible options are "top_left", "top_center", "top_right", "centered", "bottom_left", "bottom_center", "bottom_right"
	 */
	export function create_mrec(ad_unit_id: string, mrec_position: string): void;

	/**
	 * Sets the placement name for a MRec ad unit.
	 * @param {string} ad_unit_id
	 * @param {string} placement
	 */
	export function set_mrec_placement(
		ad_unit_id: string,
		placement: string,
	): void;

	/**
	 * Sets extra parameters for an MRec ad.
	 * @param {string} ad_unit_id
	 * @param {string} key
	 * @param {string} value
	 */
	export function set_mrec_extra_parameter(
		ad_unit_id: string,
		key: string,
		value: string,
	): void;

	/**
	 * Updates the position of an MRec ad.
	 * @param {string} ad_unit_id
	 * @param {string} mrec_position Possible options are "top_left", "top_center", "top_right", "centered", "bottom_left", "bottom_center", "bottom_right"
	 */
	export function update_mrec_position(
		ad_unit_id: string,
		mrec_position: string,
	): void;

	/**
	 * Starts auto refresh for an MRec ad.
	 * @param {string} ad_unit_id
	 */
	export function start_mrec_auto_refresh(ad_unit_id: string): void;

	/**
	 * Stops auto refresh for an MRec ad.
	 * @param {string} ad_unit_id
	 */
	export function stop_mrec_auto_refresh(ad_unit_id: string): void;

	/**
	 * Displays an MRec ad.
	 * @param {string} ad_unit_id
	 */
	export function show_mrec(ad_unit_id: string): void;

	/**
	 * Hides an MRec ad.
	 * @param {string} ad_unit_id
	 */
	export function hide_mrec(ad_unit_id: string): void;

	/**
	 * Destroys an MRec ad.
	 * @param {string} ad_unit_id
	 */
	export function destroy_mrec(ad_unit_id: string): void;

	/**
	 * User's geography is unknown.
	 */
	export const CONSENT_FLOW_USER_GEOGRAPHY_UNKNOWN: number;
	/**
	 * The user is in GDPR region.
	 */
	export const CONSENT_FLOW_USER_GEOGRAPHY_GDPR: number;
	/**
	 * The user is in a non-GDPR region.
	 */
	export const CONSENT_FLOW_USER_GEOGRAPHY_OTHER: number;
	/**
	 * Device is on iOS before iOS14, AppTrackingTransparency.framework is not available.
	 */
	export const APP_TRACKING_TRANSPARENCY_STATUS_UNAVAILABLE: number;
	/**
	 * The user has not yet received an authorization request to authorize access to app-related data that can be used for tracking the user or the device.
	 */
	export const APP_TRACKING_TRANSPARENCY_STATUS_NOT_DETERMINED: number;
	/**
	 * Authorization to access app-related data that can be used for tracking the user or the device is restricted.
	 */
	export const APP_TRACKING_TRANSPARENCY_STATUS_RESTRICTED: number;
	/**
	 * The user denies authorization to access app-related data that can be used for tracking the user or the device.
	 */
	export const APP_TRACKING_TRANSPARENCY_STATUS_DENIED: number;
	/**
	 * The user authorizes access to app-related data that can be used for tracking the user or the device.
	 */
	export const APP_TRACKING_TRANSPARENCY_STATUS_AUTHORIZED: number;
}
