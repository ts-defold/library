/// <library version="0.0.1" src="https://github.com/Lerg/extension-cas/archive/master.zip" />
/** @noSelfInFile */

/**
 * @see {@link https://github.com/Lerg/extension-cas|Github Source}
 */
declare namespace cas {
	/**
	 * Initializes the extension. This function has to be called first before trying to show any ads.
	 * @param {table} params Contains parameters for the call.
	 */
	export function init(params: {
		id: string;
		disable_banner: boolean;
		disable_interstitial: boolean;
		disable_rewarded: boolean;
		test_device: string;
		test: boolean;
		debug: boolean;
		listener: (...args: any[]) => void;
	}): void;

	/**
	 * Prints to console SDK integration information.
	 */
	export function validate_integration(): void;

	/**
	 * Loads a specified ad type. No need to call this function, the ads is loaded automatically.
	 * @param {number} ad_type cas.BANNER, cas.INTERSTITIAL or cas.REWARDED.
	 */
	export function load(
		ad_type: typeof BANNER | typeof INTERSTITIAL | typeof REWARDED,
	): void;

	/**
	 * Returns true if the specified ad type has been loaded.
	 * @param {number} ad_type cas.BANNER, cas.INTERSTITIAL or cas.REWARDED.
	 * @returns {boolean} Is loaded.
	 */
	export function is_loaded(
		ad_type: typeof BANNER | typeof INTERSTITIAL | typeof REWARDED,
	): boolean;

	/**
	 * Displays a loaded ad.
	 * @param {number} ad_type cas.BANNER, cas.INTERSTITIAL or cas.REWARDED.
	 */
	export function show(
		ad_type: typeof BANNER | typeof INTERSTITIAL | typeof REWARDED,
	): void;

	/**
	 * Removes a loaded banner from the screen.
	 */
	export function hide_banner(): void;

	/**
	 * Changes settings.
	 * @param {number} param Parameter id.
	 * @param {number} value Value id.
	 */
	export function set(param: number, value: number | boolean | {}): void;

	export const BANNER: number;
	export const INTERSTITIAL: number;
	export const REWARDED: number;
	export const INIT: number;
	export const LOADED: number;
	export const FAILED_TO_LOAD: number;
	export const SHOWN: number;
	export const FAILED: number;
	export const CLICKED: number;
	export const COMPLETE: number;
	export const CLOSED: number;
	export const TAGGED_AUDIENCE: number;
	export const AUDIENCE_CHILDREN: number;
	export const AUDIENCE_NOT_CHILDREN: number;
	export const AUDIENCE_UNDEFINED: number;
	export const USER_CONSENT: number;
	export const CONSENT_ACCEPTED: number;
	export const CONSENT_DENIED: number;
	export const CCPA: number;
	export const CCPA_OPT_IN_SALE: number;
	export const CCPA_OPT_OUT_SALE: number;
	export const MUTED_AD_SOUNDS: number;
	export const TARGETING_AGE: number;
	export const TARGETING_GENDER: number;
	export const TARGETING_KEYWORDS: number;
	export const GENDER_UNKNOWN: number;
	export const GENDER_MALE: number;
	export const GENDER_FEMALE: number;
}
