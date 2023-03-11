/// <library version="4.6.0" src="https://github.com/britzl/defold-input/archive/refs/tags/4.6.0.zip" />
/** @noSelfInFile **/

/** @noResolution */
declare module "in.cursor" {
  export const OVER = "cursor_over";
  export const OUT = "cursor_out";
  export const PRESSED = "pressed";
  export const RELEASED = "released";
  export const DRAG = "drag";
  export const DRAG_END = "drag_end";
  export const DRAG_START = "drag_start";
  export const CLICKED = "clicked";
  export const RESET = "reset";
  export const START_DRAGGING = "start_dragging";
  export const DRAG_MODE_HORIZONTAL = "drag_mode_horizontal";
  export const DRAG_MODE_VERTICAL = "drag_mode_vertical";
  export const DRAG_MODE_FREE = "drag_mode_free";

  export function trigger(message_id: hash | url | null, message: any): boolean;

  export function listen(
    cursor_url: hash | url | null,
    message_id: hash | url | null,
    fn: () => boolean
  ): boolean;

  export function init(): void;

  export function final(): void;

  export function reset(cursor_url: hash | url | null): void;
}

declare module "in.gesture" {}

declare module "in.accelerometer" {
  export type Accelerometer = {
    reset: () => void;
    calibrate: () => void;
    on_input: () => void;
    calibrated: () => vmath.vector3;
    adjusted: () => vmath.vector3;
    average: () => vmath.vector3;
    zero: () => vmath.vector3;
    latest: () => vmath.vector3;
    on_window_resized: (width: number, height: number) => void;
  };

  export function create(samplecount: number): Accelerometer;

  export function reset(instance: Accelerometer): void;

  export function calibrate(instance: Accelerometer): void;

  export function on_input(instance: Accelerometer): void;

  export function calibrated(instance: Accelerometer): vmath.vector3;

  export function adjusted(instance: Accelerometer): vmath.vector3;

  export function average(instance: Accelerometer): vmath.vector3;

  export function zero(instance: Accelerometer): vmath.vector3;

  export function latest(instance: Accelerometer): vmath.vector3;

  export function on_window_resized(
    instance: Accelerometer,
    width: number,
    height: number
  ): void;
}

declare module "in.button" {}

declare module "in.keyboard" {}

declare module "in.mapper" {}

declare module "in.onscreen" {}

declare module "in.state" {}

declare module "in.triggers" {}
