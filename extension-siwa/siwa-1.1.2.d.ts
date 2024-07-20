/// <library version="1.1.2" src="https://github.com/defold/extension-siwa/archive/refs/tags/1.1.2.zip" />
/** @noSelfInFile */

/**
 * @see {@link https://github.com/defold/extension-siwa|Github Source}
 * @see {@link https://defold.com/extension-siwa/|Documentation}
 */
declare namespace siwa {
	/**
	 * Check if Sign in with Apple is available (iOS 13+).
	 */
	export function is_supported(): void;

	/**
	 * Get the credential state of a user.
	 * @param {string} user_id User id to get credential state for.
	 * @param {function} callback Credential state callback function.
	 * @example ```lua
	siwa.get_credential_state(id, function(self, data)
		if data.credential_state == siwa.STATE_AUTHORIZED then
			print("User has still authorized the application", data.user_id)
		elseif data.credential_state == siwa.STATE_REVOKED then
			print("User has revoked authorization for the application", data.user_id)
		end
	end)
	```
 */
	export function get_credential_state(
		user_id: string,
		callback: (
			this: any,
			state: {
				user_id: string;
				credential_state: unknown;
			},
		) => void,
	): void;

	/**
	 * Show the Sign in with Apple UI
	 * @param {function} callback Authentication callback function.
	 * @example ```lua
	siwa.authenticate(function(self, data)
		print(data.identity_token)
		print(data.user_id)
		print(data.first_name, data.family_name)
		print(data.email)
		if data.user_status == siwa.STATUS_LIKELY_REAL then
			print("Likely a real person")
		end
	end)
	```
 */
	export function authenticate(
		callback: (
			this: any,
			state: {
				user_id?: string;
				identity_token?: unknown;
				email?: string;
				first_name?: string;
				family_name?: string;
				user_status?: unknown;
				result?: unknown;
			},
		) => void,
	): void;

	/**
	 * The user can’t be found.
	 */
	export const STATE_NOT_FOUND: number;
	/**
	 * Unknown credential state.
	 */
	export const STATE_UNKNOWN: number;
	/**
	 * The user is authorized.
	 */
	export const STATE_AUTHORIZED: number;
	/**
	 * Authorization for the given user has been revoked.
	 */
	export const STATE_REVOKED: number;
	/**
	 * The system hasn’t determined whether the user might be a real person.
	 */
	export const STATUS_UNKNOWN: number;
	/**
	 * The system can’t determine this user’s status as a real person.
	 */
	export const STATUS_UNSUPPORTED: number;
	/**
	 * The user appears to be a real person.
	 */
	export const STATUS_LIKELY_REAL: number;
}
