/** @noSelfInFile **/

/** @noResolution */
declare module "monarch.monarch" {
  type Settings = {
    popup?: boolean;
    popup_on_popup?: boolean;
    timestep_below_popup?: boolean;
    screen_keeps_input_focus_when_below_popup?: boolean;
    others_keep_input_focus_when_below_screen?: boolean;
    auto_preload?: boolean;
  };

  type Options = {
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

  type BackOptions = {
    sequential?: boolean;
  };

  export function debug(): void;

  export function in_stack(id: hash | string): boolean;

  export function is_top(id: hash | string): boolean;

  export function is_visible(id: hash | string): boolean;

  export function is_loaded(id: hash | string): boolean;

  export function is_popup(id: hash | string): boolean;

  export function register_proxy(
    id: hash | string,
    proxy: hash | string | url,
    settings?: Settings,
  ): void;

  export function register(
    id: hash | string,
    proxy: hash | string | url,
    settings?: Settings,
  ): void;

  export function register_factory(
    id: hash | string,
    proxy: hash | string | url,
    settings?: Settings,
  ): void;

  export function unregister(id: hash | string): void;

  export function data(id: hash | string): any;

  export function screen_exists(id: hash | string): boolean;

  export function is_busy(): boolean;

  export function show(
    id: hash | string,
    options?: Options,
    data?: any,
    cb?: () => void,
  ): void;

  export function replace(
    id: hash | string,
    options?: ReplaceOptions,
    data?: any,
    cb?: () => void,
  ): void;

  export function hide(id: hash | string, cb?: () => void): void;

  export function clear(cb?: () => void): void;

  export function back(options: BackOptions, data?: any, cb?: () => void): void;

  export function is_preloaded(id: hash | string): boolean;

  export function when_preloaded(id: hash | string, cb?: () => void): boolean;

  export function preload(
    id: hash | string,
    options?: any,
    cb?: () => void,
  ): boolean;

  export function has_missing_resources(id: hash | string): boolean;

  export function unload(id: hash | string, cb?: () => void): void;

  export function post(
    id: hash | string,
    message_id: hash | string,
    message: any,
  ): boolean;

  export function on_message(
    message_id: hash | string,
    message: any,
    sender: any,
  ): void;

  export function get_stack(): any;

  export function top(offset?: number): hash | string;

  export function bottom(offset?: number): hash | string;

  export function set_timestep_below_popup(
    id: hash | string,
    timestep?: number,
  ): void;

  export function on_transition(id: hash | string, fn?: () => void): void;

  export function on_focus_changed(id: hash | string, fn?: () => void): void;

  export function on_post(
    id: hash | string,
    fn_or_url?: (() => void) | url,
  ): void;

  export function add_listener(_url: url): void;

  export function remove_listener(_url: url): void;

  export function dump_stack(): any;

  export function queue_size(): number;
}
