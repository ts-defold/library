/** @noSelfInFile **/

/** 
 * @see {@link https://github.com/britzl/defold-metrics|Github Source}
 * @noResolution
 */
declare module 'metrics.fps' {
  /** @noSelf */
  export interface Metrics {
    fps: () => number;
    update: () => void;
    draw: () => void;
  }

  export function create(samples?: number, format?: string, position?: string, color?: string): Metrics;
}
