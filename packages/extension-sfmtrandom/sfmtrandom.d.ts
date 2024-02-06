/** @noSelfInFile */

/**
 * SFMT Random Extension for Defold
 * @url https://github.com/Lerg/extension-sfmtrandom
 * @noResolution
 */
declare namespace sfmtrandom {
	type lightuserdata = LuaUserdata & Readonly<{ __brand: 'sfmtrandom' }>;

	/**
	 * Initializes the internal state array with a UINT32 integer seed.
	 * @param {number} seed UINT32 seed number.
	 * @returns {lightuserdata} SFMT internal state.
	 */
	export function init_gen_rand(seed: number): lightuserdata;

	/**
	 * Initializes the internal state array with an array of UINT32 integers used as a seed.
	 * @param {table} array The array of a UINT32 integers used as a seed.
	 * @returns {lightuserdata} SFMT internal state.
	 */
	export function init_by_array(array: {}): lightuserdata;

	/**
	 * Returns the identification string. The string shows the word size, the Mersenne exponent and all the parameters of this generator.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {string} Identification string.
	 */
	export function get_idstring(sfmt: lightuserdata): string;

	/**
	 * Returns the minimum size of an array used for the fill_array32() function.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} Size.
	 */
	export function get_min_array_size32(sfmt: lightuserdata): number;

	/**
	 * Returns the minimum size of an array used for the fill_array64() function.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} Size.
	 */
	export function get_min_array_size64(sfmt: lightuserdata): number;

	/**
	 * Generates pseudorandom UINT32 integers in the specified array buffer.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @param {buffer} array A buffer created with a stream named "array" of type buffer.VALUE_TYPE_UINT32 where pseudorandom UINT32 integers are filled by this function.
	 */
	export function fill_array32(sfmt: lightuserdata, array: buffer): void;

	/**
	 * Generates pseudorandom UINT64 integers in the specified array buffer.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @param {buffer} array A buffer created with a stream named "array" of type buffer.VALUE_TYPE_UINT64 where pseudorandom UINT64 integers are filled by this function.
	 */
	export function fill_array64(sfmt: lightuserdata, array: buffer): void;

	/**
	 * Generates a UINT32 pseudorandom number.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} UINT32 random value.
	 */
	export function genrand_uint32(sfmt: lightuserdata): number;

	/**
	 * Generates a UINT64 pseudorandom number. The function genrand_uint64() should not be called after genrand_uint32() unless an new initialization is performed.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {string} UINT64 random value represented as an 8 character long string - memory representation of a UINT64 number.
	 */
	export function genrand_uint64(sfmt: lightuserdata): string;

	/**
	 * Generates a random number on [0,1]-real-interval.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} Random value.
	 */
	export function genrand_real1(sfmt: lightuserdata): number;

	/**
	 * Generates a random number on [0,1)-real-interval.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} Random value.
	 */
	export function genrand_real2(sfmt: lightuserdata): number;

	/**
	 * Generates a random number on (0,1)-real-interval.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} Random value.
	 */
	export function genrand_real3(sfmt: lightuserdata): number;

	/**
	 * Generates a random number on [0,1)-real-interval with 53-bit resolution using a 64-bit integer.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} Random value.
	 */
	export function genrand_res53(sfmt: lightuserdata): number;

	/**
	 * Generates a random number on [0,1)-real-interval with 53-bit resolution using two 32bit integers.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} Random value.
	 */
	export function genrand_res53_mix(sfmt: lightuserdata): number;

	/**
	 * Generates a random integer on [1,4] interval like from a dice.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} Random value.
	 */
	export function d4(sfmt: lightuserdata): number;

	/**
	 * Generates a random integer on [1,6] interval like from a dice.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} Random value.
	 */
	export function d6(sfmt: lightuserdata): number;

	/**
	 * Generates a random integer on [1,8] interval like from a dice.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} Random value.
	 */
	export function d8(sfmt: lightuserdata): number;

	/**
	 * Generates a random integer on [1,10] interval like from a dice.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} Random value.
	 */
	export function d10(sfmt: lightuserdata): number;

	/**
	 * Generates a random integer on [1,12] interval like from a dice.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} Random value.
	 */
	export function d12(sfmt: lightuserdata): number;

	/**
	 * Generates a random integer on [1,20] interval like from a dice.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} Random value.
	 */
	export function d20(sfmt: lightuserdata): number;

	/**
	 * Generates a random integer on [0,1] interval like from a toss of a coin.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} Random value.
	 */
	export function toss(sfmt: lightuserdata): number;

	/**
	 * Generates a random integer on [1,52] interval like picking a random card from a standard deck.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {number} Random value.
	 */
	export function card(sfmt: lightuserdata): number;

	/**
	 * Generates two random integers on [1,4] and [1,13] intervals like picking a random card suit and a random card from a suit.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @returns {LuaMultiReturn<[number, number]>} Random suit [1,4]. | Random card [1,13].
	 */
	export function card2(sfmt: lightuserdata): LuaMultiReturn<[number, number]>;

	/**
	 * Shuffles the provided array in place.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 * @param {table} array The array of values.
	 */
	export function shuffle(sfmt: lightuserdata, array: {}): void;

	/**
	 * Deletes the random generator and frees the alocated memory for it.
	 * @param {lightuserdata} sfmt SFMT internal state.
	 */
	function delete_(sfmt: lightuserdata): void;
	export { delete_ as delete };
}
