/// <library version="0.0.1" src="https://github.com/Insality/defold-tweener/archive/refs/tags/1.zip" />
/** @noSelfInFile */

/**
 * Timer Based Defold Tween Library
 * @see {@link https://github.com/Insality/defold-tweener|Github Source}
 * @noResolution
 */
declare module 'tweener.tweener' {
	type TweenFunc = Readonly<{ __brand: 'tweener' }> & number;
	type AnyTweenFunc =
		| TweenFunc
		| typeof go.EASING_INBACK
		| typeof go.EASING_INBOUNCE
		| typeof go.EASING_INCIRC
		| typeof go.EASING_INCUBIC
		| typeof go.EASING_INELASTIC
		| typeof go.EASING_INEXPO
		| typeof go.EASING_INOUTBACK
		| typeof go.EASING_INOUTBOUNCE
		| typeof go.EASING_INOUTCIRC
		| typeof go.EASING_INOUTCUBIC
		| typeof go.EASING_INOUTELASTIC
		| typeof go.EASING_INOUTEXPO
		| typeof go.EASING_INOUTQUAD
		| typeof go.EASING_INOUTQUART
		| typeof go.EASING_INOUTQUINT
		| typeof go.EASING_INOUTSINE
		| typeof go.EASING_INQUAD
		| typeof go.EASING_INQUART
		| typeof go.EASING_INQUINT
		| typeof go.EASING_INSINE
		| typeof go.EASING_LINEAR
		| typeof go.EASING_OUTBACK
		| typeof go.EASING_OUTBOUNCE
		| typeof go.EASING_OUTCIRC
		| typeof go.EASING_OUTCUBIC
		| typeof go.EASING_OUTELASTIC
		| typeof go.EASING_OUTEXPO
		| typeof go.EASING_OUTINBACK
		| typeof go.EASING_OUTINBOUNCE
		| typeof go.EASING_OUTINCIRC
		| typeof go.EASING_OUTINCUBIC
		| typeof go.EASING_OUTINELASTIC
		| typeof go.EASING_OUTINEXPO
		| typeof go.EASING_OUTINQUAD
		| typeof go.EASING_OUTINQUART
		| typeof go.EASING_OUTINQUINT
		| typeof go.EASING_OUTINSINE
		| typeof go.EASING_OUTQUAD
		| typeof go.EASING_OUTQUART
		| typeof go.EASING_OUTQUINT
		| typeof go.EASING_OUTSINE
		| typeof gui.EASING_INBACK
		| typeof gui.EASING_INBOUNCE
		| typeof gui.EASING_INCIRC
		| typeof gui.EASING_INCUBIC
		| typeof gui.EASING_INELASTIC
		| typeof gui.EASING_INEXPO
		| typeof gui.EASING_INOUTBACK
		| typeof gui.EASING_INOUTBOUNCE
		| typeof gui.EASING_INOUTCIRC
		| typeof gui.EASING_INOUTCUBIC
		| typeof gui.EASING_INOUTELASTIC
		| typeof gui.EASING_INOUTEXPO
		| typeof gui.EASING_INOUTQUAD
		| typeof gui.EASING_INOUTQUART
		| typeof gui.EASING_INOUTQUINT
		| typeof gui.EASING_INOUTSINE
		| typeof gui.EASING_INQUAD
		| typeof gui.EASING_INQUART
		| typeof gui.EASING_INQUINT
		| typeof gui.EASING_INSINE
		| typeof gui.EASING_LINEAR
		| typeof gui.EASING_OUTBACK
		| typeof gui.EASING_OUTBOUNCE
		| typeof gui.EASING_OUTCIRC
		| typeof gui.EASING_OUTCUBIC
		| typeof gui.EASING_OUTELASTIC
		| typeof gui.EASING_OUTEXPO
		| typeof gui.EASING_OUTINBACK
		| typeof gui.EASING_OUTINBOUNCE
		| typeof gui.EASING_OUTINCIRC
		| typeof gui.EASING_OUTINCUBIC
		| typeof gui.EASING_OUTINELASTIC
		| typeof gui.EASING_OUTINEXPO
		| typeof gui.EASING_OUTINQUAD
		| typeof gui.EASING_OUTINQUART
		| typeof gui.EASING_OUTINQUINT
		| typeof gui.EASING_OUTINSINE
		| typeof gui.EASING_OUTQUAD
		| typeof gui.EASING_OUTQUART
		| typeof gui.EASING_OUTQUINT
		| typeof gui.EASING_OUTSINE;
	export const insine: TweenFunc;
	export const inquad: TweenFunc;
	export const incubic: TweenFunc;
	export const incirc: TweenFunc;
	export const inquart: TweenFunc;
	export const inquint: TweenFunc;
	export const inexpo: TweenFunc;
	export const inback: TweenFunc;
	export const inelastic: TweenFunc;
	export const inbounce: TweenFunc;
	export const outsine: TweenFunc;
	export const outquad: TweenFunc;
	export const outcubic: TweenFunc;
	export const outcirc: TweenFunc;
	export const outquart: TweenFunc;
	export const outquint: TweenFunc;
	export const outexpo: TweenFunc;
	export const outback: TweenFunc;
	export const outelastic: TweenFunc;
	export const outbounce: TweenFunc;
	export const inoutsine: TweenFunc;
	export const inoutquad: TweenFunc;
	export const inoutcubic: TweenFunc;
	export const inoutcirc: TweenFunc;
	export const inoutquart: TweenFunc;
	export const inoutquint: TweenFunc;
	export const inoutexpo: TweenFunc;
	export const inoutback: TweenFunc;
	export const inoutelastic: TweenFunc;
	export const inoutbounce: TweenFunc;
	export const outinsine: TweenFunc;
	export const outinquad: TweenFunc;
	export const outincubic: TweenFunc;
	export const outincirc: TweenFunc;
	export const outinquart: TweenFunc;
	export const outinquint: TweenFunc;
	export const outinexpo: TweenFunc;
	export const outinback: TweenFunc;
	export const outinelastic: TweenFunc;
	export const outinbounce: TweenFunc;

	export function tween(
		tween_function: AnyTweenFunc,
		from: number,
		to: number,
		time: number,
		callback: (value: number, is_final_call: boolean) => void,
		dt?: number,
	): hash;

	export function ease(
		tween_function: AnyTweenFunc,
		from: number,
		to: number,
		time: number,
		time_elapsed: number,
	): number;
}
