/** @noSelfInFile */

/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions to improve the accuracy of these types are welcome.
 * @url https://github.com/ts-defold/library
 * @noResolution
 */
declare namespace zendesk {
	/**
	 * Initialize the Zendesk SDK
	 */
	export function initialize(...args: any[]): unknown;

	/**
	 * Set a callback for events from the Zendesk SDK
	 */
	export function set_callback(...args: any[]): unknown;

	/**
	 * Show the conversation screen.
	 */
	export function show_messaging(...args: any[]): unknown;

	/**
	 * Set conversation fields in the SDK to add contextual data about the conversation.
	 */
	export function set_conversation_fields(...args: any[]): unknown;

	/**
	 * Clear conversation fields from the SDK storage when the client side context changes.
	 */
	export function clear_conversation_fields(...args: any[]): unknown;

	/**
	 * Set custom conversation tags in the SDK to add contextual data about the conversation.
	 */
	export function set_conversation_tags(...args: any[]): unknown;

	/**
	 * Clear conversation tags from SDK storage when the client side context changes.
	 */
	export function clear_conversation_tags(...args: any[]): unknown;

	/**
	 * Authenticate a user.
	 */
	export function login(...args: any[]): unknown;

	/**
	 * Unauthenticate a user.
	 */
	export function logout(...args: any[]): unknown;

	/**
	 * An error was detected while initializing the Zendesk SDK
	 */
	export const MSG_INIT_ERROR: number;
	/**
	 * The Zendesk SDK has been initialized successfully
	 */
	export const MSG_INIT_SUCCESS: number;
	/**
	 * An internal error occured
	 */
	export const MSG_INTERNAL_ERROR: number;
	/**
	 * An generic error occured
	 */
	export const MSG_ERROR: number;
	/**
	 * The number of unread messages has changed
	 */
	export const MSG_UNREAD_MESSAGE_COUNT_CHANGED: number;
	/**
	 * A REST call failed for authentication reasons
	 */
	export const MSG_AUTHENTICATION_FAILED: number;
	/**
	 * Validation checks failed for conversation fields
	 */
	export const MSG_FIELD_VALIDATION_FAILED: number;
	/**
	 * Login was successful
	 */
	export const MSG_LOGIN_SUCCESS: number;
	/**
	 * Login failed
	 */
	export const MSG_LOGIN_FAILED: number;
	/**
	 * Logout was successful
	 */
	export const MSG_LOGOUT_SUCCESS: number;
	/**
	 * Logout failed
	 */
	export const MSG_LOGOUT_FAILED: number;
}
