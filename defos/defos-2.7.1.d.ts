/// <library version="2.7.1" src="https://github.com/subsoap/defos/archive/refs/tags/v2.7.1.zip" />
/** @noSelfInFile */

/**
 * Extra native OS functions for games written using the Defold game engine.
 * Currently supports macOS, Windows, Linux and HTML5.
 * @see {@link https://github.com/subsoap/defos|Github Source}
 */
declare namespace defos {
	type DisplayId = number & LuaUserdata;

	type DisplayInfo = {
		id: DisplayId;
		bounds: {
			x: number;
			y: number;
			width: number;
			height: number;
		};
		mode: ResolutionMode;
		name?: string;
	};

	type ResolutionMode = {
		width: number;
		height: number;
		scaling_factor: number;
		refresh_rate: number;
		bits_per_pixel: number;
		orientation: number;
		reflect_x: boolean;
		reflect_y: boolean;
	};

	/**
	 * On HTML5, an URL to an image (data URLs work as well).
	 * On Windows, a path to an .ani or .cur file on the file system.
	 * On Linux, a path to an X11 cursor file on the file system.
	 * On macOS, a table of the form:
	 * ```
	 * {
	 * image = resource.load("cursor.tiff"),
	 * hot_spot_x = 18,
	 * hot_spot_y = 2,
	 * }
	 * ```
	 */
	type CursorData =
		| string
		| {
				image: ReturnType<typeof resource.load>;
				hot_spot_x: number;
				hot_spot_y: number;
		  };

	type LoadedCursor = LuaUserdata & {
		readonly __cursor__: unique symbol;
	};

	type Cursors =
		| undefined
		| typeof CURSOR_ARROW
		| typeof CURSOR_HAND
		| typeof CURSOR_CROSSHAIR
		| typeof CURSOR_IBEAM
		| LoadedCursor
		| CursorData;

	export const CURSOR_ARROW: number & {
		readonly __cursor__: unique symbol;
	};
	export const CURSOR_HAND: number & {
		readonly __cursor__: unique symbol;
	};
	export const CURSOR_CROSSHAIR: number & {
		readonly __cursor__: unique symbol;
	};
	export const CURSOR_IBEAM: number & {
		readonly __cursor__: unique symbol;
	};

	/** Not supported on HTML5 */
	export function disable_maximize_button(): void;
	/** Not supported on HTML5 */
	export function disable_minimize_button(): void;
	/** Not supported on HTML5 */
	export function disable_window_resize(): void;
	export function set_window_title(title: string): void;

	export function set_maximized(value: boolean): void;
	export function toggle_maximized(): void;
	export function is_maximized(): boolean;

	/** On HTML5, this only works from defos.on_click() or defos.on_interaction(). */
	export function set_fullscreen(value: boolean): void;
	/** On HTML5, this only works from defos.on_click() or defos.on_interaction(). */
	export function toggle_fullscreen(): void;
	export function is_fullscreen(): boolean;

	/** Keep window on top. Not supported on HTML5. */
	export function set_always_on_top(value: boolean): void;
	/** Not supported on HTML5. */
	export function toggle_always_on_top(): void;
	/** Not supported on HTML5. */
	export function is_always_on_top(): boolean;

	/** Not supported on HTML5. */
	export function minimize(): void;
	/** Activate (focus) window. Not supported on HTML5. */
	export function activate(): void;

	/**
	 * Get the window's size and position in screen coordinates.
	 * The window area includes the title bar, so the actual contained game view area might be smaller than the given metrics.
	 *
	 * Screen coordinates start at (0, 0) in the top-left corner of the main display. X axis goes right. Y axis goes down.
	 */
	export function get_window_size(): LuaMultiReturn<
		[number, number, number, number]
	>;
	/**
	 * Set the window's size and position in screen coordinates.
	 * The window area includes the title bar, so the actual contained game view area might be smaller than the given metrics.
	 *
	 * Passing undefined for x and y will center the window in the middle of the display.
	 *
	 * Screen coordinates start at (0, 0) in the top-left corner of the main display. X axis goes right. Y axis goes down.
	 */
	export function set_window_size(
		x: number | undefined,
		y: number | undefined,
		w: number,
		h: number,
	): void;

