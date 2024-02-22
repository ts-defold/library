/** @noSelfInFile */

/**
 * Tools to help you develop 3D games with the Defold game engine
 * @url https://github.com/indiesoftby/defold-scene3d
 * @noResolution
 */
declare namespace scene3d {
	/**
	 * @param {matrix4} proj_view_m4
	 */
	export function frustum_set(proj_view_m4: vmath.matrix4): void;

	/**
	 * @param {vector3} min_v3
	 * @param {vector3} max_v3
	 * @returns {boolean}
	 */
	export function frustum_is_box_visible(
		min_v3: vmath.vector3,
		max_v3: vmath.vector3,
	): boolean;

	/**
	 * @returns {number}
	 */
	export function frustum_mesh_acquire(): number;

	/**
	 * @param {number} id
	 */
	export function frustum_mesh_release(id: number): void;

	/**
	 * @param {number} id
	 * @param {number} max_dimension
	 * @param {boolean} use_world_pos
	 * @param {vector3} custom_position
	 * @returns {boolean, hash}
	 */
	export function frustum_mesh_vis_changed(
		id: number,
		max_dimension: number,
		use_world_pos: boolean,
		custom_position?: vmath.vector3,
	): LuaMultiReturn<[boolean, hash]>;

	/**
	 * @param {number} id
	 * @param {vector3} min_v3
	 * @param {vector3} max_v3
	 * @returns {boolean, hash}
	 */
	export function frustum_mesh_vis_changed_box(
		id: number,
		min_v3: vmath.vector3,
		max_v3: vmath.vector3,
	): LuaMultiReturn<[boolean, hash]>;

	/**
	 * @param x integer
	 * @param y integer
	 * @returns integer
	 */
	export function chunk_id_hash(x: number, y: number): number;

	/**
	 * @param {vector3} v to check
	 * @returns {boolean}
	 */
	export function is_vector3(v: any): v is vmath.vector3;

	/**
	 * @param {vector4} v to check
	 * @returns {boolean}
	 */
	export function is_vector4(v: any): v is vmath.vector4;

	/**
	 * @param {quaternion} q to check
	 * @returns {boolean}
	 */
	export function is_quat(q: any): q is vmath.quaternion;

	/**
	 * Gets the position of a game object instance.
	 * @param {string|hash|url} id
	 * @param {vector3} v
	 */
	export function get_position_to(
		id: hash | url | string,
		v: vmath.vector3,
	): void;

	/**
	 * Gets the game object instance world position.
	 * @param {string|hash|url} id
	 * @param {vector3} v
	 */
	export function get_world_position_to(
		id: hash | url | string,
		v: vmath.vector3,
	): void;

	/**
	 * Gets the rotation of the game object instance.
	 * @param {string|hash|url} id
	 * @param {quaternion} q
	 */
	export function get_rotation_to(
		id: hash | url | string,
		q: vmath.quaternion,
	): void;

	/**
	 * Gets the world rotation of the game object instance.
	 * @param {string|hash|url} id
	 * @param {quaternion} q
	 */
	export function get_world_rotation_to(
		id: hash | url | string,
		q: vmath.quaternion,
	): void;

	/**
	 * Gets the scale of a game object instance.
	 * @param {string|hash|url} id
	 * @param {vector3} v
	 */
	export function get_scale_to(id: hash | url | string, v: vmath.vector3): void;

	/**
	 * Gets the game object instance world scale.
	 * @param {string|hash|url} id
	 * @param {vector3} v
	 */
	export function get_world_scale_to(
		id: hash | url | string,
		v: vmath.vector3,
	): void;

	/**
	 * Creates a rotation with the specified forward and upwards directions.
	 * The output is undefined for parallel vectors.
	 * @param forward The forward direction to look toward.
	 * @param upwards The direction to treat as up (optional, "+Y" is default).
	 */
	export function quat_look_rotation(
		forward: vmath.vector3,
		upwards?: vmath.quaternion | vmath.vector3,
	): vmath.quaternion | undefined;

	/**
	 * Register the callback. It is called after all `update` functions have been called.
	 * @param {function} callback
	 * @param {number} priority
	 * @returns {number}
	 */
	export function prerender_register(
		callback: () => void,
		priority?: number,
	): number;

	/**
	 * Unregister the callback.
	 * @param {number} callback_id
	 * @returns {boolean}
	 */
	export function prerender_unregister(callback_id: number): boolean;

	/**
	 * @param {number} x
	 */
	export function simplex_seed(x: number): void;

	/**
	 * Return simplex noise value for specified 2D coordinate. Output range is [0, 1].
	 * @param {number} x
	 * @param {number} y
	 * @param {number} octaves Specifies the number of passes, defaults to 1 (simple noise).
	 * @param {number} persistence Specifies the amplitude of each successive octave relative to the one below it. Defaults to 0.5 (each higher octave's amplitude is halved). Note the amplitude of the first pass is always 1.0.
	 * @param {number} lacunarity Specifies the frequency of each successive octave relative to the one below it, similar to persistence. Defaults to 2.0.
	 * @returns {number}
	 */
	export function simplex_noise2(
		x: number,
		y: number,
		octaves?: number,
		persistence?: number,
		lacunarity?: number,
	): number;

