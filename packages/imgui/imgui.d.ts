/** @noSelfInFile */

/**
 * This project adds support for Dear ImGUI in Defold.
 * @url https://github.com/britzl/extension-imgui
 * @noResolution
 */
declare namespace imgui {
	type ImguiConstant = number;

	/**
	 * @param {number} flags
	 * @returns {boolean}
	 */
	export function begin_dragdrop_source(flags: number): boolean;

	export function end_dragdrop_source(): void;

	/**
	 * @returns {boolean}
	 */
	export function begin_dragdrop_target(): boolean;

	export function end_dragdrop_target(): void;

	/**
	 * @param {string} type
	 * @param {string} payload
	 * @returns {boolean}
	 */
	export function set_dragdrop_payload(type: string, payload: string): boolean;

	/**
	 * @param {string} type
	 * @param {number} flags
	 * @returns {string}
	 */
	export function accept_dragdrop_payload(type: string, flags: number): string;

	/**
	 * @param {string} filename
	 * @returns {number}
	 */
	export function image_load(filename: string): number;

	/**
	 * @param {string} imagename
	 * @param {string} image_data
	 * @param {number} image_data_len
	 * @returns {number}
	 */
	export function image_load_data(
		imagename: string,
		image_data: string,
		image_data_len: number,
	): number;

	/**
	 * @param {string} imagename
	 * @returns {number}
	 */
	export function image_get(imagename: string): number;

	/**
	 * @param {number} imageid
	 */
	export function image_free(imageid: number): void;

	/**
	 * @param {number} imageid
	 * @param {number} pixel_width
	 * @param {number} pixel_height
	 * @param {number} uv0x
	 * @param {number} uv0y
	 * @param {number} uv1x
	 * @param {number} uv1y
	 */
	export function image_add(
		imageid: number,
		pixel_width: number,
		pixel_height: number,
		uv0x: number,
		uv0y: number,
		uv1x: number,
		uv1y: number,
	): void;

	/**
	 * @param {string} image_data_base64
	 * @param {number} image_data_len
	 * @returns {string}
	 */
	export function image_b64_decode(
		image_data_base64: string,
		image_data_len: number,
	): string;

	/**
	 * @param {string} ttf_filename
	 * @param {number} fontsize
	 * @returns {number}
	 */
	export function font_add_ttf_file(
		ttf_filename: string,
		fontsize: number,
	): number;

	/**
	 * @param {string} ttf_data
	 * @param {number} ttf_data_size
	 * @param {number} fontsize
	 * @param {number} fontpixels
	 * @returns {number}
	 */
	export function font_add_ttf_data(
		ttf_data: string,
		ttf_data_size: number,
		fontsize: number,
		fontpixels: number,
	): number;

	/**
	 * @param {number} fontid
	 */
	export function font_push(fontid: number): void;

	export function font_pop(): void;

	/**
	 * @param {number} fontid
	 * @param {number} fontscale
	 */
	export function font_scale(fontid: number, fontscale: number): void;

	/**
	 * @returns {number}
	 */
	export function get_frame_height(): number;

	/**
	 * @param {number} x
	 * @param {number} y
	 */
	export function set_cursor_pos(x: number, y: number): void;

	/**
	 * @param {number} width
	 * @param {number} height
	 */
	export function set_display_size(width: number, height: number): void;

