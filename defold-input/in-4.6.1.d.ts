/// <library version="4.6.1" src="https://github.com/britzl/defold-input/archive/refs/tags/4.6.1.zip" />
/** @noSelfInFile */

/**
 * @url https://github.com/britzl/defold-input
 * @noResolution
 */
declare module 'in.accelerometer' {
	type AccelerometerInstance = {
		reset: () => void;
		calibrate: () => void;
		on_input: (action: { acc_x: number; acc_y: number; acc_z: number }) => void;
		calibrated: () => vmath.vector3;
		adjusted: () => vmath.vector3;
		average: () => vmath.vector3;
		zero: () => vmath.vector3;
		latest: () => vmath.vector3;
		on_window_resized: (width: number, height: number) => void;
	};

	export function create(samplecount?: number): AccelerometerInstance;
	export function reset(instance?: AccelerometerInstance): void;
	export function calibrate(instance?: AccelerometerInstance): void;
	export function on_input(
		action: { acc_x: number; acc_y: number; acc_z: number },
		instance?: AccelerometerInstance,
	): void;
	export function calibrated(instance?: AccelerometerInstance): vmath.vector3;
	export function adjusted(instance?: AccelerometerInstance): vmath.vector3;
	export function average(instance?: AccelerometerInstance): vmath.vector3;
	export function zero(instance?: AccelerometerInstance): vmath.vector3;
	export function latest(instance?: AccelerometerInstance): vmath.vector3;
	export function on_window_resized(
		width: number,
		height: number,
		instance?: AccelerometerInstance,
	): void;
}

/** @noSelfInFile */

/**
 * @url https://github.com/britzl/defold-input
 * @noResolution
 */
declare module 'in.button' {
	export const TOUCH: hash;

	export function acquire(): void;
	export function release(): void;
	export function register(
		node_or_string: node | string,
		callback: () => void,
	): node;
	export function unregister(node_or_string?: node | string): void;
	export function dump(): void;
	export function effect(node: node, initial_scale: vmath.vector3): void;
	export function on_input(action_id: hash, action: {}): boolean;
}

/** @noSelfInFile */

/**
 * @url https://github.com/britzl/defold-input
 * @noResolution
 */
declare module 'in.cursor' {
	export const OVER: hash;
	export const OUT: hash;
	export const PRESSED: hash;
	export const RELEASED: hash;
	export const DRAG: hash;
	export const DRAG_END: hash;
	export const DRAG_START: hash;
	export const CLICKED: hash;
	export const RESET: hash;
	export const START_DRAGGING: hash;
	export const DRAG_MODE_HORIZONTAL: hash;
	export const DRAG_MODE_VERTICAL: hash;
	export const DRAG_MODE_FREE: hash;

	type ListenerFunction = (message_id: hash | string, message: {}) => boolean;

	export function trigger(message_id: hash | string, message: {}): boolean;
	export function listen(
		cursor_url: url,
		message_id: hash,
		fn: ListenerFunction,
	): void;
	export function init(): void;
	export function final(): void;
	export function reset(cursor_url?: url): void;
}

/** @noSelfInFile */

/**
 * @url https://github.com/britzl/defold-input
 * @noResolution
 */
declare module 'in.gesture' {
	type GestureInstance = {
		on_input(action_id: hash, action: {}): DetectedGestures;
	};

	type DetectedGestures = {
		tap?: { position: { x: number; y: number } };
		double_tap?: { position: { x: number; y: number } };
		long_press?: { position: { x: number; y: number }; time: number };
		repeated?: boolean;
		swipe_left?: boolean;
		swipe_right?: boolean;
		swipe_up?: boolean;
		swipe_down?: boolean;
		swipe?: {
			from: { x: number; y: number };
			to: { x: number; y: number };
			time: number;
		};
		two_finger?: {
			tap?: boolean;
			double_tap?: boolean;
			long_press?: boolean;
			repeated?: boolean;
			swipe_left?: boolean;
			swipe_right?: boolean;
			swipe_up?: boolean;
			swipe_down?: boolean;
			pinch?: { center: { x: number; y: number }; ratio: number };
		};
	};

