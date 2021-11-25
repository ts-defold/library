/** @noSelfInFile **/

/** @noResolution */
declare module 'zzfx.api' {
  export function play(...args: number[]): void;

  export function samplerate(rate: number): void;

  export function play_sample(...args: number[]): void;

  export function build_sample(...args: number[]): void;

}
