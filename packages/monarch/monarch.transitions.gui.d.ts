/** @noSelfInFile */

/**
 * Monarch comes with a system for setting up transitions easily
 * in a gui_script using the `monarch.transitions.gui` module.
 * @url https://github.com/britzl/monarch
 * @example `import * as transitions_gui from 'monarch.transitions.gui'`
 * @noResolution
 */
declare module 'monarch.transitions.gui' {
	type GuiEasing =
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

	type Easing = {
		IN: GuiEasing;
		OUT: GuiEasing;
	};

	type Transition = {
		handle: (message_id: hash | string, message: unknown, sender: url) => void;
		show_in: (
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
		show_out: (
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
		back_in: (
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
		back_out: (
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
	};

	type TransitionNodeless = {
		handle: (message_id: hash | string, message: unknown, sender: url) => void;
		show_in: (
			node: node,
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
		show_out: (
			node: node,
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
		back_in: (
			node: node,
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
		back_out: (
			node: node,
			fn: TransitionInFn | TransitionOutFn,
			easing: GuiEasing,
			duration: number,
			delay: number,
		) => void;
	};

	export type TransitionInFn = (
		node: node,
		to: vmath.vector3,
		easing: GuiEasing,
		duration: number,
		delay?: number,
		complete_function?: (this: any, node: node) => void,
	) => void;

	export type TransitionOutFn = (
		node: node,
		from: vmath.vector3,
		easing: GuiEasing,
		duration: number,
		delay?: number,
		complete_function?: (this: any, node: node) => void,
	) => void;

	export const slide_in_right: TransitionInFn;
	export const slide_in_left: TransitionInFn;
	export const slide_in_top: TransitionInFn;
	export const slide_in_bottom: TransitionInFn;
	export const slide_out_right: TransitionOutFn;
	export const slide_out_left: TransitionOutFn;
	export const slide_out_top: TransitionOutFn;
	export const slide_out_bottom: TransitionOutFn;
	export const scale_in: TransitionInFn;
	export const scale_out: TransitionOutFn;
	export const fade_in: TransitionInFn;
	export const fade_out: TransitionOutFn;

	export function in_right_out_left(
		node: node,
		duration: number,
		delay?: number,
		easing?: Easing,
	): void;
	export function in_left_out_right(
		node: node,
		duration: number,
		delay?: number,
		easing?: Easing,
	): void;
	export function in_left_out_left(
		node: node,
		duration: number,
		delay?: number,
		easing?: Easing,
	): void;
	export function in_right_out_right(
		node: node,
		duration: number,
		delay?: number,
		easing?: Easing,
	): void;
	export function fade_in_out(
		node: node,
		duration: number,
		delay?: number,
		easing?: Easing,
	): void;

	/** Notify the transition system that the window size has changed */
	export function window_resized(width: number, height: number): void;

	/** Calls `complete_function` */
	export function instant(
		node: node,
		to: vmath.vector3,
		easing: GuiEasing,
		duration: number,
		delay?: number,
		complete_function?: (this: any, node: node) => void,
	): void;

	export function create(node: node): Transition;
	export function create(): TransitionNodeless;
}
