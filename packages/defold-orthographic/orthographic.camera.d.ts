/** @noSelfInFile **/

/** @noResolution */
declare module 'orthographic.camera' {
  /**
   * Follow a game object.
   * @param camera_id undefined for the first camera
   * @param target Game object to follow
   * @param options Options
   */
  export function follow(camera_id: hash | url | undefined, target: hash | url, options?: {
    /**
     *  Lerp from current position to target position with lerp as t.
     */
    lerp?: number,
    /**
     *  Camera offset from target position.
     */
    offset?: vmath.vector3,
    /**
     *  True if following the target along the horizontal axis.
     */
    horizontal?: boolean,
    /**
     *  True if following the target along the vertical axis.
     */
    vertical?: boolean,
    /**
     * True if the camera should be immediately positioned on the target even when lerping.
     */
    immediate?: boolean,
  }): void;

  /**
   * Get the current zoom level of the camera.
   * @param camera_id (hash | url), undefined for the first camera
   */
  export function get_zoom(camera_id: hash | url | undefined): number;

  /**
   * Change the zoom level of the camera.
   * @param camera_id  undefined for the first camera
   * @param zoom  The new zoom level of the camera
   */
  export function set_zoom(camera_id: hash | url | undefined, zoom: number): void;

  /**
   * Shake the camera.
   * @param camera_id (hash | url), undefined for the first camera
   * @param intensity Intensity of the shake, in percent of screen. Defaults to 0.05
   * @param duration Duration of the shake, in seconds. Defaults to 0.5
   */
  export function shake(camera_id: hash | url | undefined, intensity?: number, duration?: number): void;

  /**
   * Stop shaking the camera.
   * @param camera_id (hash | url), undefined for the first camera
   */
  export function stop_shaking(camera_id: hash | url | undefined): void;

  /**
   * Translate screen coordinates to world coordinates, based on the view and projection of the camera.
   * @param camera_id (hash | url), undefined for the first camera
   * @param screen Screen coordinates to convert
   */
  export function screen_to_world(camera_id: hash | url | undefined, screen: vmath.vector3): vmath.vector3;

  /**
   * Translate window coordinates to world coordinates, based on the view and projection of the camera.
   * @param camera_id (hash | url), undefined for the first camera
   * @param window Window coordinates to convert
   */
  export function window_to_world(camera_id: hash | url | undefined, window: vmath.vector3): vmath.vector3;


  /**
   * Get the display size (ie from game.project).
   */
  export function get_display_size(): LuaMultiReturn<[number, number]>;

  /**
   * Get window size.
   */
  export function get_window_size(): LuaMultiReturn<[number, number]>;

  /**
   * Get list of camera ids.
   */
  export function get_cameras(): Array<hash | url | undefined>;
}
