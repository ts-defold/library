/** @noSelfInFile */

/**
 * Ray Casting in tiled worlds using DDA algorithm.
 * @see {@link https://github.com/selimanac/defold-tile-raycast|Github Source}
 */
declare namespace tile_raycast {
	/** Initializes the tile raycast system. */
	export function setup(
    tile_width: number,
    tile_height: number,
    tilemap_width: number,
    tilemap_height: number,
    tiles: number[],
    target_tiles: number[]
  ): void;

	/** Performs a raycast on the tilemap. Returns only the first successful hit. */
  export function cast(
    ray_from_x: number,
    ray_from_y: number,
    ray_to_x: number,
    ray_to_y: number
  ): {
    hit: boolean;
    tile_x: number;
    tile_y: number;
    array_id: number;
    tile_id: number;
    intersection_x: number;
    intersection_y: number;
    side: 0 | 1 | 2 | 3; // tile_raycast.LEFT, RIGHT, TOP, or BOTTOM
  };

	/** Sets a tile value in the map array at the specified coordinates. */
  export function set_at(tile_x: number, tile_y: number, tile_id: number): void;

	/** Returns the tile ID from the map array at the specified coordinates. */
  export function get_at(tile_x: number, tile_y: number): number;

	/** Clears all tile and tilemap data. */
  export function reset(): void;

  export const LEFT: 0;
  export const RIGHT: 1;
  export const TOP: 2;
  export const BOTTOM: 3;
}
