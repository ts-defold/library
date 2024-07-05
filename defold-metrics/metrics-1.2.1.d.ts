/// <library version="1.2.1" src="https://github.com/britzl/defold-metrics/archive/refs/tags/1.2.1.zip" />
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

/** @noSelfInFile **/

/** 
 * @see {@link https://github.com/britzl/defold-metrics|Github Source}
 * @noResolution
 */
declare module 'metrics.mem' {
  /** @noSelf */
  export interface Metrics {
    mem: () => number;
    update: () => void;
    draw: () => void;
  }

  export function create(format?: string, position?: string, color?: string): Metrics;
}
