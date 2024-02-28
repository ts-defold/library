/// <library version="1.1.0" src="https://github.com/defold/extension-crypt/archive/refs/tags/1.1.0.zip" />
/// <reference path="./crypt.d.ts" />

/** @noSelfInFile */

/**
 * @url https://github.com/defold/extension-crypt
 * @noResolution
 */
declare namespace crypt {
	/**
	 * @param {string} source
	 * @param {string} key key should be <=16
	 * @returns {string}
	 */
	export function encrypt_xtea(source: string, key: string): string;

	/**
	 * @param {string} source
	 * @param {string} key key should be <=16
	 * @returns {string}
	 */
	export function decrypt_xtea(source: string, key: string): string;
}