	/**
	 * Return simplex noise value for specified 3D coordinate. Output range is [0, 1].
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @param {number} octaves Specifies the number of passes, defaults to 1 (simple noise).
	 * @param {number} persistence Specifies the amplitude of each successive octave relative to the one below it. Defaults to 0.5 (each higher octave's amplitude is halved). Note the amplitude of the first pass is always 1.0.
	 * @param {number} lacunarity Specifies the frequency of each successive octave relative to the one below it, similar to persistence. Defaults to 2.0.
	 * @returns {number}
	 */
	export function simplex_noise3(
		x: number,
		y: number,
		z: number,
		octaves?: number,
		persistence?: number,
		lacunarity?: number,
	): number;

	/**
	 * Return simplex noise value for specified 4D coordinate. Output range is [0, 1].
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @param {number} w
	 * @param {number} octaves Specifies the number of passes, defaults to 1 (simple noise).
	 * @param {number} persistence Specifies the amplitude of each successive octave relative to the one below it. Defaults to 0.5 (each higher octave's amplitude is halved). Note the amplitude of the first pass is always 1.0.
	 * @param {number} lacunarity Specifies the frequency of each successive octave relative to the one below it, similar to persistence. Defaults to 2.0.
	 * @returns {number}
	 */
	export function simplex_noise4(
		x: number,
		y: number,
		z: number,
		w: number,
		octaves?: number,
		persistence?: number,
		lacunarity?: number,
	): number;
}

/**
 * Helper math functions
 * @url https://github.com/indiesoftby/defold-scene3d
 * @example `import * as math3d from 'scene3d.helpers.math3d'`
 * @noResolution
 */
declare module 'scene3d.helpers.math3d' {
	/**
	 * Returns the Euler angle representation of a rotation around the X-axis, in degrees.
	 * @param q The quaternion representing the rotation.
	 * @returns A new angle.
	 */
	export function euler_x(q: vmath.quaternion): number;

	/**
	 * Returns the Euler angle representation of a rotation around the Y-axis, in degrees.
	 * @param q The quaternion representing the rotation.
	 * @returns A new angle.
	 */
	export function euler_y(q: vmath.quaternion): number;

	/**
	 * Returns the Euler angle representation of a rotation around the Z-axis, in degrees.
	 * @param q The quaternion representing the rotation.
	 * @returns A new angle.
	 */
	export function euler_z(q: vmath.quaternion): number;

	/**
	 * Returns the inverse of a quaternion representing a rotation.
	 * @param q The input quaternion.
	 * @returns A new quaternion representing the inverse rotation.
	 */
	export function quat_inv(q: vmath.quaternion): vmath.quaternion;

	/**
	 * Creates a rotation quaternion with the specified forward and upwards directions.
	 * @param forward The forward direction to look toward.
	 * @param upwards The direction to treat as up (optional, "+Y" is default).
	 * @returns A new quaternion representing the rotation.
	 */
	export function quat_look_rotation(
		forward: vmath.vector3,
		upwards?: vmath.vector3,
	): vmath.quaternion;

	/**
	 * Returns the sign of a number.
	 * @param x The input number.
	 * @returns The sign of the input number (-1, 0, or 1).
	 */
	export function sign(x: number): number;

	/**
	 * Clamps the given value between the specified minimum and maximum values.
	 * @param x The value to clamp.
	 * @param min The minimum allowed value.
	 * @param max The maximum allowed value.
	 * @returns The clamped value.
	 */
	export function clamp(x: number, min: number, max: number): number;

	/**
	 * Loops the value t, so that it is never larger than length and never smaller than 0.
	 * @param t The value to loop.
	 * @param length The range length.
	 * @returns The looped value.
	 */
	export function repeat_(t: number, length: number): number;

	/**
	 * Calculates the shortest difference between two given angles (in degrees).
	 * @param a The first angle.
	 * @param b The second angle.
	 * @returns The shortest difference between the angles.
	 */
	export function delta_angle(a: number, b: number): number;

	/**
	 * Clamps a value between 0 and 1.
	 * @param x The value to clamp.
	 * @returns The clamped value between 0 and 1.
	 */
	export function clamp01(x: number): number;

	/**
	 * Linearly interpolates between two values.
	 * @param t The interpolation value between the two values (clamped between 0 and 1).
	 * @param a The start value.
	 * @param b The end value.
	 * @param [dt] Delta-time for framerate-independent interpolation.
	 * @returns The interpolated value.
	 */
	export function lerp(t: number, a: number, b: number, dt?: number): number;

	/**
	 * Same as lerp but limits the increment of the value.
	 * @param t The interpolation value between the two values (clamped between 0 and 1).
	 * @param a The start value.
	 * @param b The end value.
	 * @param max_step The maximum increment of the value.
	 * @returns The interpolated value.
	 */
	export function limited_lerp(
		t: number,
		a: number,
		b: number,
		max_step: number,
	): number;