	/**
	 * @param {number} width
	 * @param {number} height
	 * @param {number} cond
	 */
	export function set_next_window_size(
		width: number,
		height: number,
		cond?: number,
	): void;

	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} cond
	 */
	export function set_next_window_pos(
		x: number,
		y: number,
		cond?: number,
	): void;

	/**
	 * @returns {LuaMultiReturn<[number, number]>}
	 */
	export function get_window_size(): LuaMultiReturn<[number, number]>;

	/**
	 * @returns {LuaMultiReturn<[number, number]>}
	 */
	export function get_window_pos(): LuaMultiReturn<[number, number]>;

	/**
	 * @param {string} title
	 * @param {boolean} open
	 * @param {number} flags
	 * @returns {LuaMultiReturn<[boolean, boolean]>}
	 */
	export function begin_window(
		title: string,
		open: boolean,
		flags: number,
	): LuaMultiReturn<[boolean, boolean]>;

	export function end_window(): void;

	/**
	 * @param {table} flags
	 * @returns {boolean}
	 */
	export function is_window_focused(flags: {}): boolean;

	/**
	 * @returns {LuaMultiReturn<[number, number]>}
	 */
	export function get_content_region_avail(): LuaMultiReturn<[number, number]>;

	/**
	 * @returns {LuaMultiReturn<[number, number]>}
	 */
	export function get_window_content_region_max(): LuaMultiReturn<
		[number, number]
	>;

	/**
	 * @param {string} title
	 * @param {number} width
	 * @param {number} height
	 * @returns {boolean}
	 */
	export function begin_child(
		title: string,
		width: number,
		height: number,
	): boolean;

	export function end_child(): void;

	/**
	 * @param {string} id
	 * @param {number} popup_flags
	 * @returns {boolean}
	 */
	export function begin_popup_context_item(
		id: string,
		popup_flags: number,
	): boolean;

	/**
	 * @param {string} id
	 * @param {number} window_flags
	 * @returns {boolean}
	 */
	export function begin_popup(id: string, window_flags: number): boolean;

	/**
	 * @param {string} name
	 * @param {number} window_flags
	 * @returns {boolean}
	 */
	export function begin_popup_modal(
		name: string,
		window_flags: number,
	): boolean;

	/**
	 * @param {string} id
	 * @param {number} popup_flags
	 */
	export function open_popup(id: string, popup_flags: number): void;

	export function close_current_popup(): void;

	export function end_popup(): void;

	/**
	 * @param {string} label
	 * @param {string} preview
	 * @returns {boolean}
	 */
	export function begin_combo(label: string, preview: string): boolean;

	export function end_combo(): void;

	/**
	 * @param {string} label
	 * @param {nummber} current
	 * @param {table} items
	 * @returns {LuaMultiReturn<[boolean, number]>}
	 */
	export function combo(
		label: string,
		current: number,
		items: {},
	): LuaMultiReturn<[boolean, number]>;

	/**
	 * @param {string} id
	 * @param {number} column
	 * @param {number} flags
	 * @returns {boolean}
	 */
	export function begin_table(
		id: string,
		column: number,
		flags: number,
	): boolean;

	export function end_table(): void;

	export function table_headers_row(): void;

	/**
	 * @param {string} label
	 * @param {number} flags
	 * @param {number} init_width_or_weight
	 */
	export function table_setup_column(
		label: string,
		flags: number,
		init_width_or_weight: number,
	): void;

	/**
	 * @param {number} column
	 */
	export function table_set_column_index(column: number): void;

	export function table_next_column(): void;

	export function table_next_row(): void;

	/**
	 * @param {string} str
	 * @returns {number}
	 */
	export function tree_node(str: string): number;

	export function tree_pop(): void;

	/**
	 * @param {string} str
	 */
	export function push_id(str: string): void;

	export function pop_id(): void;

	export function begin_tooltip(): void;

	export function end_tooltip(): void;

	/**
	 * @param {string} id
	 * @returns {boolean}
	 */
	export function begin_tab_bar(id: string): boolean;

	export function end_tab_bar(): void;

	/**
	 * @param {string} label
	 * @param {boolean} open
	 * @param {number} flags
	 * @returns {LuaMultiReturn<[boolean, boolean]>}
	 */
	export function begin_tab_item(
		label: string,
		open: boolean,
		flags: number,
	): LuaMultiReturn<[boolean, boolean]>;

	/**
	 * @param {string} str
	 */
	export function text(str: string): void;

	/**
	 * @param {string} str
	 * @param {number} Red
	 * @param {number} Green
	 * @param {number} Blue
	 * @param {number} Alpha
	 */
	export function text_colored(
		str: string,
		Red: number,
		Green: number,
		Blue: number,
		Alpha: number,
	): void;

	/**
	 * @param {string} label
	 * @param {string} str
	 * @param {number} flags
	 * @returns {boolean}
	 */
	export function input_text(
		label: string,
		str: string,
		flags: number,
	): boolean;

	/**
	 * @param {string} label
	 * @param {number} value
	 * @returns {boolean}
	 */
	export function input_int(label: string, value: number): boolean;

	/**
	 * @param {string} label
	 * @param {number} float
	 * @param {number} step
	 * @param {number} step_fast
	 * @param {number} float_precision
	 * @returns {number}
	 */
	export function input_float(
		label: string,
		float: number,
		step: number,
		step_fast: number,
		float_precision: number,
	): number;

	/**
	 * @param {string} label
	 * @param {number} v1
	 * @param {number} v2
	 * @param {number} v3
	 * @returns {LuaMultiReturn<[boolean, number, number, number]>}
	 */
	export function input_float3(
		label: string,
		v1: number,
		v2: number,
		v3: number,
	): LuaMultiReturn<[boolean, number, number, number]>;

	/**
	 * @param {string} label
	 * @param {number} v1
	 * @param {number} v2
	 * @param {number} v3
	 * @param {number} v4
	 * @returns {LuaMultiReturn<[boolean, number, number, number, number]>}
	 */
	export function input_float4(
		label: string,
		v1: number,
		v2: number,
		v3: number,
		v4: number,
	): LuaMultiReturn<[boolean, number, number, number, number]>;

	/**
	 * @param {string} label
	 * @param {number} double
	 * @param {number} step
	 * @param {number} step_fast
	 * @param {number} double_precision
	 * @returns {number}
	 */
	export function input_double(
		label: string,
		double: number,
		step: number,
		step_fast: number,
		double_precision: number,
	): number;

	/**
	 * @param {string} label
	 * @param {number} float
	 * @param {number} min
	 * @param {number} max
	 * @param {number} float_precision
	 * @returns {number}
	 */
	export function slider_float(
		label: string,
		float: number,
		min: number,
		max: number,
		float_precision: number,
	): number;

	/**
	 * @param {string} str
	 * @param {boolean} selected
	 * @param {number} flags
	 * @returns {boolean}
	 */
	export function selectable(
		str: string,
		selected: boolean,
		flags: number,
	): boolean;

	/**
	 * @param {string} str
	 * @returns {boolean}
	 */
	export function button(str: string): boolean;

	/**
	 * @param {number} imageid
	 * @param {number} width_opt_
	 * @param {number} height_opt_
	 * @returns {boolean}
	 */
	export function button_image(
		imageid: number,
		width_opt_: number,
		height_opt_: number,
	): boolean;

	/**
	 * @param {string} str
	 * @param {boolean} checked
	 * @returns {LuaMultiReturn<[boolean, boolean]>}
	 */
	export function checkbox(
		str: string,
		checked: boolean,
	): LuaMultiReturn<[boolean, boolean]>;

	/**
	 * @param {string} str
	 * @param {boolean} checked
	 * @returns {LuaMultiReturn<[boolean, boolean]>}
	 */
	export function radio_button(
		str: string,
		checked: boolean,
	): LuaMultiReturn<[boolean, boolean]>;

	/**
	 * @returns {boolean}
	 */
	export function begin_menu_bar(): boolean;

	export function end_menu_bar(): void;

	/**
	 * @returns {boolean}
	 */
	export function begin_main_menu_bar(): boolean;

	export function end_main_menu_bar(): void;

	/**
	 * @param {string} label
	 * @param {bool} enabled
	 * @returns {boolean}
	 */
	export function begin_menu(label: string, enabled?: boolean): boolean;

	export function end_menu(): void;

	/**
	 * @param {string} label
	 * @param {string} shortcut
	 * @param {boolean} selected
	 * @param {boolean} enabled
	 * @returns {LuaMultiReturn<[boolean, boolean]>}
	 */
	export function menu_item(
		label: string,
		shortcut?: string,
		selected?: boolean,
		enabled?: boolean,
	): LuaMultiReturn<[boolean, boolean]>;

	/**
	 * @param {number} offset
	 */
	export function same_line(offset: number): void;

	export function new_line(): void;

	export function bullet(): void;

	export function indent(): void;

	export function unindent(): void;

	export function spacing(): void;

	export function separator(): void;

	/**
	 * @returns {LuaMultiReturn<[number, number]>}
	 */
	export function get_cursor_screen_pos(): LuaMultiReturn<[number, number]>;

	/**
	 * @param {number} x1
	 * @param {number} y1
	 * @param {number} x2
	 * @param {number} y2
	 * @param {number} r
	 * @param {number} g
	 * @param {number} b
	 * @param {number} a
	 * @param {number} thickness
	 */
	export function add_line(
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		r: number,
		g: number,
		b: number,
		a: number,
		thickness: number,
	): void;

	/**
	 * @param {number} x1
	 * @param {number} y1
	 * @param {number} x2
	 * @param {number} y2
	 * @param {number} r
	 * @param {number} g
	 * @param {number} b
	 * @param {number} a
	 * @param {number} thickness
	 */
	export function add_rect(
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		r: number,
		g: number,
		b: number,
		a: number,
		thickness: number,
	): void;

	/**
	 * @param {string} label
	 * @param {number} valueoffset
	 * @param {number} width
	 * @param {number} height
	 * @param {table} plotdata
	 */
	export function plot_lines(
		label: string,
		valueoffset: number,
		width: number,
		height: number,
		plotdata: {},
	): void;

	/**
	 * @param {string} label
	 * @param {number} valueoffset
	 * @param {number} width
	 * @param {number} height
	 * @param {table} plotdata
	 */
	export function plot_histogram(
		label: string,
		valueoffset: number,
		width: number,
		height: number,
		plotdata: {},
	): void;

	/**
	 * @returns {number}
	 */
	export function text_getsize(): number;

	/**
	 * @param {number} x1
	 * @param {number} y1
	 * @param {number} x2
	 * @param {number} y2
	 * @param {number} color
	 */
	export function draw_line(
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		color: number,
	): void;

	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 * @param {number} color
	 */
	export function draw_rect(
		x: number,
		y: number,
		width: number,
		height: number,
		color: number,
	): void;

	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 * @param {number} color
	 */
	export function draw_rect_filled(
		x: number,
		y: number,
		width: number,
		height: number,
		color: number,
	): void;

	/**
	 * @param {number} progress
	 * @param {number} sizex
	 * @param {number} sizey
	 */
	export function draw_progress(
		progress: number,
		sizex: number,
		sizey: number,
	): void;

	/**
	 * @param {boolean} enabled
	 */
	export function set_rendering_enabled(enabled: boolean): void;

	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} mouse1
	 * @param {number} mouse2
	 * @param {number} mouse3
	 * @param {number} mousewheel
	 */
	export function set_mouse_input(
		x: number,
		y: number,
		mouse1: number,
		mouse2: number,
		mouse3: number,
		mousewheel: number,
	): void;

	/**
	 * @param {number} keyid
	 * @param {boolean} state
	 */
	export function set_key_down(keyid: number, state: boolean): void;

	/**
	 * @param {boolean} state
	 */
	export function set_key_modifier_ctrl(state: boolean): void;

	/**
	 * @param {boolean} state
	 */
	export function set_key_modifier_shift(state: boolean): void;

	/**
	 * @param {boolean} state
	 */
	export function set_key_modifier_alt(state: boolean): void;

	/**
	 * @param {boolean} state
	 */
	export function set_key_modifier_super(state: boolean): void;

	/**
	 * @param {string} character
	 */
	export function add_input_character(character: string): void;

	/**
	 * @param {number} button
	 * @returns {boolean}
	 */
	export function is_mouse_double_clicked(button: number): boolean;

	/**
	 * @param {number} button
	 * @returns {boolean}
	 */
	export function is_mouse_clicked(button: number): boolean;

	/**
	 * @returns {boolean}
	 */
	export function is_item_active(): boolean;

	/**
	 * @returns {boolean}
	 */
	export function is_item_focused(): boolean;

	/**
	 * @param {number} button
	 * @returns {boolean}
	 */
	export function is_item_clicked(button: number): boolean;

	/**
	 * @param {number} button
	 * @returns {boolean}
	 */
	export function is_item_double_clicked(button: number): boolean;

	/**
	 * @returns {boolean}
	 */
	export function is_item_hovered(): boolean;

	/**
	 * @returns {LuaMultiReturn<[number, number]>}
	 */
	export function get_item_rect_max(): LuaMultiReturn<[number, number]>;

	/**
	 * @param {number} offset
	 */
	export function set_keyboard_focus_here(offset: number): void;

	/**
	 * @param {number} rounding
	 */
	export function set_style_window_rounding(rounding: number): void;

	/**
	 * @param {number} bordersize
	 */
	export function set_style_window_bordersize(bordersize: number): void;

	/**
	 * @param {number} bordersize
	 */
	export function set_style_child_bordersize(bordersize: number): void;

	/**
	 * @param {number} rounding
	 */
	export function set_style_frame_rounding(rounding: number): void;

	/**
	 * @param {number} rounding
	 */
	export function set_style_tab_rounding(rounding: number): void;

	/**
	 * @param {number} rounding
	 */
	export function set_style_scrollbar_rounding(rounding: number): void;

	/**
	 * @param {number} size
	 */
	export function set_style_scrollbar_size(size: number): void;

	/**
	 * @param {number} style
	 * @param {number} r
	 * @param {number} g
	 * @param {number} b
	 * @param {number} a
	 */
	export function set_style_color(
		style: number,
		r: number,
		g: number,
		b: number,
		a: number,
	): void;

	/**
	 * @param {number} color
	 * @param {number} r
	 * @param {number} g
	 * @param {number} b
	 * @param {number} a
	 */
	export function push_style_color(
		color: number,
		r: number,
		g: number,
		b: number,
		a: number,
	): void;

	/**
	 * @param {number} count
	 */
	export function pop_style_color(count: number): void;

	/**
	 * @returns {LuaMultiReturn<[number, number]>}
	 */
	export function get_style_item_spacing(): LuaMultiReturn<[number, number]>;

	/**
	 * @param {number} fontscale
	 */
	export function set_window_font_scale(fontscale: number): void;

	/**
	 * @param {number} fontscale
	 */
	export function set_global_font_scale(fontscale: number): void;

	/**
	 * @param {number} scale
	 */
	export function scale_all_sizes(scale: number): void;

	/**
	 * @param {number} width
	 */
	export function push_item_width(width: number): void;

	export function pop_item_width(): void;

	/**
	 * @param {number} width
	 */
	export function set_next_item_width(width: number): void;

	/**
	 * @returns {number}
	 */
	export function calc_item_width(): number;

	/**
	 * @param {number} center_y_ratio
	 */
	export function set_scroll_here_y(center_y_ratio: number): void;

	/**
	 * @returns {boolean}
	 */
	export function want_mouse_input(): boolean;

	/**
	 * @returns {boolean}
	 */
	export function want_keyboard_input(): boolean;

	/**
	 * @returns {boolean}
	 */
	export function want_text_input(): boolean;

	export function set_defaults(): void;

	/**
	 * @param {string} filename
	 */
	export function set_ini_filename(filename: string): void;

	export const MOUSEBUTTON_LEFT: ImguiConstant;
	export const MOUSEBUTTON_RIGHT: ImguiConstant;
	export const MOUSEBUTTON_MIDDLE: ImguiConstant;
	export const SELECTABLE_DONT_CLOSE_POPUPS: ImguiConstant;
	export const SELECTABLE_SPAN_ALL_COLUMNS: ImguiConstant;
	export const SELECTABLE_ALLOW_DOUBLE_CLICK: ImguiConstant;
	export const SELECTABLE_DISABLED: ImguiConstant;
	export const SELECTABLE_ALLOW_ITEM_OVERLAP: ImguiConstant;
	export const TABITEM_UNSAVED_DOCUMENT: ImguiConstant;
	export const TABITEM_SET_SELECTED: ImguiConstant;
	export const TABITEM_NO_CLOSE_WITH_MIDDLE_MOUSE_BUTTON: ImguiConstant;
	export const TABITEM_NO_PUSH_ID: ImguiConstant;
	export const TABITEM_NO_TOOLTIP: ImguiConstant;
	export const TABITEM_NO_REORDER: ImguiConstant;
	export const TABITEM_LEADING: ImguiConstant;
	export const TABITEM_TRAILING: ImguiConstant;
	export const FOCUSED_CHILD_WINDOWS: ImguiConstant;
	export const FOCUSED_ROOT_WINDOW: ImguiConstant;
	export const FOCUSED_ANY_WINDOW: ImguiConstant;
	export const FOCUSED_ROOT_AND_CHILD_WINDOWS: ImguiConstant;
	export const TREENODE_SELECTED: ImguiConstant;
	export const TREENODE_FRAMED: ImguiConstant;
	export const TREENODE_ALLOW_ITEM_OVERLAP: ImguiConstant;
	export const TREENODE_NO_TREE_PUSH_ON_OPEN: ImguiConstant;
	export const TREENODE_NO_AUTO_OPEN_ON_LOG: ImguiConstant;
	export const TREENODE_DEFAULT_OPEN: ImguiConstant;
	export const TREENODE_OPEN_ON_DOUBLE_CLICK: ImguiConstant;
	export const TREENODE_OPEN_ON_ARROW: ImguiConstant;
	export const TREENODE_LEAF: ImguiConstant;
	export const TREENODE_BULLET: ImguiConstant;
	export const TREENODE_FRAME_PADDING: ImguiConstant;
	export const TREENODE_SPAN_AVAILABLE_WIDTH: ImguiConstant;
	export const TREENODE_SPAN_FULL_WIDTH: ImguiConstant;
	export const TREENODE_NAV_LEFT_JUMPS_BACK_HERE: ImguiConstant;
	export const ImGuiCol_Text: ImguiConstant;
	export const ImGuiCol_TextDisabled: ImguiConstant;
	export const ImGuiCol_WindowBg: ImguiConstant;
	export const ImGuiCol_ChildBg: ImguiConstant;
	export const ImGuiCol_PopupBg: ImguiConstant;
	export const ImGuiCol_Border: ImguiConstant;
	export const ImGuiCol_BorderShadow: ImguiConstant;
	export const ImGuiCol_FrameBg: ImguiConstant;
	export const ImGuiCol_FrameBgHovered: ImguiConstant;
	export const ImGuiCol_FrameBgActive: ImguiConstant;
	export const ImGuiCol_TitleBg: ImguiConstant;
	export const ImGuiCol_TitleBgActive: ImguiConstant;
	export const ImGuiCol_TitleBgCollapsed: ImguiConstant;
	export const ImGuiCol_MenuBarBg: ImguiConstant;
	export const ImGuiCol_ScrollbarBg: ImguiConstant;
	export const ImGuiCol_ScrollbarGrab: ImguiConstant;
	export const ImGuiCol_ScrollbarGrabHovered: ImguiConstant;
	export const ImGuiCol_ScrollbarGrabActive: ImguiConstant;
	export const ImGuiCol_CheckMark: ImguiConstant;
	export const ImGuiCol_SliderGrab: ImguiConstant;
	export const ImGuiCol_SliderGrabActive: ImguiConstant;
	export const ImGuiCol_Button: ImguiConstant;
	export const ImGuiCol_ButtonHovered: ImguiConstant;
	export const ImGuiCol_ButtonActive: ImguiConstant;
	export const ImGuiCol_Header: ImguiConstant;
	export const ImGuiCol_HeaderHovered: ImguiConstant;
	export const ImGuiCol_HeaderActive: ImguiConstant;
	export const ImGuiCol_Separator: ImguiConstant;
	export const ImGuiCol_SeparatorHovered: ImguiConstant;
	export const ImGuiCol_SeparatorActive: ImguiConstant;
	export const ImGuiCol_ResizeGrip: ImguiConstant;
	export const ImGuiCol_ResizeGripHovered: ImguiConstant;
	export const ImGuiCol_ResizeGripActive: ImguiConstant;
	export const ImGuiCol_Tab: ImguiConstant;
	export const ImGuiCol_TabHovered: ImguiConstant;
	export const ImGuiCol_TabActive: ImguiConstant;
	export const ImGuiCol_TabUnfocused: ImguiConstant;
	export const ImGuiCol_TabUnfocusedActive: ImguiConstant;
	export const ImGuiCol_PlotLines: ImguiConstant;
	export const ImGuiCol_PlotLinesHovered: ImguiConstant;
	export const ImGuiCol_PlotHistogram: ImguiConstant;
	export const ImGuiCol_PlotHistogramHovered: ImguiConstant;
	export const ImGuiCol_TableHeaderBg: ImguiConstant;
	export const ImGuiCol_TableBorderStrong: ImguiConstant;
	export const ImGuiCol_TableBorderLight: ImguiConstant;
	export const ImGuiCol_TableRowBg: ImguiConstant;
	export const ImGuiCol_TableRowBgAlt: ImguiConstant;
	export const ImGuiCol_TextSelectedBg: ImguiConstant;
	export const ImGuiCol_DragDropTarget: ImguiConstant;
	export const ImGuiCol_NavHighlight: ImguiConstant;
	export const ImGuiCol_NavWindowingHighlight: ImguiConstant;
	export const ImGuiCol_NavWindowingDimBg: ImguiConstant;
	export const ImGuiCol_ModalWindowDimBg: ImguiConstant;
	export const TABLECOLUMN_NONE: ImguiConstant;
	export const TABLECOLUMN_DEFAULTHIDE: ImguiConstant;
	export const TABLECOLUMN_DEFAULTSORT: ImguiConstant;
	export const TABLECOLUMN_WIDTHSTRETCH: ImguiConstant;
	export const TABLECOLUMN_WIDTHFIXED: ImguiConstant;
	export const TABLECOLUMN_NORESIZE: ImguiConstant;
	export const TABLECOLUMN_NOREORDER: ImguiConstant;
	export const TABLECOLUMN_NOHIDE: ImguiConstant;
	export const TABLECOLUMN_NOCLIP: ImguiConstant;
	export const TABLECOLUMN_NOSORT: ImguiConstant;
	export const TABLECOLUMN_NOSORTASCENDING: ImguiConstant;
	export const TABLECOLUMN_NOSORTDESCENDING: ImguiConstant;
	export const TABLECOLUMN_NOHEADERWIDTH: ImguiConstant;
	export const TABLECOLUMN_PREFERSORTASCENDING: ImguiConstant;
	export const TABLECOLUMN_PREFERSORTDESCENDING: ImguiConstant;
	export const TABLECOLUMN_INDENTENABLE: ImguiConstant;
	export const TABLECOLUMN_INDENTDISABLE: ImguiConstant;
	export const WINDOWFLAGS_NONE: ImguiConstant;
	export const WINDOWFLAGS_NOTITLEBAR: ImguiConstant;
	export const WINDOWFLAGS_NORESIZE: ImguiConstant;
	export const WINDOWFLAGS_NOMOVE: ImguiConstant;
	export const WINDOWFLAGS_NOSCROLLBAR: ImguiConstant;
	export const WINDOWFLAGS_NOSCROLLWITHMOUSE: ImguiConstant;
	export const WINDOWFLAGS_NOCOLLAPSE: ImguiConstant;
	export const WINDOWFLAGS_ALWAYSAUTORESIZE: ImguiConstant;
	export const WINDOWFLAGS_NOBACKGROUND: ImguiConstant;
	export const WINDOWFLAGS_NOSAVEDSETTINGS: ImguiConstant;
	export const WINDOWFLAGS_NOMOUSEINPUTS: ImguiConstant;
	export const WINDOWFLAGS_MENUBAR: ImguiConstant;
	export const WINDOWFLAGS_HORIZONTALSCROLLBAR: ImguiConstant;
	export const WINDOWFLAGS_NOFOCUSONAPPEARING: ImguiConstant;
	export const WINDOWFLAGS_NOBRINGTOFRONTONFOCUS: ImguiConstant;
	export const WINDOWFLAGS_ALWAYSVERTICALSCROLLBAR: ImguiConstant;
	export const WINDOWFLAGS_ALWAYSHORIZONTALSCROLLBAR: ImguiConstant;
	export const WINDOWFLAGS_ALWAYSUSEWINDOWPADDING: ImguiConstant;
	export const WINDOWFLAGS_NONAVINPUTS: ImguiConstant;
	export const WINDOWFLAGS_NONAVFOCUS: ImguiConstant;
	export const WINDOWFLAGS_UNSAVEDDOCUMENT: ImguiConstant;
	export const WINDOWFLAGS_NONAV: ImguiConstant;
	export const WINDOWFLAGS_NODECORATION: ImguiConstant;
	export const WINDOWFLAGS_NOINPUTS: ImguiConstant;
	export const POPUPFLAGS_NONE: ImguiConstant;
	export const POPUPFLAGS_MOUSEBUTTONLEFT: ImguiConstant;
	export const POPUPFLAGS_MOUSEBUTTONRIGHT: ImguiConstant;
	export const POPUPFLAGS_MOUSEBUTTONMIDDLE: ImguiConstant;
	export const POPUPFLAGS_MOUSEBUTTONMASK: ImguiConstant;
	export const POPUPFLAGS_MOUSEBUTTONDEFAULT: ImguiConstant;
	export const POPUPFLAGS_NOOPENOVEREXISTINGPOPUP: ImguiConstant;
	export const POPUPFLAGS_NOOPENOVERITEMS: ImguiConstant;
	export const POPUPFLAGS_ANYPOPUPID: ImguiConstant;
	export const POPUPFLAGS_ANYPOPUPLEVEL: ImguiConstant;
	export const POPUPFLAGS_ANYPOPUP: ImguiConstant;
	export const DROPFLAGS_NONE: ImguiConstant;
	export const DROPFLAGS_SOURCENOPREVIEWTOOLTIP: ImguiConstant;
	export const DROPFLAGS_SOURCENODISABLEHOVER: ImguiConstant;
	export const DROPFLAGS_SOURCENOHOLDTOOPENOTHERS: ImguiConstant;
	export const DROPFLAGS_SOURCEALLOWNULLID: ImguiConstant;
	export const DROPFLAGS_SOURCEEXTERN: ImguiConstant;
	export const DROPFLAGS_SOURCEAUTOEXPIREPAYLOAD: ImguiConstant;
	export const DROPFLAGS_ACCEPTBEFOREDELIVERY: ImguiConstant;
	export const DROPFLAGS_ACCEPTNODRAWDEFAULTRECT: ImguiConstant;
	export const DROPFLAGS_ACCEPTNOPREVIEWTOOLTIP: ImguiConstant;
	export const DROPFLAGS_ACCEPTPEEKONLY: ImguiConstant;
	export const TABLE_NONE: ImguiConstant;
	export const TABLE_RESIZABLE: ImguiConstant;
	export const TABLE_REORDERABLE: ImguiConstant;
	export const TABLE_HIDEABLE: ImguiConstant;
	export const TABLE_SORTABLE: ImguiConstant;
	export const TABLE_NOSAVEDSETTINGS: ImguiConstant;
	export const TABLE_CONTEXTMENUINBODY: ImguiConstant;
	export const TABLE_ROWBG: ImguiConstant;
	export const TABLE_BORDERSINNERH: ImguiConstant;
	export const TABLE_BORDERSOUTERH: ImguiConstant;
	export const TABLE_BORDERSINNERV: ImguiConstant;
	export const TABLE_BORDERSOUTERV: ImguiConstant;
	export const TABLE_BORDERSH: ImguiConstant;
	export const TABLE_BORDERSV: ImguiConstant;
	export const TABLE_BORDERSINNER: ImguiConstant;
	export const TABLE_BORDERSOUTER: ImguiConstant;
	export const TABLE_BORDERS: ImguiConstant;
	export const TABLE_NOBORDERSINBODY: ImguiConstant;
	export const TABLE_NOBORDERSINBODYUNTILRESIZE: ImguiConstant;
	export const TABLE_SIZINGFIXEDFIT: ImguiConstant;
	export const TABLE_SIZINGFIXEDSAME: ImguiConstant;
	export const TABLE_SIZINGSTRETCHPROP: ImguiConstant;
	export const TABLE_SIZINGSTRETCHSAME: ImguiConstant;
	export const TABLE_NOHOSTEXTENDX: ImguiConstant;
	export const TABLE_NOHOSTEXTENDY: ImguiConstant;
	export const TABLE_NOKEEPCOLUMNSVISIBLE: ImguiConstant;
	export const TABLE_PRECISEWIDTHS: ImguiConstant;
	export const TABLE_NOCLIP: ImguiConstant;
	export const TABLE_PADOUTERX: ImguiConstant;
	export const TABLE_NOPADOUTERX: ImguiConstant;
	export const TABLE_NOPADINNERX: ImguiConstant;
	export const TABLE_SCROLLX: ImguiConstant;
	export const TABLE_SCROLLY: ImguiConstant;
	export const TABLE_SORTMULTI: ImguiConstant;
	export const TABLE_SORTTRISTATE: ImguiConstant;
	export const INPUTFLAGS_NONE: ImguiConstant;
	export const INPUTFLAGS_CHARSDECIMAL: ImguiConstant;
	export const INPUTFLAGS_CHARSHEXADECIMAL: ImguiConstant;
	export const INPUTFLAGS_CHARSUPPERCASE: ImguiConstant;
	export const INPUTFLAGS_CHARSNOBLANK: ImguiConstant;
	export const INPUTFLAGS_AUTOSELECTALL: ImguiConstant;
	export const INPUTFLAGS_ENTERRETURNSTRUE: ImguiConstant;
	export const INPUTFLAGS_CALLBACKCOMPLETION: ImguiConstant;
	export const INPUTFLAGS_CALLBACKHISTORY: ImguiConstant;
	export const INPUTFLAGS_CALLBACKALWAYS: ImguiConstant;
	export const INPUTFLAGS_CALLBACKCHARFILTER: ImguiConstant;
	export const INPUTFLAGS_ALLOWTABINPUT: ImguiConstant;
	export const INPUTFLAGS_CTRLENTERFORNEWLINE: ImguiConstant;
	export const INPUTFLAGS_NOHORIZONTALSCROLL: ImguiConstant;
	export const INPUTFLAGS_ALWAYSINSERTMODE: ImguiConstant;
	export const INPUTFLAGS_READONLY: ImguiConstant;
	export const INPUTFLAGS_PASSWORD: ImguiConstant;
	export const INPUTFLAGS_NOUNDOREDO: ImguiConstant;
	export const INPUTFLAGS_CHARSSCIENTIFIC: ImguiConstant;
	export const INPUTFLAGS_CALLBACKRESIZE: ImguiConstant;
	export const INPUTFLAGS_CALLBACKEDIT: ImguiConstant;
	export const KEY_TAB: ImguiConstant;
	export const KEY_LEFTARROW: ImguiConstant;
	export const KEY_RIGHTARROW: ImguiConstant;
	export const KEY_UPARROW: ImguiConstant;
	export const KEY_DOWNARROW: ImguiConstant;
	export const KEY_PAGEUP: ImguiConstant;
	export const KEY_PAGEDOWN: ImguiConstant;
	export const KEY_HOME: ImguiConstant;
	export const KEY_END: ImguiConstant;
	export const KEY_INSERT: ImguiConstant;
	export const KEY_DELETE: ImguiConstant;
	export const KEY_BACKSPACE: ImguiConstant;
	export const KEY_SPACE: ImguiConstant;
	export const KEY_ENTER: ImguiConstant;
	export const KEY_ESCAPE: ImguiConstant;
	export const KEY_KEYPADENTER: ImguiConstant;
	export const KEY_A: ImguiConstant;
	export const KEY_C: ImguiConstant;
	export const KEY_V: ImguiConstant;
	export const KEY_X: ImguiConstant;
	export const KEY_Y: ImguiConstant;
	export const KEY_Z: ImguiConstant;
}
