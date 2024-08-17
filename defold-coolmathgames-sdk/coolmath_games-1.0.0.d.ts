/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <library version="1.0.0" src="https://github.com/fabtjar/defold-coolmathgames-sdk/archive/refs/tags/v1.0.0.zip" />
/** @noSelfInFile **/

/**
 * Only available in HTML5.
 * @see {@link https://github.com/fabtjar/defold-coolmathgames-sdk|Github Source}
 */
declare namespace coolmath_games {
	export function game_event(event: string, level?: string): void;
	export function ad_break(): void;
	export function reward_ads(): void;
}
