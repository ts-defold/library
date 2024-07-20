/// <library version="0.0.1" src="https://github.com/defold/extension-steam/archive/master.zip" />
/** @noSelfInFile */

/**
 * @see {@link https://github.com/defold/extension-steam|Github Source}
 * @see {@link https://defold.com/extension-steam/|Documentation}
 */
declare namespace steam {
	/**
	 * Initialize Steamworks.
	 * @returns {LuaMultiReturn<[Boolean, String]>} True if successful | Error message if unsuccessful.
	 */
	export function init(): LuaMultiReturn<[boolean, string | undefined]>;

	/**
	 * Update Steamworks. Call this from a script component.
	 */
	export function update(): void;

	/**
	 * Restart Steamworks.
	 * @param {number} appid
	 */
	export function restart(appid: number): void;

	/**
	 * Finalize Steamworks.
	 */
	export function finalize(): void;

	/**
	 * Requests rows in the leaderboard from the full table
	 */
	export const ELeaderboardDataRequestGlobal: number;
	/**
	 * Requests rows in the leaderboard from rows around the user
	 */
	export const ELeaderboardDataRequestGlobalAroundUser: number;
	/**
	 * Requests all the rows for friends of the current user
	 */
	export const ELeaderboardDataRequestFriends: number;
	/**
	 * Passed as parameter to the store
	 */
	export const EOverlayToStoreFlag_None: number;
	/**
	 * Passed as parameter to the store
	 */
	export const EOverlayToStoreFlag_AddToCart: number;
	/**
	 * Passed as parameter to the store
	 */
	export const EOverlayToStoreFlag_AddToCartAndShow: number;
	/**
	 * Passed as parameter to ActivateGameOverlayToWebPage
	 */
	export const EActivateGameOverlayToWebPageMode_Default: number;
	/**
	 * Passed as parameter to ActivateGameOverlayToWebPage
	 */
	export const EActivateGameOverlayToWebPageMode_Modal: number;
	/**
	 * Friend is not currently logged on
	 */
	export const EPersonaStateOffline: number;
	/**
	 * Friend is logged on
	 */
	export const EPersonaStateOnline: number;
	/**
	 * User is on, but busy
	 */
	export const EPersonaStateBusy: number;
	/**
	 * Auto-away feature
	 */
	export const EPersonaStateAway: number;
	/**
	 * Auto-away for a long time
	 */
	export const EPersonaStateSnooze: number;
	/**
	 * Online, trading
	 */
	export const EPersonaStateLookingToTrade: number;
	/**
	 * Online, wanting to play
	 */
	export const EPersonaStateLookingToPlay: number;
	/**
	 * Online, but appears offline to friends.  This status is never published to clients.
	 */
	export const EPersonaStateInvisible: number;

	/**
	 * Takes AppID of DLC and checks if the user owns the DLC &amp; if the DLC is installed.
	 * @param {number} app_id
	 * @returns {bool}
	 */
	export function apps_is_dlc_installed(app_id: number): boolean;

	/**
	 * Returns the name of another user. Same rules as GetFriendPersonaState() apply as to whether or not the user knowns the name of the other user note that on first joining a lobby, chat room or game server the local user will not known the name of the other users automatically; that information will arrive asyncronously.
	 * @param {friendId} CSteamID
	 * @returns {name} Name of user
	 */
	export function friends_get_friend_persona_name(CSteamID: number): string;

	/**
	 * Returns the local players name - guaranteed to not be NULL. This is the same name as on the users community profile page. This is stored in UTF-8 format.
	 * @returns {name} Name of user
	 */
	export function friends_get_persona_name(): string;

	/**
	 * Gets the status of the current user. Returned as EPersonaState.
	 * @returns {state} Status of user.
	 */
	export function friends_get_persona_state(): number;

	/**
	 * Returns the current status of the specified user. This will only be known by the local user if steamIDFriend is in their friends list; on the same game server; in a chat room or lobby; or in a small group with the local user.
	 * @param {number} steamIDFriend Id of friend
	 * @returns {state} State of friend
	 */
	export function friends_get_friend_persona_state(
		steamIDFriend: number,
	): number;

	/**
	 * Get friends steam level.
	 * @param {number} steamIDFriend Id of friend
	 * @returns {level} Steam level of friend
	 */
	export function friends_get_friend_steam_level(
		steamIDFriend: number,
	): number;

	/**
	 * Returns a relationship to a user.
	 * @param {number} steamIDFriend Id of friend
	 * @returns {relationship} Relationship to the user.
	 */
	export function friends_get_friend_relationship(
		steamIDFriend: number,
	): number;

