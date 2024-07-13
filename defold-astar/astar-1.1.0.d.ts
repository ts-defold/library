/// <library version="1.1.0" src="https://github.com/selimanac/defold-astar/archive/refs/tags/v1.1.0.zip" />
/** @noSelfInFile **/

/**
 * A module with a set of math functions for Defold
 * @see {@link https://github.com/selimanac/defold-astar|Github Source}
 */
declare namespace astar {
	type DIRECTION = number & { readonly __brand: 'astar.DIRECTION' };
	export const DIRECTION_FOUR: DIRECTION;
	export const DIRECTION_EIGHT: DIRECTION;

	type SOLUTION = number & { readonly __brand: 'astar.SOLUTION' };
	export const SOLVED: SOLUTION;
	export const NO_SOLUTION: SOLUTION;
	export const START_END_SAME: SOLUTION;

	/**
	 * Setup the A* pathfinding algorithm.
	 * @param map_width Width of your map. This is generally width of your tilemap.
	 * @param map_height Height of your map. This is generally width of your tilemap.
	 * @param direction Movement direction. You have two options:
	 *  - astar.DIRECTION_FOUR: On a square grid that allows 4 directions of movement using Manhattan distance
	 *  - astar.DIRECTION_EIGHT: On a square grid that allows 8 directions of movement using Euclidean distance
	 * @param allocate How many states should be internally allocated at a time. This can be hard to get correct. The higher the value, the more memory Patfinder will use.
	 *  - If you have a small map (a few thousand states?) it may make sense to pass in the maximum value. This will cache everything, and MicroPather will only need one main memory allocation. For a chess board, allocate would be set to 8x8 (64)
	 *  - If your map is large, something like 1/4 the number of possible states is good.
	 *  - If your state space is huge, use a multiple (5-10x) of the normal path. "Occasionally" call `astar.reset_cache()` to free unused memory.
	 * @param typical_adjacent Used to determine cache size. The typical number of adjacent states to a given state. (On a chessboard, 8.) Higher values use a little more memory.
	 * @param cache Turn on path caching. Uses more memory (yet again) but at a huge speed advantage if you may call the pather with the same path or sub-path, which is common for pathing over maps in games.
	 */
	export function setup(
		map_width: number,
		map_height: number,
		direction: DIRECTION,
		allocate: number,
		typical_adjacent: number,
		cache?: boolean,
	): void;

	/**
	 * Set your map data.
	 * - Setting new map data reset the current cache.
	 * @param world
	 */
	export function set_map(world: number[]): void;

	/**
	 * Set costs for your walkable tiles on your world table. The table keys determines the walkable area.
	 * @param costs Table's sum must be equal to astar.DIRECTION_FOUR or astar.DIRECTION_EIGHT.
	 */
	export function set_costs(costs: Record<number, number[]>): void;

	/**
	 * Solves the path.
	 * @returns Returns multiple values
	 *  - `result`: astar.SOLVED if the path was found, astar.NO_SOLUTION if no path was found, astar.START_END_SAME if the start and end are the same.
	 *  - `size`: size of the path
	 *  - `total_cost`: total cost of the path
	 *  - `path`: array of path nodes with an x and y coordinate.
	 */
	export function solve(
		start_x: number,
		start_y: number,
		end_x: number,
		end_y: number,
	): LuaMultiReturn<
		[SOLUTION, number, number, { x: number; y: number; id: number }[]]
	>;

	/**
	 * Finds the neighbors according to given cost.
	 * @returns Returns multiple values
	 * - `result`: astar.SOLVED if the path was found, astar.NO_SOLUTION if no path was found, astar.START_END_SAME if the start and end are the same.
	 * - `near_size`: size of the found neighbors
	 * - `nears`: array of neighbors with an x and y coordinate.
	 */
	export function solve_near(
		start_x: number,
		start_y: number,
		max_cost: number,
	): LuaMultiReturn<[SOLUTION, number, { x: number; y: number; id: number }[]]>;

	/**
	 * Reset the cache.
	 * If your state space is huge, occasionally call astar.reset_cache() to free unused memory.
	 */
	export function reset_cache(): void;
}


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
