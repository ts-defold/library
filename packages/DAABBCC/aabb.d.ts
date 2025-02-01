/** @noSelfInFile */

/**
 * Dynamic AABB Tree native extension with Branch and Bound Algorithm for Defold Engine
 * @version <= 2.1.3
 * @see {@link https://github.com/selimanac/DAABBCC|Github Source}
 */
declare namespace aabb {
	type DistanceResult =
		| {
				aabb_id: AabbId;
				distance: number;
		  }[]
		| undefined;
	type QueryResult = AabbId[] | undefined;

	type AabbGroupId = Readonly<{ __brand: 'aabb_group_id' }> & number;
	type AabbId = Readonly<{ __brand: 'aabb_id' }> & number;

	export function new_group(): AabbGroupId;

	export function insert(
		group_id: AabbGroupId,
		x: number,
		y: number,
		width: number,
		height: number,
	): AabbId;

	export function insert_gameobject(
		group_id: AabbGroupId,
		url: url,
		width: number,
		height: number,
	): AabbId;

	export function update(
		group_id: AabbGroupId,
		aabb_id: AabbId,
		x: number,
		y: number,
		width: number,
		height: number,
	): void;

	export function update_gameobject(
		group_id: AabbGroupId,
		aabb_id: AabbId,
		width: number,
		height: number,
	): void;

	export function query_id(
		group_id: AabbGroupId,
		aabb_id: AabbId,
	): LuaMultiReturn<[QueryResult, number]>;

	export function query(
		group_id: AabbGroupId,
		x: number,
		y: number,
		width: number,
		height: number,
	): LuaMultiReturn<[QueryResult, number]>;

	export function query_id_sort(
		group_id: AabbGroupId,
		aabb_id: AabbId,
	): LuaMultiReturn<[DistanceResult, number]>;

	export function query_sort(
		group_id: AabbGroupId,
		x: number,
		y: number,
		width: number,
		height: number,
	): LuaMultiReturn<[DistanceResult, number]>;

	export function raycast(
		group_id: AabbGroupId,
		start_x: number,
		start_y: number,
		end_x: number,
		end_y: number,
	): LuaMultiReturn<[QueryResult, number]>;

	export function raycast_sort(
		group_id: AabbGroupId,
		start_x: number,
		start_y: number,
		end_x: number,
		end_y: number,
	): LuaMultiReturn<[DistanceResult, number]>;

	export function remove_group(group_id: AabbGroupId): void;
	export function remove(group_id: AabbGroupId, aabb_id: AabbId): void;
	export function remove_gameobject(
		group_id: AabbGroupId,
		aabb_id: AabbId,
	): void;
	export function run(state: boolean): void;
	export function clear(): void;
	/** @since 2.1.2 */
	export function update_frequency(frequency: number): void;
}