	/**
	 * Activates game overlay to store page for app.
	 * @param {number} app_id
	 * @param {number} flag EOverlayToStoreFlag
	 */
	export function friends_activate_game_overlay_to_store(
		app_id: number,
		flag: number,
	): void;

	/**
	 * Activates game overlay web browser directly to the specified URL. Full address with protocol type is required, e.g. http://www.steamgames.com/
	 * @param {string} url
	 * @param {number} mode EActivateGameOverlayToWebPageMode
	 */
	export function friends_activate_game_overlay_to_web_page(
		url: string,
		mode: number,
	): void;

	/**
	 * Set a listener.
	 * @param {function} listener Listener function to call
	 */
	export function set_listener(listener: (...args: any[]) => void): void;

	/**
	 * Returns the CSteamID of the account currently logged into the Steam client. A CSteamID is a unique identifier for an account, and used to differentiate users in all parts of the Steamworks API.
	 * @returns {CSteamID}
	 */
	export function user_get_steam_id(): number;

	/**
	 * Gets the Steam Level of the user, as shown on their profile.
	 * @returns {number}
	 */
	export function user_get_player_steam_level(): number;

	/**
	 * Trading Card badges data access. If you only have one set of cards, the series will be 1. The user has can have two different badges for a series; the regular (max level 5) and the foil (max level 1).
	 * @returns {LuaMultiReturn<[number, boolean]>}
	 */
	export function user_get_game_badge_level(): LuaMultiReturn<
		[number, boolean]
	>;

	/**
	 * Returns true if the Steam client current has a live connection to the Steam Servers.
	 * @returns {boolean}
	 */
	export function user_logged_on(): boolean;

	/**
	 * Returns true if this users looks like they are behind a NAT device. Only valid once the user has connected to steam .
	 * @returns {boolean}
	 */
	export function user_is_behind_nat(): boolean;

	/**
	 * Gets whether the users phone number is verified.
	 * @returns {boolean}
	 */
	export function user_is_phone_verified(): boolean;

	/**
	 * Gets whether the users phone number is identifying.
	 * @returns {boolean}
	 */
	export function user_is_phone_identifying(): boolean;

	/**
	 * Gets whether the users phone number is awaiting (re)verification.
	 * @returns {boolean}
	 */
	export function user_is_phone_requiring_verification(): boolean;

	/**
	 * Gets whether the user has two factor enabled on their account.
	 * @returns {boolean}
	 */
	export function user_is_two_factor_enabled(): boolean;

	/**
	 * Get user stat as an integer.
	 * @param {string} id Id of the stat to get
	 * @returns {LuaMultiReturn<[ok, stat]>}  | The stat or nil
	 */
	export function user_stats_get_stat_int(
		id: string,
	): LuaMultiReturn<[boolean, number | undefined]>;

	/**
	 * Set user stat.
	 * @param {string} id Id of the stat to set
	 * @param {number} stat Number to set
	 * @returns {boolean}
	 */
	export function user_stats_set_stat_int(id: string, stat: number): boolean;

	/**
	 * Get user stat as a floating point number.
	 * @param {string} id Id of the stat to get
	 * @returns {LuaMultiReturn<[Boolean, Number]>}  | The stat
	 */
	export function user_stats_get_stat_float(
		id: string,
	): LuaMultiReturn<[boolean, number | undefined]>;

	/**
	 * Set user stat.
	 * @param {string} id Id of the stat to set
	 * @param {number} stat Number to set
	 * @returns {Boolean}
	 */
	export function user_stats_set_stat_float(id: string, stat: number): boolean;

	/**
	 * Ask the server to send down this user&#x27;s data and achievements for this game.
	 * @returns {Boolean} True if successful
	 */
	export function user_stats_request_current_stats(): boolean;

	/**
	 * Requests global stats data, which is available for stats marked as &quot;aggregated&quot;. This call is asynchronous, with the results returned in GlobalStatsReceived_t. nHistoryDays specifies how many days of day-by-day history to retrieve in addition to the overall totals. The limit is 60.
	 * @param {number} history_days
	 * @returns {Boolean}
	 */
	export function user_stats_request_global_stats(
		history_days: number,
	): boolean;

	/**
	 * Store the current data on the server. Will get a callback when set and one callback for every new achievement  If the callback has a result of k_EResultInvalidParam, one or more stats uploaded has been rejected, either because they broke constraints or were out of date. In this case the server sends back updated values. The stats should be re-iterated to keep in sync.
	 * @returns {Boolean}
	 */
	export function user_stats_store_stats(): boolean;

	/**
	 * Reset stats.
	 * @param {boolean} achievements True if achievements should be reset as well.
	 * @returns {Boolean}
	 */
	export function user_stats_reset_all_stats(achievements: boolean): boolean;

