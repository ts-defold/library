/** @noSelfInFile */

/**
 * @see {@link https://indiesoftby.github.io/defold-simplex-noise/|Documentation}
 * @see {@link https://github.com/indiesoftby/defold-simplex-noise|Github Source}
 */
declare namespace simplex {
	/**
   * Sets the seed for the noise generator.
   * @param seed The integer seed value.
   */
  export function seed(seed: number): void;

	/**
   * Computes 2D Simplex noise, optionally with fractal parameters.
   * @param x The x-coordinate.
   * @param y The y-coordinate.
   * @param octaves Number of noise layers (must be > 0). Defaults to 1.
   * @param persistence Amplitude decrease per octave. Defaults to 0.5.
   * @param lacunarity Frequency increase per octave. Defaults to 2.0.
   * @returns The calculated noise value. Output range is [0, 1].
   */
  export function noise2(x: number, y: number, octaves?: number, persistence?: number, lacunarity?: number): number;

	/**
   * Computes 3D Simplex noise, optionally with fractal parameters.
   * @param x The x-coordinate.
   * @param y The y-coordinate.
   * @param z The z-coordinate.
   * @param octaves Number of noise layers (must be > 0). Defaults to 1.
   * @param persistence Amplitude decrease per octave. Defaults to 0.5.
   * @param lacunarity Frequency increase per octave. Defaults to 2.0.
   * @returns The calculated noise value. Output range is [0, 1].
   */
  export function noise3(x: number, y: number, z: number, octaves?: number, persistence?: number, lacunarity?: number): number;

	/**
   * Computes 4D Simplex noise, optionally with fractal parameters.
   * @param x The x-coordinate.
   * @param y The y-coordinate.
   * @param z The z-coordinate.
   * @param w The w-coordinate.
   * @param octaves Number of noise layers (must be > 0). Defaults to 1.
   * @param persistence Amplitude decrease per octave. Defaults to 0.5.
   * @param lacunarity Frequency increase per octave. Defaults to 2.0.
   * @returns The calculated noise value. Output range is [0, 1].
   */
  export function noise4(x: number, y: number, z: number, w: number, octaves?: number, persistence?: number, lacunarity?: number): number;
}
