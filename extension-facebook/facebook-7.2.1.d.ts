/// <library version="7.2.1" src="https://github.com/defold/extension-facebook/archive/refs/tags/7.2.1.zip" />
/** @noSelfInFile */

/**
 * @see {@link https://github.com/defold/extension-facebook|Github Source}
 */
declare namespace facebook {
	/**
	 * Login to Facebook and request a set of publish permissions.
	The user is prompted to authorize the application using the login dialog of the specific platform. Even if the user is already logged in to Facebook this function can still be used to request additional publish permissions.
	A comprehensive list of permissions can be found in the [Facebook permissions](https://developers.facebook.com/docs/facebook-login/permissions) documentation, as well as in their [guide to best practices for login management](https://developers.facebook.com/docs/facebook-login/best-practices).
	* @param {table} permissions table with the requested publish permission strings.
	* @param {number} audience The audience that should be able to see the publications. Can be any of
	- `facebook.AUDIENCE_NONE`
	- `facebook.AUDIENCE_ONLYME`
	- `facebook.AUDIENCE_FRIENDS`
	- `facebook.AUDIENCE_EVERYONE`
	* @param {function} callback Callback function that is executed when the permission request dialog is closed.
	* @example Log in to Facebook with a set of publish permissions
	```lua
	local permissions = {"publish_actions"}
	facebook.login_with_permissions(permissions, facebook.AUDIENCE_FRIENDS, function(self, data)
			if (data.status == facebook.STATE_OPEN and data.error == nil) then
					print("Successfully logged into Facebook")
					pprint(facebook.permissions())
			else
					print("Failed to get permissions (" .. data.status .. ")")
					pprint(data)
			end
	end)
	```

	Log in to Facebook with a set of read permissions
	```lua
	local permissions = {"public_profile", "email", "user_friends"}
	facebook.login_with_read_permissions(permissions, facebook.AUDIENCE_EVERYONE, function(self, data)
			if (data.status == facebook.STATE_OPEN and data.error == nil) then
					print("Successfully logged into Facebook")
					pprint(facebook.permissions())
			else
					print("Failed to get permissions (" .. data.status .. ")")
					pprint(data)
			end
	end)
	```
	*/
	export function login_with_permissions(
		permissions: string[],
		audience: number,
		callback: (this: any, data: {}) => void,
	): void;

	/**
	 * Logout from Facebook
	 */
	export function logout(): void;

	/**
	 * Initialize Facebook SDK (if facebook.autoinit is 0 in game.project)
	 */
	export function init(): void;

	/**
	 * Get the current Facebook access token.
	This function returns the currently stored access token after a previous successful login. If it returns nil no access token exists and you need to perform a login to get the wanted permissions.
	* @returns {string} the access token or nil if the user is not logged in
	* @example Get the current access token, then use it to perform a graph API request.

	```lua
	local function get_name_callback(self, id, response)
			-- do something with the response
	end
	function init(self)
			-- assuming we are already logged in.
			local token = facebook.access_token()
			if token then
					local url = "https://graph.facebook.com/me/?access_token=".. token
					http.request(url, "GET", get_name_callback)
			end
	end
	```
	*/
	export function access_token(): string;

	/**
	 * Get the currently granted permissions.
	This function returns a table with all the currently granted permission strings.
	* @returns {table} The permissions
	* @example Check the currently granted permissions for a particular permission

	```lua
	for _,permission in ipairs(facebook.permissions()) do
			if permission == "user_likes" then
					-- "user_likes" granted...
					break
			end
	end
	```
	*/
	export function permissions(): {};

