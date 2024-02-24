/// <library version="2.14.4" src="https://github.com/defold/extension-spine/archive/refs/tags/2.14.4.zip" />
/** @noSelfInFile */

type PlaybackMode =
	| typeof gui.PLAYBACK_LOOP_BACKWARD
	| typeof gui.PLAYBACK_LOOP_FORWARD
	| typeof gui.PLAYBACK_LOOP_PINGPONG
	| typeof gui.PLAYBACK_ONCE_BACKWARD
	| typeof gui.PLAYBACK_ONCE_FORWARD
	| typeof gui.PLAYBACK_ONCE_PINGPONG;

/**
 * @url https://github.com/defold/extension-spine
 * @noResolution
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

/** @noSelfInFile */

declare namespace gui {
	type PlaybackMode =
		| typeof gui.PLAYBACK_LOOP_BACKWARD
		| typeof gui.PLAYBACK_LOOP_FORWARD
		| typeof gui.PLAYBACK_LOOP_PINGPONG
		| typeof gui.PLAYBACK_ONCE_BACKWARD
		| typeof gui.PLAYBACK_ONCE_FORWARD
		| typeof gui.PLAYBACK_ONCE_PINGPONG;

	/**
	 * Dynamically create a new spine node.
	 * @param {vector3|vector4} pos node position
	 * @param {string|hash} spine_scene spine scene id
	 * @returns {node} new spine node
	 */
	export function new_spine_node(
		pos: vmath.vector3 | vmath.vector4,
		spine_scene: string | hash,
	): node;

	/**
	 * Starts a spine animation.
	 * @param {node} node spine node that should play the animation
	 * @param {string|hash} animation_id id of the animation to play
	 * @param {constant} playback playback mode - `gui.PLAYBACK_ONCE_FORWARD` - `gui.PLAYBACK_ONCE_BACKWARD` - `gui.PLAYBACK_ONCE_PINGPONG` - `gui.PLAYBACK_LOOP_FORWARD` - `gui.PLAYBACK_LOOP_BACKWARD` - `gui.PLAYBACK_LOOP_PINGPONG`
	 * @param {table} play_properties optional table with properties - `blend_duration` [number] The duration of a linear blend between the current and new animation - `offset` [number] The normalized initial value of the animation cursor when the animation starts playing - `playback_rate` [number] The rate with which the animation will be played. Must be positive
	 * @param {function} complete_function function to call when the animation has completed
	 */
	export function play_spine_anim(
		node: node,
		animation_id: string | hash,
		playback: PlaybackMode,
		play_properties:
			| {
					blend_duration?: number;
					offset?: number;
					playback_rate?: number;
			  }
			| undefined,
		complete_function: (this: any, node: node) => void,
	): void;

	/**
	 * cancel a spine animation
	 * @param {node} node spine node that should cancel its animation
	 */
	export function cancel_spine(node: node): void;

	/**
	 * The returned node can be used for parenting and transform queries. This function has complexity O(n), where n is the number of bones in the spine model skeleton.
	 * @param {node} node spine node to query for bone node
	 * @param {string|hash} bone_id id of the corresponding bone
	 * @returns {node} node corresponding to the spine bone
	 */
	export function get_spine_bone(node: node, bone_id: string | hash): node;

	/**
	 * Set the spine scene on a spine node. The spine scene must be mapped to the gui scene in the gui editor.
	 * @param {node} node node to set spine scene for
	 * @param {string|hash} spine_scene spine scene id
	 */
	export function set_spine_scene(node: node, spine_scene: string | hash): void;

	/**
	 * Returns the spine scene id of the supplied node. This is currently only useful for spine nodes. The returned spine scene must be mapped to the gui scene in the gui editor.
	 * @param {node} node node to get texture from
	 * @returns {hash} spine scene id
	 */
	export function get_spine_scene(node: node): hash;

	/**
	 * Sets the spine skin on a spine node.
	 * @param {node} node node to set the spine skin on
	 * @param {string|hash} spine_skin spine skin id
	 * @example Change skin of a Spine node

	```lua
	function init(self)
		gui.set_spine_skin(gui.get_node("spine_node"), "monster")
	end
	```
 */
	export function set_spine_skin(node: node, spine_skin: string | hash): void;

	/**
	 * Gets the spine skin of a spine node
	 * @param {node} node node to get spine skin from
	 * @returns {hash} spine skin id, 0 if no explicit skin is set
	 */
	export function get_spine_skin(node: node): hash;

	/**
	 * Gets the playing animation on a spine node
	 * @param {node} node node to get spine skin from
	 * @returns {hash} spine animation id, 0 if no animation is playing
	 */
	export function get_spine_animation(node: node): hash;

	/**
	 * This is only useful for spine nodes. The cursor is normalized.
	 * @param {node} node spine node to set the cursor for
	 * @param {number} cursor cursor value
	 */
	export function set_spine_cursor(node: node, cursor: number): void;

	/**
	 * This is only useful for spine nodes. Gets the normalized cursor of the animation on a spine node.
	 * @param {node} node spine node to get the cursor for (node)
	 * @returns {number} cursor value
	 */
	export function get_spine_cursor(node: node): number;

	/**
	 * This is only useful for spine nodes. Sets the playback rate of the animation on a spine node. Must be positive.
	 * @param {node} node spine node to set the cursor for
	 * @param {number} playback_rate playback rate
	 */
	export function set_spine_playback_rate(
		node: node,
		playback_rate: number,
	): void;

	/**
	 * This is only useful for spine nodes. Gets the playback rate of the animation on a spine node.
	 * @param {node} node spine node to set the cursor for
	 * @returns {number} playback rate
	 */
	export function get_spine_playback_rate(node: node): number;

	/**
	 * This is only useful for spine nodes. Sets an attachment to a slot on a spine node.
	 * @param {node} node spine node to set the slot for
	 * @param {string|hash} slot slot name
	 * @param {string|hash} attachment attachment name. May be nil.
	 */
	export function set_spine_attachment(
		node: node,
		slot: string | hash,
		attachment: string | hash,
	): void;
}
