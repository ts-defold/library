/** @noSelfInFile **/
type ZzFXSample = LuaUserdata & {
  readonly __index: 'zzfx_ext_sample';
};

/** @noResolution */
declare module 'zzfx.api' {
  export function play(...args: number[]): void;

  export function samplerate(rate: number): void;

  export function play_sample(sample: ZzFXSample): void;

  export function build_sample(...args: number[]): ZzFXSample;
}
