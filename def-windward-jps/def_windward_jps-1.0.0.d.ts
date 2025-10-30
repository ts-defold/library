/// <library version="1.0.0" src="https://github.com/s-kania/def-windward-jps/archive/refs/tags/v1.0.0.zip" />
/** @noSelfInFile */

/**
 * Defold native extension for fast pathfinding using the Jump Point Search algorithm on uniform-cost grids.
 * @see {@link https://github.com/s-kania/def-windward-jps|Github Source}
 */
declare namespace def_windward_jps {
	class Grid {
		/** @returns [path, error] */
		find_path(start: number[], goal: number[], heuristic?: "octile" | "manhattan" | "euclidean"): LuaMultiReturn<[Array<number[]>, undefined]> | LuaMultiReturn<[undefined, string]>;
	}
	export function create_grid(width: number, height: number, walls: Array<number[]>): Grid;
}
