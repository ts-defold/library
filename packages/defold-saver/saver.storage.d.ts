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
