/** @noSelfInFile **/

/** @noResolution */
declare module 'orthographic.camera' {
  /**
   * Get the current zoom level of the camera.
   * @param camera_id (hash | url), nil for the first camera
   */
  export function get_zoom(camera_id: hash | url | null): number;

  /**
   * Shake the camera.
   * @param camera_id (hash | url), nil for the first camera
   * @param intensity Intensity of the shake, in percent of screen. Defaults to 0.05
   * @param duration Duration of the shake, in seconds. Defaults to 0.5
   */
  export function shake(camera_id: hash | url | null, intensity?: number, duration?: number): void;

  /**
   * Stop shaking the camera.
   * @param camera_id (hash | url), nil for the first camera
   */
  export function stop_shaking(camera_id: hash | url | null): void;

  /**
   * Translate screen coordinates to world coordinates, based on the view and projection of the camera.
   * @param camera_id (hash | url), nil for the first camera
   * @param screen Screen coordinates to convert
   */
  export function screen_to_world(camera_id: hash | url | null, screen: vmath.vector3): vmath.vector3;

  /**
   * Translate window coordinates to world coordinates, based on the view and projection of the camera.
   * @param camera_id (hash | url), nil for the first camera
   * @param window Window coordinates to convert
   */
  export function window_to_world(camera_id: hash | url | null, window: vmath.vector3): vmath.vector3;
}
