/// <library version="1.0.1" src="https://github.com/indiesoftby/defold-splitmix64/archive/refs/tags/1.0.1.zip" />
/** @noSelfInFile */

/**
 * SplitMix64 PRNG for Defold: get the same random numbers from the same seeds on all platforms supported by Defold.
 * @see {@link https://github.com/indiesoftby/defold-splitmix64|Github Source}
 */
declare namespace splitmix64 {
	/**
	 * When called without arguments, returns a uniform pseudo-random real number in the range [0,1). When called with an integer number m, splitmix64.random returns a uniform pseudo-random integer in the range [1, m]. When called with two integer numbers m and n, splitmix64.random returns a uniform pseudo-random integer in the range [m, n].
	 * @param {number} m
	 * @param {number} n
	 * @returns {number}
	 */
	export function random(m?: number, n?: number): number;

	/**
	 * Sets x as the "seed" for the pseudo-random generator: equal seeds produce equal sequences of numbers.
	 * @param {number} x
	 */
	export function randomseed(x: number): void;
}
