/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <library version="0.0.1" src="https://github.com/Insality/defold-saver/archive/refs/tags/1.zip" />
/** @noSelfInFile **/
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @see {@link https://github.com/Insality/defold-saver|Github Source}
 * @see {@link https://github.com/Insality/defold-saver/blob/main/API_REFERENCE.md|API Reference}
 * @example `import * as saver from 'saver.saver'`
 * @noResolution
 */
declare module 'saver.saver' {
	interface LoggerInstance {
		trace(this: any, message: string, data?: {}): void;
		debug(this: any, message: string, data?: {}): void;
		info(this: any, message: string, data?: {}): void;
		warn(this: any, message: string, data?: {}): void;
		error(this: any, message: string, data?: {}): void;
	}

	export function init(): void;
	export function bind_save_part(keyId: string, tableReference: any): void;
	export function save_game_state(fileName?: string): boolean;
	export function load_game_state(fileName?: string): boolean;
	export function get_game_state(): unknown;
	export function set_game_state(state: any): boolean;
	export function save_file_by_path(data: any, filePath: string): boolean;
	export function load_file_by_path(path: string): unknown;
	export function save_file_by_name(data: any, fileName: string): boolean;
	export function load_file_by_name(fileName: string): unknown;
	export function set_autosave_timer(seconds: number): void;
	export function get_save_path(fileName?: string): string;
	export function get_save_version(): number;
	export function set_migrations(
		migrationList: ((
			this: void,
			gameState: any,
			logger: LoggerInstance,
		) => any)[],
	): void;
	export function apply_migrations(): void;
	export function set_logger(logger: LoggerInstance): void;
	export function set_logger(remove_logger: undefined): void;
	export function get_current_game_project_folder(): string | undefined;
}

/** @noSelfInFile **/
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @see {@link https://github.com/Insality/defold-saver|Github Source}
 * @see {@link https://github.com/Insality/defold-saver/blob/main/API_REFERENCE.md|API Reference}
 * @example `import * as storage from 'saver.storage'`
 * @noResolution
 */
declare module 'saver.storage' {
	export function set(id: string, value: boolean | number | string): boolean;
	export function get(id: string, defaultValue?: any): unknown;
	export function get_number(id: string, defaultValue?: number): number;
	export function get_string(id: string, defaultValue?: string): string;
	export function get_boolean(id: string, defaultValue?: boolean): boolean;
}
