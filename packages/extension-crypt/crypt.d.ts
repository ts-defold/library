/** @noSelfInFile **/

/** @noResolution */
declare namespace crypt {
  export function hash_sha1(source: string): string;

  export function hash_sha256(source: string): string;

  export function hash_sha512(source: string): string;

  export function hash_md5(source: string): string;

  export function encode_base64(source: string): string;

  export function decode_base64(source: string): string;
}
