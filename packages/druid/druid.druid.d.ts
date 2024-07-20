type Component = {};

/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.druid' {
	// Built-in Modules
	class BackHandler {
		on_back: DruidEvent;
		params: any[];
	}
	class Blocker {
		init(this: Blocker, node: node): void;
		is_enabled(this: Blocker): boolean;
		set_enabled(this: Blocker, state: boolean): void;
		node: node;
	}
	class Button {
		get_key_trigger(this: Button): hash;
		init(
			this: Button,
			node: node | string,
			callback: Function,
			custom_args?: any,
			anim_node?: node | string,
		): void;
		is_enabled(this: Button): boolean;
		set_check_function(
			this: Button,
			check_function?: Function,
			failure_callback?: Function,
		): Button;
		set_click_zone(this: Button, zone: node): Button;
		set_enabled(this: Button, state: boolean): Button;
		set_key_trigger(this: Button, key: hash): Button;
		set_web_user_interaction(this: Button, is_web_mode?: boolean): Button;

		style: {
			LONGTAP_TIME: number;
			AUTOHOLD_TRIGGER: number;
			DOUBLETAP_TIME: number;
			on_click: Function;
			on_click_disabled: Function;
			on_hover: Function;
			on_mouse_hover: Function;
			on_set_enabled: Function;
		};
		anim_node: node;
		click_zone?: node;
		hover: Hover;
		node: node;
		node_id: hash;
		on_click: DruidEvent;
		on_click_outside: DruidEvent;
		on_double_click: DruidEvent;
		on_hold_callback: DruidEvent;
		on_long_click: DruidEvent;
		on_pressed: DruidEvent;
		on_repeated_click: DruidEvent;
		params: any[];
	}
	class Drag {
		init(this: Drag, node: node, on_drag_callback: Function): void;
		is_enabled(this: Drag): boolean;
		set_click_zone(this: Drag, node: node): void;
		set_enabled(this: Drag, is_enabled: boolean): void;

		style: {
			DRAG_DEADZONE: number;
			NO_USE_SCREEN_KOEF: boolean;
		};
		can_x: boolean;
		can_y: boolean;
		is_drag: boolean;
		is_touch: boolean;
		on_drag: DruidEvent;
		on_drag_end: DruidEvent;
		on_drag_start: DruidEvent;
		on_touch_end: DruidEvent;
		on_touch_start: DruidEvent;
		touch_start_pos: vmath.vector3;
		x: number;
		y: number;
	}
	class DruidEvent {
		clear(this: DruidEvent): void;
		initialize(this: DruidEvent, initial_callback?: Function): void;
		is_exist(this: DruidEvent): boolean;
		subscribe(this: DruidEvent, callback: Function, context?: any): void;
		trigger(this: DruidEvent, ...args: any[]): void;
		unsubscribe(this: DruidEvent, callback: Function, context?: any): void;
	}
	class Hover {
		init(this: Hover, node: node, on_hover_callback: Function): void;
		is_enabled(this: Hover): boolean;
		is_hovered(this: Hover): boolean;
		is_mouse_hovered(this: Hover): boolean;
		set_click_zone(this: Hover, zone: node): void;
		set_enabled(this: Hover, state: boolean): void;
		set_hover(this: Hover, state: boolean): void;
		set_mouse_hover(this: Hover, state: boolean): void;

		on_hover: (this: Hover, state: boolean, hover_instance: any) => void;
		on_mouse_hover: (this: Hover, state: boolean, hover_instance: any) => void;
	}
	class RichText {
		clear(): void;
		get_line_metric(): {};
		get_words(): {};
		init(this: RichText, template: string, nodes: node[]): void;
		set_text(
			this: RichText,
			text: string,
		): {
			words: {};
			line_metrics: {};
		};
		tagged(tag: string): {};

		style: {
			COLORS: {};
			ADJUST_STEPS: number;
			ADJUST_SCALE_DELTA: number;
		};
	}
	class Scroll {
		bind_grid(grid: DynamicGrid | StaticGrid): this;
		get_percent(): vmath.vector3;
		get_scroll_size(): vmath.vector3;
		init(view_node: node | string, content_node: node | string): void;
		is_inert(): boolean;
		is_node_in_view(node: node): boolean;
		scroll_to(point: vmath.vector3, is_instant?: boolean): void;
		scroll_to_index(index: number, skip_cb?: boolean): void;
		scroll_to_percent(percent: vmath.vector3, is_instant?: boolean): void;
		set_click_zone(node: node): void;
		set_extra_stretch_size(stretch_size?: number): this;
		set_horizontal_scroll(state: boolean): this;
		set_inert(state: boolean): this;
		set_points(points: vmath.vector3[]): this;
		set_size(size: vmath.vector3, offset: vmath.vector3): this;
		set_vertical_scroll(state: boolean): this;

		style: {
			FRICT: number;
			FRICT_HOLD: number;
			INERT_THRESHOLD: number;
			INERT_SPEED: number;
			POINTS_DEADZONE: number;
			BACK_SPEED: number;
			ANIM_SPEED: number;
			EXTRA_STRETCH_SIZE: number;
			SMALL_CONTENT_SCROLL: boolean;
			WHEEL_SCROLL_SPEED: number;
			WHEEL_SCROLL_INVERTED: boolean;
			WHEEL_SCROLL_BY_INERTION: boolean;
		};
		available_pos: vmath.vector4;
		available_size: vmath.vector3;
		content_node: node;
		drag: Drag;
		inertion: vmath.vector3;
		is_animate: boolean;
		// is_inert: boolean;
		on_point_scroll: DruidEvent;
		on_scroll: DruidEvent;
		on_scroll_to: DruidEvent;
		position: vmath.vector3;
		selected: number;
		target_position: vmath.vector3;
		view_node: node;
	}
	class StaticGrid {
		add(
			this: StaticGrid,
			item: node,
			index?: number,
			shift_policy?: number,
			is_instant?: boolean,
		): void;
		clear(this: StaticGrid): StaticGrid;
		get_all_pos(this: StaticGrid): vmath.vector3[];
		get_borders(this: StaticGrid): vmath.vector3;
		get_index(this: StaticGrid, pos: vmath.vector3): number;
		get_index_by_node(this: StaticGrid, node: node): number;
		get_offset(this: StaticGrid): vmath.vector3;
		get_pos(this: StaticGrid, index: number): vmath.vector3;
		get_size(this: StaticGrid): vmath.vector3;
		init(
			this: StaticGrid,
			parent: node | string,
			element: node,
			in_row?: number,
		): void;
		remove(
			this: StaticGrid,
			index: number,
			shift_policy?: number,
			is_instant?: boolean,
		): node;
		set_anchor(this: StaticGrid, anchor: vmath.vector3): void;
		set_in_row(this: StaticGrid, in_row: number): StaticGrid;
		set_position_function(this: StaticGrid, callback: Function): StaticGrid;

		style: {
			IS_DYNAMIC_NODE_POSES: boolean;
			IS_ALIGN_LAST_ROW: boolean;
		};
		anchor: vmath.vector3;
		border: vmath.vector4;
		first_index: number;
		last_index: number;
		node_size: vmath.vector3;
		nodes: node[];
		on_add_item: DruidEvent;
		on_change_items: DruidEvent;
		on_clear: DruidEvent;
		on_remove_item: DruidEvent;
		on_update_positions: DruidEvent;
		parent: node;
		pivot: vmath.vector3;
	}
	class Text {
		get_text_adjust(this: Text, adjust_type: any): number;
		get_text_size(this: Text, text?: string): LuaMultiReturn<[number, number]>;
		init(
			this: Text,
			node: node | string,
			value?: string,
			adjust_type?: string,
		): void;
		is_multiline(this: Text): boolean;
		set_alpha(this: Text, alpha: number): Text;
		set_color(this: Text, color: vmath.vector4): Text;
		set_minimal_scale(this: Text, minimal_scale: number): Text;
		set_pivot(this: Text, pivot: any): Text;
		set_scale(this: Text, scale: vmath.vector3): Text;
		set_text_adjust(
			this: Text,
			adjust_type?: number,
			minimal_scale?: number,
		): Text;
		set_to(this: Text, set_to: string): Text;

		style: {
			TRIM_POSTFIX: string;
			DEFAULT_ADJUST: string;
		};
		adjust_type: number;
		color: vmath.vector3;
		node: node;
		node_id: hash;
		on_set_pivot: DruidEvent;
		on_set_text: DruidEvent;
		on_update_text_scale: DruidEvent;
		pos: vmath.vector3;
		scale: vmath.vector3;
		start_scale: vmath.vector3;
		start_size: vmath.vector3;
		text_area: vmath.vector3;
	}
	export { type BackHandler };
	export { type Blocker };
	export { type Button };
	export { type Drag };
	export { type DruidEvent };
	export { type Hover };
	export { type RichText };
	export { type Scroll };
	export { type StaticGrid };
	export { type Text };

	type Grid = DynamicGrid | StaticGrid;

	class DruidInstance {
		final(): void;
		new(component: Component, ...args: any[]): void;
		new_back_handler(
			callback: (...args: any[]) => void,
			params?: any,
		): BackHandler;
		new_blocker(node: node): Blocker;
		new_button(
			node: node,
			callback: (...args: any[]) => void,
			params?: any[],
			anim_node?: node,
		): Button;
		new_checkbox(
			node: node,
			callback: (...args: any[]) => void,
			click_node?: node,
			initial_state?: boolean,
		): Checkbox;
		new_checkbox_group(
			nodes: node[],
			callback: (...args: any[]) => void,
			click_nodes?: node[],
		): CheckboxGroup;
		new_data_list(
			druid_scroll: Scroll,
			druid_grid: Grid,
			create_function: (
				data: any,
				index: number,
				data_list: DataList,
			) => LuaMultiReturn<[node, Component | undefined]>,
		): DataList;
		new_drag(
			node: node,
			on_drag_callback: (dx: number, dy: number) => void,
		): Drag;
		new_dynamic_grid(parent: node): DynamicGrid;
		new_hotkey(
			keys_array: string[] | string,
			callback: (...args: any[]) => void,
			params?: any,
		): Hotkey;
		new_hover(node: node, on_hover_callback: (...args: any[]) => void): Hover;
		new_input(click_node: node, text_node: node, keyboard_type?: number): Input;
		new_lang_text(node: node, locale_id: string, no_adjust: boolean): LangText;
		new_layout(node: node | string, mode: string): Layout;
		new_progress(
			node: node | string,
			key: string,
			init_value?: number,
		): Progress;
		new_radio_group(
			nodes: node[],
			callback: (...args: any[]) => void,
			click_nodes?: node[],
		): RadioGroup;
		new_rich_text(template?: string, nodes?: any): RichText;
		new_scroll(view_node: node, content_node: node): Scroll;
		new_slider(
			node: node,
			end_pos: vmath.vector3,
			callback?: (...args: any[]) => void,
		): Slider;
		new_static_grid(parent: node, element: node, in_row?: number): StaticGrid;
		new_swipe(node: node, on_swipe_callback: (...args: any[]) => void): Swipe;
		new_text(node: node, value?: string, no_adjust?: boolean): Text;
		new_timer(
			node: node,
			seconds_from: number,
			seconds_to?: number,
			callback?: (...args: any[]) => void,
		): Timer;
		on_input(action_id: hash, action: any): boolean;
		on_message(message_id: hash, message: any, sender: hash): void;
		remove(component: Component): void;
		set_blacklist(blacklist_components?: any[] | Component): DruidInstance;
		set_whitelist(whitelist_components?: any[] | Component): DruidInstance;
		update(dt: number): void;
	}
	export { type DruidInstance };

	type DruidExtendedModule =
		| Checkbox
		| CheckboxGroup
		| DataList
		| DynamicGrid
		| Hotkey
		| Input
		| LangText
		| Layout
		| Progress
		| RadioGroup
		| Slider
		| Swipe
		| Timer;

	export function on_language_change(this: void): void;
	export function on_window_callback(this: void, event: string): void;
	export function register(
		this: void,
		name: string,
		module: DruidExtendedModule,
	): void;
	export function set_default_style(this: void, style: any): void;
	export function set_sound_function(
		this: void,
		callback: (this: void, sound_id: unknown) => void,
	): void;
	export function set_text_function(
		this: void,
		callback: (this: void, text_id: unknown) => void,
	): void;
	function ___new(this: void, context: any, style?: any): DruidInstance;
	export { ___new as new };
}
