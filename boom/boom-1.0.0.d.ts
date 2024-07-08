/// <library version="1.0.0" src="https://github.com/britzl/boom/archive/refs/tags/1.0.0.zip" />
/** @noSelfInFile **/

/** Callback that receives a game object as its argument. */
declare type BoomObjectCallback = (
	target: BoomBlankGameObject & Partial<BoomComponent>,
) => void;

/** Callback that receives a function that cancels an event listener as its argument. */
declare type BoomEventCallback = (cancel: BoomCancelEvent) => void;

/** Function that cancels an event listener. */
declare type BoomCancelEvent = () => void;

/** Tag representing a component, or any `string` value as a component-less tag. */
declare type BoomTag = string;

/** Keyboard keys. */
declare type BoomKeyboardKey =
	| 'key_space'
	| 'key_exclamationmark'
	| 'key_doublequote'
	| 'key_hash'
	| 'key_dollarsign'
	| 'key_ampersand'
	| 'key_singlequote'
	| 'key_lparen'
	| 'key_rparen'
	| 'key_asterisk'
	| 'key_plus'
	| 'key_comma'
	| 'key_minus'
	| 'key_period'
	| 'key_slash'
	| 'key_0'
	| 'key_1'
	| 'key_2'
	| 'key_3'
	| 'key_4'
	| 'key_5'
	| 'key_6'
	| 'key_7'
	| 'key_8'
	| 'key_9'
	| 'key_colon'
	| 'key_semicolon'
	| 'key_lessthan'
	| 'key_equals'
	| 'key_greaterthan'
	| 'key_questionmark'
	| 'key_at'
	| 'key_a'
	| 'key_b'
	| 'key_c'
	| 'key_d'
	| 'key_e'
	| 'key_f'
	| 'key_g'
	| 'key_h'
	| 'key_i'
	| 'key_j'
	| 'key_k'
	| 'key_l'
	| 'key_m'
	| 'key_n'
	| 'key_o'
	| 'key_p'
	| 'key_q'
	| 'key_r'
	| 'key_s'
	| 'key_t'
	| 'key_u'
	| 'key_v'
	| 'key_w'
	| 'key_x'
	| 'key_y'
	| 'key_z'
	| 'key_lbracket'
	| 'key_rbracket'
	| 'key_backslash'
	| 'key_caret'
	| 'key_underscore'
	| 'key_grave'
	| 'key_lbrace'
	| 'key_rbrace'
	| 'key_pipe'
	| 'key_esc'
	| 'key_f1'
	| 'key_f2'
	| 'key_f3'
	| 'key_f4'
	| 'key_f5'
	| 'key_f6'
	| 'key_f7'
	| 'key_f8'
	| 'key_f9'
	| 'key_f10'
	| 'key_f11'
	| 'key_f12'
	| 'key_up'
	| 'key_down'
	| 'key_left'
	| 'key_right'
	| 'key_lshift'
	| 'key_rshift'
	| 'key_lctrl'
	| 'key_rctrl'
	| 'key_lalt'
	| 'key_ralt'
	| 'key_tab'
	| 'key_enter'
	| 'key_backspace'
	| 'key_insert'
	| 'key_del'
	| 'key_pageup'
	| 'key_pagedown'
	| 'key_home'
	| 'key_end'
	| 'key_numpad_0'
	| 'key_numpad_1'
	| 'key_numpad_2'
	| 'key_numpad_3'
	| 'key_numpad_4'
	| 'key_numpad_5'
	| 'key_numpad_6'
	| 'key_numpad_7'
	| 'key_numpad_8'
	| 'key_numpad_9'
	| 'key_numpad_divide'
	| 'key_numpad_multiply'
	| 'key_numpad_subtract'
	| 'key_numpad_add'
	| 'key_numpad_decimal'
	| 'key_numpad_equal'
	| 'key_numpad_enter'
	| 'key_numpad_numlock'
	| 'key_capslock'
	| 'key_scrolllock'
	| 'key_pause'
	| 'key_lsuper'
	| 'key_rsuper'
	| 'key_menu'
	| 'key_back'
	| '*';

/** Defold Easing types. */
declare type BoomEasing =
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
	| typeof go.EASING_OUTSINE;

//
// Start
//

/**
 * Boom is a game framework built on top of Defold.
 * @see {@link https://github.com/britzl/boom|Github Source}
 * @noResolution
 */
declare module 'boom.boom' {
	/**
	 * Start a boom game. Call this from your own game script
	 * @param game Game loop function
	 */
	export function boom(game: () => void): void;
}

