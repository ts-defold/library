/// <library version="1.0.3" src="https://github.com/DreamRealityInteractive/extension-netimgui/archive/refs/tags/1.0.3.zip" />
/** @noSelfInFile */

/**
 * NetImgui is a library for remotely displaying and controlling Dear Imgui content in a different application (called the Server).
 * @url https://github.com/DreamRealityInteractive/extension-netimgui
 * @noResolution
 */
declare namespace netimgui {
	/**
	 * @param {string} client_name
	 */
	export function connect_from_app(client_name: string): void;

	/**
	 * @param {string} client_name
	 * @param {string} server_host
	 */
	export function connect_to_app(
		client_name: string,
		server_host: string,
	): void;

	export function disconnect(): void;

	export function shutdown(): void;

	/**
	 * @returns {boolean}
	 */
	export function is_connected(): boolean;
}