	export const SETTINGS: {
		action_id: hash;
		tap_threshold: number;
		double_tap_interval: number;
		swipe_threshold: number;
		swipe_time: number;
		long_press_time: number;
		multi_touch: boolean;
	};

	export function create(settings?: {
		action_id?: string;
		tap_threshold?: number;
		double_tap_interval?: number;
		swipe_threshold?: number;
		swipe_time?: number;
		long_press_time?: number;
		multi_touch?: boolean;
	}): GestureInstance;

	export function on_input(
		this: any,
		action_id: hash,
		action: {},
	): DetectedGestures;
}

/** @noSelfInFile */

/**
 * @url https://github.com/britzl/defold-input
 * @noResolution
 */
declare module 'in.keyboard' {
	export const KEYBOARD_INPUT: hash;

	type KeyboardTypes =
		| typeof gui.KEYBOARD_TYPE_DEFAULT
		| typeof gui.KEYBOARD_TYPE_EMAIL
		| typeof gui.KEYBOARD_TYPE_NUMBER_PAD
		| typeof gui.KEYBOARD_TYPE_PASSWORD;

	export function show(keyboard_type?: KeyboardTypes): void;
	export function hide(): void;
}

/** @noSelfInFile */

/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions to improve the accuracy of these types are welcome.
 * @url https://github.com/ts-defold/library
 * @noResolution
 */
declare module 'in.mapper' {
	export function bind(
		trigger: {},
		action: {},
		player?: any,
		gamepad?: any,
	): unknown;
	export function unbind(trigger: {}, player?: any): void;
	export function unbind_all(player?: any): void;
	export function on_input(
		trigger: {},
		player?: any,
		gamepad?: any,
	): {} | undefined;
}

/** @noSelfInFile */

/**
 * @url https://github.com/britzl/defold-input
 * @noResolution
 */
declare module 'in.onscreen' {
	export const BUTTON: hash;
	export const ANALOG: hash;
	export const BUTTON_PRESSED: hash;
	export const BUTTON_RELEASED: hash;
	export const ANALOG_PRESSED: hash;
	export const ANALOG_RELEASED: hash;
	export const ANALOG_MOVED: hash;
	export const ANALOG_LEFT: hash;
	export const ANALOG_RIGHT: hash;
	export const ANALOG_UP: hash;
	export const ANALOG_DOWN: hash;

	type OnscreenInstance = {
		reset: () => void;
		register_button: (
			node: node,
			settings: {} | undefined,
			fn: (action: hash, node: node, touch: {}) => void,
		) => void;
		register_analog: (
			node: node,
			settings: { radius?: number; threshold?: number } | undefined,
			fn: (action: hash, node: node, touch: {}) => void,
		) => void;
		on_input: (action_id: hash, action: {}) => boolean;
	};

	function create(config?: { touch: hash }): OnscreenInstance;

	export function reset(instance?: OnscreenInstance): void;

	export function register_button(
		node: node,
		settings: {} | undefined,
		fn: (action: hash, node: node, touch: {}) => void,
		instance?: OnscreenInstance,
	): void;

	export function register_analog(
		node: node,
		settings: { radius?: number; threshold?: number } | undefined,
		fn: (action: hash, node: node, touch: {}) => void,
		instance?: OnscreenInstance,
	): void;

	export function on_input(
		action_id: hash,
		action: {},
		instance?: OnscreenInstance,
	): boolean;
}

/** @noSelfInFile */

/**
 * @url https://github.com/britzl/defold-input
 * @noResolution
 */
declare module 'in.state' {
	type StateInstance = {
		acquire: () => void;
		release: (url?: url) => void;
		is_pressed: (action_id: hash | string) => boolean;
		on_input: (action_id: hash | string, action: {}) => void;
		clear: () => void;
	};

	export function create(): StateInstance;
	export function acquire(url: url, instance?: StateInstance): void;
	export function release(url: url, instance?: StateInstance): void;
	export function is_pressed(
		action_id: hash | string,
		instance?: StateInstance,
	): boolean;
	export function update(
		action_id: hash | string,
		action: {},
		instance?: StateInstance,
	): void;
	export function on_input(
		action_id: hash | string,
		action: {},
		instance?: StateInstance,
	): void;
	export function clear(instance?: StateInstance): void;
}