//
// Game object
//

/** A game object that may be composed of components. */
declare type BoomGameObject<T extends Array<BoomComponent | BoomTag>> =
	UnionToIntersection<
		BoomBlankGameObject & T extends Array<infer U>
			? U extends BoomComponent
				? BoomBlankGameObject &
						ObjectIntersection<T> & { tags: LuaMap<string, true> }
				: BoomBlankGameObject & { readonly tags: LuaMap<string, true> }
			: never
	>;

// Extract the properties of an object type
type ObjectProperties<T> = T extends BoomComponent ? Omit<T, 'tag'> : never;

// Extract the union of object types from the input array
type ObjectUnion<T extends Array<BoomComponent | BoomTag>> = Extract<
	T[number],
	BoomComponent
>;

type ObjectIntersection<T extends Array<BoomComponent | BoomTag>> =
	ObjectProperties<ObjectUnion<T>>;

/**
 * Create an intersection type from the union of object types.
 * This type is copied from kaboom.
 * @see {@link https://github.com/replit/kaboom|kaboom Source}
 * @license MIT
 * @copyright 2021 Replit
 */
// Begin Copied Section
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
	k: infer I,
) => void
	? I
	: never;
// End Copied Section

/**
 * A game object.
 * @noSelf
 */
interface BoomBlankGameObject {
	/**
	 * Add a game object as a child of this game object
	 * by composing it with components.
	 * @param comps The game object components
	 * @returns The game object
	 */
	add<T extends (BoomComponent | BoomTag)[]>(comps: T): BoomGameObject<T>;

	/**
	 * Destroy this game object.
	 */
	destroy(): void;

	/**
	 * Check if there is a certain tag on this game object.
	 * @param tag The tag to check
	 * @returns Returns true if the tag exists on the game object
	 */
	is(tag: BoomTag): boolean;

	/**
	 * Add a component to this game object, or a component-less tag.
	 * @param comp The component or tag to use
	 */
	use(comp: BoomTag | BoomComponent): void;

	/**
	 * Remove a component from this game object.
	 * @param tag The component tag to remove
	 */
	unuse(tag: BoomTag): void;

	/**
	 * Get state for a specific component on this game object.
	 * @param tag The component to get state for
	 * @returns The component state
	 */
	c(tag: BoomTag): BoomBlankGameObject &
		Partial<BoomComponent> & {
			readonly tag: BoomTag;
			readonly __url?: url;
		};

	readonly dirty: boolean;
	readonly children: LuaMap;
	readonly comps: LuaMap<string | number, LuaMap<string, unknown>>;
	readonly properties: LuaMap<string, unknown>;
	readonly id: hash;
	readonly ids: LuaMap<hash, hash>;
	readonly tags: LuaMap<string | hash, boolean>;
	readonly pre_update?: LuaSet<Function>;
	readonly update?: LuaSet<Function>;
	readonly post_update?: LuaSet<Function>;
}

/**
 * Add a game object with a set of components.
 * @param comps The components for the game object
 * @returns The created game object
 */
declare function add<T extends (BoomComponent | BoomTag)[]>(
	comps: T,
): BoomGameObject<T>;

/**
 * Destroy a game object and all of its components.
 * @param object The object to destroy
 */
declare function destroy(
	object: BoomBlankGameObject & Partial<BoomComponent>,
): void;

/**
 * Destroy all game objects with a certain tag.
 * @param tag The tag to destroy or undefined to destroy all objects
 */
declare function destroy_all(tag?: BoomTag): void;

/**
 * Get game object with specific id.
 * @param id
 * @returns The object or undefined if it doesn't exist
 */
declare function object(
	id: string,
): (BoomBlankGameObject & Partial<BoomComponent>) | undefined;

/**
 * Get all game objects.
 * @returns All game objects
 */
declare function objects(): LuaSet<
	BoomBlankGameObject & Partial<BoomComponent>
>;

/**
 * Get all game objects with the specified tag.
 * @param tag The tag to get objects for, undefined to get all objects
 * @returns List of objects
 */
declare function get(
	tag?: BoomTag,
): LuaSet<BoomBlankGameObject & Partial<BoomComponent>>;

/**
 * Run callback on every game object with a certain tag.
 * @param tag The tag that must exist on the object
 * @param cb The callback to run
 */
declare function every(tag: BoomTag, cb: BoomObjectCallback): void;

//
// Components
//

