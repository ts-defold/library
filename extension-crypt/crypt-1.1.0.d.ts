/// <library version="1.1.0" src="https://github.com/defold/extension-crypt/archive/refs/tags/1.1.0.zip" />
/** @noSelfInFile **/

/**
 * @see {@link https://github.com/defold/extension-crypt|Github Source}
 * @see {@link https://defold.com/extension-crypt/|Documentation}
 */
declare namespace crypt {
  export function hash_sha1(source: string): string;

  export function hash_sha256(source: string): string;

  export function hash_sha512(source: string): string;

  export function hash_md5(source: string): string;

  export function encode_base64(source: string): string;

  export function decode_base64(source: string): string;
}


/** @noSelfInFile */

declare namespace crypt {
	/**
	 * @param {string} source
	 * @param {string} key key should be <=16
	 * @returns {string}
	 * @since 1.1.0
	 */
	export function encrypt_xtea(source: string, key: string): string;

	/**
	 * @param {string} source
	 * @param {string} key key should be <=16
	 * @returns {string}
	 * @since 1.1.0
	 */
	export function decrypt_xtea(source: string, key: string): string;
}
