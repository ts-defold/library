/** @noSelfInFile */

/**
 * @url https://github.com/defold/extension-gpgs
 * @noResolution
 */
declare namespace gpgs {
	/**
	 * Check if Google Play Services are available & ready on the device.
	 * @returns {boolean} Status of Google Play Services on the device.
	 * @example ```lua
	if gpgs then
		local is_supported = gpgs.is_supported()
	end
	```
	*/
	export function is_supported(): boolean;

	/**
	 * Login to GPGS using a button.
	 * @example Log in to GPGS using a button:
	```lua
	if gpgs then
		gpgs.login()
	end
	```
	*/
	export function login(): void;

	/**
	 * Silent login to GPGS.
	This function is trying to retrieve the currently signed-in player’s account.
	[icon:attention] By default login methods request `GoogleSignInOptions.DEFAULT_GAMES_SIGN_IN`. But if you use Disk, we have to request extra scope `Drive.SCOPE_APPFOLDER`. Or if you use ID token, we have to request ID token with provided client_id. If so it causes the first time silent sign-in to fail, except for users who have already signed in successfully on a different device. Turn off GPGS features you don't want to use in `game.project`.
	* @example ```lua
	function init(self)
		if gpgs then
			gpgs.silent_login()
		end
	end
	```
	*/
	export function silent_login(): void;

	/**
	 * Logout from GPGS
	 * @example ```lua
	if gpgs then
		gpgs.logout()
	end
	```
	*/
	export function logout(): void;

	/**
	 * Get the current GPGS player display name.
	 * @returns {string} The player's display name.
	 * @example ```lua
	if gpgs then
		local name = gpgs.get_display_name()
	end
	```
	*/
	export function get_display_name(): string;

	/**
	 * Get the current GPGS player id.
	 * @returns {string} The player ID.
	 * @example ```lua
	if gpgs then
		local id = gpgs.get_id()
	end
	```
	*/
	export function get_id(): string;

	/**
	 * Get the current GPGS player id token. Available only if "gpgs.client_id" is configured in game.project and "gpgs.request_id_token = 1".
	 * @returns {string} The player ID token.
	 * @example ```lua
	if gpgs then
		local id_token = gpgs.get_id_token()
	end
	```
	*/
	export function get_id_token(): string;

	/**
	 * Returns a one-time server auth code to send to your web server which can be exchanged for access token
	 * @returns {string} The server auth code for logged in account.
	 * @example ```lua
	if gpgs then
		local server_auth_code = gpgs.get_server_auth_code()
	end
	```
	*/
	export function get_server_auth_code(): string;

	/**
	 * Check if a user is logged in currently.
	 * @returns {boolean} Current login state.
	 * @example ```lua
	if gpgs then
		local is_loggedin = gpgs.is_logged_in()
	end
	```
	*/
	export function is_logged_in(): boolean;

	/**
	 * This method sets the position for the login popup.
	 * @param {number} position An position can be one of the predefined constants below
	- `gpgs.POPUP_POS_TOP_LEFT`
	- `gpgs.POPUP_POS_TOP_CENTER`
	- `gpgs.POPUP_POS_TOP_RIGHT`
	- `gpgs.POPUP_POS_CENTER_LEFT`
	- `gpgs.POPUP_POS_CENTER`
	- `gpgs.POPUP_POS_CENTER_RIGHT`
	- `gpgs.POPUP_POS_BOTTOM_LEFT`
	- `gpgs.POPUP_POS_BOTTOM_CENTER`
	- `gpgs.POPUP_POS_BOTTOM_RIGHT`

	Default value is `gpgs.POPUP_POS_TOP_CENTER`
	* @example ```lua
	if gpgs then
		gpgs.set_popup_position(gpgs.POPUP_POS_BOTTOM_CENTER)
	end
	```
	*/
	export function set_popup_position(position: number): void;

	/**
	 * Set callback for receiving messages from GPGS.
	 * @param {function} callback A callback taking the following parameters
	 * @example ```lua
	function callback(self, message_id, message)
		if message_id == gpgs.MSG_SIGN_IN or message_id == gpgs.MSG_SILENT_SIGN_IN then
			if message.status == gpgs.STATUS_SUCCESS then
			-- do something after login
			end
		elseif message_id == gpgs.MSG_SIGN_OUT then
		-- do something after logout
		elseif message_id == gpgs.MSG_LOAD_SNAPSHOT then
		-- do something when a save was loaded
		end
	end

	function init(self)
		gpgs.set_callback(callback)
	end

	function init(self)
		gpgs.set_callback(nil) -- remove callback
	end
	```
	*/
	export function set_callback(
		callback: (this: any, message_id: number, message: {}) => void,
	): void;