	/**
	 * Get the game view size and position in screen coordinates. This adjusts the window so that its containing game view is at the desired size and position. The window will be larger than the given metrics because it includes the title bar.
	 */
	export function get_view_size(): LuaMultiReturn<
		[number, number, number, number]
	>;
	/**
	 * Set the game view size and position in screen coordinates. This adjusts the window so that its containing game view is at the desired size and position. The window will be larger than the given metrics because it includes the title bar.
	 *
	 * Passing undefined for x and y will center the window in the middle of the display.
	 */
	export function set_view_size(
		x: number | undefined,
		y: number | undefined,
		w: number,
		h: number,
	): void;

	/** Not supported on HTML5. */
	export function get_displays(): DisplayInfo[];
	/** Not supported on HTML5. */
	export function get_current_display_id(): DisplayId;
	/** Not supported on HTML5. */
	export function get_display_modes(displayId: DisplayId): ResolutionMode[];

	export function set_cursor_visible(value: boolean): void;
	export function is_cursor_visible(): boolean;

	export function is_mouse_in_view(): boolean;
	export function on_mouse_enter(callback: () => void): void;
	export function on_mouse_leave(callback: () => void): void;

	export function get_cursor_pos(): LuaMultiReturn<[number, number]>;
	export function get_cursor_pos_view(): LuaMultiReturn<[number, number]>;

	/** Not supported on HTML5. */
	export function set_cursor_pos(x: number, y: number): void;
	/** Not supported on HTML5. */
	export function set_cursor_pos_view(x: number, y: number): void;

	/** Not supported on Linux and HTML5. */
	export function set_cursor_clipped(value: boolean): void;
	/** Not supported on Linux and HTML5. */
	export function is_cursor_clipped(): boolean;

	/** On HTML5 this only works from defos.on_click() or defos.on_interaction(). Not supported on Linux yet. */
	export function set_cursor_locked(value: boolean): void;
	/** Not supported on Linux yet. */
	export function is_cursor_locked(): boolean;
	/** Not supported on Linux yet. */
	export function on_cursor_lock_disabled(callback: () => void): void;

	export function load_cursor(cursorData: CursorData): LoadedCursor;

	/**
	 * cursor can be one of the following:
	 * ```
	 * undefined: Resets the cursor to default. Equivalent to defos.reset_cursor().
	 * defos.CURSOR_ARROW
	 * defos.CURSOR_HAND
	 * defos.CURSOR_CROSSHAIR
	 * defos.CURSOR_IBEAM
	 * A cursor value obtained with defos.load_cursor().
	 * A cursor_data value that will be used to create a single-use cursor. See defos.load_cursor() above for supported values.
	 * ```
	 */
	export function set_cursor(cursor: Cursors): void;
	export function reset_cursor(): void;

	/** Show/hide the console window on Windows. Only works when not running from the Editor. */
	export function set_console_visible(value: boolean): void;
	export function is_console_visible(): boolean;

	/**
	 * On HTML5 only, get a synchronous event on user interaction with the canvas.
	 * User interaction is either a mouse click, touch or key press.
	 * This is necessary because some HTML5 functions only work when called synchronously from an event handler.
	 */
	export function on_interaction(callback: () => void): void;
	/**
	 * On HTML5 only, get a synchronous event on user interaction with the canvas.
	 * User interaction is either a mouse click, touch or key press.
	 * This is necessary because some HTML5 functions only work when called synchronously from an event handler.
	 */
	export function on_click(callback: () => void): void;

	/**
	 * Get the absolute path to the game's containing directory. On macOS this will be the path to the .app bundle. On HTML5 this will be the page URL up until the last /.
	 */
	export function get_bundle_root(): string;

	/**
	 * The system path separator. "\\" on Windows, "/" everywhere else.
	 */
	export const PATH_SEP: string;

	/**
	 * Change the game window's icon at runtime. On Windows, this function accepts .ico files. On macOS this accepts any image file supported by NSImage. On Linux this function is not supported yet.
	 */
	export function set_window_icon(pathToIconFile: string): void;

	/**
	 * Returns a table of command line arguments used to run the app. On HTML5, returns a table with a single string: the query string part of the URL (eg. { "?param1=foo&param2=bar" }).
	 */
	export function get_arguments(): string[];
}
