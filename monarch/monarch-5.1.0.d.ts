/// <library version="5.1.0" src="https://github.com/britzl/monarch/archive/refs/tags/5.1.0.zip" />
/** @noSelfInFile */

/**
 * Monarch is a screen manager for the Defold game engine.
 * @see {@link https://github.com/britzl/monarch|Github Source}
 * @see {@link https://github.com/britzl/monarch/blob/master/README_API.md|Documentation}
 * @example `import * as monarch from 'monarch.monarch'`
 * @noResolution
 */
declare module 'monarch.monarch' {
	type ScreenId = hash | string;
	type ShowOptions = {
		clear?: boolean;
		reload?: boolean;
		sequential?: boolean;
		no_stack?: boolean;
		pop?: number;
	};
	type ReplaceOptions = {
		clear?: boolean;
		reload?: boolean;
		no_stack?: boolean;
	};
	type RegisterProxyOptions = {
		popup?: boolean;
		popup_on_popup?: boolean;
		timestep_below_popup?: number;
		screen_keeps_input_focus_when_below_popup?: boolean;
		others_keep_input_focus_when_below_screen?: boolean;
		auto_preload?: boolean;
	};
	type BackOptions = {
		sequential?: boolean;
	};
	type PreloadOptions = {
		auto_preload?: boolean;
	};
	type Data = {};
	type Message = {};
	type Callback = () => void;

	// transition messages
	export const TRANSITION: {
		DONE: hash;
		SHOW_IN: hash;
		SHOW_OUT: hash;
		BACK_IN: hash;
		BACK_OUT: hash;
	};

	// focus messages
	export const FOCUS: {
		GAINED: hash;
		LOST: hash;
	};

	// listener messages
	export const SCREEN_TRANSITION_IN_STARTED: hash;
	export const SCREEN_TRANSITION_IN_FINISHED: hash;
	export const SCREEN_TRANSITION_OUT_STARTED: hash;
	export const SCREEN_TRANSITION_OUT_FINISHED: hash;
	export const SCREEN_TRANSITION_FAILED: hash;

	/**
	 * Enable verbose logging of the internals of Monarch.
	 */
	export function debug(): void;

	/**
	 * Check if a screen exists in the current screen stack
	 * @param {string|hash} screen_id
	 * @returns true of the screen is in the stack
	 */
	export function in_stack(screen_id: ScreenId): boolean;

	/**
	 * Check if a Monarch screen is at the top of the view stack.
	 * @param {string|hash} screen_id
	 * @returns true if the screen is at the top of the stack
	 */
	export function is_top(screen_id: ScreenId): boolean;

	/**
	 * Check if a Monarch screen is visible.
	 * @param {string|hash} screen_id
	 * @returns true if the screen is visible
	 */
	export function is_visible(screen_id: ScreenId): boolean;

	/**
	 * Check if a screen is loaded
	 * @param {string|hash} screen_id
	 * @returns true if the screen is loaded
	 */
	export function is_loaded(screen_id: ScreenId): boolean;

	/**
	 * Check if a screen is a popup
	 * @param {string|hash} screen_id
	 * @returns true if the screen is a popup
	 */
	export function is_popup(screen_id: ScreenId): boolean;

	/**
	 * Register a new screen contained in a collection proxy.
	 * This is done automatically by the screen_proxy.script. It is expected that
	 * the caller of this function is a script component attached to the same game
	 * object as the proxy. This is required since monarch will acquire and
	 * release input focus of the game object where the proxy is attached.
	 * @param {string|hash} screen_id - Unique id of the screen
	 * @param {url} proxy - URL to the collection proxy containing the screen
	 * @param {object} settings - Settings table for screen. Accepted values:
	 *   * popup - true if the screen is a popup
	 *   * popup_on_popup - true if this popup can be shown on top of
	 *     another popup or false if an underlying popup should be closed
	 *   * timestep_below_popup - Timestep to set on proxy when below a popup
	 *   * screen_keeps_input_focus_when_below_popup - If this screen should
	 *     keep input focus when below a popup
	 *   * others_keep_input_focus_when_below_screen - If screens below this
	 *     screen should keep input focus
	 *   * auto_preload - true if the screen should be automatically preloaded
	 */
	export function register_proxy(
		screen_id: ScreenId,
		proxy: url,
		settings: RegisterProxyOptions,
	): void;

