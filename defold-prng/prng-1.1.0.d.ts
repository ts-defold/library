/// <library version="1.1.0" src="https://github.com/thinknathan/defold-prng/archive/refs/tags/v1.1.0.zip" />
/** @noSelfInFile */

/**
 * Defold psuedo-random number generator extension using the Mulberry32 method.
 * @see {@link https://github.com/thinknathan/defold-prng|Github Source}
 */
declare namespace prng {
	/**
	 * Sets `s` as the seed for the pseudo-random number generator. The resulting sequences of numbers will be identical when the seeds are identical.
	 * @param s Must be an integer.
	 */
	export function set_seed(s: number): void;

	/**
	 * Requests an integer between 0 and `max`.
	 * @param max
	 */
	export function rand_int(max: number): number;

	/**
	 * Requests a floating point number between 0 and 1.
	 */
	export function rand_float(): number;
}


/** @noSelfInFile */

/**
 * Defold psuedo-random number generator extension using the Mulberry32 method.
 */
declare namespace prng {
	/**
	 * Flips a coin.
	 * @returns 0 or 1
	 * @since 1.1.0
	 */
	export function coin(): 0 | 1;

	/**
	 * Get a card suit.
	 * @returns 0, 1, 2 or 3
	 * @since 1.1.0
	 */
	export function suit(): 0 | 1 | 2 | 3;

	/**
	 * Roll one or more dice.
	 * @returns result of dice roll
	 * @since 1.1.0
	 */
	export function dice(
		num_dice: number,
		num_sides: number,
		modifier?: number,
	): number;
}
