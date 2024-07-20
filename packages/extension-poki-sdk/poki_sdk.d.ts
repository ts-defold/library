/** @noSelfInFile */

/**
 * Poki SDK native extension for Defold game engine
 * @see {@link https://github.com/defold/extension-poki-sdk|Github Source}
 * @see {@link https://defold.com/extension-poki-sdk/|Documentation}
 */
declare namespace poki_sdk {
	/**
	 * Equivalent to the JS SDK's PokiSDK.gameplayStart()
	 */
	export function gameplay_start(): void;

	/**
	 * Equivalent to the JS SDK's PokiSDK.gameplayStop()
	 */
	export function gameplay_stop(): void;

	/**
	 * Equivalent to the JS SDK's PokiSDK.commercialBreak()
	 * @param {function} callback
	 */
	export function commercial_break(callback: () => void): void;

	/**
	 * Equivalent to the JS SDK's PokiSDK.rewardedBreak()
	 * @param {function} callback
	 */
	export function rewarded_break(callback: () => void): void;

	/**
	 * Equivalent to the JS SDK's PokiSDK.setDebug(value)
	 * @param {boolean} is_debug
	 */
	export function set_debug(is_debug: boolean): void;

	/**
	 * Equivalent to the JS SDK's PokiSDK.captureError(error_string)
	 * @param {string} error
	 */
	export function capture_error(error: string): void;

	/**
	 * Equivalent to the JS SDK's PokiSDK.shareableURL({}).then(url => {})
	 * @param {table} params
	 * @param {function} callback
	 */
	export function shareable_url(params: {}, callback: () => void): void;

	/**
	 * Equivalent to the JS SDK's PokiSDK.getURLParam('id')
	 * @param {string} key
	 * @returns {string}
	 */
	export function get_url_param(key: string): string;

	/**
	 * @deprecated since version 1.5.0
	 */
	export function is_ad_blocked(): boolean;
}
