/** @noSelfInFile */

/**
 * Defold extension for creating and controlling webviews to show html pages or evaluate javascript.
 * @see {@link https://github.com/defold/extension-webview|Github Source}
 */
declare namespace webview {
	type CallbackResult = number & Readonly<{ __brand: 'webview' }>;

	export const CALLBACK_RESULT_URL_OK: CallbackResult;
	export const CALLBACK_RESULT_URL_ERROR: CallbackResult;
	export const CALLBACK_RESULT_URL_LOADING: CallbackResult;
	export const CALLBACK_RESULT_EVAL_OK: CallbackResult;
	export const CALLBACK_RESULT_EVAL_ERROR: CallbackResult;

	/**
	 * Creates a webview instance. It can show HTML pages as well as evaluate Javascript. 
	 * The view remains hidden until the first call. There can exist a maximum of 4 webviews at the same time.
	 * On iOS, the callback will never get a `webview.CALLBACK_RESULT_EVAL_ERROR`, due to the iOS SDK implementation.
	 * @param {function} callback A callback which receives info about finished requests
	 * @returns {number} the web view id
	 * @example ```lua
		local function webview_callback(self, webview_id, request_id, type, data)
				if type == webview.CALLBACK_RESULT_URL_OK then
						-- the page is now loaded, let's show it
						webview.set_visible(webview_id, 1)
				elseif type == webview.CALLBACK_RESULT_URL_ERROR then
						print("Failed to load url: " .. data["url"])
						print("Error: " .. data["error"])
				elseif type == webview.CALLBACK_RESULT_URL_LOADING then
						-- a page is loading
						-- return false to prevent it from loading
						-- return true or nil to continue loading the page
						if data.url ~= "https://www.defold.com/" then
								return false
						end
				elseif type == webview.CALLBACK_RESULT_EVAL_OK then
						print("Eval ok. Result: " .. data['result'])
				elseif type == webview.CALLBACK_RESULT_EVAL_ERROR then
						print("Eval not ok. Request # " .. request_id)
				end
		end
		local webview_id = webview.create(webview_callback)
		```
	 */
	export function create(
		callback: (
			this: any,
			webview_id: number,
			request_id: number,
			type: CallbackResult,
			data: { url: string; result: string },
		) => void,
	): number;

	/**
	 * Destroys an instance of a webview.
	 * @param {number} webview_id The webview id (returned by the `webview.create()` call)
	 * @returns {number} -1 if an error occurred. 0 if it was destroyed
	 */
	export function destroy(webview_id: number): number;

	/**
	 * Opens a web page in the webview, using an URL. Once the request is done, the callback (registered in `webview.create()`) is invoked.
	 * @param {number} webview_id The webview id
	 * @param {string} url The URL to open
	 * @param {object} options A table of options for the request. Currently it holds these options: { boolean } hidden (If true, the webview will stay hidden (default=false))
	 * @returns {number} the request id
	 * @example ```lua
	 local request_id = webview.open(webview_id, "http://www.defold.com", {hidden = true})
	 ```
	 */
	export function open(
		webview_id: number,
		url: string,
		options: { hidden: boolean },
	): number;

	/**
	 * Opens a web page in the webview, using HTML data. Once the request is done, the callback (registered in `webview.create()`) is invoked.
	 * @param {number} webview_id The webview id
	 * @param {string} html The HTML data to display
	 * @param {object} options A table of options for the request. See `webview.open()`
	 * @returns {number} number
	 * @example ```lua
	 local html = sys.load_resource("/main/data/test.html")
	 local request_id = webview.open_raw(webview_id, html, {hidden = true})
	 ```
	 */
	export function open_raw(
		webview_id: number,
		html: string,
		options: { hidden: boolean },
	): number;

	/**
	 * Evaluates JavaScript within the context of the currently loaded page (if any). Once the request is done, the callback (registered in `webview.create()`) is invoked. The callback will get the result in the `data["result"]` field.
	 * @param {number} webview_id The webview id
	 * @param {string} code The JavaScript code to evaluate
	 * @returns {number} number
	 * @example ```lua
	 local request_id = webview.eval(webview_id, "GetMyFormData()")
	 ```
	 */
	export function eval(webview_id: number, code: string): number;

	/**
	 * Shows or hides a webview
	 * @param {number} webview_id The webview id
	 * @param {number} visible If `0`, hides the webview. If non zero, shows the view
	 */
	export function set_visible(webview_id: number, visible: number): void;

	/**
	 * Returns the visibility state of the webview.
	 * @param {number} webview_id The webview id
	 * @returns {number} number
	 */
	export function is_visible(webview_id: number): number;

	/**
	 * Sets the position and size of the webview
	 * @param {number} webview_id The webview id
	 * @param {number} x The x position of the webview
	 * @param {number} y The y position of the webview
	 * @param {number} width The width of the webview (-1 to match screen width)
	 * @param {number} height The height of the webview (-1 to match screen height)
	 */
	export function set_position(
		webview_id: number,
		x: number,
		y: number,
		width: number,
		height: number,
	): void;
}
