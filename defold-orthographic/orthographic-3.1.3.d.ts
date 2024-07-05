/// <library version="3.1.3" src="https://github.com/britzl/defold-orthographic/archive/refs/tags/3.1.3.zip" />
/** @noSelfInFile **/

/**
 * @see {@link https://github.com/britzl/defold-orthographic|Github Source}
 * @noResolution
 */
declare module 'orthographic.camera' {
	/**
	 * Follow a game object.
	 * @param camera_id undefined for the first camera
	 * @param target Game object to follow
	 * @param options Options
	 */
	export function follow(
		camera_id: hash | url | undefined,
		target: hash | url,
		options?: {
			/**
			 *  Lerp from current position to target position with lerp as t.
			 */
			lerp?: number;
			/**
			 *  Camera offset from target position.
			 */
			offset?: vmath.vector3;
			/**
			 *  True if following the target along the horizontal axis.
			 */
			horizontal?: boolean;
			/**
			 *  True if following the target along the vertical axis.
			 */
			vertical?: boolean;
			/**
			 * True if the camera should be immediately positioned on the target even when lerping.
			 */
			immediate?: boolean;
		},
	): void;

	/**
	 * Get the current zoom level of the camera.
	 * @param camera_id (hash | url), undefined for the first camera
	 */
	export function get_zoom(camera_id: hash | url | undefined): number;

	/**
	 * Change the zoom level of the camera.
	 * @param camera_id undefined for the first camera
	 * @param zoom  The new zoom level of the camera
	 */
	export function set_zoom(
		camera_id: hash | url | undefined,
		zoom: number,
	): void;

	/**
	 * Shake the camera.
	 * @param camera_id undefined for the first camera
	 * @param intensity Intensity of the shake, in percent of screen. Defaults to 0.05
	 * @param duration Duration of the shake, in seconds. Defaults to 0.5
	 * @param direction Direction of the shake. Possible values: `both`, `horizontal`, `vertical`. Defaults to `both`.
	 * @param cb Function to call when the shake has finished. Optional.
	 */
	export function shake(
		camera_id: hash | url | undefined,
		intensity?: number,
		duration?: number,
		direction?: { both?: boolean; horizontal?: boolean; vertical?: boolean },
		cb?: () => void,
	): void;

	/**
	 * Stop shaking the camera.
	 * @param camera_id (hash | url), undefined for the first camera
	 */
	export function stop_shaking(camera_id: hash | url | undefined): void;

	/**
	 * Translate screen coordinates to world coordinates, based on the view and projection of the camera.
	 * @param camera_id (hash | url), undefined for the first camera
	 * @param screen Screen coordinates to convert
	 */
	export function screen_to_world(
		camera_id: hash | url | undefined,
		screen: vmath.vector3,
	): vmath.vector3;

	/**
	 * Translate window coordinates to world coordinates, based on the view and projection of the camera.
	 * @param camera_id (hash | url), undefined for the first camera
	 * @param window Window coordinates to convert
	 */
	export function window_to_world(
		camera_id: hash | url | undefined,
		window: vmath.vector3,
	): vmath.vector3;

	/**
	 * Get the display size (ie from game.project).
	 */
	export function get_display_size(): LuaMultiReturn<[number, number]>;

	/**
	 * Get window size.
	 */
	export function get_window_size(): LuaMultiReturn<[number, number]>;

	/**
	 * Get list of camera ids.
	 */
	export function get_cameras(): Array<hash | url | undefined>;

	/**
	 * Get the current view of the camera.
	 * @param camera_id undefined for the first camera
	 */
	export function get_view(camera_id: hash | url | undefined): vmath.matrix4;

	/**
	 * Get the current viewport of the camera.
	 * @param camera_id undefined for the first camera
	 */
	export function get_viewport(
		camera_id: hash | url | undefined,
	): LuaMultiReturn<[number, number, number, number]>;

	/**
	 * Get the current projection of the camera.
	 * @param camera_id undefined for the first camera
	 */
	export function get_projection(
		camera_id: hash | url | undefined,
	): vmath.matrix4;

	/**
	 * Get the current projection id of the camera.
	 * @param camera_id undefined for the first camera
	 */
	export function get_projection_id(camera_id: hash | url | undefined): hash;

	/**
	 * Apply a recoil effect to the camera. The recoil will decay using linear interpolation.
	 * @param camera_id
	 * @param offset Offset to apply to the camera. Defaults to 0.05
	 * @param duration Duration of the recoil, in seconds. Defaults to 0.5
	 */
	export function recoil(
		camera_id: hash | url,
		offset: vmath.vector3,
		duration?: number,
	): void;

	/**
	 * Get the current offset of the camera (caused by shake or recoil)
	 * @param camera_id undefined for the first camera
	 */
	export function get_offset(camera_id: hash | url | undefined): vmath.vector3;

	/**
	 * Change the camera follow offset.
	 * @param camera_id undefined for the first camera
	 * @param offset Camera offset from target position.
	 */
	export function follow_offset(
		camera_id: hash | url | undefined,
		offset: vmath.vector3,
	): void;

	/**
	 * Stop following a game object.
	 * @param camera_id undefined for the first camera
	 */
	export function unfollow(camera_id: hash | url | undefined): void;

