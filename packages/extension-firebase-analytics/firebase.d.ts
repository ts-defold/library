/** @noSelfInFile */

/**
 * @url https://github.com/defold/extension-firebase-analytics
 * @noResolution
 */
declare namespace firebase {
	export namespace analytics {
		/**
		 * Initialise analytics
		 */
		export function initialize(): void;

		/**
		 * Sets a callback function for receiving events from the SDK. Call `firebase.analytics.set_callback(nil)` to remove callback
		 * @param {function} callback Callback function that is executed on any event in the SDK.
		 */
		export function set_callback(
			callback: (
				this: any,
				message_id: number,
				message: { error?: string; instance_id?: string },
			) => void,
		): void;

		/**
		 * Log an event without parameters.
		 * @param {string} name Event name
		 */
		export function log(name: string): void;

		/**
		 * Log an event with one string parameter.
		 * @param {string} name Event name
		 * @param {string} PARAMeter_name Parameter name
		 * @param {string} PARAMeter_value Parameter value
		 */
		export function log_string(
			name: string,
			PARAMeter_name: string,
			PARAMeter_value: string,
		): void;

		/**
		 * Log an event with one integer parameter.
		 * @param {string} name Event name
		 * @param {string} PARAMeter_name Parameter name
		 * @param {number} PARAMeter_value Parameter value
		 */
		export function log_int(
			name: string,
			PARAMeter_name: string,
			PARAMeter_value: number,
		): void;

		/**
		 * Log an event with one float parameter.
		 * @param {string} name Event name
		 * @param {string} PARAMeter_name Parameter name
		 * @param {number} PARAMeter_value Parameter value
		 */
		export function log_number(
			name: string,
			PARAMeter_name: string,
			PARAMeter_value: number,
		): void;

		/**
		 * Log an event with table parameters.
		 * @param {string} name Event name
		 * @param {table} PARAMeters_table Table with parameters (key-value pairs)
		 */
		export function log_table(name: string, PARAMeters_table: {}): void;

		/**
		 * Sets the user ID property.
		 * @param {string} user_id User ID property
		 */
		export function set_user_id(user_id: string): void;

		/**
		 * Set a user property to the given value.
		 * @param {string} name User property name
		 * @param {string} property User property value
		 */
		export function set_user_property(name: string, property: string): void;

		/**
		 * Clears all data for this app from the device and resets the app instance id.
		 */
		export function reset(): void;

		/**
		 * Get the instance ID from the service. Returned in callback with MSG_INSTANCE_ID message_id.
		 */
		export function get_id(): void;

		/**
		 * Sets whether analytics collection is enabled for this app on this device.
		 * @param {boolean} key The value
		 */
		export function set_enabled(key: boolean): void;

