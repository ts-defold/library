/** @noSelfInFile */

type PlaybackMode =
	| typeof gui.PLAYBACK_LOOP_BACKWARD
	| typeof gui.PLAYBACK_LOOP_FORWARD
	| typeof gui.PLAYBACK_LOOP_PINGPONG
	| typeof gui.PLAYBACK_ONCE_BACKWARD
	| typeof gui.PLAYBACK_ONCE_FORWARD
	| typeof gui.PLAYBACK_ONCE_PINGPONG;

/**
 * @see {@link https://github.com/defold/extension-spine|Github Source}
 */
declare namespace spine {
	/**
	 * Plays the specified animation on a Spine model. A [ref:spine_animation_done] message is sent to the callback (or message handler). Any spine events will also be handled in the same way. [icon:attention] The callback is not called (or message sent) if the animation is cancelled with [ref:spine.cancel]. The callback is called (or message sent) only for animations that play with the following playback modes * `go.PLAYBACK_ONCE_FORWARD` * `go.PLAYBACK_ONCE_BACKWARD` * `go.PLAYBACK_ONCE_PINGPONG`
	 * @param {string|hash|url} url The Spine model for which to play an animation
	 * @param {hash} anim_id Id of the animation to play
	 * @param {number} playback Playback mode of the animation (from go.PLAYBACK_*)
	 * @param {table} options Playback options
	 * @param {function} callback_function function to call when the animation has completed or a Spine event occured
	 */
	export function play_anim(
		url: string | hash | url,
		anim_id: hash,
		playback: PlaybackMode,
		options: {
			blend_duration?: number;
			offset?: number;
			playback_rate?: number;
			track?: number;
		},
		callback_function: (
			this: any,
			message_id: hash,
			message: {
				animation_id: hash;
				track?: number;
				playback?: PlaybackMode;
				event_id?: hash;
				t?: number;
				integer?: number;
				float?: number;
				string?: hash;
				blend_weight?: number;
			},
			sender: url,
		) => void,
	): void;

	/**
	 * Cancels all running animations on a specified spine model component
	 * @param {string|hash|url} url The Spine model for which to cancel the animation
	 * @param {table} options Cancel options
	 */
	export function cancel(
		url: string | hash | url,
		options: {
			track?: number;
		},
	): void;

	/**
	 * Returns the id of the game object that corresponds to a specified skeleton bone.
	 * @param {string|hash|url} url The Spine model to query
	 * @param {hash} bone_id Id of the corresponding bone
	 * @returns {hash} Id of the game object
	 */
	export function get_go(url: string | hash | url, bone_id: hash): hash;

	/**
	 * Sets the spine skin on a spine model.
	 * @param {string|hash|url} url The Spine model to query
	 * @param {string|hash} skin Id of the corresponding skin
	 */
	export function set_skin(url: string | hash | url, skin: string | hash): void;

	/**
	 * Set the attachment of a lot on a spine model.
	 * @param {string|hash|url} url The Spine model to query
	 * @param {string|hash} slot Id of the slot
	 * @param {string|hash} attachment Id of the attachment
	 */
	export function set_attachment(
		url: string | hash | url,
		slot: string | hash,
		attachment: string | hash,
	): void;

	/**
	 * Resets a shader constant for a spine model component. (Previously set with `go.set()`)
	 * @param {string|hash|url} url The Spine model to query
	 * @param {string|hash} constant name of the constant
	 */
	export function reset_constant(
		url: string | hash | url,
		constant: string | hash,
	): void;

	/**
	 * reset the IK constraint target position to default of a spinemodel.
	 * @param {string|hash|url} url The Spine model
	 * @param {string|hash} ik_constraint_id id of the corresponding IK constraint
	 */
	export function reset_ik_target(
		url: string | hash | url,
		ik_constraint_id: string | hash,
	): void;

	/**
	 * set the target position of an IK constraint object.
	 * @param {string|hash|url} url The Spine model
	 * @param {string|hash} ik_constraint_id id of the corresponding IK constraint
	 * @param {vector3} position target position
	 */
	export function set_ik_target_position(
		url: string | hash | url,
		ik_constraint_id: string | hash,
		position: vmath.vector3,
	): void;

	/**
	 * set the IK constraint object target position to follow position.
	 * @param {string|hash|url} url The Spine model to query
	 * @param {string|hash} ik_constraint_id id of the corresponding IK constraint
	 * @param {string|hash|url} target_url target game object
	 */
	export function set_ik_target(
		url: string | hash | url,
		ik_constraint_id: string | hash,
		target_url: string | hash | url,
	): void;
}
