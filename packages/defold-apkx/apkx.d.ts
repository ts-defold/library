/** @noSelfInFile */

/**
 * Google Play APK Extension integration for Defold
 * @see {@link https://github.com/dapetcu21/defold-apkx|Github Source}
 */
declare namespace apkx {
	type Handle = LuaUserData & {
		readonly __brand: 'apkx.Handle';
	};
	type State = LuaUserData & {
		readonly __brand: 'apkx.STATE';
	};

	export function get_expansion_apk_file_path(
		is_main: boolean,
		version: number,
	): string;
	export function configure_download_service(options: {
		public_key: string;
		salt: string;
		on_download_state_change: (this: any, state: State) => void;
		on_download_progress: (
			this: any,
			progress: {
				current_speed: number;
				time_remaining: number;
				overall_progress: number;
				overall_total: number;
			},
		) => void;
	}): void;
	export function start_download_service_if_required(): boolean;
	export function zip_open(zip_filenames: string[]): Handle;
	export function zip_read(zip_handle: Handle, file_path: string): string;
	export function get_downloader_string_from_state(state: State): string;

	export const STATE_IDLE: State;
	export const STATE_FETCHING_URL: State;
	export const STATE_CONNECTING: State;
	export const STATE_DOWNLOADING: State;
	export const STATE_COMPLETED: State;
	export const STATE_PAUSED_NETWORK_UNAVAILABLE: State;
	export const STATE_PAUSED_BY_REQUEST: State;
	export const STATE_PAUSED_WIFI_DISABLED_NEED_CELLULAR_PERMISSION: State;
	export const STATE_PAUSED_NEED_CELLULAR_PERMISSION: State;
	export const STATE_PAUSED_WIFI_DISABLED: State;
	export const STATE_PAUSED_NEED_WIFI: State;
	export const STATE_PAUSED_ROAMING: State;
	export const STATE_PAUSED_NETWORK_SETUP_FAILURE: State;
	export const STATE_PAUSED_SDCARD_UNAVAILABLE: State;
	export const STATE_FAILED_UNLICENSED: State;
	export const STATE_FAILED_FETCHING_URL: State;
	export const STATE_FAILED_SDCARD_FULL: State;
	export const STATE_FAILED_CANCELED: State;
	export const STATE_FAILED: State;
}
