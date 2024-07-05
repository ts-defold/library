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