/** @noSelfInFile **/

/** @noResolution */
declare module 'metrics.fps' {
  /** @noSelf */
  export interface Metrics {
    fps: () => number;
    update: () => void;
    draw: () => void;
  }

  export function create(samples?: number, format?: string, position?: string, color?: string): Metrics;
}

/** @noResolution */
declare module 'metrics.mem' {
  /** @noSelf */
  export interface Metrics {
    mem: () => number;
    update: () => void;
    draw: () => void;
  }

  export function create(format?: string, position?: string, color?: string): Metrics;
}
