/// <library version="1.2.0" src="https://github.com/jbp4444/bzAnim/archive/refs/tags/v.1.2.zip" />
/** @noSelfInFile **/

declare type EASING_TYPES =
  | "TYPE_LINEAR"
  | "TYPE_INQUAD"
  | "TYPE_OUTQUAD"
  | "TYPE_INOUTQUAD"
  | "TYPE_OUTINQUAD"
  | "TYPE_INCUBIC"
  | "TYPE_OUTCUBIC"
  | "TYPE_INOUTCUBIC"
  | "TYPE_OUTINCUBIC"
  | "TYPE_INQUART"
  | "TYPE_OUTQUART"
  | "TYPE_INOUTQUART"
  | "TYPE_OUTINQUART"
  | "TYPE_INQUINT"
  | "TYPE_OUTQUINT"
  | "TYPE_INOUTQUINT"
  | "TYPE_OUTINQUINT"
  | "TYPE_INSINE"
  | "TYPE_OUTSINE"
  | "TYPE_INOUTSINE"
  | "TYPE_OUTINSINE"
  | "TYPE_INEXPO"
  | "TYPE_OUTEXPO"
  | "TYPE_INOUTEXPO"
  | "TYPE_OUTINEXPO"
  | "TYPE_INCIRC"
  | "TYPE_OUTCIRC"
  | "TYPE_INOUTCIRC"
  | "TYPE_OUTINCIRC"
  | "TYPE_INELASTIC"
  | "TYPE_OUTELASTIC"
  | "TYPE_INOUTELASTIC"
  | "TYPE_OUTINELASTIC"
  | "TYPE_INBACK"
  | "TYPE_OUTBACK"
  | "TYPE_INOUTBACK"
  | "TYPE_OUTINBACK"
  | "TYPE_INBOUNCE"
  | "TYPE_OUTBOUNCE"
  | "TYPE_INOUTBOUNCE"
  | "TYPE_OUTINBOUNCE";


/** 
 * @see {@link https://github.com/jbp4444/bzAnim|Github Source}
 * @noResolution
 */
declare module "bzAnim.bzLibrary" {
  export const INFO_LEVEL = 1;
  export const DEBUG_LEVEL = 2;
  export const TRACE_LEVEL = 3;

  export type Path = {
    x: number;
    y: number;
  };

  export type Segment = {
    duration: number;
    delay: number;
    path: Array<Path>;
  };

  type AnimateArgs = {
    obj: hash | string | undefined;
    easing: EASING_TYPES;
    duration?: number;
    delay?: number;
    path?: Array<Path>;
  };

  type AnimateSequenceArgs = {
    obj: hash | string | undefined;
    easing: EASING_TYPES;
    segments?: Array<Segment>;
    on_complete?: boolean | string;
  };

  export function animate(args: AnimateArgs): string;

  export function animateSequence(args: AnimateSequenceArgs): string;

  export function cancel(id: string): void;

  export function info(): string;

  export function isReady(): boolean;

  export function setDebugLevel(level: number): void;
}
