/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <library version="0.0.1" src="https://github.com/Insality/defold-lang/archive/refs/tags/1.zip" />
/** @noSelfInFile **/
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @see {@link https://github.com/Insality/defold-lang|Github Source}
 * @see {@link https://github.com/Insality/defold-lang/blob/main/API_REFERENCE.md|API Reference}
 * @example `import * as lang from 'lang.lang'`
 * @noResolution
 */
declare module 'lang.lang' {
	interface LoggerInstance {
		trace(this: any, message: string, data?: {}): void;
		debug(this: any, message: string, data?: {}): void;
		info(this: any, message: string, data?: {}): void;
		warn(this: any, message: string, data?: {}): void;
		error(this: any, message: string, data?: {}): void;
	}

	export function init(): void;
	export function set_lang(lang_id?: string): void;
	export function get_lang(): string;
	export function get_langs(): string[];
	export function set_next_lang(): void;
	export function is_exist(text_id: string): boolean;
	export function txt(text_id: string): string;
	export function txp(text_id: string, ...params: any[]): string;
	export function txr(text_id: string): string;
	export function set_logger(logger_instance: LoggerInstance): void;
	export function set_logger(remove_logger_instance: undefined): void;
	export function reset_state(): void;
}