/** A set of components and/or arbitrary `string`s used as component-less tags. */
declare type BoomComponentOrTagSet =
	| Array<BoomComponent | BoomTag>
	| LuaSet<BoomComponent | BoomTag>;

/** One of 20 built-in components. */
declare type BoomComponent =
	| AnchorComp
	| AreaComp
	| BodyComp
	| ColorComp
	| DoubleJumpComp
	| FadeInComp
	| FixedComp
	| HealthComp
	| LifespanComp
	| MoveComp
	| OffscreenComp
	| OpacityComp
	| PosComp
	| RotateComp
	| ScaleComp
	| SpriteComp
	| StayComp
	| TextComp
	| TimerComp
	| ZComp;

/**
 * Anchor component. Use this component to offset any rendered component
 * such as a `SpriteComp` from the center of the game object.
 * @noSelf
 */
interface AnchorComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'anchor';

	/**
	 * Anchor point.
	 */
	anchor: Vec2;
}

/**
 * Area component. Use this component to define a collider area and bounds for a game object.
 * The area can be either a rectangle or a circle. The size can either be set manually or
 * based on the size of a renderable component, such as a sprite.
 * @noSelf
 */
interface AreaComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'area';

	/**
	 * Get all collisions currently happening for this component.
	 * @returns Set of collisions
	 */
	get_collisions(): LuaSet<BoomCollision>;

	/**
	 * Check collision between this component and another object.
	 * @param other_object The game object to check collisions with.
	 * @returns boolean (`true` if colliding with the other object), Collision data
	 */
	check_collision(
		other_object: BoomBlankGameObject & Partial<BoomComponent>,
	): LuaMultiReturn<[boolean, BoomCollision]>;

	/**
	 * Register event listener when this component is colliding.
	 * @param tag Optional tag which colliding object must have, undefined for all collisions
	 * @param cb Function to call when collision is detected
	 */
	on_collide(tag: BoomTag | undefined, cb: (data: BoomCollision) => void): void;

	/**
	 * Register event listener when this component is clicked.
	 * @param cb Function to call when clicked
	 */
	on_click(cb: BoomObjectCallback): void;

	/**
	 * Check if a point is within the area of this component.
	 * @param point The point to check
	 * @returns `true` if point is within area
	 */
	has_point(point: undefined): boolean;

	/**
	 * Url of the collision object used by the area.
	 * Undefined on the first frame that the object is created.
	 */
	readonly area_url: url | undefined;

	readonly init?: () => void;
	readonly pre_update?: () => void;
	readonly update?: (dt: number) => void;
	readonly destroy?: () => void;
}

/**
 * Physical body that responds to gravity.
 * Requires `AreaComp` and `PosComp` components on the game object.
 * This also makes the object solid.
 * @noSelf
 */
interface BodyComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'body';

	/**
	 * Add upward force.
	 * @param force The upward force to apply
	 */
	jump(force: number): void;

	/**
	 * If the body is jumping (velocity is pointing up).
	 */
	readonly is_jumping: boolean;

	/**
	 * If the body is in contact with ground.
	 */
	readonly is_grounded: boolean;

	/**
	 * If the body is falling (velocity is pointing down).
	 */
	readonly is_falling: boolean;

	/**
	 * The upward velocity applied to the body when jumping.
	 */
	readonly jump_force: number; // TO-DO should this be mutable?

	/**
	 * If the body is static and not affected by gravity.
	 */
	readonly is_static: boolean; // TO-DO should this be mutable?

	readonly update?: (dt: number) => void;
	readonly destroy?: () => void;
	readonly init?: () => void;
	readonly pre_update?: () => void;
}

/**
 * Component to control the color of the game object.
 * @noSelf
 */
interface ColorComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'color';

	/**
	 * Current color.
	 */
	readonly color: {
		/**
		 * Darkens the color.
		 * @param n Amount to darken color by
		 */
		readonly darken: (n: number) => ColorComp;

		/**
		 * Invert the color.
		 */
		readonly invert: () => ColorComp;

		/**
		 * Clone the color.
		 */
		readonly clone: () => ColorComp;

		/**
		 * Lighten the color.
		 * @param n Amount to lighten color by
		 */
		readonly lighten: (n: number) => ColorComp;

		/**
		 * The red color component. (0.0 to 1.0).
		 */
		r: number;

		/**
		 * The green color component. (0.0 to 1.0).
		 */
		g: number;

		/**
		 * The blue color component. (0.0 to 1.0).
		 */
		b: number;

		/**
		 * The alpha (tranparency) of the color. (0.0 to 1.0).
		 */
		a: number;
	};
}

