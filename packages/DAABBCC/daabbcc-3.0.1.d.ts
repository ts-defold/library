/** @noSelfInFile */

/** */
declare namespace daabbcc {
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
		get_manifold?: boolean,
	): LuaMultiReturn<[QueryResult, number]>;

	/**
	 * Query the possible overlaps using AABB ID.
	 */
	export function query_id(
		group_id: AabbGroupId,
		aabb_id: AabbId,
		mask_bits?: number,
		get_manifold?: boolean,
	): LuaMultiReturn<[QueryResult, number]>;

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
		get_manifold?: boolean,
	): LuaMultiReturn<[DistanceResult, number]>;

	/**
	 * Query the possible overlaps using AABB ID. Returns a result table with IDs and distances, ordered from closest to farthest.
	 */
	export function query_id_sort(
		group_id: AabbGroupId,
		aabb_id: AabbId,
		mask_bits?: number,
		get_manifold?: boolean,
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
		get_manifold?: boolean,
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
		get_manifold?: boolean,
	): LuaMultiReturn<[DistanceResult, number]>;

	/**
	 * Insert Gameobject and the associated AABB into a group. Most suitable for constantly moving gameobjects. If your gameobject is static then use `daabbcc.insert_aabb()` instead.
	 */
	export function insert_gameobject(
		group_id: AabbGroupId,
		url: url,
		width: number,
		height: number,
		category_bit?: number,
		get_world_position?: boolean,
	): AabbId;

	/**
	 * Removes the AABB and Gameobject from group.
	 */
	export function remove(
		group_id: AabbGroupId,
		aabb_id: AabbId,
		get_manifold?: boolean,
	): void;
}
