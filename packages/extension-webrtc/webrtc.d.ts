/** @noSelfInFile */

/**
 * A quick and easy C++ library that adds support for WebRTC to Defold
 * @see {@link https://github.com/VitusVeit/extension-webrtc|Github Source}
 */
declare namespace webrtc {
	type WebRtcType = Readonly<{ __brand: 'webrtc_type' }> & number;
	type WebRtcEvent = Readonly<{ __brand: 'webrtc_channel' }> & number;

	/**
	 * An unreliable DataChannel connection with unordered packets
	 */
	export const TYPE_UNRELIABLE: WebRtcType;
	/**
	 * An unreliable DataChannel connection with ordered packets
	 */
	export const TYPE_UNRELIABLE_ORDERED: WebRtcType;
	/**
	 * A reliable DataChannel connection with ordered packets
	 */
	export const TYPE_RELIABLE: WebRtcType;
	/**
	 * An event called when a new DataChannel is opened
	 */
	export const EVENT_CHANNEL_OPENED: WebRtcEvent;
	/**
	 * An event called when a new DataChannel is closed
	 */
	export const EVENT_CHANNEL_CLOSED: WebRtcEvent;
	/**
	 * An event called when webrtc generates new signaling data
	 */
	export const EVENT_SIGNALING_DATA: WebRtcEvent;
	/**
	 * An event called when a new message has arrived
	 */
	export const EVENT_MESSAGE: WebRtcEvent;

	/**
	 * Sets the configuration for the peer connection
	 * @param {string} ice_servers A string containg a list of stun or turn servers (eg "stun_url:PORT;turn_url:PORT:USER:PASSWORD"), a section is delimited by ';' and subdivided by ':'
	 * @param {function} webrtc_callback callback for all webrtc events
	 */
	export function set_configuration(
		ice_servers: string,
		webrtc_callback: (this: any, event: WebRtcEvent, data: {}) => void,
	): void;

	/**
	 * Processes the signaling data that was received by a peer.
	 * @param {string} data The data that needs to be processed.
	 */
	export function process_data(data: string): void;

	/**
	 * Creates a datachannel with a specified peer and type
	 * @param {number} id The id for which the datachannel is to be created
	 * @param {string} label The label for the datachannel
	 * @param {int} type The type of the datachannel, it can be any of the TYPE_* constants
	 */
	export function create_channel(
		id: number,
		label: string,
		type: WebRtcType,
	): void;

	/**
	 * Sends a message to a peer by a channel
	 * @param {number} id The id to which the message is to be sent
	 * @param {string} label The label of the channel to be used, the datachannel needs to be already created
	 * @param {string} message The message to send
	 */
	export function send_message(
		id: number,
		label: string,
		message: string,
	): void;
}