/**
 * Enables double jump. Requires `BodyComp` component.
 * @noSelf
 */
interface DoubleJumpComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'double_jump';

	/**
	 * Performs double jump (the initial jump only happens if player is grounded).
	 * @param force The upward force to apply
	 */
	double_jump(force: number): void;

	/**
	 * Maximum number of jumps.
	 */
	readonly num_jumps: number; // TO-DO should this be mutable?

	readonly init?: () => void;
}

/**
 * Fade in game object visual components such as sprites.
 * @noSelf
 */
interface FadeInComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'fadein';

	readonly init?: () => void;
}

/**
 * Make object unaffected by camera.
 * @noSelf
 */
interface FixedComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'fixed';
}

/**
 * Handles health related logic.
 * @noSelf
 */
interface HealthComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'health';

	/**
	 * Register an event that runs when `heal()` is called.
	 * @param cb Function to call
	 */
	on_heal(cb: (cancel: BoomCancelEvent) => void): void;

	/**
	 * Register an event that runs when `hurt()` is called.
	 * @param cb Function to call
	 */
	on_hurt(cb: (cancel: BoomCancelEvent) => void): void;

	/**
	 * Register an event that runs when hp is 0 or less.
	 * @param cb Function to call
	 */
	on_death(cb: (cancel: BoomCancelEvent) => void): void;

	/**
	 * Increase hp. Will trigger `on_heal`.
	 * @param n Amount to increase
	 */
	heal(n: number): void;

	/**
	 * Decrease hp. Will trigger `on_hurt`.
	 * @param n Amount to decrease
	 */
	hurt(n: number): void;

	/**
	 * Current hp.
	 */
	hp: number;

	readonly destroy?: () => void;
}

/**
 * Destroy the game object after certain amount of time.
 * Use this component when you need a game object to be destroyed after a period of time.
 * @noSelf
 */
interface LifespanComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'lifespan';

	readonly init?: () => void;
}

/**
 * Component to move a game object in a direction of travel and at a specific speed.
 * @noSelf
 */
interface MoveComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'move';

	direction: Vec2;
	speed: number;

	readonly init?: () => void;
	readonly update?: (dt: number) => void;
}

/**
 * Control the behavior of a game object when it goes out of view.
 * @noSelf
 */
interface OffscreenComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'offscreen';

	/**
	 * Register a callback that runs when the object goes out of view.
	 * @param cb Function to call when the object goes out of view
	 */
	on_exit_screen(cb: () => void): void;

	/**
	 * Register a callback that runs when the object enters view.
	 * @param cb Function to call when the object enters view
	 */
	on_enter_screen(cb: () => void): void;

	readonly is_offscreen: boolean;
	readonly update?: (dt: number) => void;
	readonly init?: () => void;
	readonly destroy?: () => void;
}

/**
 * Component to control the opacity of a game object.
 * @noSelf
 */
interface OpacityComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'opacity';

	/**
	 * The opacity of the component instance. (0.0 to 1.0).
	 */
	opacity: number;
}

/**
 * Position of a game object.
 * @noSelf
 */
interface PosComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'pos';

	/**
	 * Move a number of pixels per second.
	 * @param x
	 * @param y
	 */
	move(x: number, y: number): void;

	/** Position in 2D space. */
	pos: Vec2;

	/** Velocity. */
	vel: Vec2;

	readonly update?: (dt: number) => void;
	readonly init?: () => void;
}

/**
 * Apply rotation to object.
 * @noSelf
 */
interface RotateComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'rotate';

	/**
	 * Updates rotation.
	 * @param angle in degrees
	 */
	rotate: (angle: number) => void;

	readonly angle: number;
	readonly init?: () => void;
}

/**
 * Apply a scale to the object.
 * @noSelf
 */
interface ScaleComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'scale';

	/**
	 * Set new scale.
	 * @param x
	 * @param y defaults to x
	 */
	scale_to: (x: number, y?: number) => void;

	/**
	 * Change scale.
	 * @param x
	 * @param y defaults to x
	 */
	scale_by: (x: number, y?: number) => void;

	readonly scale: Vec2;
}

/**
 * Render a sprite.
 * @noSelf
 */
