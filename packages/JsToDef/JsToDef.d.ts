/** @noSelfInFile */

/**
 * Library for sending messages from JavaScript to Defold (Lua)
 * @url https://github.com/AGulev/jstodef
 * @noResolution
 */
declare namespace jstodef {
	type callbackFn = (this: any, message_id: string, message: any) => void;

	/**
	 * @param {function} callback  a function with these parameters: `self` is the current script self. | `message_id` is a string that helps you to identify this message. | `message` is a custom value that might be one of these types: table, number, boolean, string, nil.
	 * @example
	 * ```lua
	 * local function js_listener(self, message_id, message)
	 * if message_id == "MyCustomMessageName" then
	 *  -- do something
	 *   end
	 * end
	 *
	 * function init(self)
	 *   if jstodef then
	 *     jstodef.add_listener(js_listener)
	 *   end
	 * end
	 * ```
	 */
	export function add_listener(callback: callbackFn): void;

	/**
	 * @param {function} callback function that was previously added as a listener with jstodef.add_listener() method
	 * @example
	 * ```lua
	 * function final(self)
	 *   if jstodef then
	 *     jstodef.remove_listener(js_listener)
	 *   end
	 * end
	 * ```
	 */
	export function remove_listener(callback: callbackFn): void;
}
