/// <library version="3.1.0" src="https://github.com/defold/extension-websocket/archive/refs/tags/3.1.0.zip" />
/** @noSelfInFile */

/**
 * @see {@link https://github.com/defold/extension-websocket|Github Source}
 */
declare namespace websocket {
	type Connection = Readonly<{ __brand: 'websocketConnection' }>;
	type WsEvent = number & Readonly<{ __brand: 'websocketEvent' }>;

	/**
	 * Connects to a remote address
	 * @param {string} url url of the remote connection
	 * @param {table} params optional parameters as properties.
	 * @param {function} callback callback that receives all messages from the connection
	 * @returns {object} the connection
	 * @example ```lua
		local function websocket_callback(self, conn, data)
			if data.event == websocket.EVENT_DISCONNECTED then
				log("Disconnected: " .. tostring(conn))
				self.connection = nil
				update_gui(self)
			elseif data.event == websocket.EVENT_CONNECTED then
				update_gui(self)
				log("Connected: " .. tostring(conn))
			elseif data.event == websocket.EVENT_ERROR then
				log("Error: '" .. data.message .. "'")
			elseif data.event == websocket.EVENT_MESSAGE then
				log("Receiving: '" .. tostring(data.message) .. "'")
			end
		end

		function init(self)
			self.url = "ws://echo.websocket.events"
			local params = {
				timeout = 3000,
				headers = "Sec-WebSocket-Protocol: chat\r\nOrigin: mydomain.com\r\n"
			}
			self.connection = websocket.connect(self.url, params, websocket_callback)
		end

		function finalize(self)
				if self.connection ~= nil then
					websocket.disconnect(self.connection)
				end
		end
	```
	*/
	export function connect(
		url: string,
		params: {
			timeout?: number,
			protocol?: string,
			headers?: string,
		},
		callback: (this: any, connection: Connection, data: {
			event: WsEvent,
			message?: string,
			handshake_response?: {}
			code?: number,
		}) => void,
	): Connection;

	/**
	 * Explicitly close a websocket
	 * @param {object} connection the websocket connection
	 */
	export function disconnect(connection: Connection): void;

	/**
	 * Send data on a websocket
	 * @param {object} connection the websocket connection
	 * @param {string} message the message to send
	 * @param {table} options options for this particular message. May be `nil`
	 * @example ```lua
		local function websocket_callback(self, conn, data)
			if data.event == websocket.EVENT_CONNECTED then
				websocket.send(conn, "Hello from the other side")
			end
		end

		function init(self)
			self.url = "ws://echo.websocket.org"
			local params = {}
			self.connection = websocket.connect(self.url, params, websocket_callback)
		end
	```
	*/
	export function send(connection: Connection, message: string, options?: {
		type: number
	}): void;

	/**
	 * The websocket was connected
	 */
	export const EVENT_CONNECTED: WsEvent;
	/**
	 * The websocket disconnected
	 */
	export const EVENT_DISCONNECTED: WsEvent;
	/**
	 * The websocket received data
	 */
	export const EVENT_MESSAGE: WsEvent;
	/**
	 * The websocket encountered an error
	 */
	export const EVENT_ERROR: WsEvent;
}
