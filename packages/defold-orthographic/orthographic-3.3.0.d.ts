/// <library version="3.3.0" src="https://github.com/britzl/defold-orthographic/archive/refs/tags/3.3.0.zip" />
/// <reference path="orthographic.camera.d.ts" />

/** @noResolution */
declare module 'orthographic.camera' {
	/**
	 * Translate world coordinates to window coordinates, based on the view and projection of the camera.
	 * @param camera_id nil for the first camera
	 * @param world World coordinates to convert
	 * @since 3.3.0
	 */
	export function world_to_window(
		camera_id: hash | url | undefined,
		world: vmath.vector3,
	): vmath.vector3;
}
