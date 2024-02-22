/// <library version="1.0.1" src="https://github.com/selimanac/defold-astar/archive/refs/tags/v1.0.1.zip" />
/** @noSelfInFile **/

declare namespace astar {
  
  type DIRECTION = number & { __brand: 'astar.DIRECTION' };
  export const DIRECTION_FOUR: DIRECTION;
  export const DIRECTION_EIGHT: DIRECTION;

  type SOLUTION = number & { __brand: 'astar.SOLUTION' };
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
  export function setup(map_width: number, map_height: number, direction: DIRECTION, allocate: number, typical_adjacent: number, cache: boolean): void;

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
  export function solve(start_x: number, start_y: number, end_x: number, end_y: number): LuaMultiReturn<[SOLUTION, number, number, { x: number, y: number }[]]>;

  /**
   * Finds the neighbors according to given cost.
   * @returns Returns multiple values
   * - `result`: astar.SOLVED if the path was found, astar.NO_SOLUTION if no path was found, astar.START_END_SAME if the start and end are the same.
   * - `near_size`: size of the found neighbors
   * - `nears`: array of neighbors with an x and y coordinate.
   */
  export function solve_near(start_x: number, start_y: number, max_cost: number): LuaMultiReturn<[SOLUTION, number, { x: number, y: number }[]]>;

  /**
   * Reset the cache.
   * If your state space is huge, occasionally call astar.reset_cache() to free unused memory.
   */
  export function reset_cache(): void;
}
