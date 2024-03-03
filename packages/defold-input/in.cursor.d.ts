/** @noSelfInFile */

/**
 * @url https://github.com/britzl/defold-input
 * @noResolution
 */
declare module 'in.cursor' {
	export const OVER: hash;
	export const OUT: hash;
	export const PRESSED: hash;
	export const RELEASED: hash;
	export const DRAG: hash;
	export const DRAG_END: hash;
	export const DRAG_START: hash;
	export const CLICKED: hash;
	export const RESET: hash;
	export const START_DRAGGING: hash;
	export const DRAG_MODE_HORIZONTAL: hash;
	export const DRAG_MODE_VERTICAL: hash;
	export const DRAG_MODE_FREE: hash;

	type ListenerFunction = (message_id: hash | string, message: {}) => boolean;

	export function trigger(message_id: hash | string, message: {}): boolean;
	export function listen(
		cursor_url: url,
		message_id: hash,
		fn: ListenerFunction,
	): void;
	export function init(): void;
	export function final(): void;
	export function reset(cursor_url?: url): void;
}
