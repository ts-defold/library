/** @noSelfInFile */
/**
 * @see {@link https://github.com/Playgama/bridge-defold|Source}
 * @noResolution
 */
declare module 'bridge.bridge' {
	export namespace achievements {
		/**
		 * Returns the achievement list in JSON.
		 * @param options
		 * @param on_success function(_, list)
		 * @param on_failure function(_, error)
		 */
		export function get_list(
			options: object,
			on_success: (this: any, list: unknown) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Check if getting list of achievements is supported.
		 */
		export function is_get_list_supported(): boolean;
		/**
		 * Check if built-in popup is supported.
		 */
		export function is_native_popup_supported(): boolean;
		/**
		 * Use this to determine if you can implement achievements for your game on the current platform.
		 */
		export function is_supported(): boolean;
		/**
		 * Returns the achievement list in JSON.
		 * @param options
		 * @param on_success function()
		 * @param on_failure function(_, error)
		 */
		export function show_native_popup(
			options: object,
			on_success: (...args: any[]) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Unlocks achievement for a player.
		 * @param options
		 * @param on_success function(_, result)
		 * @param on_failure function(_, error)
		 */
		export function unlock(
			options: object,
			on_success: (this: any, result: unknown) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
	}
	export namespace advertisement {
		/**
		 * Hide the currently displayed banner ad when it is no longer needed.
		 */
		export function banner_state(): void;
		/**
		 * Check if the ad blocker is enabled.
		 * @param on_success function(_, bool)
		 * @param on_failure function(_, error)
		 */
		export function check_ad_block(
			on_success: (this: any, bool: boolean) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Hide the currently displayed banner ad when it is no longer needed.
		 */
		export function hide_banner(): void;
		/**
		 * Track the state of the interstitial ad to manage ad display and user experience.
		 */
		export function interstitial_state(): void;
		/**
		 * Check if the platform supports displaying banner ads. Use this to determine if you can include banner advertisements in your game.
		 */
		export function is_banner_supported(): string;
		/**
		 * Check if the platform supports displaying interstitial ads. Use this to determine if you can include interstitial advertisements in your game.
		 */
		export function is_interstitial_supported(): string;
		/**
		 * Check if the platform supports displaying rewarded ads. Use this to determine if you can include rewarded advertisements in your game.
		 */
		export function is_rewarded_supported(): string;
		/**
		 * Minimum time interval between interstitial ad displays to comply with platform requirements and improve user experience.
		 */
		export function minimum_delay_between_interstitial(): number;
		/**
		 * State changed events.
		 * @param event_name
		 * @param callback function(_, state)
		 */
		export function on(
			event_name: string,
			callback: (this: any, state: unknown) => void,
		): void;
		/**
		 * Monitor the placement of the rewarded ad to manage the reward process.
		 */
		export function rewarded_placement(): void;
		/**
		 * Monitor the state of the rewarded ad (loading, opened, closed, rewarded, failed) to manage the reward process.
		 */
		export function rewarded_state(): void;
		/**
		 * Set the minimum time interval between interstitial ad displays to comply with platform requirements and improve user experience.
		 * @param delay 60 from default
		 */
		export function set_minimum_delay_between_interstitial(delay: number): void;
		/**
		 * Display a banner ad within your game to generate revenue through advertising.
		 * @param position
		 * @param placement
		 */
		export function show_banner(position: string, placement: string): void;
		/**
		 * Display an interstitial ad at appropriate moments, such as during level transitions or game over screens.
		 * @param placement
		 */
		export function show_interstitial(placement: string): void;
		/**
		 * Display a rewarded ad and provide incentives to players for watching the entire ad.
		 * @param placement
		 */
		export function show_rewarded(placement: string): void;
	}
	export namespace device {
		/**
		 * Determine the type of device (mobile, tablet, desktop, tv) the game is being played on to adjust the game`s interface and performance settings.
		 */
		export function type(): string;
	}
	export namespace game {
		/**
		 * Check if the game tab is visible or hidden, and adjust game behavior accordingly, such as muting sound when hidden.
		 * @param event_name
		 * @param callback function(_, state)
		 */
		export function on(
			event_name: string,
			callback: (this: any, state: unknown) => void,
		): void;
		/**
		 * Returns the current visibility state of the game (the tab with the game).
		 */
		export function visibility_state(): string;
	}
	export namespace leaderboards {
		/**
		 * Retrieve entries from the leaderboard, including the player's rank and score, to display a comprehensive leaderboard.
		 * @param id
		 * @param on_success function(_, entries)
		 * @param on_failure function(_, error)
		 */
		export function get_entries(
			id: string,
			on_success: (this: any, entries: unknown) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Submit the player's score to the leaderboard to update their rank and position.
		 * @param id
		 * @param score
		 * @param on_success function()
		 * @param on_failure function(_, error)
		 */
		export function set_score(
			id: string,
			score: number,
			on_success: (...args: any[]) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Show native popup leaderboard.
		 * @param id
		 * @param on_success function()
		 * @param on_failure function(_, error)
		 */
		export function show_native_popup(
			id: string,
			on_success: (...args: any[]) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Check the leaderboards type on the platform.
		 */
		export function type(): string;
	}
	export namespace payments {
		/**
		 * Consume purchased items, such as in-game currency, once they are used, to manage inventory and player progression.
		 * @param id
		 * @param on_success function(_, purchase)
		 * @param on_failure function(_, error)
		 */
		export function consume_purchase(
			id: string,
			on_success: (this: any, purchase: unknown) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Retrieve a list of all available in-game items that players can purchase to display in the game store.
		 * @param on_success function(_, catalogItems)
		 * @param on_failure function(_, error)
		 */
		export function get_catalog(
			on_success: (this: any, catalogItems: unknown) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Retrieve a list of items that the player has purchased to manage their inventory and provide access to purchased content.
		 * @param on_success function(nil, purchases)
		 * @param on_failure function(_, error)
		 */
		export function get_purchases(
			on_success: (this: any, purchases: unknown) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Check if in-game purchases are supported to offer items or upgrades within the game.
		 */
		export function is_supported(): boolean;
		/**
		 * Allow players to buy items or upgrades in your game to enhance their gameplay experience.
		 * @param id
		 * @param on_success function(_, purchase)
		 * @param on_failure function(_, error)
		 */
		export function purchase(
			id: string,
			on_success: (this: any, purchase: unknown) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
	}
	export namespace platform {
		/**
		 * Get all games on the platform.
		 * @param on_success function(_, data)
		 * @param on_failure function(_, error)
		 */
		export function get_all_games(
			on_success: (this: any, data: unknown) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Get game by ID on the platform.
		 * @param options
		 * @param on_success function(_, data)
		 * @param on_failure function(_, error)
		 */
		export function get_game_by_id(
			options: object,
			on_success: (this: any, data: unknown) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Server Time
		 * @param on_success function(_, time)
		 * @param on_failure function(_, error)
		 */
		export function get_server_time(
			on_success: (this: any, time: unknown) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Identify the platform on which the game is currently running to customize features and settings accordingly.
		 */
		export function id(): string | undefined;
		/**
		 * Check if the audio is enabled on the platform.
		 */
		export function is_audio_enabled(): boolean;
		/**
		 * Verify if the get_all_games is supported on the platform to ensure compatibility.
		 */
		export function is_get_all_games_supported(): boolean;
		/**
		 * Verify if the get_game_by_id is supported on the platform to ensure compatibility.
		 */
		export function is_get_game_by_id_supported(): boolean;
		/**
		 * Get the language set by the user on the platform or the browser language if not provided by the platform, to localize game content.
		 */
		export function language(): string;
		/**
		 * State changed events.
		 * @param event_name
		 * @param callback function(_, state)
		 */
		export function on(
			event_name: string,
			callback: (this: any, state: unknown) => void,
		): void;
		/**
		 * Embed auxiliary information into the game URL to pass additional data or settings when launching the game.
		 */
		export function payload(): string | undefined;
		/**
		 * Send predefined messages to the platform to trigger specific actions or events, such as signaling that the game is ready.
		 * @param message One of message types: `game_ready` `in_game_loading_started`
		 * @param on_success
		 * @param on_failure
		 */
		export function send_message(
			message: string,
			on_success: (...args: any[]) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Retrieve the top-level domain of the platform to handle domain-specific configurations and behavior.
		 */
		export function tld(): string | undefined;
	}
	export namespace player {
		/**
		 * Authorize the player on the platform to access protected features and personalize the game experience. For example, prompting the player to log in to save their progress or unlock social sharing features.
		 * @param options
		 * @param on_success function()
		 * @param on_failure function(_, error)
		 */
		export function authorize(
			options: object,
			on_success: (...args: any[]) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Get the extra information about player.
		 */
		export function extra(): object;
		/**
		 * Get the player’s unique ID on the platform to manage user-specific data and settings. Use this ID to track player progress, achievements, and purchases.
		 */
		export function id(): string | undefined;
		/**
		 * Check if the platform supports player authorization to enable features that require user authentication, such as saving game progress or accessing social features.
		 */
		export function is_authorization_supported(): boolean;
		/**
		 * Verify if the player is currently authorized on the platform. This allows you to enable personalized features, such as saving high scores or providing user-specific content.
		 */
		export function is_authorized(): boolean;
		/**
		 * Retrieve the player's name to personalize the game experience. Display the name in leaderboards, friend lists, or when sending notifications and messages.
		 */
		export function name(): string | undefined;
		/**
		 * Get the count of player avatars available. Use this to manage and display user profile images effectively, such as showing the avatar in multiplayer lobbies or profile screens.
		 */
		export function photos(): object;
	}
	export namespace remote_config {
		/**
		 * Encourage players to rate your game, providing valuable feedback and improving visibility.
		 * @param options
		 * @param on_success function(_, data)
		 * @param on_failure function(_)
		 */
		export function get(
			options: object,
			on_success: (this: any, data: unknown) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Check if remote configuration is supported to manage game settings without releasing updates.
		 */
		export function is_supported(): boolean;
	}
	export namespace social {
		/**
		 * Allow players to bookmark your game for easy access in the future.
		 * @param on_success function(_)
		 * @param on_failure function(_)
		 */
		export function add_to_favorites(
			on_success: (...args: any[]) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Enable players to add a shortcut to your game on their home screen for quick access.
		 * @param on_success function(_)
		 * @param on_failure function(_)
		 */
		export function add_to_home_screen(
			on_success: (...args: any[]) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Use this to let players create posts about their achievements or updates directly from the game.
		 * @param options
		 * @param on_success function(_)
		 * @param on_failure function(_)
		 */
		export function create_post(
			options: object,
			on_success: (...args: any[]) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Allow players to invite their friends to play the game, helping to grow your player base organically.
		 * @param options
		 * @param on_success function(_)
		 * @param on_failure function(_)
		 */
		export function invite_friends(
			options: object,
			on_success: (...args: any[]) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Check if the add to favorites functionality is supported on the platform.
		 */
		export function is_add_to_favorites_supported(): boolean;
		/**
		 * Check if the add to home screen functionality is supported on the platform.
		 */
		export function is_add_to_home_screen_supported(): boolean;
		/**
		 * Check if the create post functionality is supported on the platform.
		 */
		export function is_create_post_supported(): boolean;
		/**
		 * Check if external links are allowed on the platform.
		 */
		export function is_external_links_allowed(): boolean;
		/**
		 * Check if the invite friends functionality is supported on the platform.
		 */
		export function is_invite_friends_supported(): boolean;
		/**
		 * Check if the join community functionality is supported on the platform.
		 */
		export function is_join_community_supported(): boolean;
		/**
		 * Check if the rate game functionality is supported on the platform.
		 */
		export function is_rate_supported(): boolean;
		/**
		 * Check if the share functionality is supported on the platform.
		 */
		export function is_share_supported(): boolean;
		/**
		 * Use this to allow players to share game content or achievements on social media platforms.
		 * @param options
		 * @param on_success function(_)
		 * @param on_failure function(_)
		 */
		export function join_community(
			options: object,
			on_success: (...args: any[]) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
		/**
		 * Encourage players to rate your game, providing valuable feedback and improving visibility.
		 * @param on_success function(_)
		 * @param on_failure function(_)
		 */
		export function rate(
			on_success: (...args: any[]) => void,
			on_failure: (...args: any[]) => void,
		): void;
		/**
		 * Use this to allow players to share game content or achievements on social media platforms.
		 * @param options
		 * @param on_success function(_)
		 * @param on_failure function(_)
		 */
		export function share(
			options: object,
			on_success: (...args: any[]) => void,
			on_failure: (this: any, error: unknown) => void,
		): void;
	}
	export namespace storage {
		/**
		 * Identify the default storage type to understand where data is being saved (local or server).
		 */
		export function default_type(): string;
		/**
		 * Remove data from the specified storage by key to manage player data and settings effectively.
		 * @param table_keys
		 * @param on_success function(_)
		 * @param on_failure function(_, error)
		 * @param storage_type
		 */
		export function delete_(
			table_keys: object,
			on_success: (...args: any[]) => void,
			on_failure: (this: any, error: unknown) => void,
			storage_type: string,
		): void;
		export { delete_ as delete };
		/**
		 * Retrieve stored data based on a key or multiple keys to restore player progress or settings.
		 * @param table_keys
		 * @param on_success function(_, data)
		 * @param on_failure function(_, error)
		 * @param storage_type
		 */
		export function get(
			table_keys: object,
			on_success: (this: any, data: unknown) => void,
			on_failure: (this: any, error: unknown) => void,
			storage_type: string,
		): void;
		/**
		 * Check if the specified storage type is currently available for use to manage data storage effectively.
		 * @param storage_type
		 */
		export function is_available(storage_type: string): boolean;
		/**
		 * Verify if the specified storage type is supported on the platform to ensure compatibility.
		 * @param storage_type
		 */
		export function is_supported(storage_type: string): boolean;
		/**
		 * Save data to the specified storage with a key to retain player progress or settings.
		 * @param table_data
		 * @param on_success function(_)
		 * @param on_failure function(_, error)
		 * @param storage_type
		 */
		export function set(
			table_data: object,
			on_success: (...args: any[]) => void,
			on_failure: (this: any, error: unknown) => void,
			storage_type: string,
		): void;
	}
}