	/**
	 * Register a new screen contained in a collection factory.
	 * This is done automatically by the screen_factory.script. It is expected that
	 * the caller of this function is a script component attached to the same game
	 * object as the factory. This is required since monarch will acquire and
	 * release input focus of the game object where the factory is attached.
	 * @param {string|hash} screen_id - Unique id of the screen
	 * @param {url} factory - URL to the collection factory containing the screen
	 * @param {object} settings - Settings table for screen. Accepted values:
	 *   * popup - true if the screen is a popup
	 *   * popup_on_popup - true if this popup can be shown on top of
	 *     another popup or false if an underlying popup should be closed
	 *   * screen_keeps_input_focus_when_below_popup - If this screen should
	 *     keep input focus when below a popup
	 *   * others_keep_input_focus_when_below_screen - If screens below this
	 *     screen should keep input focus
	 *   * auto_preload - true if the screen should be automatically preloaded
	 */

	export function register_factory(
		screen_id: ScreenId,
		factory: url,
		settings: RegisterProxyOptions,
	): void;

	/**
	 * Unregister a screen
	 * This is done automatically by the screen.script
	 * @param {string|hash} screen_id - Id of the screen to unregister
	 */
	export function unregister(screen_id: ScreenId): void;

	/**
	 * Get data associated with a screen
	 * @param {string|hash} screen_id - Id of the screen to get data for
	 * @returns {object} Data associated with the screen
	 */
	export function data(screen_id: ScreenId): Data;

	/**
	 * Check if a Monarch screen exists.
	 * @param {string|hash} screen_id - Id of the screen to check if is registered
	 * @returns {boolean} True or False if the screen id is registered or not
	 */
	export function screen_exists(screen_id: ScreenId): boolean;

	/**
	 * Check if Monarch is busy showing and/or hiding a screen.
	 * @returns {boolean} true if busy
	 */
	export function is_busy(): boolean;

	/**
	 * Show a Monarch screen.
	 * @param {string|hash} screen_id - Id of the screen to check if is registered
	 * @param {object} options Table with options when showing the screen (can be nil). Valid values:
	 *    - clear - Set to true if the stack should be cleared down to an existing instance of the screen
	 *    - reload - Set to true if screen should be reloaded if it already exists in the stack and is loaded.
							This would be the case if doing a show() from a popup on the screen just below the popup.
	 *    - sequential - Set to true to wait for the previous screen to show itself out before starting the
									show in transition even when transitioning to a different scene ID.
	 *    - no_stack - Set to true to load the screen without adding it to the screen stack.
	 *    - pop - The number of screens to pop from the stack before adding the new one.
	 * @param {any} data - Optional data to set on the screen. Can be retrieved by the `data()` function
	 * @param {function} callback - Optional callback to invoke when screen is shown
	 */
	export function show(
		screen_id: ScreenId,
		options?: ShowOptions,
		data?: Data,
		callback?: Callback,
	): void;

	/**
	 * Replace the top of the stack with a new screen.
	 * @param {string|hash} screen_id - Id of the screen to show.
	 * @param {object} options - Table with options when showing the screen (can be nil). Valid values:
	 *   - clear {boolean} - Set to true if the stack should be cleared down to an existing instance of the screen.
	 *   - reload {boolean} - Set to true if the screen should be reloaded if it already exists in the stack and is loaded.
	 *                        This would be the case if doing a show() from a popup on the screen just below the popup.
	 *   - no_stack {boolean} - Set to true to load the screen without adding it to the screen stack.
	 * @param {any} data - Optional data to set on the screen. Can be retrieved by the data() function.
	 * @param {function} callback - Optional callback to invoke when the screen is shown.
	 */
	export function replace(
		screen_id: ScreenId,
		options?: ReplaceOptions,
		data?: Data,
		callback?: Callback,
	): void;

	/**
	 * Hide a screen. The screen must either be at the top of the stack or
	 * visible but not added to the stack (through the no_stack option).
	 * @param {string|hash} screen_id - Id of the screen to hide.
	 * @param {function} callback - Optional callback to invoke when the screen is hidden.
	 * @returns {boolean} True if successfully hiding, false if busy or for some other reason unable to hide the screen.
	 */
	export function hide(screen_id: ScreenId, callback?: Callback): boolean;

	/**
	 * Clear the stack completely. Any visible screens will be hidden by navigating back out
	 * from them.
	 * @param {function} callback - Optional callback to invoke when the stack has been cleared.
	 */
	export function clear(callback?: Callback): void;

