/**
 *
 * @url https://github.com/britzl/monarch
 * @example `import * as transitions from 'monarch.transitions.easings'`
 * @noResolution
 */
declare module 'monarch.transitions.easings' {
	type EasingIn =
		| 'BACK'
		| 'BOUNCE'
		| 'CIRC'
		| 'CUBIC'
		| 'ELASTIC'
		| 'EXPO'
		| 'OUTBACK'
		| 'OUTBOUNCE'
		| 'OUTCIRC'
		| 'OUTCUBIC'
		| 'OUTELASTIC'
		| 'OUTEXPO'
		| 'OUTQUAD'
		| 'OUTQUART'
		| 'OUTQUINT'
		| 'OUTSINE'
		| 'QUAD'
		| 'QUART'
		| 'QUINT'
		| 'SINE';
	type EasingOut =
		| 'BACK'
		| 'BOUNCE'
		| 'CIRC'
		| 'CUBIC'
		| 'ELASTIC'
		| 'EXPO'
		| 'INBACK'
		| 'INBOUNCE'
		| 'INCIRC'
		| 'INCUBIC'
		| 'INELASTIC'
		| 'INEXPO'
		| 'INQUAD'
		| 'INQUART'
		| 'INQUINT'
		| 'INSINE'
		| 'QUAD'
		| 'QUART'
		| 'QUINT'
		| 'SINE';
	type Easing = {
		IN: (typeof gui)[`EASING_OUT${EasingOut}`];
		OUT: (typeof gui)[`EASING_IN${EasingIn}`];
	};
	export function BACK(): Easing;
	export function BOUNCE(): Easing;
	export function CIRC(): Easing;
	export function CUBIC(): Easing;
	export function ELASTIC(): Easing;
	export function EXPO(): Easing;
	export function QUAD(): Easing;
	export function QUART(): Easing;
	export function QUINT(): Easing;
	export function SINE(): Easing;
	export function create(name: EasingIn | EasingOut): Easing;
}
