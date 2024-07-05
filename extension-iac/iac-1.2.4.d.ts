/// <library version="1.2.4" src="https://github.com/defold/extension-iac/archive/refs/tags/1.2.4.zip" />
/** @noSelfInFile */

/**
 * @see {@link https://github.com/defold/extension-iac|Github Source}
 */
declare namespace iac {
	/**
	 * Sets the listener function for inter-app communication events.
	 * @example ```lua
		local function iac_listener(self, payload, type)
				if type == iac.TYPE_INVOCATION then
						-- This was an invocation
						print(payload.origin) -- origin may be empty string if it could not be resolved
						print(payload.url)
				end
		end

		function init(self)
				iac.set_listener(iac_listener)
		end
	```
	*/
	export function set_listener(
		/**
		 * @param {object} this The current object.
		 * @param {table} payload The iac payload.
		 * @param {number} type The type of iac, an iac.TYPE_ enumeration. It can be one of the predefined constants below
			- `iac.TYPE_INVOCATION`
		 */
		listener: (
			this: any,
			payload: {
				origin: string;
				url: unknown;
			},
			type: number,
		) => void,
	): void;

	/**
	 * iac type
	 */
	export const TYPE_INVOCATION: number;
}