interface SpriteComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'sprite';

	/**
	 * Play an animation.
	 * @param anim The animation to play
	 */
	play(anim: string): void;

	/**
	 * Stop the current animation.
	 */
	stop(): void;

	/**
	 * The current animation.
	 */
	readonly anim: string;

	/**
	 * The width of the sprite.
	 */
	readonly width: number;

	/**
	 * The height of the sprite.
	 */
	readonly height: number;

	/**
	 * If sprite should be flipped horizontally.
	 */
	flip_x: boolean;

	/**
	 * If the sprite should be flipped vertically.
	 */
	flip_y: boolean;

	readonly init?: () => void;
	readonly pre_update?: (dt: number) => void;
	readonly destroy?: () => void;
	readonly update?: (dt: number) => void;
}

/**
 * Do not get destroyed on scene switch.
 * @noSelf
 */
interface StayComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'stay';
}

/**
 * Render text.
 * @noSelf
 */
interface TextComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'text';

	/**
	 * The text to render.
	 */
	text: string;

	readonly init?: () => void;
	readonly destroy?: () => void;
	readonly update?: (dt: number) => void;
}

/**
 * Run an action once or repeatedly at a set interval.
 * @noSelf
 */
interface TimerComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'timer';

	/**
	 * Run a callback function after n seconds.
	 * @param n Seconds
	 * @param fn The function to call
	 */
	wait(n: number, fn: () => void): void;

	/**
	 * Run a callback function every n seconds.
	 * @param n Seconds
	 * @param fn The function to call
	 */
	loop(n: number, fn: () => void): void;

	/**
	 * Cancel the timer.
	 */
	cancel(): void;

	readonly destroy?: () => void;
	readonly init?: () => void;
}

/**
 * Determines the draw order for objects.
 * Object will be drawn on top if z value is bigger.
 * @noSelf
 */
interface ZComp {
	/** Pushed into the `tags` map when added to a game object. */
	readonly tag: 'z';

	/**
	 * The z value.
	 */
	z: number;
}

/**
 * Anchor point for render.
 * @param anchor
 * @returns The anchor component
 */
declare function anchor(
	anchor:
		| 'center'
		| 'topleft'
		| 'top'
		| 'topright'
		| 'left'
		| 'right'
		| 'bottomright'
		| 'bottom'
		| 'bottomleft',
): AnchorComp;

/**
 * Create a collider area and enable collision detection.
 * This will create an area component which is used to describe an area
 * which can collide with other area components.
 * @param options Component options (shape, width, height, radius)
 * @returns The area component
 */
declare function area(options?: {
	width?: number;
	height?: number;
	radius?: number;
	shape?: 'auto' | 'rect' | 'circle' | 'auto-circle';
}): AreaComp;

/**
 * Physical body that responds to gravity. Requires `AreaComp`
 * and `PosComp` components on the game object. This also makes the object solid.
 * @param options Component options (jump_force, is_static)
 * @returns The body component
 */
declare function body(options?: {
	jump_force?: number;
	is_static?: boolean;
}): BodyComp;

/**
 * Control the color of the game object.
 * @param r Red (0.0 to 1.0)
 * @param g Green (0.0 to 1.0)
 * @param b Blue (0.0 to 1.0)
 * @param a Optional alpha (0.0 to 1.0)
 * @returns The color component
 */
declare function color(
	r?: number,
	g?: number,
	b?: number,
	a?: number,
): ColorComp;

/**
 * Enables double jump. Requires body component.
 * @param options Component options
 * @returns The double jump component
 */
declare function double_jump(options?: { num_jumps?: number }): DoubleJumpComp;

/**
 * Fade in game object visual components such as sprites.
 * @param time In seconds (default is 1)
 * @returns The fade in component
 */
declare function fadein(time?: number): FadeInComp;

/**
 * Make object unaffected by camera.
 * @returns The component
 */
declare function fixed(): FixedComp;

/**
 * Add health related logic to game object.
 * @param hp Initial health (default is 1)
 * @returns The health component
 */
declare function health(hp?: number): HealthComp;

/**
 * Destroy the game object after certain amount of time.
 * @param time In seconds
 * @param options Fade out duration (default 0 which is no fade out)
 */
declare function lifespan(
	time: number,
	options?: { fade?: number },
): LifespanComp;

/**
 * Move a game object in a direction of travel and at a specific speed.
 * @param direction Direction of movement
 * @param speed Speed of movement in pixels per second
 * @returns The created component
 */
declare function move(direction: Vec2, speed: number): MoveComp;

/**
 * Control the behavior of a game object when it goes out of view.
 * @param options Destroy when going offscreen
 * @returns The created component
 */
