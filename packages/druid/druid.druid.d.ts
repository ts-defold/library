/**
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.druid' {
	type Pivot =
		| typeof gui.PIVOT_CENTER
		| typeof gui.PIVOT_E
		| typeof gui.PIVOT_N
		| typeof gui.PIVOT_NE
		| typeof gui.PIVOT_NW
		| typeof gui.PIVOT_S
		| typeof gui.PIVOT_SE
		| typeof gui.PIVOT_SW
		| typeof gui.PIVOT_W;
	export type Component = {}; // TO-DO
	type TEXT_ADJUST =
		(typeof import('druid.const').TEXT_ADJUST)[keyof typeof import('druid.const').TEXT_ADJUST];
	// Built-in Modules ---------------------------------------------
	class BaseComponent {
		/** @returns Array of children of the Druid component instance */
		get_children: (this: BaseComponent) => node[];
		/** @returns BaseComponent context  */
		get_context: (this: BaseComponent) => {};
		get_druid(
			this: BaseComponent,
			template: string,
			nodes: node[],
		): BaseComponent;
		get_input_priority: (this: BaseComponent) => number;
		get_name: (this: BaseComponent) => string;
		get_node: (this: BaseComponent, node_or_name: node | string) => node;
		get_parent_component: (this: BaseComponent) => BaseComponent | undefined;
		get_parent_name: (this: BaseComponent) => string | undefined;
		get_template: (this: BaseComponent) => string;
		get_uid: (this: BaseComponent) => number;
		reset_input_priority: (this: BaseComponent) => number;
		set_input_enabled: (this: BaseComponent, state?: boolean) => BaseComponent;
		set_input_priority: (
			this: BaseComponent,
			value: number,
			is_temporary?: boolean,
		) => number;
	}
	class BackHandler extends BaseComponent {
		on_back: DruidEvent;
		params?: any[];
	}
	class Blocker extends BaseComponent {
		init(this: Blocker, node: node): void;
		is_enabled(this: Blocker): boolean;
		set_enabled(this: Blocker, state?: boolean): void;
		node: node;
	}
	class Button {
		get_key_trigger(this: Button): hash;
		init(
			this: Button,
			node: node | string,
			callback: Function, // TO-DO
			custom_args?: any,
			anim_node?: node | string,
		): void;
		is_enabled(this: Button): boolean;
		set_check_function(
			this: Button,
			check_function?: Function, // TO-DO
			failure_callback?: Function, // TO-DO
		): Button;
		set_click_zone(this: Button, zone?: node | string): Button;
		set_enabled(this: Button, state?: boolean): Button;
		set_key_trigger(this: Button, key: hash | string): Button;
		set_web_user_interaction(this: Button, is_web_mode?: boolean): Button;

		style: {
			LONGTAP_TIME: number | undefined;
			AUTOHOLD_TRIGGER: number | undefined;
			DOUBLETAP_TIME: number | undefined;
			on_click: Function; // TO-DO
			on_click_disabled: Function; // TO-DO
			on_hover: Function; // TO-DO
			on_mouse_hover: Function; // TO-DO
			on_set_enabled: Function; // TO-DO
		};
		anim_node: node | undefined;
		click_zone: node | undefined;
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
		params: any[] | undefined;
	}
	class Drag {
		init(this: Drag, node: node, on_drag_callback: Function): void; // TO-DO
		is_enabled(this: Drag): boolean;
		set_click_zone(this: Drag, node?: node | string): void;
		set_enabled(this: Drag, is_enabled?: boolean): void;

		style: {
			DRAG_DEADZONE: number | undefined;
			NO_USE_SCREEN_KOEF: boolean | undefined;
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
		screen_x: number;
		screen_y: number;
		touch_start_pos: vmath.vector3;
		x: number;
		y: number;
	}
	class DruidEvent {
		clear(this: DruidEvent): void;
		create(this: DruidEvent, callback_context?: any): void;
		is_empty(this: DruidEvent): boolean;
		is_exist(this: DruidEvent): boolean;
		is_subscribed(
			this: DruidEvent,
			callback: Function,
			callback_context?: any,
		): boolean; // TO-DO
		subscribe(
			this: DruidEvent,
			callback: Function,
			callback_context?: any,
		): void; // TO-DO
		trigger(this: DruidEvent, ...args: any[]): void;
		unsubscribe(
			this: DruidEvent,
			callback: Function,
			callback_context?: any,
		): void;
	}
	class Hover {
		init(
			this: Hover,
			node: node,
			on_hover_callback: Function,
			on_mouse_hover: Function,
		): void; // TO-DO
		is_enabled(this: Hover): boolean;
		is_hovered(this: Hover): boolean;
		is_mouse_hovered(this: Hover): boolean;
		set_click_zone(this: Hover, zone?: node | string): void;
		set_enabled(this: Hover, state?: boolean): void;
		set_hover(this: Hover, state?: boolean): void;
		set_mouse_hover(this: Hover, state?: boolean): void;

		style: {
			ON_HOVER_CURSOR: string | undefined;
			ON_MOUSE_HOVER_CURSOR: string | undefined;
		};
		node: node;
		on_hover: (this: Hover, state: boolean, hover_instance: any) => void;
		on_mouse_hover: (this: Hover, state: boolean, hover_instance: any) => void;
	}
	class Scroll {
		bind_grid(this: Scroll, grid: StaticGrid): Scroll;
		get_percent(this: Scroll): vmath.vector3;
		get_scroll_size(this: Scroll): vmath.vector3;
		init(
			this: Scroll,
			view_node: node | string,
			content_node: node | string,
		): void;
		is_inert(this: Scroll): boolean;
		is_node_in_view(this: Scroll, node: node): boolean;
		scroll_to(this: Scroll, point: vmath.vector3, is_instant?: boolean): void;
		scroll_to_index(this: Scroll, index: number, skip_cb?: boolean): void;
		scroll_to_percent(
			this: Scroll,
			percent: vmath.vector3,
			is_instant?: boolean,
		): void;
		set_click_zone(this: Scroll, node: node | string): void;
		set_extra_stretch_size(this: Scroll, stretch_size?: number): Scroll;
		set_horizontal_scroll(this: Scroll, state?: boolean): Scroll;
		set_inert(this: Scroll, state: boolean): Scroll;
		set_points(this: Scroll, points: vmath.vector3[]): Scroll;
		set_size(this: Scroll, size: vmath.vector3, offset?: vmath.vector3): Scroll;
		set_vertical_scroll(this: Scroll, state?: boolean): Scroll;
		set_view_size(this: Scroll, size: vmath.vector3): Scroll;
		update_view_size(this: Scroll): void;

		style: {
			FRICT: number | undefined;
			FRICT_HOLD: number | undefined;
			INERT_THRESHOLD: number | undefined;
			INERT_SPEED: number | undefined;
			POINTS_DEADZONE: number | undefined;
			BACK_SPEED: number | undefined;
			ANIM_SPEED: number | undefined;
			EXTRA_STRETCH_SIZE: number | undefined;
			SMALL_CONTENT_SCROLL: boolean | undefined;
			WHEEL_SCROLL_SPEED: number | undefined;
			WHEEL_SCROLL_INVERTED: boolean | undefined;
			WHEEL_SCROLL_BY_INERTION: boolean | undefined;
		};
		_is_inert: boolean;
		/** min_x, max_y, max_x, min_y */
		available_pos: vmath.vector4;
		available_size: vmath.vector3;
		content_node: node;
		drag: Drag;
		inertion: vmath.vector3;
		is_animate: boolean;
		on_point_scroll: DruidEvent;
		on_scroll: DruidEvent;
		on_scroll_to: DruidEvent;
		position: vmath.vector3;
		selected: number | undefined;
		target_position: vmath.vector3;
		view_node: node;
		view_size: vmath.vector3;
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
		refresh(this: StaticGrid): void;
		remove(
			this: StaticGrid,
			index: number,
			shift_policy?: number,
			is_instant?: boolean,
		): node;
		set_anchor(this: StaticGrid, anchor: vmath.vector3): void;
		set_in_row(this: StaticGrid, in_row: number): StaticGrid;

		set_item_size(
			this: StaticGrid,
			width?: number,
			height?: number,
		): StaticGrid;
		set_items(this: StaticGrid, nodes: node[], is_instant?: boolean): void;
		set_position_function(this: StaticGrid, callback: Function): StaticGrid; // TO-DO
		sort_nodes(
			this: StaticGrid,
			comparator: (a: any, b: any) => boolean,
		): StaticGrid;

		style: {
			IS_DYNAMIC_NODE_POSES: boolean | undefined;
			IS_ALIGN_LAST_ROW: boolean | undefined;
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
		get_text_adjust(this: Text, adjust_type: TEXT_ADJUST): number;
		get_text_index_by_width(this: Text, width: number): number;
		/** @returns width, height */
		get_text_size(this: Text, text?: string): LuaMultiReturn<[number, number]>;
		init(
			this: Text,
			node: node | string,
			value?: string,
			adjust_type?: TEXT_ADJUST,
		): void;
		is_multiline(this: Text): boolean;
		set_alpha(this: Text, alpha: number): Text;
		set_color(this: Text, color: vmath.vector4): Text;
		set_minimal_scale(this: Text, minimal_scale?: number): Text;
		set_pivot(this: Text, pivot: Pivot): Text;
		set_scale(this: Text, scale: vmath.vector3): Text;
		set_size(this: Text, size: vmath.vector3): Text;
		set_text_adjust(
			this: Text,
			adjust_type?: TEXT_ADJUST,
			minimal_scale?: number,
		): Text;
		set_to(this: Text, set_to: string): Text;

		style: {
			TRIM_POSTFIX: string | undefined;
			DEFAULT_ADJUST: string | undefined;
			ADJUST_STEPS: number | undefined;
			ADJUST_SCALE_DELTA: number | undefined;
		};
		adjust_type: number;
		color: vmath.vector3;
		last_value: string;
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
	export { type BaseComponent };
	export { type Blocker };
	export { type Button };
	export { type Drag };
	export { type DruidEvent };
	export { type Hover };
	export { type Scroll };
	export { type StaticGrid };
	export { type Text };

	export type DruidExtendedModule =
		| typeof import('druid.extended.data_list')
		| typeof import('druid.extended.hotkey')
		| typeof import('druid.extended.input')
		| typeof import('druid.extended.lang_text')
		| typeof import('druid.extended.layout')
		| typeof import('druid.extended.progress')
		| typeof import('druid.extended.slider')
		| typeof import('druid.extended.swipe')
		| typeof import('druid.extended.timer');

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
		new_data_list(
			druid_scroll: Scroll,
			druid_grid: StaticGrid,
			create_function: (
				data: any,
				index: number,
				data_list: typeof import('druid.extended.data_list'),
			) => LuaMultiReturn<[node, Component | undefined]>,
		): typeof import('druid.extended.data_list');
		new_drag(
			node: node,
			on_drag_callback: (dx: number, dy: number) => void,
		): Drag;
		// new_dynamic_grid(parent: node): DynamicGrid;
		new_hotkey(
			keys_array: string[] | string,
			callback: (...args: any[]) => void,
			params?: any,
		): typeof import('druid.extended.hotkey');
		new_hover(node: node, on_hover_callback: (...args: any[]) => void): Hover;
		new_input(
			click_node: node,
			text_node: node,
			keyboard_type?: number,
		): typeof import('druid.extended.input');
		new_lang_text(
			node: node,
			locale_id: string,
			no_adjust: boolean,
		): typeof import('druid.extended.lang_text');
		new_layout(
			node: node | string,
			mode: string,
		): typeof import('druid.extended.layout');
		new_progress(
			node: node | string,
			key: string,
			init_value?: number,
		): typeof import('druid.extended.progress');
		// new_rich_text(template?: string, nodes?: any): RichText;
		new_scroll(view_node: node, content_node: node): Scroll;
		new_slider(
			node: node,
			end_pos: vmath.vector3,
			callback?: (...args: any[]) => void,
		): typeof import('druid.extended.slider');
		new_static_grid(parent: node, element: node, in_row?: number): StaticGrid;
		new_swipe(
			node: node,
			on_swipe_callback: (...args: any[]) => void,
		): typeof import('druid.extended.swipe');
		new_text(node: node, value?: string, no_adjust?: boolean): Text;
		new_timer(
			node: node,
			seconds_from: number,
			seconds_to?: number,
			callback?: (...args: any[]) => void,
		): typeof import('druid.extended.timer');
		on_input(action_id: hash, action: any): boolean;
		on_message(message_id: hash, message: any, sender: hash): void;
		remove(component: Component): void;
		set_blacklist(blacklist_components?: any[] | Component): DruidInstance;
		set_whitelist(whitelist_components?: any[] | Component): DruidInstance;
		update(dt: number): void;
	}
	export { type DruidInstance };

	export type DruidStyle = {}; // TO-DO

	function ___new(this: void, context: any, style?: DruidStyle): DruidInstance;
	export { ___new as new };
	export function on_language_change(this: void): void;
	export function on_window_callback(this: void, event: string): void;
	export function register(
		this: void,
		name: string,
		module: DruidExtendedModule, // TO-DO
	): void;
	export function set_default_style(this: void, style: DruidStyle): void;
	export function set_sound_function(
		this: void,
		callback: (this: void, sound_id: unknown) => void,
	): void;
	export function set_text_function(
		this: void,
		callback: (this: void, text_id: unknown) => void,
	): void;
}
