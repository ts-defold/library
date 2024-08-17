/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <library version="0.0.1" src="https://github.com/Insality/defold-proto/archive/refs/tags/1.zip" />
/** @noSelfInFile **/
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @see {@link https://github.com/Insality/defold-proto|Github Source}
 * @see {@link https://github.com/Insality/defold-proto/blob/main/API_REFERENCE.md|API Reference}
 * @example `import * as proto from 'proto.proto'`
 * @noResolution
 */
declare module 'proto.proto' {
	interface LoggerInstance {
		trace(this: any, message: string, data?: {}): void;
		debug(this: any, message: string, data?: {}): void;
		info(this: any, message: string, data?: {}): void;
		warn(this: any, message: string, data?: {}): void;
		error(this: any, message: string, data?: {}): void;
	}

	export function init(configOrPath: string | { [key: string]: string }): void;
	export function get(protoType: string): { [key: string]: unknown };
	export function encode(
		protoType: string,
		data: { [key: string]: any },
	): string;
	export function decode(
		protoType: string,
		data?: string,
	): { [key: string]: unknown };
	export function verify(
		protoType: string,
		data: { [key: string]: any },
	): { [key: string]: unknown };
	export function set_logger(logger_instance: LoggerInstance): void;
	export function set_logger(remove_logger_instance: undefined): void;
}