declare function offscreen(options?: {
	distance?: number;
	destroy?: boolean;
}): OffscreenComp;

/**
 * Control the opacity of a game object.
 * @param value The opacity from 0.0 to 1.0
 * @returns The created component
 */
declare function opacity(value: number): OpacityComp;

/**
 * Control the position of a game object.
 * @param x
 * @param y
 * @returns The created component
 */
declare function pos(x: number, y: number): PosComp;

/**
 * Apply rotation to the object.
 * @param angle
 * @returns The component
 */
declare function rotate(angle: number): RotateComp;

/**
 * Apply a scale to the object.
 * @param x defaults to 1
 * @param y defaults to x
 * @returns The component
 */
declare function scale(x: number, y?: number): ScaleComp;

/**
 * Render a sprite.
 * @param anim Animation or image to use
 * @param options Extra options (flip_x, flip_y, width, height)
 */
declare function sprite(
	anim: string,
	options?: {
		atlas?: string | hash;
		flip_x?: boolean;
		flip_y?: boolean;
		width?: number;
		height?: number;
	},
): SpriteComp;

/**
 * Do not get destroyed on scene switch.
 * @returns The created component
 */
declare function stay(): StayComp;

/**
 * Render text.
 * @param content The text to show
 * @param options Text options (width, font, align)
 * @returns The created component
 */
declare function text(
	text: string,
	options?: {
		font?: string;
		align?: 'left' | 'right' | 'center';
		width?: number;
	},
): TextComp;

/**
 * Run certain action after some time.
 * @param n Number of seconds to wait
 * @param fn The function to call
 * @returns The created component
 */
declare function timer(n: number, fn: () => void): TimerComp;

/**
 * Determines the draw order for objects.
 * Object will be drawn on top if z value is bigger.
 * @param index Z-value of the object
 * @returns The created component
 */
declare function z(index: number): ZComp;

//
// Events
//

/**
 * Collision event that occurs when two game objects with Area components collide.
 * @noSelf
 */
interface BoomCollision {
	normal: vmath.vector3;
	distance: number;
	source: BoomBlankGameObject & Omit<AreaComp, 'tag'> & Partial<BoomComponent>;
	target: BoomBlankGameObject & Omit<AreaComp, 'tag'> & Partial<BoomComponent>;
}

/**
 * Register an event that runs when two game objects collide.
 * @param tag1 Tag which the first game object must have
 * @param tag2 Optional tag which the second game object must have
 * @param fn Will receive (collision, cancel) as args
 * @returns Cancel event function
 */
declare function on_collide(
	tag1: BoomTag,
	tag2: BoomTag | undefined,
	fn: (collision: BoomCollision, cancel: BoomCancelEvent) => void,
): BoomCancelEvent;

/**
 * Register callback that runs when a certain key is pressed.
 * @param key_id The key that must be pressed or '*' for any key
 * @param cb The callback
 * @returns Cancel callback
 */
declare function on_key_press(
	key_id: BoomKeyboardKey,
	cb: BoomEventCallback,
): BoomCancelEvent;

/**
 * Register callback that runs when a certain key is released.
 * @param key_id The key that must be released or '*' for any key
 * @param cb The callback
 * @returns Cancel callback
 */
declare function on_key_release(
	key_id: BoomKeyboardKey,
	cb: BoomEventCallback,
): BoomCancelEvent;

/**
 * Set mouse click listener.
 * @param tag Optional click on object with tag filter
 * @param cb Callback when mouse button is clicked
 * @returns Cancel listener function
 */
declare function on_click(
	tag: BoomTag,
	cb: BoomObjectCallback,
): BoomCancelEvent;
declare function on_click(cb: BoomObjectCallback): BoomCancelEvent;

/**
 * Register callback that runs when a mouse button is pressed.
 * @param button Optional (`left`, `middle`, `right`, default is `left`)
 * @param cb
 * @returns Cancel callback
 */
declare function on_mouse_press(
	button: 'left' | 'middle' | 'right',
	cb: () => void,
): BoomCancelEvent;
declare function on_mouse_press(cb: () => void): BoomCancelEvent;

/**
 * Register callback that runs when a mouse button is released.
 * @param button Optional (`left`, `middle`, `right`, default is `left`)
 * @param cb
 * @returns Cancel callback
 */
declare function on_mouse_release(
	button: 'left' | 'middle' | 'right',
	cb: () => void,
): BoomCancelEvent;
declare function on_mouse_release(cb: () => void): BoomCancelEvent;

