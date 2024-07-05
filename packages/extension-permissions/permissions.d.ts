/** @noSelfInFile */

/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions to improve the accuracy of these types are welcome.
 * @see {@link https://github.com/defold/extension-permissions|Github Source}
 */
declare namespace permissions {
	type PermissionResponse = number & { __brand: 'permissions' };

	/**
	 * Determine whether you have been granted a particular permission.
	 * @param {string} permission A constant that represent permission, for example `android.permission.ACCESS_NETWORK_STATE`
	 * @returns {number} A result can be one of the predefined constants below
	- `permissions.PERMISSION_GRANTED`
	- `permissions.PERMISSION_DENIED`
	- `permissions.PERMISSION_SHOW_RATIONALE`
	* @example ```lua
	local result = permissions.check("android.permission.ACCESS_NETWORK_STATE")
	if result == permissions.PERMISSION_DENIED then
			-- You can directly ask for the permission.
	elseif result == permissions.PERMISSION_GRANTED then
			-- You can use the API that requires the permission.
	elseif result == permissions.PERMISSION_SHOW_RATIONALE then
			-- In an educational UI, explain to the user why your app requires this
			-- permission for a specific feature to behave as expected, and what
			-- features are disabled if it's declined. In this UI, include a
			-- "cancel" or "no thanks" button that lets the user continue
			-- using your app without granting the permission.
	end

	```
	*/
	export function check(permission: string): PermissionResponse;

	/**
	 * Requests permissions to be granted to this application.
	 * @param {table} request_tbl An array with constants that represent permissions.
	 * @param {function} callback
	 * @example ```lua
	local permissions_table = {"android.permission.WRITE_EXTERNAL_STORAGE", "android.permission.READ_CONTACTS"}
	permissions.request(permissions_table,
			function(self, result)
					for permission, result in pairs(result) do
						if result == permissions.PERMISSION_DENIED then
								-- You can directly ask for the permission.
						elseif result == permissions.PERMISSION_GRANTED then
								-- You can use the API that requires the permission.
						elseif result == permissions.PERMISSION_SHOW_RATIONALE then
								-- In an educational UI, explain to the user why your app requires this
								-- permission for a specific feature to behave as expected, and what
								-- features are disabled if it's declined. In this UI, include a
								-- "cancel" or "no thanks" button that lets the user continue
								-- using your app without granting the permission.
						end
					end
			end)
	```
	*/
	export function request(
		request_tbl: string[],
		callback: (
			this: any,
			result: LuaPairsIterable<string, PermissionResponse>,
		) => void,
	): void;

	/**
	 * The permission has been granted to the given package.
	 */
	export const PERMISSION_GRANTED: PermissionResponse;

	/**
	 * The permission has not been granted to the given package.
	 */
	export const PERMISSION_DENIED: PermissionResponse;

	/**
	 * Explain why your app needs the permission [Android doc](https://developer.android.com/training/permissions/requesting#explain)
	 */
	export const PERMISSION_SHOW_RATIONALE: PermissionResponse;
}