	/**
	 * Go back to the previous screen in the stack.
	 *
	 * @param {object} options - Table with options when backing out from the screen (can be nil).
	 *   Valid values:
	 *   - sequential {boolean} - Set to true to wait for the current screen to hide itself out before starting the
	 *     back in transition even when transitioning to a different scene ID.
	 * @param {any} data - Optional data to set for the previous screen.
	 * @param {function} callback - Optional callback to invoke when the previous screen is visible again.
	 */
	export function back(
		options?: BackOptions,
		data?: Data,
		callback?: Callback,
	): void;

	/**
	 * Check if a screen is preloading via monarch.preload() or automatically
	 * via the Preload screen option.
	 * @param {string|hash} screen_id - Screen id.
	 * @returns {boolean} True if preloading, false otherwise.
	 */
	export function is_preloading(screen_id: ScreenId): boolean;

	export function is_preloaded(screen_id: ScreenId): boolean;

	/**
	 * Invoke a callback when a specific screen has been preloaded.
	 * This is mainly useful on app start when wanting to show a screen that
	 * has the `Preload` flag set (since it will immediately start to load which
	 * would prevent a call to `monarch.show` from having any effect).
	 * @param {string|hash} screen_id - Id of the screen to monitor for preload completion.
	 * @param {function} callback - Callback to invoke when the screen has been preloaded.
	 */
	export function when_preloaded(
		screen_id: ScreenId,
		callback: (screen_id?: ScreenId) => void,
	): void;

	/**
	 * Preload a screen. This will load but not enable and show a screen.
	 * Useful for "heavier" screens that you wish to show without any delay.
	 *
	 * @param {string|hash} screen_id - Id of the screen to preload.
	 * @param {object} options - Options for preloading the screen.
	 * @param {function} callback - Optional callback to invoke when the screen is loaded.
	 */
	export function preload(
		screen_id: ScreenId,
		options?: PreloadOptions,
		callback?: Callback,
	): void;

	/**
	 * Check if a screen has missing resources, always returns false for factory
	 * @param {string|hash} screen_id - Id of the screen to preload
	 */
	export function has_missing_resources(screen_id: ScreenId): boolean;

	/**
	 * Unload a preloaded monarch screen.
	 * @param {string|hash} screen_id - Id of the screen to unload.
	 * @param {function} callback - Optional callback to invoke when the screen is unloaded.
	 */
	export function unload(screen_id: ScreenId, callback?: Callback): void;

	/**
	 * Post a message to a screen using msg.post.
	 *
	 * @param {string|hash} screen_id - Id of the screen to send the message to.
	 * @param {string|hash} message_id - Id of the message to send.
	 * @param {object} [message] - Optional message data to send.
	 * @returns {boolean} result - True if the message is sent successfully.
	 * @returns {string|undefined} error - Error message if unable to send the message.
	 */
	export function post(
		screen_id: ScreenId,
		message_id: hash | string,
		message?: Message,
	): LuaMultiReturn<[boolean, string | undefined]>;

	export function on_message(
		message_id: hash | string,
		message: Message,
		sender: url,
	): void;

	/**
	 * Get a list of IDs for the current screen stack.
	 * (Primarily used for unit testing, but could have uses outside testing.)
	 * @returns {Array} Table with screen IDs. The first entry is at the bottom of the
	 * stack, and the last value is at the top (and currently visible).
	 */
	export function get_stack(): ScreenId[];

	/**
	 * Get the screen on top of the stack.
	 *
	 * @param {number} [offset] - Optional offset from the top of the stack (e.g., -1 for the previous screen).
	 * @returns {string|hash} - Id of the requested screen.
	 */
	export function top(offset?: number): ScreenId;

	/**
	 * Get the screen at the bottom of the stack.
	 * @param {number} [offset] - Optional offset from the bottom of the stack.
	 * @returns {string|hash} - Id of the requested screen.
	 */
	export function bottom(offset?: number): ScreenId;

	/**
	 * Set the timestep to apply for a screen when below a popup.
	 * @param {string|hash} screen_id - Id of the screen to change the timestep setting for.
	 * @param {number} timestep - Timestep to apply.
	 */
	export function set_timestep_below_popup(
		screen_id: ScreenId,
		timestep: number,
	): void;

	/**
	 * Set a function to call when a transition should be started.
	 * The function will receive (`message_id`, `message`, `sender`).
	 * IMPORTANT! You must call `monarch.on_message()` from the same script as
	 * this function was called.
	 *
	 * @param {string|hash} screen_id - Screen id to associate the transition with.
	 * @param {function} fn - Transition handler function.
	 */
	export function on_transition(
		screen_id: ScreenId,
		fn: (message_id: string, message: Message, sender: url) => void,
	): void;