	/**
	 * Post an event to Facebook Analytics
	This function will post an event to Facebook Analytics where it can be used in the Facebook Insights system.
	* @param {number|string} event An event can either be one of the predefined constants below or a text string which can be used to define a custom event that is registered with Facebook Analytics.
	- `facebook.EVENT_ACHIEVED_LEVEL` - `facebook.EVENT_ADDED_PAYMENT_INFO` - `facebook.EVENT_ADDED_TO_CART` - `facebook.EVENT_ADDED_TO_WISHLIST` - `facebook.EVENT_COMPLETED_REGISTRATION` - `facebook.EVENT_COMPLETED_TUTORIAL` - `facebook.EVENT_INITIATED_CHECKOUT` - `facebook.EVENT_PURCHASED` - `facebook.EVENT_RATED` - `facebook.EVENT_SEARCHED` - `facebook.EVENT_SPENT_CREDITS` - `facebook.EVENT_TIME_BETWEEN_SESSIONS` - `facebook.EVENT_UNLOCKED_ACHIEVEMENT` - `facebook.EVENT_VIEWED_CONTENT`
	* @param {number} value A numeric value for the event. This should represent the value of the event, such as the level achieved, price for an item or number of orcs killed.
	* @param {table} params Optional table with parameters and their values. A key in the table can either be one of the predefined constants below or a text which can be used to define a custom parameter.
	- `facebook.PARAM_CONTENT_ID` - `facebook.PARAM_CONTENT_TYPE` - `facebook.PARAM_CURRENCY` - `facebook.PARAM_DESCRIPTION` - `facebook.PARAM_LEVEL` - `facebook.PARAM_MAX_RATING_VALUE` - `facebook.PARAM_NUM_ITEMS` - `facebook.PARAM_PAYMENT_INFO_AVAILABLE` - `facebook.PARAM_REGISTRATION_METHOD` - `facebook.PARAM_SEARCH_STRING` - `facebook.PARAM_SOURCE_APPLICATION` - `facebook.PARAM_SUCCESS`
	* @example Post a spent credits event to Facebook Analytics

	```lua
	params = {[facebook.PARAM_LEVEL] = 30, [facebook.PARAM_NUM_ITEMS] = 2}
	facebook.post_event(facebook.EVENT_SPENT_CREDITS, 25, params)
	```
	*/
	export function post_event(
		event: number | string,
		value: number,
		params?: { [key: number | string]: number },
	): void;

	/**
	 * Enable event usage with Facebook Analytics This function will enable event usage for Facebook Analytics which means that Facebook will be able to use event data for ad-tracking.
	[icon:attention] Event usage cannot be controlled and is always enabled for the Facebook Canvas platform, therefore this function has no effect on Facebook Canvas.
	*/
	export function enable_event_usage(): void;

	/**
	 * Disable event usage with Facebook Analytics This function will disable event usage for Facebook Analytics which means that Facebook won't be able to use event data for ad-tracking. Events will still be sent to Facebook for insights.
	[icon:attention] Event usage cannot be controlled and is always enabled for the Facebook Canvas platform, therefore this function has no effect on Facebook Canvas.
	*/
	export function disable_event_usage(): void;

	/**
	 * Enable advertiser tracking This function will set AdvertiserTrackingEnabled (the 'ATE' flag) to true on iOS, to inform Audience Network to use the data to deliver personalized ads for users on iOS 14 and above.
	 */
	export function enable_advertiser_tracking(): void;

	/**
	 * Disable advertiser tracking This function will set AdvertiserTrackingEnabled (the 'ATE' flag) to false on iOS, to inform Audience Network not to use the data to deliver personalized ads for users on iOS 14 and above.
	 */
	export function disable_advertiser_tracking(): void;

	/**
	 * Show facebook web dialog
	Display a Facebook web dialog of the type specified in the `dialog` parameter.

	The `param` table should be set up according to the requirements of each dialog type. Note that some parameters are mandatory. Below is the list of available dialogs and where to find Facebook's developer documentation on parameters and response data.

	`"apprequests"`
	Shows a Game Request dialog. Game Requests allows players to invite their friends to play a game. Available parameters
	- [type:string] `title`
	- [type:string] `message`
	- [type:number] `action_type`
	- [type:number] `filters`
	- [type:string] `data`
	- [type:string] `object_id`
	- [type:table] `suggestions`
	- [type:table] `recipients`
	- [type:string] `to`


	On success, the "result" table parameter passed to the callback function will include the following fields
	- [type:string] `request_id`
	- [type:table] `to`

	[Details for each parameter](https://developers.facebook.com/docs/games/services/gamerequests/v2.6#dialogparameters)

	`"feed"`
	The Feed Dialog allows people to publish individual stories to their timeline.

	- [type:string] `caption`
	- [type:string] `description`
	- [type:string] `picture`
	- [type:string] `link`
	- [type:table] `people_ids`
	- [type:string] `place_id`
	- [type:string] `ref`


	On success, the "result" table parameter passed to the callback function will include the following fields
	- [type:string] `post_id`

	[Details for each parameter](https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.6#params)

	`"appinvite"`
	The App Invite dialog is available only on iOS and Android. Note that the `url` parameter corresponds to the appLinkURL (iOS) and setAppLinkUrl (Android) properties.
	- [type:string] `url`
	- [type:string] `preview_image`
	[Details for each parameter](https://developers.facebook.com/docs/reference/ios/current/class/FBSDKAppInviteContent)
	* @param {string} dialog Dialog to show
	- `"apprequests"`
	- `"feed"`
	- `"appinvite"`
	* @param {table} param table with dialog parameters
	* @param {function} callback Callback function that is called when the dialog is closed.
	* @example Show a dialog allowing the user to share a post to their timeline

	```lua
	local function fb_share(self, result, error)
			if error then
					-- something did not go right...
			else
					-- do something sensible
			end
	end
	function init(self)
			-- assuming we have logged in with publish permissions
			local param = { link = "http://www.mygame.com",picture="http://www.mygame.com/image.jpg" }
			facebook.show_dialog("feed", param, fb_share)
	end
	```
	*/
	export function show_dialog(
		dialog: string,
		param: {},
		callback: (this: any, result: {}, error: {}) => void,
	): void;