	/**
	 * Provides a default saved games selection user interface.
	 * @param {string} popupTitle The title to display in the action bar. By default "Game Saves".
	 * @param {boolean} allowAddButton Whether or not to display a "create new snapshot" option in the selection UI. By default `true`.
	 * @param {boolean} allowDelete Whether or not to provide a delete overflow menu option for each snapshot in the selection UI. By default `true`.
	 * @param {number} maxNumberOfSavedGamesToShow The maximum number of snapshots to display in the UI. By default 5.
	 * @example ```lua
	if gpgs then
		gpgs.snapshot_display_saves("Choose the save of the game", false, true, 10)
	end
	```
	*/
	export function snapshot_display_saves(
		popupTitle?: string,
		allowAddButton?: boolean,
		allowDelete?: boolean,
		maxNumberOfSavedGamesToShow?: number,
	): void;

	/**
	 * Opens a snapshot with the given `saveName`. If `createIfNotFound` is set to `true`, the specified snapshot will be created if it does not already exist.
	 * @param {string} saveName The name of the snapshot file to open. Must be between 1 and 100 non-URL-reserved characters (a-z, A-Z, 0-9, or the symbols "-", ".", "_", or "~").
	 * @param {boolean} createIfNotFound If `true`, the snapshot will be created if one cannot be found.
	 * @param {number} conflictPolicy The conflict resolution policy to use for this snapshot that can be one of the predefined constants below
	- `gpgs.RESOLUTION_POLICY_MANUAL`
	- `gpgs.RESOLUTION_POLICY_LONGEST_PLAYTIME`
	- `gpgs.RESOLUTION_POLICY_LAST_KNOWN_GOOD`
	- `gpgs.RESOLUTION_POLICY_MOST_RECENTLY_MODIFIED`
	- `gpgs.RESOLUTION_POLICY_HIGHEST_PROGRESS`

	Default value is `gpgs.RESOLUTION_POLICY_LAST_KNOWN_GOOD`
	* @example ```lua
	if gpgs then
		gpgs.snapshot_open("my_save_1", true, gpgs.RESOLUTION_POLICY_LONGEST_PLAYTIME)
	end
	```
	*/
	export function snapshot_open(
		saveName: string,
		createIfNotFound?: boolean,
		conflictPolicy?: number,
	): void;

	/**
	 * Save the currently opened save on the server and close it.
	 * @param {table} metadata A table with metadata for a save. It contains the fields below
	 * @example ```lua
	if gpgs then
		local png_img, w, h = screenshot.png()
		gpgs.snapshot_commit_and_close({
				coverImage = png_img,
				description = "LEVEL 31, CAVE",
				playedTime = 12345667,
				progressValue = 657
		})
	end
	```
	*/
	export function snapshot_commit_and_close(metadata?: {}): void;

	/**
	 * Returns the currently opened snapshot data.
	 * @returns {LuaMultiReturn<[string, string]>} The byte array data of the currently opened snapshot. `nil` if something goes wrong. | An error message if something goes wrong.
	 * @example ```lua
	if gpgs then
		local bytes, error_message = gpgs.snapshot_get_data()
		if not bytes then
				print("snapshot_get_data ERROR:", error_message)
		else
				print("snapshot_get_data",bytes)
				-- Do something with your data
		end
	end
	```
	*/
	export function snapshot_get_data(): LuaMultiReturn<[string | undefined, string]>;

	/**
	 * Sets the data for the currently opened snapshot.
	 * @param {string} data The data to set.
	 * @returns {LuaMultiReturn<[boolean, string]>} True if data was set for the currently opened snapshot. | An error message if something goes wrong.
	 * @example ```lua
		if gpgs then
			local success, error_message = gpgs.snapshot_set_data(my_data)
			if not success then
					print("snapshot_set_data ERROR:", error_message)
			end
		end
	```
	*/
	export function snapshot_set_data(
		data: string,
	): LuaMultiReturn<[boolean, string]>;

