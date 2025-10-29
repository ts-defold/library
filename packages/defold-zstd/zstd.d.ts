/** @noSelfInFile */

/**
 * Zstandard compression API for the Defold engine. 
 * @see {@link https://github.com/indiesoftby/defold-zstd|Github Source}
 */
declare namespace zstd {
	export function version(): string;
	
	/**
	 * @param data The data to compress.
	 * @param [level] Optional compression level (default is 3, maximum is 22)
	 */
	export function compress(
		data: string,
		level?: number,
	): string;
	
	export function decompress(
		data: string,
	): string;
}
