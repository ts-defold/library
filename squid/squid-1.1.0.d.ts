/// <library version="1.1.0" src="https://github.com/paweljarosz/squid/archive/refs/tags/1.1.zip" />
/** @noSelfInFile **/

/**
 * Squid is a standalone injectable system for saveable logging of user logs, errors and crashes for Defold.
 * @see {@link https://github.com/paweljarosz/squid|Github Source}
 * @example `import * as squid from 'squid.squid'`
 * @noResolution
 */
declare module 'squid.squid' {
	type SquidConfig = {
		app_catalog: string;
		log_file_name: string;
		log_file_extension: string;
		is_enabled: boolean;
		is_enabled_in_release: boolean;
		is_printing: boolean;
		is_saving: boolean;
		is_adding_timestamp: boolean;
		is_using_allowlist: boolean;
		days_to_delete_logs: number;
		min_log_level: number;
		unsaved_logs_buffer: number;
		max_data_length: number;
		max_data_depth: number;
		is_printing_crashes: boolean;
		is_saving_crashes: boolean;
		crash_file_name: string;
		crash_file_extension: string;
	};

	interface SquidShared {
		ALLOWLIST: { [key: string]: boolean };
	}

	/** @noSelf **/
	interface CoreModule extends SquidShared {
		TRACE: number;
		DEBUG: number;
		INFO: number;
		WARN: number;
		ERROR: number;
		/** Create a new instance of the Squid logger */
		['new'](tag?: string, is_allowed?: boolean): SquidInstance;

		/** Get Squid configuration */
		get_config(): SquidConfig;
		/** Set and use user configuration */
		set_config(config: SquidConfig): void;

		/** Initialize Squid for error and crash handling and logging */
		init(): void;

		/** Set if logs should be saved to file */
		set_allowed(tag: string, enabled: boolean): void;

		trace(message: string, data?: AnyNotNil, tag?: string): void;
		debug(message: string, data?: AnyNotNil, tag?: string): void;
		info(message: string, data?: AnyNotNil, tag?: string): void;
		warn(message: string, data?: AnyNotNil, tag?: string): void;
		error(message: string, data?: AnyNotNil, tag?: string): void;

		/** Log message with provided level, message, data and tag */
		log(message: string, level: number, data?: AnyNotNil, tag?: string): void;

		/**
		 * Explicitly save buffer of unsaved logs to file
		 * @returns true if saved logs successfully, false otherwise
		 */
		save_logs(): boolean;

		/** Finalize Squid logging - check for crashes and saved all unsaved buffered logs */
		final(): void;
	}

	interface SquidInstance extends SquidShared {
		tag: string;

		/** Initialize Squid for error and crash handling and logging */
		init(): void;

		/** Set if logs should be saved to file */
		set_allowed(tag: string, enabled: boolean): void;

		trace(message: string, data?: AnyNotNil, tag?: string): void;
		debug(message: string, data?: AnyNotNil, tag?: string): void;
		info(message: string, data?: AnyNotNil, tag?: string): void;
		warn(message: string, data?: AnyNotNil, tag?: string): void;
		error(message: string, data?: AnyNotNil, tag?: string): void;

		/** Log message with provided level, message, data and tag */
		log(message: string, level: number, data?: AnyNotNil, tag?: string): void;

		/**
		 * Explicitly save buffer of unsaved logs to file
		 * @returns true if saved logs successfully, false otherwise
		 */
		save_logs(): boolean;

		/** Finalize Squid logging - check for crashes and saved all unsaved buffered logs */
		final(): void;
	}

	type Squid = Readonly<CoreModule>;
	const exportThis: Squid;
	export = exportThis;
}
