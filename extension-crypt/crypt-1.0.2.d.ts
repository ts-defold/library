/// <library version="1.0.2" src="https://github.com/defold/extension-crypt/archive/master.zip" />
/** @noSelfInFile **/

/**
 * @see {@link https://github.com/defold/extension-crypt|Github Source}
 */
declare namespace crypt {
  export function hash_sha1(source: string): string;

  export function hash_sha256(source: string): string;

  export function hash_sha512(source: string): string;

  export function hash_md5(source: string): string;

  export function encode_base64(source: string): string;

  export function decode_base64(source: string): string;
}