	/**
	 * Check if a snapshot was opened.
	 * @returns {boolean} A current snapshot state.
	 * @example ```lua
	if gpgs then
		local is_opened = gpgs.snapshot_is_opened()
	end
	```
	*/
	export function snapshot_is_opened(): boolean;

	/**
	 * Returns the maximum data size per snapshot cover image in bytes.
	 * @returns {number} The maximum data size per snapshot cover image in bytes.
	 * @example ```lua
	if gpgs then
		local image_size = gpgs.snapshot_get_max_image_size()
	end
	```
	*/
	export function snapshot_get_max_image_size(): number;

	/**
	 * Returns the maximum data size per snapshot in bytes.
	 * @returns {number} The maximum data size per snapshot in bytes.
	 * @example ```lua
	if gpgs then
		local data_size = gpgs.snapshot_get_max_save_size()
	end
	```
	*/
	export function snapshot_get_max_save_size(): number;

	/**
	 * Returns the conflicting snapshot data.
	 * @returns {LuaMultiReturn<[string, boolean]>} The byte array data of the conflicting snapshot. `nil` if something goes wrong. | An error message if something goes wrong.
	 * @example ```lua
	if gpgs then
		local bytes, error_message = gpgs.snapshot_get_conflicting_data()
		if not bytes then
				print("snapshot_get_conflicting_data ERROR:", error_message)
		else
				print("snapshot_get_conflicting_data:",bytes)
				-- Do something with conflicting data data
		end
	end
	```
	*/
	export function snapshot_get_conflicting_data(): LuaMultiReturn<
		[string | undefined, boolean]
	>;

	/**
	 * Resolves a conflict using the data from the provided snapshot.
	 * @param {string} conflictId The conflict id that you want to resolve. Provided in `message` table with `STATUS_CONFLICT` message type.
	 * @param {number} snapshotId Type of the snapshot you want to use for conflict solving that can be one of the predefined constants below
	- `gpgs.SNAPSHOT_CURRENT`
	- `gpgs.SNAPSHOT_CONFLICTING`
	* @example ```lua
	if gpgs then
		gpgs.snapshot_resolve_conflict(self.conflictId, gpgs.SNAPSHOT_CONFLICTING)
	end
	```
	*/
	export function snapshot_resolve_conflict(
		conflictId: string,
		snapshotId: number,
	): void;

	/**
	 * Submit a score to a leaderboard for the currently signed-in player.
	 * @param {string} leaderboardId
	 * @param {number} score
	 */
	export function leaderboard_submit_score(
		leaderboardId: string,
		score: number,
	): void;

	/**
	 * Asynchronously gets the top page of scores for a leaderboard.
	 * @param {string} leaderboardId
	 * @param {number} time_span One of the gpgs.TIME_SPAN_ constants
	 * @param {number} collection One of the gpgs.COLLECTION_ constants
	 * @param {number} max_results Between 1-25
	 */
	export function leaderboard_get_top_scores(
		leaderboardId: string,
		time_span: number,
		collection: number,
		max_results: number,
	): void;

	/**
	 * Asynchronously gets a player-centered page of scores for a leaderboard.
	 * @param {string} leaderboardId
	 * @param {number} time_span One of the gpgs.TIME_SPAN_ constants
	 * @param {number} collection One of the gpgs.COLLECTION_ constants
	 * @param {number} max_results Between 1-25
	 */
	export function leaderboard_get_player_centered_scores(
		leaderboardId: string,
		time_span: number,
		collection: number,
		max_results: number,
	): void;

	/**
	 * Show a leaderboard for a game specified by a leaderboardId.
	 * @param {string} leaderboardId
	 * @param {number} time_span One of the gpgs.TIME_SPAN_ constants
	 * @param {number} collection One of the gpgs.COLLECTION_ constants
	 */
	export function leaderboard_show(
		leaderboardId: string,
		time_span: number,
		collection: number,
	): void;

	/**
	 * Show the list of leaderboards.
	 */
	export function leaderboard_list(): void;

	/**
	 * Asynchronously gets a player-centered page of scores for a leaderboard.
	 * @param {string} leaderboardId
	 * @param {number} time_span One of the gpgs.TIME_SPAN_ constants
	 * @param {number} collection One of the gpgs.COLLECTION_ constants
	 */
	export function leaderboard_get_player_score(
		leaderboardId: string,
		time_span: number,
		collection: number,
	): void;

