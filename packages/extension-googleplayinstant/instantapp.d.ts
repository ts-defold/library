/** @noSelfInFile */

/**
 * @see {@link https://github.com/defold/extension-googleplayinstant|Github Source}
 * @see {@link https://defold.com/extension-googleplayinstant/|Documentation}
 */
declare namespace instantapp {
	/**
	 * Shows a dialog that allows the user to install the current instant app.
	 */
	export function show_install_prompt(): void;

	/**
	 * Checks if application loaded as instant experience.
	 * @returns {boolean} Returns true if this application is an instant app.
	 */
	export function is_instant_app(): boolean;

	/**
	 * Gets the maximum size in bytes of the cookie data an instant app can store on the device.
	 * @returns {number} The maximum size in bytes of the cookie data an instant app can store on the device.
	 */
	export function get_cookie_max_size(): number;

	/**
	 * Load byte array from cookies that were saved in instant application.
	 * @returns {string} The byte array data of cookies saved in instant application.
	 */
	export function get_cookie(): string;

	/**
	 * Save byte array in cookies to be able get access to this data in installable application.
	 * @param {string} bytes The byte array data will be saved in cookies for access in installable application.
	 */
	export function set_cookie(bytes: string): void;
}