		/**
		 * Event generated when an error occurred.
		 */
		export const MSG_ERROR: number;
		/**
		 * Event generated when instance_id ready after `firebase.analytics.get_id()` call
		 */
		export const MSG_INSTANCE_ID: number;
		/**
		 * Predefined event
		 */
		export const EVENT_ADIMPRESSION: string;
		/**
		 * Predefined event
		 */
		export const EVENT_ADDPAYMENTINFO: string;
		/**
		 * Predefined event
		 */
		export const EVENT_ADDSHIPPINGINFO: string;
		/**
		 * Predefined event
		 */
		export const EVENT_ADDTOCART: string;
		/**
		 * Predefined event
		 */
		export const EVENT_ADDTOWISHLIST: string;
		/**
		 * Predefined event
		 */
		export const EVENT_APPOPEN: string;
		/**
		 * Predefined event
		 */
		export const EVENT_BEGINCHECKOUT: string;
		/**
		 * Predefined event
		 */
		export const EVENT_CAMPAIGNDETAILS: string;
		/**
		 * Predefined event
		 */
		export const EVENT_EARNVIRTUALCURRENCY: string;
		/**
		 * Predefined event
		 */
		export const EVENT_GENERATELEAD: string;
		/**
		 * Predefined event
		 */
		export const EVENT_JOINGROUP: string;
		/**
		 * Predefined event
		 */
		export const EVENT_LEVELEND: string;
		/**
		 * Predefined event
		 */
		export const EVENT_LEVELSTART: string;
		/**
		 * Predefined event
		 */
		export const EVENT_LEVELUP: string;
		/**
		 * Predefined event
		 */
		export const EVENT_LOGIN: string;
		/**
		 * Predefined event
		 */
		export const EVENT_POSTSCORE: string;
		/**
		 * Predefined event
		 */
		export const EVENT_PURCHASE: string;
		/**
		 * Predefined event
		 */
		export const EVENT_REFUND: string;
		/**
		 * Predefined event
		 */
		export const EVENT_REMOVEFROMCART: string;
		/**
		 * Predefined event
		 */
		export const EVENT_SCREENVIEW: string;
		/**
		 * Predefined event
		 */
		export const EVENT_SEARCH: string;
		/**
		 * Predefined event
		 */
		export const EVENT_SELECTCONTENT: string;
		/**
		 * Predefined event
		 */
		export const EVENT_SELECTITEM: string;
		/**
		 * Predefined event
		 */
		export const EVENT_SELECTPROMOTION: string;
		/**
		 * Predefined event
		 */
		export const EVENT_SHARE: string;
		/**
		 * Predefined event
		 */
		export const EVENT_SIGNUP: string;
		/**
		 * Predefined event
		 */
		export const EVENT_SPENDVIRTUALCURRENCY: string;
		/**
		 * Predefined event
		 */
		export const EVENT_TUTORIALBEGIN: string;
		/**
		 * Predefined event
		 */
		export const EVENT_TUTORIALCOMPLETE: string;
		/**
		 * Predefined event
		 */
		export const EVENT_UNLOCKACHIEVEMENT: string;
		/**
		 * Predefined event
		 */
		export const EVENT_VIEWCART: string;
		/**
		 * Predefined event
		 */
		export const EVENT_VIEWITEM: string;
		/**
		 * Predefined event
		 */
		export const EVENT_VIEWITEMLIST: string;
		/**
		 * Predefined event
		 */
		export const EVENT_VIEWPROMOTION: string;
		/**
		 * Predefined event
		 */
		export const EVENT_VIEWSEARCHRESULTS: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ADFORMAT: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ADNETWORKCLICKID: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ADPLATFORM: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ADSOURCE: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ADUNITNAME: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_AFFILIATION: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_CP1: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_CAMPAIGN: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_CAMPAIGNID: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_CHARACTER: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_CONTENT: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_CONTENTTYPE: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_COUPON: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_CREATIVEFORMAT: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_CREATIVENAME: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_CREATIVESLOT: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_CURRENCY: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_DESTINATION: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_DISCOUNT: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ENDDATE: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_EXTENDSESSION: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_FLIGHTNUMBER: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_GROUPID: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_INDEX: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ITEMBRAND: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ITEMCATEGORY: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ITEMCATEGORY2: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ITEMCATEGORY3: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ITEMCATEGORY4: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ITEMCATEGORY5: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ITEMID: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ITEMLISTID: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ITEMLISTNAME: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ITEMNAME: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ITEMVARIANT: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ITEMS: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_LEVEL: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_LEVELNAME: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_LOCATION: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_LOCATIONID: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_MARKETINGTACTIC: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_MEDIUM: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_METHOD: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_NUMBEROFNIGHTS: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_NUMBEROFPASSENGERS: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_NUMBEROFROOMS: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_ORIGIN: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_PAYMENTTYPE: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_PRICE: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_PROMOTIONID: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_PROMOTIONNAME: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_QUANTITY: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_SCORE: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_SCREENCLASS: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_SCREENNAME: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_SEARCHTERM: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_SHIPPING: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_SHIPPINGTIER: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_SOURCE: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_SOURCEPLATFORM: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_STARTDATE: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_SUCCESS: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_TAX: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_TERM: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_TRANSACTIONID: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_TRAVELCLASS: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_VALUE: string;
		/**
		 * Predefined parameter
		 */
		export const PARAM_VIRTUALCURRENCYNAME: string;
		/**
		 * Predefined property
		 */
		export const PROP_ALLOWADPERSONALIZATIONSIGNALS: string;
		/**
		 * Predefined property
		 */
		export const PROP_SIGNUPMETHOD: string;
	}
}