	/**
	 * Reveal achievement
	 * @param {string} achievementId
	 */
	export function achievement_reveal(achievementId: string): void;

	/**
	 * Unlock achievement
	 * @param {string} achievementId
	 */
	export function achievement_unlock(achievementId: string): void;

	/**
	 * Set achievement progress
	 * @param {string} achievementId
	 * @param {number} steps
	 */
	export function achievement_set(achievementId: string, steps: number): void;

	/**
	 * Increase achievement progress
	 * @param {string} achievementId
	 * @param {number} steps
	 */
	export function achievement_increment(
		achievementId: string,
		steps: number,
	): void;

	/**
	 * Show achivements
	 */
	export function achievement_show(): void;
	export function achievement_get(): void;

	/**
	 *
	 * @param {string} eventId
	 * @param {number} amount
	 */
	export function event_increment(eventId: string, amount: number): void;
	export function event_get(): void;

	/**
	 * The login popup position at the top-left corner.
	 */
	export const POPUP_POS_TOP_LEFT: number;
	/**
	 * The login popup position at the top-center.
	 */
	export const POPUP_POS_TOP_CENTER: number;
	/**
	 * The login popup position at the top-right corner.
	 */
	export const POPUP_POS_TOP_RIGHT: number;
	/**
	 * The login popup position at the center-left.
	 */
	export const POPUP_POS_CENTER_LEFT: number;
	/**
	 * The login popup position at the center of the screen.
	 */
	export const POPUP_POS_CENTER: number;
	/**
	 * The login popup position at the center-right.
	 */
	export const POPUP_POS_CENTER_RIGHT: number;
	/**
	 * The login popup position at the bottom-left corner.
	 */
	export const POPUP_POS_BOTTOM_LEFT: number;
	/**
	 * The login popup position at the bottom-centre.
	 */
	export const POPUP_POS_BOTTOM_CENTER: number;
	/**
	 * The login popup position at the bottom-right corner.
	 */
	export const POPUP_POS_BOTTOM_RIGHT: number;
	/**
	 * Official [GPGS documentation](https://developers.google.com/android/reference/com/google/android/gms/games/SnapshotsClient.html#RESOLUTION_POLICY_MANUAL) for this constant
	 */
	export const RESOLUTION_POLICY_MANUAL: number;
	/**
	 * Official [GPGS documentation](https://developers.google.com/android/reference/com/google/android/gms/games/SnapshotsClient.html#RESOLUTION_POLICY_LONGEST_PLAYTIME) for this constant
	 */
	export const RESOLUTION_POLICY_LONGEST_PLAYTIME: number;
	/**
	 * Official [GPGS documentation](https://developers.google.com/android/reference/com/google/android/gms/games/SnapshotsClient.html#RESOLUTION_POLICY_LAST_KNOWN_GOOD) for this constant
	 */
	export const RESOLUTION_POLICY_LAST_KNOWN_GOOD: number;
	/**
	 * Official [GPGS documentation](https://developers.google.com/android/reference/com/google/android/gms/games/SnapshotsClient.html#RESOLUTION_POLICY_MOST_RECENTLY_MODIFIED) for this constant
	 */
	export const RESOLUTION_POLICY_MOST_RECENTLY_MODIFIED: number;
	/**
	 * Official [GPGS documentation](https://developers.google.com/android/reference/com/google/android/gms/games/SnapshotsClient.html#RESOLUTION_POLICY_HIGHEST_PROGRESS) for this constant
	 */
	export const RESOLUTION_POLICY_HIGHEST_PROGRESS: number;
	/**
	 * The message type that GPGS sends when finishing the asynchronous operation after calling `gpgs.login()`
	 */
	export const MSG_SIGN_IN: number;
	/**
	 * The message type that GPGS sends when finishing the asynchronous operation after calling `gpgs.silent_login()`
	 */
	export const MSG_SILENT_SIGN_IN: number;
	/**
	 * The message type that GPGS sends when finishing the asynchronous operation after calling `gpgs.logout()`
	 */
	export const MSG_SIGN_OUT: number;
	/**
	 * The message type that GPGS sends when finishing the asynchronous operation after calling `gpgs.snapshot_display_saves()`
	 */
	export const MSG_SHOW_SNAPSHOTS: number;
	/**
	 * The message type that GPGS sends when finishing the asynchronous operation after calling `gpgs.snapshot_open()`
	 */
	export const MSG_LOAD_SNAPSHOT: number;
	/**
	 * The message type that GPGS sends when finishing the asynchronous operation after calling `gpgs.snapshot_commit_and_close()`
	 */
	export const MSG_SAVE_SNAPSHOT: number;
	/**
	 * An operation success.
	 */
	export const STATUS_SUCCESS: number;
	/**
	 * An operation failed. Check the error field in the massage table.
	 */
	export const STATUS_FAILED: number;
	/**
	 * A user wants to create new save as a result of `gpgs.snapshot_display_saves()` method. Turn off this button in `gpgs.snapshot_display_saves()` if you don't want to have this functionality.
	 */
	export const STATUS_CREATE_NEW_SAVE: number;
	/**
	 * The result of the calling `gpgs.snapshot_open()` or 'gpgs.snapshot_resolve_conflict()' is a conflict. You need to make decision on how to solve this conflict using 'gpgs.snapshot_resolve_conflict()'.
	 */
	export const STATUS_CONFLICT: number;
	/**
	 * The second parameter for 'gpgs.snapshot_resolve_conflict()' method, which means that you want to choose the current snapshot as a snapshot for conflict solving.
	 */
	export const SNAPSHOT_CURRENT: number;
	/**
	 * The second parameter for 'gpgs.snapshot_resolve_conflict()' method, which means that you want to choose the conflicting snapshot as a snapshot for conflict solving.
	 */
	export const SNAPSHOT_CONFLICTING: number;
	/**
	 * This constant is used in `message.error_status` table when `MSG_LOAD_SNAPSHOT` is `STATUS_FAILED`. [Official GPGS documentation](https://developers.google.com/android/reference/com/google/android/gms/games/GamesStatusCodes.html#STATUS_SNAPSHOT_NOT_FOUND) for this constant
	 */
	export const ERROR_STATUS_SNAPSHOT_NOT_FOUND: number;
	/**
	 * This constant is used in `message.error_status` table when `MSG_LOAD_SNAPSHOT` is `STATUS_FAILED`. [Official GPGS documentation](https://developers.google.com/android/reference/com/google/android/gms/games/GamesStatusCodes.html#STATUS_SNAPSHOT_CREATION_FAILED) for this constant
	 */
	export const ERROR_STATUS_SNAPSHOT_CREATION_FAILED: number;
	/**
	 * This constant is used in `message.error_status` table when `MSG_LOAD_SNAPSHOT` is `STATUS_FAILED`. [Official GPGS documentation](https://developers.google.com/android/reference/com/google/android/gms/games/GamesStatusCodes.html#STATUS_SNAPSHOT_CONTENTS_UNAVAILABLE) for this constant
	 */
	export const ERROR_STATUS_SNAPSHOT_CONTENTS_UNAVAILABLE: number;
	/**
	 * This constant is used in `message.error_status` table when `MSG_LOAD_SNAPSHOT` is `STATUS_FAILED`. [Official GPGS documentation](https://developers.google.com/android/reference/com/google/android/gms/games/GamesStatusCodes.html#STATUS_SNAPSHOT_COMMIT_FAILED) for this constant
	 */
	export const ERROR_STATUS_SNAPSHOT_COMMIT_FAILED: number;
	/**
	 * This constant is used in `message.error_status` table when `MSG_LOAD_SNAPSHOT` is `STATUS_FAILED`. [Official GPGS documentation](https://developers.google.com/android/reference/com/google/android/gms/games/GamesStatusCodes.html#STATUS_SNAPSHOT_FOLDER_UNAVAILABLE) for this constant
	 */
	export const ERROR_STATUS_SNAPSHOT_FOLDER_UNAVAILABLE: number;
	/**
	 * This constant is used in `message.error_status` table when `MSG_LOAD_SNAPSHOT` is `STATUS_FAILED`. [Official GPGS documentation](https://developers.google.com/android/reference/com/google/android/gms/games/GamesStatusCodes.html#STATUS_SNAPSHOT_CONFLICT_MISSING) for this constant
	 */
	export const ERROR_STATUS_SNAPSHOT_CONFLICT_MISSING: number;
}
