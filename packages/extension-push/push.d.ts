/** @noSelfInFile */

/**
 * @url https://github.com/defold/extension-push
 * @noResolution
 */
declare namespace push {
	/**
	 * Send a request for push notifications. Note that the notifications table parameter is iOS only and will be ignored on Android.
	 * @param {table} notifications The types of notifications to listen to. [icon:ios]
	 * @param {function} callback Register callback function.
	 * @example Register for push notifications on iOS. Note that the token needs to be converted on this platform.
	```lua
	local function push_listener(self, payload, origin)
			-- The payload arrives here.
	end

	function init(self)
			local alerts = {push.NOTIFICATION_BADGE, push.NOTIFICATION_SOUND, push.NOTIFICATION_ALERT}
			push.register(alerts, function (self, token, error)
			if token then
						-- NOTE: %02x to pad byte with leading zero
						local token_string = ""
						for i = 1,#token do
								token_string = token_string .. string.format("%02x", string.byte(token, i))
						end
						print(token_string)
						push.set_listener(push_listener)
			else
						-- Push registration failed.
						print(error.error)
			end
	end
	```

	Register for push notifications on Android.

	```lua
	local function push_listener(self, payload, origin)
			-- The payload arrives here.
	end

	function init(self)
			push.register({}, function (self, token, error)
					if token then
								print(token)
								push.set_listener(push_listener)
					else
								-- Push registration failed.
								print(error.error)
					end
			end)
	end
	```
	*/
	export function register(
		notifications: {},
		callback: (this_: any, token: string, error: {}) => void,
	): void;

	/**
	 * Sets a listener function to listen to push notifications.
	 * @param {function} listener Listener callback function.
	 * @example Set the push notification listener.
	```lua
	local function push_listener(self, payload, origin, activated)
			-- The payload arrives here.
			pprint(payload)
			if origin == push.ORIGIN_LOCAL then
					-- This was a local push
					...
			end

			if origin == push.ORIGIN_REMOTE then
					-- This was a remote push
					...
			end
	end

	local init(self)
			...
			-- Assuming that push.register() has been successfully called earlier
			push.set_listener(push_listener)
	end
	```
	*/
	export function set_listener(
		listener: (
			this_: any,
			payload: {},
			origin: any,
			activated: boolean,
		) => void,
	): void;

	/**
	 * Set the badge count for application icon. This function is only available on iOS. [icon:ios]
	 * @param {number} count Badge count
	 */
	export function set_badge_count(count: number): void;

	/**
	 * Local push notifications are scheduled with this function.
	The returned `id` value is uniquely identifying the scheduled notification and can be stored for later reference.
	* @param {number} time Number of seconds into the future until the notification should be triggered.
	* @param {string} title Localized title to be displayed to the user if the application is not running.
	* @param {string} alert Localized body message of the notification to be displayed to the user if the application is not running.
	* @param {string} payload JSON string to be passed to the registered listener function.
	* @param {table} notification_settings Table with notification and platform specific fields
	* @returns {LuaMultiReturn<[number, string]>} Unique id that can be used to cancel or inspect the notification | Error string if something went wrong, otherwise nil
	* @example This example demonstrates how to schedule a local notification:
	```lua
	-- Schedule a local push in 3 seconds
	local payload = '{ "data" : { "field" : "Some value", "field2" : "Other value" } }'
	id, err = push.schedule(3, "Update!", "There are new stuff in the app", payload, { action = "check it out" })
	if err then
			-- Something went wrong
			...
	end
	```
	*/
	export function schedule(
		time: number,
		title: string,
		alert: string,
		payload: string,
		notification_settings: {},
	): LuaMultiReturn<[number, string]>;

	/**
	 * Use this function to cancel a previously scheduled local push notification.
	The notification is identified by a numeric id as returned by `push.schedule()`.
	* @param {number} id The numeric id of the local push notification
	*/
	export function cancel(id: number): void;

	/**
	 * Use this function to cancel a previously issued local push notifications.
	 */
	export function cancel_all_issued(): void;

	/**
	 * Returns a table with all data associated with a specified local push notification.
	The notification is identified by a numeric id as returned by `push.schedule()`.
	* @param {number} id The numeric id of the local push notification.
	* @returns {table} Table with all data associated with the notification.
	*/
	export function get_scheduled(id: number): {};

	/**
	 * Returns a table with all data associated with all scheduled local push notifications.
	The table contains key, value pairs where the key is the push notification id and the value is a table with the notification data, corresponding to the data given by `push.get_scheduled(id)`.
	* @returns {table} Table with all data associated with all scheduled notifications.
	*/
	export function get_all_scheduled(): {};

	/**
	 * Badge notification type.
	 */
	export const NOTIFICATION_BADGE: number;
	/**
	 * Sound notification type.
	 */
	export const NOTIFICATION_SOUND: number;
	/**
	 * Alert notification type.
	 */
	export const NOTIFICATION_ALERT: number;
	/**
	 * Local push origin.
	 */
	export const ORIGIN_LOCAL: number;
	/**
	 * Remote push origin.
	 */
	export const ORIGIN_REMOTE: number;
	/**
	 * This priority is for items might not be shown to the user except under special circumstances, such as detailed notification logs. Only available on Android. [icon:android]
	 */
	export const PRIORITY_MIN: number;
	/**
	 * Priority for items that are less important. Only available on Android. [icon:android]
	 */
	export const PRIORITY_LOW: number;
	/**
	 * The default notification priority. Only available on Android. [icon:android]
	 */
	export const PRIORITY_DEFAULT: number;
	/**
	 * Priority for more important notifications or alerts. Only available on Android. [icon:android]
	 */
	export const PRIORITY_HIGH: number;
	/**
	 * Set this priority for your application's most important items that require the user's prompt attention or input. Only available on Android. [icon:android]
	 */
	export const PRIORITY_MAX: number;
}