/**
 * Register callback that runs when the mouse is moved.
 * @param cb
 * @returns Cancel callback
 */
declare function on_mouse_move(cb: () => void): BoomCancelEvent;

/**
 * Run a function every frame. Register an event that runs every frame,
 * optionally for all game objects with certain tag.
 * @param tag Run event for all objects matching tag (optional)
 * @param fn The event function to call. Will receive object and cancel function.
 */
declare function on_update(
	tag: BoomTag,
	fn: (
		object: BoomBlankGameObject & Partial<BoomComponent>,
		cancel: BoomCancelEvent,
	) => void,
): void;
declare function on_update(fn: (cancel: BoomCancelEvent) => void): void;

//
// Level
//

/**
 * Map that describes functionality of tiles.
 * Keys are `string`s that match tiles.
 * Values are `function`s that return sets of components.
 */
declare type BoomTiles =
	| {
			[key: string]: () => BoomComponentOrTagSet;
	  }
	| LuaMap<string, () => BoomComponentOrTagSet>;

/**
 * Construct a level based on symbols.
 * @param map List of strings presenting horizontal rows of tiles
 * @param options Level options (tile_width, tile_height, pos, tiles)
 * @returns Game object with tiles as children
 */
declare function add_level(
	map: string[] | LuaSet<string>,
	options: {
		tile_width: number;
		tile_height: number;
		pos?: Vec2;
		tiles: BoomTiles;
	},
): BoomBlankGameObject & Partial<BoomComponent>;

//
// Math
//

/**
 * 2D vector.
 */
declare type Vec2 = {
	x: number;
	y: number;
	readonly z: 0;
	readonly __type: vmath.vector3;

	/**
	 * Get distance between this and another vector.
	 */
	dist: (compare: Vec2) => number;
};

/**
 * Get a random number. If called with no arguments the function returns a number between 0 and 1.
 * If called with a single argument `a` a number between 0 and `a` is returned.
 * If called with two arguments `a` and `b` a number between `a` and `b` is returned.
 * @param a
 * @param b
 * @returns Float number
 */
declare function rand(a?: number, b?: number): number;

/**
 * Same as `rand()` but floored.
 * If called with two arguments `a` and `b` a number between `a` and `b` is returned.
 * @param a
 * @param b
 * @returns Integer number
 */
declare function randi(a?: number, b?: number): number;

/**
 * Create a color.
 * @param r Red component (0.0 to 1.0)
 * @param g Green component (0.0 to 1.0)
 * @param b Blue component (0.0 to 1.0)
 * @param a Alpha component (0.0 to 1.0)
 * @returns The created color
 */
declare function rgb(r?: number, g?: number, b?: number, a?: number): ColorComp;

declare namespace rgb {
	/**
	 * Red color. rgb(1, 0, 0, 1)
	 */
	export const RED: ColorComp;

	/**
	 * Green color. rgb(0, 1, 0, 1)
	 */
	export const GREEN: ColorComp;

	/**
	 * Blue color. rgb(0, 0, 1, 1)
	 */
	export const BLUE: ColorComp;

	/**
	 * Black color. rgb(0, 0, 0, 1)
	 */
	export const BLACK: ColorComp;

	/**
	 * White color. rgb(1, 1, 1, 1)
	 */
	export const WHITE: ColorComp;

	/**
	 * Create color from a hex string.
	 * @param hex Hex string in RGB, RGBA, RRGGBB or RRGGBBAA format (with optional initial #).
	 * @returns The created color.
	 */
	export function from_hex(hex: string): ColorComp;
}

/**
 * Red color. rgb(1, 0, 0, 1)
 */
declare const RED: ColorComp;

/**
 * Green color. rgb(0, 1, 0, 1)
 */
declare const GREEN: ColorComp;

/**
 * Blue color. rgb(0, 0, 1, 1)
 */
declare const BLUE: ColorComp;

/**
 * Black color. rgb(0, 0, 0, 1)
 */
declare const BLACK: ColorComp;

/**
 * White color. rgb(1, 1, 1, 1)
 */
declare const WHITE: ColorComp;

/**
 * Create color from a hex string.
 * @param hex Hex string in RGB, RGBA, RRGGBB or RRGGBBAA format (with optional initial #).
 * @returns The created color
 */
declare function from_hex(hex: string): ColorComp;

/**
 * Tween a value from one to another.
 * The transition will happen over a certain duration using a specific easing function.
 * @param from Start value
 * @param to End value
 * @param duration Time in seconds to go from start to end value
 * @param easing Which easing algorithm to use (default EASING_LINEAR)
 * @param set_value Function to call when the value has changed
 * @returns A tween object
 */
