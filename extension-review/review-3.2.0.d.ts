/// <library version="3.2.0" src="https://github.com/defold/extension-review/archive/refs/tags/3.2.0.zip" />
/** @noSelfInFile */

/**
 * Native iOS and Android ratings and reviews window for Defold
 * @see {@link https://github.com/defold/extension-review|Github Source}
 * @see {@link https://defold.com/extension-review/|Documentation}
 */
declare namespace review {
	/**
	 * Open native review/rating popup
	 */
	export function request_review(): void;

	/**
	 * Available only on iOS 10.3+. Android 5.0+ (API 21+) and the Google Play Store has to be installed.
	 */
	export function is_supported(): void;
}