	/**
	 * Set achievement.
	 * @param {string} name
	 * @returns {Boolean}
	 */
	export function user_stats_set_achievement(name: string): boolean;

	/**
	 * Get achievement.
	 * @param {string} name
	 * @returns {LuaMultiReturn<[Boolean, Boolean]>}
	 */
	export function user_stats_get_achievement(
		name: string,
	): LuaMultiReturn<[boolean, boolean]>;

	/**
	 * Clear achievement.
	 * @param {string} name
	 * @returns {Boolean}
	 */
	export function user_stats_clear_achievement(name: string): boolean;

	/**
	 * Used for iterating achievements. In general games should not need these functions because they should have a list of existing achievements compiled into them.
	 * @returns {Number} Number of achievements.
	 */
	export function user_stats_get_num_achievements(): number;

	/**
	 * Get achievement name iAchievement in [0,GetNumAchievements)
	 * @param {number} index
	 * @returns {String}
	 */
	export function user_stats_get_achievement_name(index: number): string;

	/**
	 * Get general attributes for an achievement. Accepts the following keys * &quot;name&quot; and &quot;desc&quot; for retrieving the localized achievement name and description (returned in UTF8) * &quot;hidden&quot; for retrieving if an achievement is hidden (returns &quot;0&quot; when not hidden, &quot;1&quot; when hidden)
	 * @param {string} name
	 * @param {string} key Either &quot;name&quot;, &quot;desc&quot; or &quot;hidden&quot;
	 * @returns {String}
	 */
	export function user_stats_get_achievement_display_attribute(
		name: string,
		key: string,
	): string;

	/**
	 * Returns the percentage of users who have achieved the specified achievement.
	 * @returns {LuaMultiReturn<[Boolean, Number]>}
	 */
	export function user_stats_get_achievement_achieved_percent(): LuaMultiReturn<
		[boolean, number | undefined]
	>;

	/**
	 * Asks the Steam back-end for a set of rows in the leaderboard. This call is asynchronous, with the result returned in a listener callback with event set to LeaderboardScoresDownloaded_t. LeaderboardScoresDownloaded_t will contain a handle to pull the results from GetDownloadedLeaderboardEntries(). You can ask for more entries than exist, and it will return as many as do exist. * k_ELeaderboardDataRequestGlobal requests rows in the leaderboard from the full table, with nRangeStart &amp; nRangeEnd in the range [1, TotalEntries] * k_ELeaderboardDataRequestGlobalAroundUser requests rows around the current user, nRangeStart being negate e.g. DownloadLeaderboardEntries( hLeaderboard, k_ELeaderboardDataRequestGlobalAroundUser, -3, 3 ) will return 7 rows, 3 before the user, 3 after * k_ELeaderboardDataRequestFriends requests all the rows for friends of the current user
	 * @param {string} leaderboard
	 * @param {ELeaderboardDataRequest} request
	 * @param {number} start
	 * @param {number} end
	 * @returns {string}
	 */
	export function user_stats_download_leaderboard_entries(
		leaderboard: string,
		request: number,
		start: number,
		end: number,
	): string;

	/**
	 * Returns data about a single leaderboard entry
	 * @param {string} leaderboard Leaderboard handle
	 * @param {number} index Which entry to get
	 * @returns {LuaMultiReturn<[Boolean, Table]>}  | The requested leaderboard entry.
	 */
	export function user_stats_get_downloaded_leaderboard_entry(
		leaderboard: string,
		index: number,
	): LuaMultiReturn<[boolean, {} | undefined]>;

	/**
	 * Returns the appID of the current process.
	 * @returns {Number}
	 */
	export function utils_get_app_id(): number;

	/**
	 * Return the number of seconds since the user.
	 * @returns {Number}
	 */
	export function utils_get_seconds_since_app_active(): number;

	/**
	 * Returns true if currently running on the Steam Deck device.
	 * @returns {Boolean}
	 */
	export function utils_is_steam_running_on_steam_deck(): boolean;

	/**
	 * Get size of image
	 * @param {number} image Image handle
	 * @returns {LuaMultiReturn<[Boolean, Number, Number]>} True if size of image was read successfully | Image width or nil | Image height or nil
	 */
	export function utils_get_image_size(
		image: number,
	): LuaMultiReturn<[boolean, number | undefined, number | undefined]>;

	/**
	 * Get image in RGBA format.
	 * @param {number} image Image handle
	 * @param {number} size Size of image
	 * @returns {LuaMultiReturn<[Boolean, String]>} True if size of image was read successfully |
	 */
	export function utils_get_image_rgba(
		image: number,
		size: number,
	): LuaMultiReturn<[boolean, string | undefined]>;
}