	/**
	 * Set a function to call when a screen gains or loses focus.
	 * The function will receive (`message_id`, `message`, `sender`).
	 * IMPORTANT! You must call `monarch.on_message()` from the same script as
	 * this function was called.
	 * @param {string|hash} screen_id - Screen id to associate the focus listener function with.
	 * @param {function} fn - Focus listener function.
	 */
	export function on_focus_changed(
		screen_id: ScreenId,
		fn: (message_id: string, message: Message, sender: url) => void,
	): void;

	/**
	 * Set either a function to be called when `msg.post()` is called on a specific screen
	 * or a URL where the message is sent.
	 * IMPORTANT! If you provide a function, you must also make sure to call
	 * `monarch.on_message(message_id, message, sender)` from the same script as
	 * this function was called.
	 * @param {string|hash} screen_id - Screen id to associate the message listener function with.
	 * @param {function|string} fn_or_url - The function to call or URL to send the message to.
	 */
	export function on_post(
		screen_id: ScreenId,
		fn_or_url: Callback | url | string,
	): void;

	/**
	 * Add a listener to be notified when screens are shown or hidden.
	 * @param {url|undefined} url - The url to notify, undefined for the current url.
	 */
	export function add_listener(url?: url): void;

	/**
	 * Remove a previously added listener.
	 * @param {url|undefined} url - The url to remove, nil for current url.
	 */
	export function remove_listener(url?: url): void;

	export function dump_stack(): string;

	export function queue_size(): number;
}

/** @noSelfInFile */

/**
 * Monarch comes with a system for setting up transitions easily
 * in a `gui_script` using the `monarch.transitions.gui` module.
 * @see {@link https://github.com/britzl/monarch|Github Source}
 * @see {@link https://github.com/britzl/monarch/blob/master/README_API.md|Documentation}
 * @example `import * as transitions_gui from 'monarch.transitions.gui'`
 * @noResolution
 */
declare module 'monarch.transitions.gui' {
	type GuiEasing =
		| typeof gui.EASING_INBACK
		| typeof gui.EASING_INBOUNCE
		| typeof gui.EASING_INCIRC
		| typeof gui.EASING_INCUBIC
		| typeof gui.EASING_INELASTIC
		| typeof gui.EASING_INEXPO
		| typeof gui.EASING_INOUTBACK
		| typeof gui.EASING_INOUTBOUNCE
		| typeof gui.EASING_INOUTCIRC
		| typeof gui.EASING_INOUTCUBIC
		| typeof gui.EASING_INOUTELASTIC
		| typeof gui.EASING_INOUTEXPO
		| typeof gui.EASING_INOUTQUAD
		| typeof gui.EASING_INOUTQUART
		| typeof gui.EASING_INOUTQUINT
		| typeof gui.EASING_INOUTSINE
		| typeof gui.EASING_INQUAD
		| typeof gui.EASING_INQUART
		| typeof gui.EASING_INQUINT
		| typeof gui.EASING_INSINE
		| typeof gui.EASING_LINEAR
		| typeof gui.EASING_OUTBACK
		| typeof gui.EASING_OUTBOUNCE
		| typeof gui.EASING_OUTCIRC
		| typeof gui.EASING_OUTCUBIC
		| typeof gui.EASING_OUTELASTIC
		| typeof gui.EASING_OUTEXPO
		| typeof gui.EASING_OUTINBACK
		| typeof gui.EASING_OUTINBOUNCE
		| typeof gui.EASING_OUTINCIRC
		| typeof gui.EASING_OUTINCUBIC
		| typeof gui.EASING_OUTINELASTIC
		| typeof gui.EASING_OUTINEXPO
		| typeof gui.EASING_OUTINQUAD
		| typeof gui.EASING_OUTINQUART
		| typeof gui.EASING_OUTINQUINT
		| typeof gui.EASING_OUTINSINE
		| typeof gui.EASING_OUTQUAD
		| typeof gui.EASING_OUTQUART
		| typeof gui.EASING_OUTQUINT
		| typeof gui.EASING_OUTSINE;

	type Easing = {
		IN: GuiEasing;
		OUT: GuiEasing;
	};