	/**
	 * If following a game object this will add a deadzone around the camera position where the camera position will not update. If the target moves to the edge of the deadzone the camera will start to follow until the target returns within the bounds of the deadzone.
	 * @param camera_id undefined for the first camera
	 * @param left Number of pixels to the left of the camera
	 * @param top Number of pixels above the camera
	 * @param right Number of pixels to the right of the camera
	 * @param bottom Number of pixels below the camera
	 */
	export function deadzone(
		camera_id: hash | url | undefined,
		left: number,
		top: number,
		right: number,
		bottom: number,
	): void;

	/**
	 * Limits the camera position to within the specified rectangle.
	 * @param camera_id undefined for the first camera
	 * @param left Left edge of the camera bounds
	 * @param top Top edge of camera bounds
	 * @param right  Right edge of camera bounds
	 * @param bottom Bottom edge of camera bounds
	 */
	export function bounds(
		camera_id: hash | url | undefined,
		left: number,
		top: number,
		right: number,
		bottom: number,
	): void;

	/**
	 * Translate screen boundaries (corners) to world coordinates, based on the view and projection of the camera.
	 * @param camera_id undefined for the first camera
	 */
	export function screen_to_world_bounds(
		camera_id: hash | url | undefined,
	): vmath.vector4;

	/**
	 * Translate world coordinates to screen coordinates, based on the view and projection of the camera, optionally taking into account an adjust mode. This is useful when manually culling game objects and you need to determine if a world coordinate will be visible or not. It can also be used to position gui nodes on top of game objects.
	 * @param camera_id undefined for the first camera
	 * @param world World coordinates to convert
	 * @param adjust_mode One of gui.ADJUST_FIT, gui.ADJUST_ZOOM and gui.ADJUST_STRETCH, or undefined to not take into account the adjust mode.
	 */
	export function world_to_screen(
		camera_id: hash | url | undefined,
		world: vmath.vector3,
		adjust_mode?:
			| typeof gui.ADJUST_FIT
			| typeof gui.ADJUST_STRETCH
			| typeof gui.ADJUST_ZOOM,
	): vmath.vector3;

	/**
	 * Translate screen coordinates to world coordinates using the specified view and projection.
	 * @param view
	 * @param projection
	 * @param screen Screen coordinates to convert
	 */
	export function unproject(
		view: vmath.matrix4,
		projection: vmath.matrix4,
		screen: vmath.vector3,
	): vmath.vector3;

	/**
	 * Translate world coordinates to screen coordinates using the specified view and projection.
	 * @param view
	 * @param projection
	 * @param world World coordinates to convert
	 */
	export function project(
		view: vmath.matrix4,
		projection: vmath.matrix4,
		world: vmath.vector3,
	): vmath.vector3;

	/**
	 * Add a custom projector that can be used by cameras in your project (see configuration above).
	 * @param projector_id  Id of the projector. Used as a value in the projection field of the camera script.
	 * @param projector_fn The function to call when a projection matrix is needed for the camera. The function will receive the id, near_z and far_z values of the camera.
	 */
	export function add_projector(
		projector_id: hash,
		projector_fn: (id: hash, near_z: number, far_z: number) => void,
	): void;

	/**
	 * Set a specific projector for a camera. This must be either one of the predefined projectors (see above) or a custom projector added using `camera.add_projector()`.
	 * @param camera_id undefined for the first camera
	 * @param projector_id  Id of the projector.
	 */
	export function use_projector(
		camera_id: hash | url | undefined,
		projector_id: hash,
	): void;

	/**
	 * Set window scaling factor (basically retina or no retina screen). There is no built-in way to detect if Defold is running on a retina or non retina screen. This information combined with the High DPI setting in game.project can be used to ensure that the zoom behaves the same way regardless of screen type and High DPI setting. You can use an extension such as DefOS to get the window scaling factor.
	 * @param scaling_factor Current window scaling factor
	 */
	export function set_window_scaling_factor(scaling_factor: number): void;

	export const PROJECTOR: {
		FIXED_ZOOM: hash;
		DEFAULT: hash;
		FIXED_AUTO: hash;
	};

	export const SHAKE_BOTH: hash;
	export const SHAKE_VERTICAL: hash;
	export const SHAKE_HORIZONTAL: hash;

	export const ORTHOGRAPHIC_RENDER_SCRIPT_USED: boolean;

	export const MSG_DISABLE: hash;
	export const MSG_UNFOLLOW: hash;
	export const MSG_FOLLOW: hash;
	export const MSG_FOLLOW_OFFSET: hash;
	export const MSG_RECOIL: hash;
	export const MSG_SHAKE: hash;
	export const MSG_SHAKE_COMPLETED: hash;
	export const MSG_STOP_SHAKING: hash;
	export const MSG_DEADZONE: hash;
	export const MSG_BOUNDS: hash;
	export const MSG_UPDATE_CAMERA: hash;
	export const MSG_ZOOM_TO: hash;
	export const MSG_USE_PROJECTION: hash;
	export const MSG_VIEWPORT: hash;
	export const MSG_ENABLE: hash;
}
