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
