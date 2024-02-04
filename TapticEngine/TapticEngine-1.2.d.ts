/// <library version="1.2" src="https://github.com/MaratGilyazov/def_taptic_engine/archive/refs/tags/v1.2.zip" />
/** @noSelfInFile */

/**
 * Native extension for Defold with Taptic Engine implementation for iOS
 * @url https://github.com/MaratGilyazov/def_taptic_engine
 * @noResolution
 */
declare namespace taptic_engine {
	export const IMPACT_LIGHT: number;
	export const IMPACT_MEDIUM: number;
	export const IMPACT_HEAVY: number;
	export const NOTIFICATION_SUCCESS: number;
	export const NOTIFICATION_WARNING: number;
	export const NOTIFICATION_ERROR: number;

	/**
	 * Returns bool flag saying if taptic engine is supported
	 * @returns {boolean}
	 */
	export function isSupported(): boolean;

	/**
	 * Call Taptic Engine Impact feedback with given style
	 * @param {number} style - one of 3 constants `taptic_engine.IMPACT_LIGHT`, `taptic_engine.IMPACT_MEDIUM`, `taptic_engine.IMPACT_HEAVY`
	 */
	export function impact(
		style: typeof IMPACT_HEAVY | typeof IMPACT_LIGHT | typeof IMPACT_MEDIUM,
	): void;

	/**
	 * Call Taptic Engine Notification feedback with given type
	 * @param {number} type - one of 3 constants `taptic_engine.NOTIFICATION_SUCCESS`, `taptic_engine.NOTIFICATION_WARNING`, `taptic_engine.NOTIFICATION_ERROR`
	 */
	export function notification(
		type:
			| typeof NOTIFICATION_ERROR
			| typeof NOTIFICATION_SUCCESS
			| typeof NOTIFICATION_WARNING,
	): void;

	/**
	 * Call Taptic Engine Selection feedback
	 */
	export function selection(): void;
}
