/// <library version="1.1.0" src="https://github.com/thinknathan/def-setv/archive/refs/tags/v1.1.0.zip" />
/// <reference path="./setv.d.ts" />

declare namespace setv {
	/**
	 * Convert position to game object's coordinate space.
	 * @param vChangeInPlace - vector output
	 * @param go - game object instance
	 * @param worldPosition - world position as a vector3
	 */
	export function world_to_local_position(
		vChangeInPlace: vmath.vector3,
		go: GameObject,
		worldPosition: vmath.vector3,
	): void;

	/**
	 * Convert transformation matrix to game object's coordinate space.
	 * @param mChangeInPlace - matrix output
	 * @param go - game object instance
	 * @param worldTransform - world transform as a matrix4
	 */
	export function world_to_local_transform(
		mChangeInPlace: vmath.matrix4,
		go: GameObject,
		worldTransform: vmath.matrix4,
	): void;
}
