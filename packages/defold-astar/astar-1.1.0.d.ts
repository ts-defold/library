/// <library version="1.1.0" src="https://github.com/selimanac/defold-astar/archive/refs/tags/v1.1.0.zip" />
/// <reference path="./astar.d.ts" />

/** @noSelfInFile **/

declare namespace astar {
	/**
	 * Get the value from the map array by coordinates.
	 * @param x - Tile X
	 * @param y - Tile Y
	 * @returns The value at the specified coordinates.
	 * @since 1.0.2
	 */
	export function get_at(x: number, y: number): number;

	/**
	 * Set the value in the map array by coordinates.
	 * @param x - Tile X
	 * @param y - Tile Y
	 * @param value - Value to set at the specified coordinates.
	 * @since 1.0.2
	 */
	export function set_at(x: number, y: number, value: number): void;

	/** 
	 * Undocumented function.
	 * @since 1.1.0
	 */
	export function clear_path(): void;

	type GRID_TYPE = number & { readonly __brand: 'astar.GRID_TYPE' };
	/** classic grid. */
	export const GRID_CLASSIC: GRID_TYPE;
	/** odd-r hexagonal grid. */
	export const HEX_ODDR: GRID_TYPE;
	/** even-r hexagonal grid. */
	export const HEX_EVENR: GRID_TYPE;
	/** odd-q hexagonal grid. */
	export const HEX_ODDQ: GRID_TYPE;
	/** even-q hexagonal grid. */
	export const HEX_EVENQ: GRID_TYPE;

	/**
	 * You can set different type of map coordinates. Default is astar.GRID_CLASSIC.
	 * @param type - Type of the map coordinates.
	 * @since 1.1.0
	 */
	export function set_map_type(type: GRID_TYPE): void;

	/**
	 * Toggle start index 0 or 1 for tables and tile positions.
	 * If set to false, astar.solve, astar.solve_near, astar.get_at, astar.set_at methods expect positions start with 1 and returns table indexes from 1.
	 * Default is false = 1 based
	 * @param toggle - true/false
	 * @since 1.1.0
	 */
	export function use_zero(toggle: boolean): void;

	/**
	 * Set entities data for A* algorithm.
	 * Entities are usually non-passible items like enemies or chests.
	 * @param entities - Your entities data.
	 * @since 1.1.0
	 */
	export function set_entities(entities: number[]): void;

	/**
	 * Toggle the usage of entities before calling solve operations.
	 * @param toggle - Toggle true or false. Default is false.
	 * @since 1.1.0
	 */
	export function use_entities(toogle: boolean): void;

	/**
	 * Print the map state for debug purposes.
	 * @since 1.1.0
	 */
	export function print_map(): void;

	/**
	 * Every time you call this function, it flips the map vertically. This does not flip the coordinates
	 * @since 1.1.0
	 */
	export function map_vflip(): void;

	/**
	 * Every time you call this function, it flips the map horizontally. This does not flip the coordinates
	 * @since 1.1.0
	 */
	export function map_hflip(): void;

	/**
	 * Reset the A* algorithm completely.
	 * This method removes everything related to the A* library and frees memory.
	 * @since 1.1.0
	 */
	export function reset(): void;

	/**
	 * Initial setup. You have to setup the astar before calling any other methods.
	 * @param map_width - Width of your map. This is generally width of your tilemap.
	 * @param map_height - Height of your map. This is generally width of your tilemap.
	 * @param direction - Movement direction (astar.DIRECTION_FOUR or astar.DIRECTION_EIGHT)
	 * @param allocate - How many states should be internally allocated at a time. This can be hard to get correct. The higher the value, the more memory Patfinder will use. If you have a small map (a few thousand states?) it may make sense to pass in the maximum value. This will cache everything, and MicroPather will only need one main memory allocation. For a chess board, allocate would be set to 8x8 (64) If your map is large, something like 1/4 the number of possible states is good. If your state space is huge, use a multiple (5-10x) of the normal path. "Occasionally" call astar.reset_cache() to free unused memory.
	 * @param typical_adjacent - Used to determine cache size. The typical number of adjacent states to a given state. (On a chessboard, 8.) Higher values use a little more memory.
	 * @param cache - Turn on path caching. Uses more memory (yet again) but at a huge speed advantage if you may call the pather with the same path or sub-path, which is common for pathing over maps in games. Default is true
	 * @param use_zero - Toggle start index 0 or 1 for tables and tile positions. Also you can set it by call astar.use_zero(). Default is false
	 * @param map_vflip - Flips the map vertically. This doesn't flip the coordinates. Also you can set it by call astar.map_vflip(). Default is false
	 * @example ```lua
		local map_width = 5
		local map_height = 4
		local direction = astar.DIRECTION_EIGHT
		local allocate = map_width * map_height
		local typical_adjacent = 8
		local cache = true     -- Optional. Default is true
		local use_zero = false -- ptional. Default is false = 1 based
		local flip_map = false -- Optional. Default is false

		astar.setup(map_width, map_height, direction, allocate, typical_adjacent, cache, use_zero, flip_map)
		```
	 */
	export function setup(
		map_width: number,
		map_height: number,
		direction: DIRECTION,
		allocate: number,
		typical_adjacent: number,
		cache?: boolean,
		use_zero?: boolean,
		map_vlfip?: boolean,
	): void;
}
