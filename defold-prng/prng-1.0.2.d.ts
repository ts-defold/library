/// <library version="1.0.2" src="https://github.com/thinknathan/defold-prng/archive/refs/tags/v1.0.2.zip" />
/** @noSelfInFile */

/**
 * Defold native extension seeded psuedo-random number generator using the Mulberry32 method.
 * @url https://github.com/thinknathan/defold-prng
 * @noResolution
 */
declare namespace prng {
	/**
	 * Requests a floating point number between 0 and 1.
	 * @returns {number}
	 */
	export function rand_float(): number;

	/**
	 * Requests an integer between 0 and "max".
	 * @param {number} max
	 * @returns {number}
	 */
	export function rand_int(max: number): number;

	/**
	 * Sets "s" as the seed for the pseudo-random number generator. The resulting sequences of numbers will be identical when the seeds are identical.
	 * @param {number} s
	 */
	export function set_seed(s: number): void;
}
