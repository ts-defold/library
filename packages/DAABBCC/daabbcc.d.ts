/** @noSelfInFile */

/**
 * Dynamic AABB Tree native extension with Branch and Bound Algorithm for Defold Engine
 * @version >= 3.0.0
 * @see {@link https://github.com/selimanac/DAABBCC|Github Source}
 */
declare namespace daabbcc {
	type DistanceResult =
		| {
				aabb_id: AabbId;
				distance: number;
		  }[]
		| undefined;
	type QueryResult = AabbId[] | undefined;

	type AabbGroupId = Readonly<{ __brand: 'aabb_group_id' }> & number;
	type AabbId = Readonly<{ __brand: 'aabb_id' }> & number;
	type AabbUpdateType = Readonly<{ __brand: 'aabb_update' }> & number;

	export const UPDATE_INCREMENTAL: AabbUpdateType;
	export const UPDATE_FULLREBUILD: AabbUpdateType;
	export const UPDATE_PARTIALREBUILD: AabbUpdateType;

	/**
	 * New empty group for AABBs. Every group is a seperate [Dynamic Tree](https://box2d.org/documentation/md_collision.html#autotoc_md46).
	 */
	export function new_group(rebuild_type?: AabbUpdateType): AabbGroupId;

	/**
	 * Partially or fully rebuild a group.
	 */
	export function rebuild(group_id: AabbGroupId, full_build: boolean): void;

	/**
	 * Partially or fully rebuild all groups.
	 */
	export function rebuild_all(full_build: boolean): void;

	/**
	 * Insert AABB into the group.
	 */
	export function insert_aabb(
		group_id: AabbGroupId,
		x: number,
		y: number,
		width: number,
		height: number,
		category_bit?: number,
	): AabbId;

	/**
	 * Insert Gameobject and the associated AABB into a group. Most suitable for constantly moving gameobjects. If your gameobject is static then use `daabbcc.insert_aabb()` instead.
	 */
	export function insert_gameobject(
		group_id: AabbGroupId,
		url: url,
		width: number,
		height: number,
		category_bit?: number,
	): AabbId;

	/**
	 * Updates the AABB position and size when you change its position or/and size.Does not effect Gameobject position, Gameobject AABB positions will be overwritten by internal update.
	 */
	export function update_aabb(
		group_id: AabbGroupId,
		aabb_id: AabbId,
		x: number,
		y: number,
		width: number,
		height: number,
	): void;

	/**
	 * Updates the AABB size related to the Gameobject.
	 */
	export function update_gameobject_size(
		group_id: AabbGroupId,
		aabb_id: AabbId,
		width: number,
		height: number,
	): void;

	/**
	 * Query the possible overlaps using AABB ID.
	 */
	export function query_id(
		group_id: AabbGroupId,
		aabb_id: AabbId,
		mask_bits?: number,
	): LuaMultiReturn<[QueryResult, number]>;

	/**
	 * Query the possible overlaps using raw AABB.
	 */
	export function query_aabb(
		group_id: AabbGroupId,
		x: number,
		y: number,
		width: number,
		height: number,
		mask_bits?: number,
	): LuaMultiReturn<[QueryResult, number]>;

	/**
	 * Query the possible overlaps using AABB ID. Returns a result table with IDs and distances, ordered from closest to farthest.
	 */
	export function query_id_sort(
		group_id: AabbGroupId,
		aabb_id: AabbId,
		mask_bits?: number,
	): LuaMultiReturn<[DistanceResult, number]>;

	/**
	 * Query possible overlaps using a raw AABB.
	 */
	export function query_aabb_sort(
		group_id: AabbGroupId,
		x: number,
		y: number,
		width: number,
		height: number,
		mask_bits?: number,
	): LuaMultiReturn<[DistanceResult, number]>;

	/**
	 * Perform ray casts against the group.
	 */
	export function raycast(
		group_id: AabbGroupId,
		start_x: number,
		start_y: number,
		end_x: number,
		end_y: number,
		mask_bits?: number,
	): LuaMultiReturn<[QueryResult, number]>;

	/**
	 * Perform ray casts against the group. Returns a result table with AABB IDs and distances, ordered from closest to farthest.
	 */
	export function raycast_sort(
		group_id: AabbGroupId,
		start_x: number,
		start_y: number,
		end_x: number,
		end_y: number,
		mask_bits?: number,
	): LuaMultiReturn<[DistanceResult, number]>;

	/**
	 * Removes the group and all associated AABBs and Gameobjects.
	 */
	export function remove_group(group_id: AabbGroupId): void;

	/**
	 * Removes the AABB and Gameobject from group.
	 */
	export function remove(group_id: AabbGroupId, aabb_id: AabbId): void;

	/**
	 * Pause or resume the internal game object position update iteration. This is enabled by default but will not iterate if no game objects are registered. Pausing the iteration can free up compute power (e.g., when the game is paused).
	 */
	export function run(state: boolean): void;

	/**
	 * Removes all AABBs, groups, and game objects, resetting to the initial state. It is recommended to reset the DAABBC when you're done with it (e.g., when your game or level is over).
	 */
	export function reset(): void;

	/**
	 * It is possible to set an independent update frequency for the game object position update iteration. The default value is taken from the [display.frequency](https://defold.com/manuals/project-settings/#update-frequency) setting in the game.project file. The update loop follows the same structure as in the [Defold source](https://github.com/defold/defold/blob/cdaa870389ca00062bfc03bcda8f4fb34e93124a/engine/engine/src/engine.cpp#L1860).  This can be very useful if you're running a headless build on a server.
	 */
	export function update_frequency(frequency: number): void;
}
