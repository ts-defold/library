/// <library version="1.2.0" src="https://github.com/thinknathan/defold-prng/archive/refs/tags/v1.2.0.zip" />
/// <reference path="./prng-1.1.0.d.ts" />

/** @noSelfInFile */

/**
 * Defold psuedo-random number generator extension using the Mulberry32 method.
 */
declare namespace prng {
	/**
	 * Rolls twice and takes the higher result. More likely to return 1 than 0.
	 * @returns 0 or 1
	 * @since 1.2.0
	 */
	export function advantage(): 0 | 1;

	/**
	 * Rolls twice and takes the lower result. More likely to return 0 than 1.
	 * @returns 0 or 1
	 * @since 1.2.0
	 */
	export function disadvantage(): 0 | 1;
}