	/**
	 * Same as lerp_angle but makes sure the values interpolate correctly when they wrap around 360 degrees.
	 * @param t The interpolation value between the two angles (clamped between 0 and 1).
	 * @param a The start angle (in degrees).
	 * @param b The end angle (in degrees).
	 * @param [dt] Delta-time for framerate-independent interpolation.
	 * @returns The interpolated angle (in degrees).
	 */
	export function lerp_angle(
		t: number,
		a: number,
		b: number,
		dt?: number,
	): number;

	/**
	 * Calculates the lerp parameter between two values.
	 * @param t The value between start and end.
	 * @param a The start value.
	 * @param b The end value.
	 * @returns A percentage of the value between start and end.
	 */
	export function inverse_lerp(t: number, a: number, b: number): number;

	/**
	 * Moves the `a` value towards `b`.
	 * @param a The current value.
	 * @param b The target value.
	 * @param max_delta The maximum change that should be applied to the value.
	 * @returns The interpolated value.
	 */
	export function move_towards(a: number, b: number, max_delta: number): number;

	/**
	 * Pingpongs the value t, so that it is never larger than length and never smaller than 0.
	 * @param t The value to pingpong.
	 * @param length The range length.
	 * @returns The pingponged value.
	 */
	export function ping_pong(t: number, length: number): number;

	/**
	 * Interpolates between min and max with smoothing at the limits.
	 * @param x The value to interpolate.
	 * @param min The minimum value.
	 * @param max The maximum value.
	 * @returns The smoothed interpolated value.
	 */
	export function smooth_step(x: number, min: number, max: number): number;
	export function smooth_step(
		x: vmath.vector3,
		min: number,
		max: number,
	): vmath.vector3;

	/**
	 * Gradually changes a value towards a desired goal over time.
	 * @param a The current value.
	 * @param b The target value.
	 * @param cur_velocity The current velocity.
	 * @param smooth_time Approximately the time it will take to reach the target.
	 * @param max_speed Optionally clamp the maximum speed.
	 * @param dt Delta time.
	 * @returns The interpolated value and the updated velocity.
	 */
	export function smooth_damp(
		a: number,
		b: number,
		cur_velocity: number,
		smooth_time: number,
		max_speed: number,
		dt: number,
	): LuaMultiReturn<[number, number]>;

	/**
	 * Gradually changes an angle (in degrees) towards a desired goal angle over time.
	 * @param a The current angle (in degrees).
	 * @param b The target angle (in degrees).
	 * @param cur_velocity The current angular velocity.
	 * @param smooth_time Approximately the time it will take to reach the target.
	 * @param max_speed Optionally clamp the maximum angular speed.
	 * @param dt Delta time.
	 * @returns The interpolated angle and the updated angular velocity.
	 */
	export function smooth_damp_angle(
		a: number,
		b: number,
		cur_velocity: number,
		smooth_time: number,
		max_speed: number,
		dt: number,
	): LuaMultiReturn<[number, number]>;
}

/**
 * @url https://github.com/indiesoftby/defold-scene3d
 * @example `import * as gui_helper from 'scene3d.helpers.gui'`
 * @noResolution
 */
declare module 'scene3d.helpers.gui' {
	export function init_node(this: any, name: string, alpha?: number): void;
	export function get_alpha(node: node): number;
	export function set_alpha(node: node, alpha: number): void;
	export function anim_alpha(
		node: node,
		alpha: number,
		duration?: number,
		delay?: number,
		callback?: (this: any) => void,
	): void;
	export function set_scale(node: node, scale: vmath.vector3 | number): void;
	export function set_scale_x(node: node, x: number): void;
	export function set_scale_y(node: node, y: number): void;
	export function anim_scale(
		node: node,
		scale: vmath.vector3 | number,
		easing?: number,
		duration?: number,
		delay?: number,
	): void;
	export function get_x(node: node): number;
	export function set_x(node: node, v: number): void;
	export function get_y(node: node): number;
	export function set_y(node: node, v: number): void;
	export function get_z(node: node): number;
	export function set_z(node: node, v: number): void;
	export function get_text_size(
		node: node,
		text: string,
	): ReturnType<typeof resource.get_text_metrics>;
}

/**
 * @url https://github.com/indiesoftby/defold-scene3d
 * @example `import * as system_util from 'scene3d.helpers.system_util'`
 * @noResolution
 */
declare module 'scene3d.helpers.system_util' {
	/**
	 * @returns true if `major.minor.patch` >= the engine version
	 */
	export function engine_version(
		major: number,
		minor: number,
		patch: number,
	): boolean;

	/**
	 * Resizes game window to fit screen size. Use it to simplify your development process.
	 * `defos` is required:
	 * @link https://github.com/subsoap/defos
	 */
	export function resize_window(): void;

	/**
	 * Setups Lua error handler if the non-debug build of the game runs in a browser.
	 */
	export function setup_error_handling(): void;
}
