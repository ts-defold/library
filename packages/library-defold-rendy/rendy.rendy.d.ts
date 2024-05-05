/** @noSelfInFile **/

/** 
 * A versatile camera suite and render pipeline
 * @url https://github.com/klaytonkowalski/library-defold-rendy
 * @noResolution
 * @example import * as rendy from 'rendy.rendy'
 */
declare module 'rendy.rendy' {
	type CameraId = hash | string;

	/**
	 * Creates a camera. This function is called automatically by the rendy.go game object.
	 * @param camera_id - The identifier for the camera.
	 */
	function create_camera(camera_id: CameraId): void;

	/**
	 * Destroys a camera. This function is called automatically by the rendy.go game object.
	 * @param camera_id - The identifier for the camera to be destroyed.
	 */
	function destroy_camera(camera_id: CameraId): void;

	/**
	 * Sets a camera property. This function replaces the standard go.set().
	 * @param camera_id - The identifier for the camera.
	 * @param property - The property to be set.
	 * @param value - The value to set the property to.
	 */
	function set(camera_id: CameraId, property: hash | string, value: any): void;

	/**
	 * Animates a camera property. This function replaces the standard go.animate().
	 * @param camera_id - The identifier for the camera.
	 * @param property - The property to be animated.
	 * @param playback - The playback mode of the animation.
	 * @param to - The target value of the animation.
	 * @param easing - The easing function for the animation.
	 * @param duration - The duration of the animation.
	 * @param delay - Optional delay before starting the animation.
	 * @param complete_function - Optional function to be called when the animation is complete.
	 */
	function animate(
		camera_id: CameraId,
		property: hash | string,
		playback:
			| typeof go.PLAYBACK_LOOP_BACKWARD
			| typeof go.PLAYBACK_LOOP_FORWARD
			| typeof go.PLAYBACK_LOOP_PINGPONG
			| typeof go.PLAYBACK_ONCE_BACKWARD
			| typeof go.PLAYBACK_ONCE_FORWARD
			| typeof go.PLAYBACK_ONCE_PINGPONG,
		to: vmath.quaternion | vmath.vector3 | vmath.vector4 | number,
		easing:
			| vmath.vector3
			| typeof go.EASING_INBACK
			| typeof go.EASING_INBOUNCE
			| typeof go.EASING_INCIRC
			| typeof go.EASING_INCUBIC
			| typeof go.EASING_INELASTIC
			| typeof go.EASING_INEXPO
			| typeof go.EASING_INOUTBACK
			| typeof go.EASING_INOUTBOUNCE
			| typeof go.EASING_INOUTCIRC
			| typeof go.EASING_INOUTCUBIC
			| typeof go.EASING_INOUTELASTIC
			| typeof go.EASING_INOUTEXPO
			| typeof go.EASING_INOUTQUAD
			| typeof go.EASING_INOUTQUART
			| typeof go.EASING_INOUTQUINT
			| typeof go.EASING_INOUTSINE
			| typeof go.EASING_INQUAD
			| typeof go.EASING_INQUART
			| typeof go.EASING_INQUINT
			| typeof go.EASING_INSINE
			| typeof go.EASING_LINEAR
			| typeof go.EASING_OUTBACK
			| typeof go.EASING_OUTBOUNCE
			| typeof go.EASING_OUTCIRC
			| typeof go.EASING_OUTCUBIC
			| typeof go.EASING_OUTELASTIC
			| typeof go.EASING_OUTEXPO
			| typeof go.EASING_OUTINBACK
			| typeof go.EASING_OUTINBOUNCE
			| typeof go.EASING_OUTINCIRC
			| typeof go.EASING_OUTINCUBIC
			| typeof go.EASING_OUTINELASTIC
			| typeof go.EASING_OUTINEXPO
			| typeof go.EASING_OUTINQUAD
			| typeof go.EASING_OUTINQUART
			| typeof go.EASING_OUTINQUINT
			| typeof go.EASING_OUTINSINE
			| typeof go.EASING_OUTQUAD
			| typeof go.EASING_OUTQUART
			| typeof go.EASING_OUTQUINT
			| typeof go.EASING_OUTSINE,
		duration: number,
		delay?: number,
		complete_function?: (this: any, url: url, property: hash) => void,
	): void;

	/**
	 * Cancels a camera property animation. This function replaces the standard go.cancel_animations().
	 * @param camera_id - The identifier for the camera.
	 * @param property - The property of the animation to be cancelled.
	 */
	function cancel_animations(
		camera_id: CameraId,
		property: hash | string,
	): void;

	/**
	 * Gets a camera property. This function is equivalent to the standard go.get().
	 * @param camera_id - The identifier for the camera.
	 * @param property - The property to be retrieved.
	 * @returns The value of the specified property.
	 */
	function get(camera_id: CameraId, property: hash | string): unknown;

	/**
	 * Gets the initial window size specified in the game.project file.
	 * @returns The initial window size.
	 */
	function get_display_size(): vmath.vector3;

	/**
	 * Gets the current window size.
	 * @returns The current window size.
	 */
	function get_window_size(): vmath.vector3;

	/**
	 * Gets camera ids whose viewports intersect a screen position.
	 * @param screen_x - The x-coordinate of the screen position.
	 * @param screen_y - The y-coordinate of the screen position.
	 * @returns An array of camera ids.
	 */
	function get_stack(screen_x: number, screen_y: number): CameraId[];

	/**
	 * Starts a camera shake animation. If the camera is already shaking, then the animation is cancelled and restarted.
	 * The radius is increased or decreased over time if the scaler argument is ~= 1.
	 * @param camera_id - The identifier for the camera.
	 * @param radius - The initial radius of the camera shake.
	 * @param intensity - The intensity of the camera shake.
	 * @param duration - The duration of the camera shake animation.
	 * @param scaler - Optional scaler argument for adjusting the radius over time.
	 */
	function shake(
		camera_id: CameraId,
		radius: number,
		intensity: number,
		duration: number,
		scaler?: number,
	): void;

	/**
	 * Cancels an ongoing camera shake animation.
	 * @param camera_id - The identifier for the camera.
	 */
	function cancel_shake(camera_id: CameraId): void;

	/**
	 * Converts a screen position to a world position. The screen position's z component maps to the camera frustum's z component.
	 * @param camera_id - The identifier for the camera.
	 * @param screen_position - The screen position to be converted.
	 * @returns The corresponding world position.
	 */
	function screen_to_world(
		camera_id: CameraId,
		screen_position: vmath.vector3,
	): vmath.vector3;

	/**
	 * Converts a world position to a screen position. The world position's z component maps to the camera frustum's z component.
	 * @param camera_id - The identifier for the camera.
	 * @param world_position - The world position to be converted.
	 * @returns The corresponding screen position.
	 */
	function world_to_screen(
		camera_id: CameraId,
		world_position: vmath.vector3,
	): vmath.vector3;
}