/** @noSelfInFile */

/**
 * @url https://github.com/britzl/defold-input
 * @noResolution
 */
declare module 'in.textbox' {
	export const TOUCH: hash;
	export const TYPE: hash;
	export const BACKSPACE: hash;

	export function acquire(): void;
	export function release(): void;
	export function register(
		box_node_or_string: node | string,
		text_node_or_string: node | string,
		is_masked?: boolean,
	): node;
	export function unregister(node_or_string?: node | string): void;
	export function effect(node: node, scale: { x: number; y: number }): void;
	export function text(
		node_or_string: node | string,
		text?: string,
	): string | undefined;
	export function on_input(action_id: hash, action: {}): boolean;
}

/** @noSelfInFile */

/**
 * @url https://github.com/britzl/defold-input
 * @noResolution
 */
declare module 'in.triggers' {
	export const KEY_SPACE: hash;
	export const KEY_EXCLAIM: hash;
	export const KEY_QUOTEDBL: hash;
	export const KEY_HASH: hash;
	export const KEY_DOLLAR: hash;
	export const KEY_AMPERSAND: hash;
	export const KEY_QUOTE: hash;
	export const KEY_LPAREN: hash;
	export const KEY_RPAREN: hash;
	export const KEY_ASTERISK: hash;
	export const KEY_PLUS: hash;
	export const KEY_COMMA: hash;
	export const KEY_MINUS: hash;
	export const KEY_PERIOD: hash;
	export const KEY_SLASH: hash;
	export const KEY_0: hash;
	export const KEY_1: hash;
	export const KEY_2: hash;
	export const KEY_3: hash;
	export const KEY_4: hash;
	export const KEY_5: hash;
	export const KEY_6: hash;
	export const KEY_7: hash;
	export const KEY_8: hash;
	export const KEY_9: hash;
	export const KEY_COLON: hash;
	export const KEY_SEMICOLON: hash;
	export const KEY_LESS: hash;
	export const KEY_EQUALS: hash;
	export const KEY_GREATER: hash;
	export const KEY_QUESTION: hash;
	export const KEY_AT: hash;
	export const KEY_A: hash;
	export const KEY_B: hash;
	export const KEY_C: hash;
	export const KEY_D: hash;
	export const KEY_E: hash;
	export const KEY_F: hash;
	export const KEY_G: hash;
	export const KEY_H: hash;
	export const KEY_I: hash;
	export const KEY_J: hash;
	export const KEY_K: hash;
	export const KEY_L: hash;
	export const KEY_M: hash;
	export const KEY_N: hash;
	export const KEY_O: hash;
	export const KEY_P: hash;
	export const KEY_Q: hash;
	export const KEY_R: hash;
	export const KEY_S: hash;
	export const KEY_T: hash;
	export const KEY_U: hash;
	export const KEY_V: hash;
	export const KEY_W: hash;
	export const KEY_X: hash;
	export const KEY_Y: hash;
	export const KEY_Z: hash;
	export const KEY_LBRACKET: hash;
	export const KEY_RBRACKET: hash;
	export const KEY_BACKSLASH: hash;
	export const KEY_CARET: hash;
	export const KEY_UNDERSCORE: hash;
	export const KEY_BACKQUOTE: hash;
	export const KEY_LBRACE: hash;
	export const KEY_RBRACE: hash;
	export const KEY_PIPE: hash;
	export const KEY_TILDE: hash;
	export const KEY_ESC: hash;
	export const KEY_F1: hash;
	export const KEY_F2: hash;
	export const KEY_F3: hash;
	export const KEY_F4: hash;
	export const KEY_F5: hash;
	export const KEY_F6: hash;
	export const KEY_F7: hash;
	export const KEY_F8: hash;
	export const KEY_F9: hash;
	export const KEY_F10: hash;
	export const KEY_F11: hash;
	export const KEY_F12: hash;
	export const KEY_UP: hash;
	export const KEY_DOWN: hash;
	export const KEY_LEFT: hash;
	export const KEY_RIGHT: hash;
	export const KEY_LSHIFT: hash;
	export const KEY_RSHIFT: hash;
	export const KEY_LCTRL: hash;
	export const KEY_RCTRL: hash;
	export const KEY_LALT: hash;
	export const KEY_RALT: hash;
	export const KEY_TAB: hash;
	export const KEY_ENTER: hash;
	export const KEY_BACKSPACE: hash;
	export const KEY_INSERT: hash;
	export const KEY_DEL: hash;
	export const KEY_PAGEUP: hash;
	export const KEY_PAGEDOWN: hash;
	export const KEY_HOME: hash;
	export const KEY_END: hash;
	export const KEY_KP_0: hash;
	export const KEY_KP_1: hash;
	export const KEY_KP_2: hash;
	export const KEY_KP_3: hash;
	export const KEY_KP_4: hash;
	export const KEY_KP_5: hash;
	export const KEY_KP_6: hash;
	export const KEY_KP_7: hash;
	export const KEY_KP_8: hash;
	export const KEY_KP_9: hash;
	export const KEY_KP_DIVIDE: hash;
	export const KEY_KP_MULTIPLY: hash;
	export const KEY_KP_SUBTRACT: hash;
	export const KEY_KP_ADD: hash;
	export const KEY_KP_DECIMAL: hash;
	export const KEY_KP_EQUAL: hash;
	export const KEY_KP_ENTER: hash;
	export const KEY_KP_NUM_LOCK: hash;
	export const KEY_CAPS_LOCK: hash;
	export const KEY_SCROLL_LOCK: hash;
	export const KEY_PAUSE: hash;
	export const KEY_LSUPER: hash;
	export const KEY_RSUPER: hash;
	export const KEY_MENU: hash;
	export const KEY_BACK: hash;
	export const MOUSE_WHEEL_UP: hash;
	export const MOUSE_WHEEL_DOWN: hash;
	export const MOUSE_BUTTON_LEFT: hash;
	export const MOUSE_BUTTON_MIDDLE: hash;
	export const MOUSE_BUTTON_RIGHT: hash;
	export const MOUSE_BUTTON_1: hash;
	export const MOUSE_BUTTON_2: hash;
	export const MOUSE_BUTTON_3: hash;
	export const MOUSE_BUTTON_4: hash;
	export const MOUSE_BUTTON_5: hash;
	export const MOUSE_BUTTON_6: hash;
	export const MOUSE_BUTTON_7: hash;
	export const MOUSE_BUTTON_8: hash;
	export const GAMEPAD_LSTICK_LEFT: hash;
	export const GAMEPAD_LSTICK_RIGHT: hash;
	export const GAMEPAD_LSTICK_DOWN: hash;
	export const GAMEPAD_LSTICK_UP: hash;
	export const GAMEPAD_LSTICK_CLICK: hash;
	export const GAMEPAD_LTRIGGER: hash;
	export const GAMEPAD_LSHOULDER: hash;
	export const GAMEPAD_LPAD_LEFT: hash;
	export const GAMEPAD_LPAD_RIGHT: hash;
	export const GAMEPAD_LPAD_DOWN: hash;
	export const GAMEPAD_LPAD_UP: hash;
	export const GAMEPAD_RSTICK_LEFT: hash;
	export const GAMEPAD_RSTICK_RIGHT: hash;
	export const GAMEPAD_RSTICK_DOWN: hash;
	export const GAMEPAD_RSTICK_UP: hash;
	export const GAMEPAD_RSTICK_CLICK: hash;
	export const GAMEPAD_RTRIGGER: hash;
	export const GAMEPAD_RSHOULDER: hash;
	export const GAMEPAD_RPAD_LEFT: hash;
	export const GAMEPAD_RPAD_RIGHT: hash;
	export const GAMEPAD_RPAD_DOWN: hash;
	export const GAMEPAD_RPAD_UP: hash;
	export const GAMEPAD_START: hash;
	export const GAMEPAD_BACK: hash;
	export const GAMEPAD_GUIDE: hash;
	export const GAMEPAD_CONNECTED: hash;
	export const GAMEPAD_DISCONNECTED: hash;
	export const TOUCH_MULTI: hash;
	export const TEXT: hash;
	export const MARKED_TEXT: hash;

	export function is_key(action_id: hash): boolean;
	export function is_mouse(action_id: hash): boolean;
	export function is_gamepad(action_id: hash): boolean;
}
