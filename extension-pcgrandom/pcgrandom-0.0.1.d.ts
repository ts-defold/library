/// <library version="0.0.1" src="https://github.com/Lerg/extension-pcgrandom/archive/master.zip" />
/** @noSelfInFile */

/**
 * PCG Random Extension for Defold
 * @url https://github.com/Lerg/extension-pcgrandom
 * @noResolution
 */
declare namespace pcgrandom {
	type lightuserdata = LuaUserdata & Readonly<{ __brand: 'pcgrandom' }>;

	export const PCG32: number;
	export const PCG32_ONESEQ: number;
	export const PCG32_UNIQUE: number;
	export const PCG32_FAST: number;
	export const PCG64: number;
	export const PCG64_ONESEQ: number;
	export const PCG64_UNIQUE: number;
	export const PCG64_FAST: number;
	export const PCG8_ONCE_INSECURE: number;
	export const PCG16_ONCE_INSECURE: number;
	export const PCG32_ONCE_INSECURE: number;
	export const PCG64_ONCE_INSECURE: number;
	export const PCG8_ONESEQ_ONCE_INSECURE: number;
	export const PCG16_ONESEQ_ONCE_INSECURE: number;
	export const PCG32_ONESEQ_ONCE_INSECURE: number;
	export const PCG64_ONESEQ_ONCE_INSECURE: number;
	export const PCG32_K2: number;
	export const PCG32_K2_FAST: number;
	export const PCG32_K64: number;
	export const PCG32_K64_ONESEQ: number;
	export const PCG32_K64_FAST: number;
	export const PCG32_C64: number;
	export const PCG32_C64_ONESEQ: number;
	export const PCG32_C64_FAST: number;
	export const PCG32_K1024: number;
	export const PCG32_K1024_FAST: number;
	export const PCG32_C1024: number;
	export const PCG32_C1024_FAST: number;
	export const PCG32_K16384: number;
	export const PCG32_K16384_FAST: number;
	export const PCG64_K32: number;
	export const PCG64_K32_ONESEQ: number;
	export const PCG64_K32_FAST: number;
	export const PCG64_C32: number;
	export const PCG64_C32_ONESEQ: number;
	export const PCG64_C32_FAST: number;
	export const PCG64_K1024: number;
	export const PCG64_K1024_FAST: number;
	export const PCG64_C1024: number;
	export const PCG64_C1024_FAST: number;

	/**
	 * Creates a new specified random number generator with a given seed and an optional stream for generators that support it.
	 * @param {number} pcg_type PCG type.
	 * @param {number} seed Seed number.
	 * @param {number} [stream] Stream number.
	 * @returns {lightuserdata} RNG instance.
	 */
	export function new_rng(
		pcg_type: number,
		seed: number,
		stream?: number,
	): lightuserdata;

	/**
	 * Creates a new specified extended random number generator with a given array for the extended data, seed and an optional stream for generators that support it.
	 * Supported generators: `pcgrandom.PCG32_K2`, `pcgrandom.PCG32_K64`, `pcgrandom.PCG32_C64`, `pcgrandom.PCG32_K1024`, `pcgrandom.PCG32_C1024`, `pcgrandom.PCG32_K16384`.
	 * @param {number} pcg_type PCG type.
	 * @param {table} array Array with UINT32 numbers for the extended data, the size of the array must match the generator type.
	 * @param {number} seed Seed number.
	 * @param {number} [stream] Stream number.
	 * @returns {lightuserdata} RNG instance.
	 */
	export function new_rng_array(
		pcg_type: number,
		array: {},
		seed: number,
		stream?: number,
	): lightuserdata;

	/**
	 * Generates a pseudorandom integer number.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {number} Random value.
	 */
	export function next(rng: lightuserdata): number;

	/**
	 * Generates a pseudorandom integer number on [0,upper_bound) interval.
	 * @param {lightuserdata} rng RNG instance.
	 * @param {number} upper_bound Upper bound.
	 * @returns {number} Random value.
	 */
	export function bound(rng: lightuserdata, upper_bound: number): number;

	/**
	 * Generates a pseudorandom integer number on [lower_bound,upper_bound) interval.
	 * @param {lightuserdata} rng RNG instance.
	 * @param {number} lower_bound Lower bound.
	 * @param {number} upper_bound Upper bound.
	 * @returns {number} Random value.
	 */
	export function range(
		rng: lightuserdata,
		lower_bound: number,
		upper_bound: number,
	): number;

