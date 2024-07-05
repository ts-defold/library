/** @noSelfInFile */

/**
 * Adds support for device vibration service in Defold.
 * @see {@link https://github.com/adamwestman/extension-vibrate|Github Source}
 */
declare namespace vibrate {
	/**
	 * Invokes the device-specific vibration service.
	 */
	export function trigger(): void;
}