	/**
	 * Get the version of the Facebook SDK used by the extension.
	 * @returns {string} The Facebook SDK version
	 */
	export function get_version(): string;

	/**
	 * Allows receiving deferred deep link URL and parameters.
	[More info about Referred Deep Links](https://developers.facebook.com/docs/app-ads/deep-linking/)
	* @param {function} callback Callback function that is called when information is ready.
	* @example Show a dialog allowing the user to share a post to their timeline

	```lua
	local function deferred_deep_link_callback(self, result, error)
		if error then
			print(error.error)
		else
			pprint(result)
		end
	end

	function init(self)
		facebook.deferred_deep_link(deferred_deep_link_callback)
	end
	```
	*/
	export function deferred_deep_link(
		callback: (
			this: any,
			result: {
				ref: string,
				extras: {},
				target_url: string,
			},
			error: {} | undefined
		) => void,
	): void;

	/**
	 * The Facebook login session is open
	 */
	export const STATE_OPEN: number;
	/**
	 * The Facebook login session has closed because login failed
	 */
	export const STATE_CLOSED_LOGIN_FAILED: number;
	/**
	 * Game request action type "none" for "apprequests" dialog
	 */
	export const GAMEREQUEST_ACTIONTYPE_NONE: number;
	/**
	 * Game request action type "send" for "apprequests" dialog
	 */
	export const GAMEREQUEST_ACTIONTYPE_SEND: number;
	/**
	 * Game request action type "askfor" for "apprequests" dialog
	 */
	export const GAMEREQUEST_ACTIONTYPE_ASKFOR: number;
	/**
	 * Game request action type "turn" for "apprequests" dialog
	 */
	export const GAMEREQUEST_ACTIONTYPE_TURN: number;
	/**
	 * Game request filter type "none" for "apprequests" dialog
	 */
	export const GAMEREQUEST_FILTER_NONE: number;
	/**
	 * Game request filter type "app_users" for "apprequests" dialog
	 */
	export const GAMEREQUEST_FILTER_APPUSERS: number;
	/**
	 * Game request filter type "app_non_users" for "apprequests" dialog
	 */
	export const GAMEREQUEST_FILTER_APPNONUSERS: number;
	/**
	 * Log this event when the user has achieved a level
	 */
	export const EVENT_ACHIEVED_LEVEL: number;
	/**
	 * Log this event when the user has entered their payment info
	 */
	export const EVENT_ADDED_PAYMENT_INFO: number;
	/**
	 * Log this event when the user has added an item to their cart The value_to_sum passed to facebook.post_event should be the item's price.
	 */
	export const EVENT_ADDED_TO_CART: number;
	/**
	 * Log this event when the user has added an item to their wish list The value_to_sum passed to facebook.post_event should be the item's price.
	 */
	export const EVENT_ADDED_TO_WISHLIST: number;
	/**
	 * Log this event when a user has completed registration with the app
	 */
	export const EVENT_COMPLETED_REGISTRATION: number;
	/**
	 * Log this event when the user has completed a tutorial in the app
	 */
	export const EVENT_COMPLETED_TUTORIAL: number;
	/**
	 * Log this event when the user has entered the checkout process The value_to_sum passed to facebook.post_event should be the total price in the cart.
	 */
	export const EVENT_INITIATED_CHECKOUT: number;
	/**
	 * Log this event when the user has completed a purchase. The value_to_sum passed to facebook.post_event should be the numeric rating.
	 */
	export const EVENT_PURCHASED: number;
	/**
	 * Log this event when the user has rated an item in the app
	 */
	export const EVENT_RATED: number;
	/**
	 * Log this event when a user has performed a search within the app
	 */
	export const EVENT_SEARCHED: number;
	/**
	 * Log this event when the user has spent app credits The value_to_sum passed to facebook.post_event should be the number of credits spent.
	 */
	export const EVENT_SPENT_CREDITS: number;
	/**
	 * Log this event when measuring the time between user sessions
	 */
	export const EVENT_TIME_BETWEEN_SESSIONS: number;
	/**
	 * Log this event when the user has unlocked an achievement in the app
	 */
	export const EVENT_UNLOCKED_ACHIEVEMENT: number;
	/**
	 * Log this event when a user has viewed a form of content in the app
	 */
	export const EVENT_VIEWED_CONTENT: number;
	/**
	 * Parameter key used to specify an ID for the content being logged about
	 * The parameter key could be an EAN, article identifier, etc., depending on the nature of the app.
	 */
	export const PARAM_CONTENT_ID: number;
	/**
	 * Parameter key used to specify a generic content type/family for the logged event
	 * The key is an arbitrary type/family (e.g. "music", "photo", "video") depending on the nature of the app.
	 */
	export const PARAM_CONTENT_TYPE: number;
	/**
	 * Parameter key used to specify currency used with logged event
	 * Use a currency value key, e.g. "USD", "EUR", "GBP" etc. See See ISO-4217 for specific values.
	 */
	export const PARAM_CURRENCY: number;
	/**
	 * Parameter key used to specify a description appropriate to the event being logged
	 * Use this for app specific event description, for instance the name of the achievement unlocked in the facebook.EVENT_UNLOCKED_ACHIEVEMENT event.
	 */
	export const PARAM_DESCRIPTION: number;
	/**
	 * Parameter key used to specify the level achieved
	 */
	export const PARAM_LEVEL: number;
	/**
	 * Parameter key used to specify the maximum rating available
	 * Set to specify the max rating available for the facebook.EVENT_RATED event. E.g., "5" or "10".
	 */
	export const PARAM_MAX_RATING_VALUE: number;
	/**
	 * Parameter key used to specify how many items are being processed
	 * Set to specify the number of items being processed for an facebook.EVENT_INITIATED_CHECKOUT or facebook.EVENT_PURCHASED event.
	 */
	export const PARAM_NUM_ITEMS: number;
	/**
	 * Parameter key used to specify whether payment info is available
	 * Set to specify if payment info is available for the facebook.EVENT_INITIATED_CHECKOUT event.
	 */
	export const PARAM_PAYMENT_INFO_AVAILABLE: number;
	/**
	 * Parameter key used to specify method user has used to register for the app
	 * Set to specify what registation method a user used for the app, e.g. "Facebook", "email", "Twitter", etc.
	 */
	export const PARAM_REGISTRATION_METHOD: number;
	/**
	 * Parameter key used to specify user search string
	 * Set this to the the string that the user provided for a search operation.
	 */
	export const PARAM_SEARCH_STRING: number;
	/**
	 * Parameter key used to specify source application package
	 */
	export const PARAM_SOURCE_APPLICATION: number;
	/**
	 * Parameter key used to specify activity success
	 * Set this key to indicate whether the activity being logged about was successful or not.
	 */
	export const PARAM_SUCCESS: number;
	/**
	 * Publish permission to reach no audience
	 */
	export const AUDIENCE_NONE: number;
	/**
	 * Publish permission to reach only me (private to current user)
	 */
	export const AUDIENCE_ONLYME: number;
	/**
	 * Publish permission to reach user friends
	 */
	export const AUDIENCE_FRIENDS: number;
	/**
	 * Publish permission to reach everyone
	 */
	export const AUDIENCE_EVERYONE: number;
}
