/** @noSelfInFile */

/**
 * PCG Random Number Generator Native Extension for the Defold Game Engine
 * @see {@link https://github.com/selimanac/defold-random|Github Source}
 */
declare namespace rnd {
	/**
	 * Seeds the random number generator. Random number generator is always initialized by using entropy seed. You don't need to call this method unless you want to control the seed.
	 * @param {number} init_state init_state is the starting state for the RNG, you can pass any 64-bit value.
	 * @param {number} init_seq init_seq selects the output sequence for the RNG, you can pass any 64-bit value, although only the low 63 bits are significant.
	 */
	export function seed(init_state: number, init_seq: number): void;

	/**
	 * Re-seed the random number generator by using entropy seed. Random number generator is always initialized by using entropy seed. You don’t need to call this method unless you want to re-seed.
	 */
	export function seed(): void;

	/**
	 * Returns a 32 bit unsigned integer.
	 * @returns {number} Returns a 32 bit unsigned integer.
	 */
	export function number(): number;

	/**
	 * Returns a 32 bit unsigned integer between min and max values. Only for positive numbers(unsigned integers).
	 * @param {number} min minimum integer.
	 * @param {number} max maximum integer.
	 * @returns {number} Returns a 32 bit unsigned integer between min and max values.
	 */
	export function range(min: number, max: number): number;

	/**
	 * Returns a floating point between min - max.
	 * @returns {number} Returns a floating point between min - max.
	 */
	export function double(): number;

	/**
	 * Returns a floating point between min - max. `Not fast as rnd.double()`
	 * @param {number} min minimum integer.
	 * @param {number} max maximum integer.
	 * @returns {number} Returns a 32 bit unsigned integer between min and max values.
	 */
	export function double_range(min: number, max: number): number;

	/**
	 * Toss a coin.
	 * @returns {number} Returns 0 or 1 (0 = 'H', 1 = 'T')
	 */
	export function toss(): number;

	/**
	 * Roll the dice.
	 * @returns {number} Returns between 1-6
	 */
	export function roll(): number;

	/**
	 * Testing entropy.
	 */
	export function check(): void;
}