	type Transition = {
		handle: (message_id: hash | string, message: unknown, sender: url) => void;
		show_in: (
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
		show_out: (
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
		back_in: (
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
		back_out: (
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
	};

	type TransitionNodeless = {
		handle: (message_id: hash | string, message: unknown, sender: url) => void;
		show_in: (
			node: node,
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
		show_out: (
			node: node,
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
		back_in: (
			node: node,
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
		back_out: (
			node: node,
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
	};

	export type TransitionInFn = (
		node: node,
		to: vmath.vector3,
		easing: GuiEasing,
		duration: number,
		delay?: number,
		complete_function?: (this: any, node: node) => void,
	) => void;

	export type TransitionOutFn = (
		node: node,
		from: vmath.vector3,
		easing: GuiEasing,
		duration: number,
		delay?: number,
		complete_function?: (this: any, node: node) => void,
	) => void;

	export const slide_in_right: TransitionInFn;
	export const slide_in_left: TransitionInFn;
	export const slide_in_top: TransitionInFn;
	export const slide_in_bottom: TransitionInFn;
	export const slide_out_right: TransitionOutFn;
	export const slide_out_left: TransitionOutFn;
	export const slide_out_top: TransitionOutFn;
	export const slide_out_bottom: TransitionOutFn;
	export const scale_in: TransitionInFn;
	export const scale_out: TransitionOutFn;
	export const fade_in: TransitionInFn;
	export const fade_out: TransitionOutFn;

	export function in_right_out_left(
		node: node,
		duration: number,
		delay?: number,
		easing?: Easing,
	): void;
	export function in_left_out_right(
		node: node,
		duration: number,
		delay?: number,
		easing?: Easing,
	): void;
	export function in_left_out_left(
		node: node,
		duration: number,
		delay?: number,
		easing?: Easing,
	): void;
	export function in_right_out_right(
		node: node,
		duration: number,
		delay?: number,
		easing?: Easing,
	): void;
	export function fade_in_out(
		node: node,
		duration: number,
		delay?: number,
		easing?: Easing,
	): void;

	/** Notify the transition system that the window size has changed */
	export function window_resized(width: number, height: number): void;

	/** Calls `complete_function` */
	export function instant(
		node: node,
		to: vmath.vector3,
		easing: GuiEasing,
		duration: number,
		delay?: number,
		complete_function?: (this: any, node: node) => void,
	): void;

	export function create(node: node): Transition;
	export function create(): TransitionNodeless;
}

/**
 * @see {@link https://github.com/britzl/monarch|Github Source}
 * @see {@link https://github.com/britzl/monarch/blob/master/README_API.md|Documentation}
 * @example `import * as transitions_easings from 'monarch.transitions.easings'`
 * @noResolution
 */
declare module 'monarch.transitions.easings' {
	type EasingIn =
		| 'BACK'
		| 'BOUNCE'
		| 'CIRC'
		| 'CUBIC'
		| 'ELASTIC'
		| 'EXPO'
		| 'OUTBACK'
		| 'OUTBOUNCE'
		| 'OUTCIRC'
		| 'OUTCUBIC'
		| 'OUTELASTIC'
		| 'OUTEXPO'
		| 'OUTQUAD'
		| 'OUTQUART'
		| 'OUTQUINT'
		| 'OUTSINE'
		| 'QUAD'
		| 'QUART'
		| 'QUINT'
		| 'SINE';
	type EasingOut =
		| 'BACK'
		| 'BOUNCE'
		| 'CIRC'
		| 'CUBIC'
		| 'ELASTIC'
		| 'EXPO'
		| 'INBACK'
		| 'INBOUNCE'
		| 'INCIRC'
		| 'INCUBIC'
		| 'INELASTIC'
		| 'INEXPO'
		| 'INQUAD'
		| 'INQUART'
		| 'INQUINT'
		| 'INSINE'
		| 'QUAD'
		| 'QUART'
		| 'QUINT'
		| 'SINE';
	type Easing = {
		IN: (typeof gui)[`EASING_OUT${EasingOut}`];
		OUT: (typeof gui)[`EASING_IN${EasingIn}`];
	};
	export function BACK(): Easing;
	export function BOUNCE(): Easing;
	export function CIRC(): Easing;
	export function CUBIC(): Easing;
	export function ELASTIC(): Easing;
	export function EXPO(): Easing;
	export function QUAD(): Easing;
	export function QUART(): Easing;
	export function QUINT(): Easing;
	export function SINE(): Easing;
	export function create(name: EasingIn | EasingOut): Easing;
}