declare function tween(
	from: number,
	to: number,
	duration: number,
	easing: BoomEasing | undefined,
	set_value: (endValue: number) => void,
): Tween;
declare function tween(
	from: Vec2,
	to: Vec2,
	duration: number,
	easing: BoomEasing | undefined,
	set_value: (endValue: Vec2) => void,
): Tween;

/**
 * @noSelf
 */
interface Tween {
	/**
	 * Register an event when finished.
	 * @param fn The function to call when the tween has finished
	 */
	on_end(fn: () => void): void;

	/**
	 * Finish tween now.
	 */
	finish(): void;

	/**
	 * Cancel tween.
	 */
	cancel(): void;
}

/**
 * Create a Vec2.
 * @param x Horizontal position
 * @param y Vertical position
 * @returns The created Vec2
 */
declare function vec2(x?: number, y?: number): Vec2;

/**
 * When `vec2` is called as an object instead of as a function.
 */
declare namespace vec2 {
	/**
	 * UP vector Vec2(0, 1)
	 */
	export const UP: Vec2;

	/**
	 * RIGHT vector Vec2(1, 0)
	 */
	export const RIGHT: Vec2;

	/**
	 * DOWN vector Vec2(0, -1)
	 */
	export const DOWN: Vec2;

	/**
	 * LEFT vector Vec2(-1, 0)
	 */
	export const LEFT: Vec2;
}

/**
 * UP vector Vec2(0, 1)
 */
declare const UP: Vec2;

/**
 * RIGHT vector Vec2(1, 0)
 */
declare const RIGHT: Vec2;

/**
 * DOWN vector Vec2(0, -1)
 */
declare const DOWN: Vec2;

/**
 * LEFT vector Vec2(-1, 0)
 */
declare const LEFT: Vec2;

//
// Scene
//

/**
 * Create a scene.
 * @param id Unique id of the scene
 * @param fn The scene code
 */
declare function scene(id: string, fn: (...args: unknown[]) => void): void;

/**
 * Show a scene.
 * @param id Id of the scene to show
 * @param args Additional arguments to pass to the scene function
 */
declare function show(id: string, ...args: unknown[]): void;

//
// Timer
//

/**
 * Run a callback after a certain number of seconds.
 * @param seconds Number of seconds to wait
 * @param cb Function to call
 * @returns Call to cancel the timer
 */
declare function wait(seconds: number, cb: () => void): BoomCancelEvent;

/**
 * Run a callback repeatedly with a certain interval.
 * @param seconds Interval between calls
 * @param cb Function to call
 * @returns Call to cancel the timer
 */
declare function loop(seconds: number, cb: () => void): BoomCancelEvent;

//
// Info
//

/**
 * Check if a certain key is down.
 * @param key_id The key that must be down, or undefined for any key
 * @returns True if down
 */
declare function is_key_down(key_id?: BoomKeyboardKey): boolean;

/**
 * Get mouse position (screen coordinates).
 * @returns Mouse position
 */
declare function mouse_pos(): Vec2;

/**
 * Get or set camera position.
 * @param x
 * @param y
 * @returns Camera position
 */
declare function cam_pos(x: number | Vec2, y?: number): void;
declare function cam_pos(): Vec2;

/**
 * Get or set camera rotation.
 * @param angle The angle to set or undefined to get current rotation
 * @returns The camera rotation in degrees
 */
declare function cam_rot(angle: number): void;
declare function cam_rot(): number;

/**
 * Get or set the camera zoom.
 * @param zoom The zoom to set or undefined to get the current zoom.
 * @returns The camera zoom
 */
declare function cam_zoom(zoom: number): void;
declare function cam_zoom(): number;

/**
 * Get gravity.
 * @returns The gravity in pixels per seconds
 */
declare function get_gravity(): number;

/**
 * Set gravity.
 * @param gravity Gravity in pixels per seconds
 */
declare function set_gravity(gravity: number): void;

/**
 * Get screen width.
 * @returns Width of screen
 */
declare function width(): number;

/**
 * Get screen height.
 * @returns Height of screen
 */
declare function height(): number;

/**
 * Get screen center position.
 * @returns Center of screen
 */
declare function center(): Vec2;

/**
 * Get the delta time.
 * @returns Delta time
 */
declare function dt(): number;

/**
 * Get time since start.
 * @returns Time since start in seconds
 */
declare function time(): number;
