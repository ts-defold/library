/** @noSelfInFile **/
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Only available in HTML5.
 * @see {@link https://github.com/d954mas/defold-playdeck|Github Source}
 */
declare namespace playdeck {
	export function register_callback(
		callback: (
			this: any,
			data: {
				value: any;
				method: string;
			},
		) => void,
	): void;

	export function loading(progress: number): void;

	export function get_user_profile(): void;

	export function set_data(key: string): void;
	export function set_data(key: string, value: boolean | number | string): void;

	export function custom_share(data: {}): void;

	export function get_share_link(data: {}): void;

	export function open_telegram_link(url: string): void;

	export function get_playdeck_state(): void;

	export function game_end(): void;

	export function send_game_progress(data: {}): void;

	export function send_analytic_new_session(): void;

	export function send_analytics(data: {}): void;

	export function request_payment(data: {}): void;

	export function get_payment_info(data: {}): void;

	export function get_token(): void;

	export function show_ad(): void;
}
