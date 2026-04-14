/** @noSelfInFile */

/**
 * CrazyGames SDK native extension for Defold.
 * @see {@link https://github.com/defold/extension-crazygames|GitHub Source}
 * @see {@link https://defold.com/extension-crazygames/|Documentation}
 */
declare namespace crazygames {
	type AdCallback = (this: any, success: boolean) => void;
	type UserCallback = (this: any, user: User | undefined) => void;
	type TokenCallback = (this: any, token: string | undefined) => void;
	type InviteParams = Record<string, string | number | boolean>;

	interface User {
		username: string;
		profilePictureUrl: string;
	}

	/**
	 * Notify CrazyGames that gameplay started/resumed.
	 */
	export function gameplay_start(): void;

	/**
	 * Notify CrazyGames that gameplay was paused/interrupted.
	 */
	export function gameplay_stop(): void;

	/**
	 * Notify CrazyGames that loading started.
	 */
	export function loading_start(): void;

	/**
	 * Notify CrazyGames that loading finished.
	 */
	export function loading_stop(): void;

	/**
	 * Trigger a "happy time" celebration event on CrazyGames.
	 */
	export function happytime(): void;

	/**
	 * Show a rewarded ad.
	 * @param callback receives true when ad flow completed successfully, otherwise false.
	 */
	export function show_rewarded_ad(callback: AdCallback): void;

	/**
	 * Show a midgame ad.
	 * @param callback receives true when ad flow completed successfully, otherwise false.
	 */
	export function show_midgame_ad(callback: AdCallback): void;

	/**
	 * Detect whether the player uses an ad blocker.
	 */
	export function has_ad_block(callback: AdCallback): void;

	/**
	 * Request a banner in a specific HTML container.
	 */
	export function request_banner(
		div: string,
		width: number,
		height: number,
	): void;

	/**
	 * Request a responsive banner in a specific HTML container.
	 */
	export function request_responsive_banner(div: string): void;

	/**
	 * Clear and hide a banner in a specific HTML container.
	 */
	export function clear_banner(div: string): void;

	/**
	 * Clear all currently active banners.
	 */
	export function clear_all_banners(): void;

	/**
	 * Build an invite link to the game with custom query parameters.
	 */
	export function invite_link(params: InviteParams): string;

	/**
	 * Show the CrazyGames invite button and return its generated invite link.
	 */
	export function show_invite_button(params: InviteParams): string;

	/**
	 * Hide the invite button.
	 */
	export function hide_invite_button(): void;

	/**
	 * Read an invite query parameter from the current session.
	 * Returns undefined when the key is missing.
	 */
	export function get_invite_param(key: string): string | undefined;

	/**
	 * Whether the game was opened in instant multiplayer mode.
	 */
	export function is_instant_multiplayer(): boolean;

	/**
	 * Remove all CrazyGames data entries for this game.
	 */
	export function clear_data(): void;

	/**
	 * Read a stored data entry by key.
	 * Returns undefined when the key is missing.
	 */
	export function get_item(key: string): string | undefined;

	/**
	 * Remove a stored data entry by key.
	 */
	export function remove_item(key: string): void;

	/**
	 * Store a key/value data entry.
	 */
	export function set_item(key: string, value: string): void;

	/**
	 * Check if CrazyGames account APIs are available in current context.
	 */
	export function is_user_account_available(): boolean;

	/**
	 * Get current logged-in CrazyGames user.
	 */
	export function get_user(callback: UserCallback): void;

	/**
	 * Get a JWT user token.
	 */
	export function get_user_token(callback: TokenCallback): void;

	/**
	 * Get an Xsolla-compatible user token.
	 */
	export function get_xsolla_user_token(callback: TokenCallback): void;

	/**
	 * Show CrazyGames authentication prompt.
	 */
	export function show_auth_prompt(callback: UserCallback): void;

	/**
	 * Listen for CrazyGames login events.
	 */
	export function set_auth_listener(callback: UserCallback): void;

	/**
	 * Remove auth listener set via set_auth_listener().
	 */
	export function remove_auth_listener(): void;

	/**
	 * Show account linking prompt.
	 */
	export function show_account_link_prompt(): boolean;
}
