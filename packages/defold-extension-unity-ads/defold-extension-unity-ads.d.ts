/** @noSelfInFile */

/**
 * @url https://github.com/AGulev/defold-extension-unity-ads
 * @noResolution
 */
declare namespace unityads {
	type Callback = (
		this: any,
		message_id: MessageType,
		message: { event: EventType; code?: ErrorType },
	) => void;

	export function initialize(
		game_id: string,
		callback: Callback,
		test_mode?: boolean,
	): void;

	export function request_idfa(): void;

	export function set_callback(callback: Callback): void;

	/** Removes callback */
	export function set_callback(): void;

	export function set_debug_mode(is_debug: boolean): void;

	export function get_debug_mode(): boolean;

	export function is_initialized(): boolean;

	export function is_supported(): boolean;

	export function get_version(): string;

	export function show(placement_id: string): void;

	export function load_banner(
		placement_id: string,
		width?: number,
		height?: number,
	): void;

	export function unload_banner(): void;

	export function show_banner(): void;

	export function hide_banner(): void;

	/**
	 * @param position unityads.BANNER_POSITION_TOP_LEFT
	 * | unityads.BANNER_POSITION_TOP_CENTER
	 * | unityads.BANNER_POSITION_TOP_RIGHT
	 * | unityads.BANNER_POSITION_BOTTOM_LEFT
	 * | unityads.BANNER_POSITION_BOTTOM_CENTER
	 * | unityads.BANNER_POSITION_BOTTOM_RIGHT
	 * | unityads.BANNER_POSITION_CENTER
	 */
	export function set_banner_position(position: BannerPosition): void;

	type MessageType = number & Readonly<{ __brand: 'MessageType' }>;
	export const MSG_INIT: MessageType;
	export const MSG_SHOW: MessageType;
	export const MSG_LOAD: MessageType;
	export const MSG_BANNER: MessageType;
	export const MSG_IDFA: MessageType;

	type EventType = number & Readonly<{ __brand: 'EventType' }>;
	export const EVENT_COMPLETED: EventType;
	export const EVENT_SDK_ERROR: EventType;
	export const EVENT_JSON_ERROR: EventType;
	export const EVENT_CLICKED: EventType;
	export const EVENT_START: EventType;
	export const EVENT_LOADED: EventType;
	export const EVENT_LEFT_APPLICATION: EventType;
	export const EVENT_SKIPPED: EventType;
	export const EVENT_NOT_SUPPORTED: EventType;
	export const EVENT_STATUS_AUTORIZED: EventType;
	export const EVENT_STATUS_DENIED: EventType;
	export const EVENT_STATUS_NOT_DETERMINED: EventType;
	export const EVENT_STATUS_RESTRICTED: EventType;
	export const EVENT_DID_SHOW: EventType;

	type ErrorType = number & Readonly<{ __brand: 'ErrorType' }>;
	export const ERROR_INTERNAL: ErrorType;
	export const ERROR_INVALID_ARGUMENT: ErrorType;
	export const ERROR_NOT_INITIALIZED: ErrorType;
	export const ERROR_NOT_READY: ErrorType;
	export const ERROR_VIDEO_PLAYER: ErrorType;
	export const ERROR_NO_CONNECTION: ErrorType;
	export const ERROR_ALREADY_SHOWING: ErrorType;
	export const ERROR_NO_FILL: ErrorType;
	export const ERROR_TIMEOUT: ErrorType;
	export const ERROR_UNKNOWN: ErrorType;
	export const ERROR_NATIVE: ErrorType;
	export const ERROR_WEBVIEW: ErrorType;
	export const ERROR_AD_BLOCKER_DETECTED: ErrorType;

	type BannerPosition = number & Readonly<{ __brand: 'BannerPosition' }>;
	export const BANNER_POSITION_TOP_LEFT: BannerPosition;
	export const BANNER_POSITION_TOP_CENTER: BannerPosition;
	export const BANNER_POSITION_TOP_RIGHT: BannerPosition;
	export const BANNER_POSITION_BOTTOM_LEFT: BannerPosition;
	export const BANNER_POSITION_BOTTOM_CENTER: BannerPosition;
	export const BANNER_POSITION_BOTTOM_RIGHT: BannerPosition;
	export const BANNER_POSITION_CENTER: BannerPosition;
	export const BANNER_POSITION_NONE: BannerPosition;
}
