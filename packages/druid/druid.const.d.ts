/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.const' {
	type PivotKey =
		| typeof gui.PIVOT_CENTER
		| typeof gui.PIVOT_E
		| typeof gui.PIVOT_N
		| typeof gui.PIVOT_NE
		| typeof gui.PIVOT_NW
		| typeof gui.PIVOT_S
		| typeof gui.PIVOT_SE
		| typeof gui.PIVOT_SW
		| typeof gui.PIVOT_W;

	export const ACTION_TEXT: hash;
	export const ACTION_TOUCH: hash;
	export const ACTION_MARKED_TEXT: hash;
	export const ACTION_ESC: hash;
	export const ACTION_BACK: hash;
	export const ACTION_ENTER: hash;
	export const ACTION_MULTITOUCH: hash;
	export const ACTION_BACKSPACE: hash;
	export const ACTION_SCROLL_UP: hash;
	export const ACTION_SCROLL_DOWN: hash;
	export const IS_STENCIL_CHECK: boolean;
	export const ON_INPUT: string;
	export const ON_UPDATE: string;
	export const ON_MESSAGE: string;
	export const ON_LATE_INIT: string;
	export const ON_FOCUS_LOST: string;
	export const ON_FOCUS_GAINED: string;
	export const ON_LAYOUT_CHANGE: string;
	export const ON_MESSAGE_INPUT: string;
	export const ON_WINDOW_RESIZED: string;
	export const ON_LANGUAGE_CHANGE: string;
	export const PRIORITY_INPUT: number;
	export const PRIORITY_INPUT_HIGH: number;
	export const PRIORITY_INPUT_MAX: number;
	export const MESSAGE_INPUT: {
		BUTTON_CLICK: string;
		BUTTON_LONG_CLICK: string;
		BUTTON_DOUBLE_CLICK: string;
		BUTTON_REPEATED_CLICK: string;
		TEXT_SET: string;
	};
	export const PIVOTS: {
		[key: PivotKey]: vmath.vector3;
	};
	export const REVERSE_PIVOTS: {
		[key: PivotKey]: string;
	};
	export const LAYOUT_MODE: {
		STRETCH_X: string;
		STRETCH_Y: string;
		ZOOM_MIN: string;
		ZOOM_MAX: string;
		FIT: typeof gui.ADJUST_FIT;
		STRETCH: typeof gui.ADJUST_STRETCH;
	};
	export const VECTOR_ZERO: vmath.vector3;
	export const SYS_INFO: ReturnType<typeof sys.get_sys_info>;
	export const CURRENT_SYSTEM_NAME: string;
	export const OS: {
		ANDROID: string;
		IOS: string;
		MAC: string;
		LINUX: string;
		WINDOWS: string;
		BROWSER: string;
	};
	export const SHIFT: {
		NO_SHIFT: number;
		LEFT: number;
		RIGHT: number;
	};
	export const TEXT_ADJUST: {
		DOWNSCALE: string;
		TRIM: string;
		NO_ADJUST: string;
		DOWNSCALE_LIMITED: string;
		SCROLL: string;
		SCALE_THEN_SCROLL: string;
	};
	export const SIDE: {
		X: string;
		Y: string;
	};
	export const SWIPE: {
		UP: string;
		DOWN: string;
		LEFT: string;
		RIGHT: string;
	};
	export const ERRORS: {
		GRID_DYNAMIC_ANCHOR: string;
	};
	export const EMPTY_FUNCTION: () => void;
}