	/**
	 * Advances the generator forward delta steps, but does so in logarithmic time. (Not available for non-equidistributed extended generators.)
	 * @param {lightuserdata} rng RNG instance.
	 * @param {number} delta Delta.
	 */
	export function advance(rng: lightuserdata, delta: number): void;

	/**
	 * Moves the generator backwards delta steps, but does so in logarithmic time. (Not available for non-equidistributed extended generators.)
	 * @param {lightuserdata} rng RNG instance.
	 * @param {number} delta Delta.
	 */
	export function backstep(rng: lightuserdata, delta: number): void;

	/**
	 * Returns the greatest possible random value from the generator.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {number} Max.
	 */
	export function max(rng: lightuserdata): number;

	/**
	 * Returns the period of the generator as a power of two. For PCG32, it returns 64, indicating a period of 2^64.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {number} Period.
	 */
	export function period_pow2(rng: lightuserdata): number;

	/**
	 * Returns the number of streams as a power of two. For PCG32, it returns 63, indicating 2^63 streams.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {number} Streams.
	 */
	export function streams_pow2(rng: lightuserdata): number;

	/**
	 * Tells you when the generator wraps around to the beginning (which we define as the zero state).
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {boolean} Wrapped.
	 */
	export function wrapped(rng: lightuserdata): boolean;

	/**
	 * Generates a UINT64 pseudorandom number when used with a 64-bit generator.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {string} UINT64 random value represented as an 8 character long string - memory representation of a UINT64 number.
	 */
	export function next_uint64(rng: lightuserdata): string;

	/**
	 * Generates a random number on [0,1]-real-interval.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {number} Random value.
	 */
	export function next_real1(rng: lightuserdata): number;

	/**
	 * Generates a random number on [0,1)-real-interval.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {number} Random value.
	 */
	export function next_real2(rng: lightuserdata): number;

	/**
	 * Generates a random number on [0,1)-real-interval with 53-bit resolution using a 64-bit integer when used with a 64-bit generator.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {number} Random value.
	 */
	export function next_res53(rng: lightuserdata): number;

	/**
	 * Generates a random integer on [1,4] interval like from a dice.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {number} Random value.
	 */
	export function d4(rng: lightuserdata): number;

	/**
	 * Generates a random integer on [1,6] interval like from a dice.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {number} Random value.
	 */
	export function d6(rng: lightuserdata): number;

	/**
	 * Generates a random integer on [1,8] interval like from a dice.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {number} Random value.
	 */
	export function d8(rng: lightuserdata): number;

	/**
	 * Generates a random integer on [1,10] interval like from a dice.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {number} Random value.
	 */
	export function d10(rng: lightuserdata): number;

	/**
	 * Generates a random integer on [1,12] interval like from a dice.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {number} Random value.
	 */
	export function d12(rng: lightuserdata): number;

	/**
	 * Generates a random integer on [1,20] interval like from a dice.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {number} Random value.
	 */
	export function d20(rng: lightuserdata): number;

	/**
	 * Generates a random integer on [0,1] interval like from a toss of a coin.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {number} Random value.
	 */
	export function toss(rng: lightuserdata): number;

	/**
	 * Generates a random integer on [1,52] interval like picking a random card from a standard deck.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {number} Random value.
	 */
	export function card(rng: lightuserdata): number;

	/**
	 * Generates two random integers on [1,4] and [1,13] intervals like picking a random card suit and a random card from a suit.
	 * @param {lightuserdata} rng RNG instance.
	 * @returns {LuaMultiReturn<[number, number]>} Random suit [1,4]. | Random card [1,13].
	 */
	export function card2(rng: lightuserdata): LuaMultiReturn<[number, number]>;

	/**
	 * Shuffles the provided array in place.
	 * @param {lightuserdata} rng RNG instance.
	 * @param {table} array The array of values.
	 */
	export function shuffle(rng: lightuserdata, array: {}): void;

	/**
	 * Deletes the random generator and frees the alocated memory for it.
	 * @param {lightuserdata} rng RNG instance.
	 */
	function delete_(rng: lightuserdata): void;
	export { delete_ as delete };
}
