/// <library version="0.0.2" src="https://github.com/Insality/defold-log/archive/refs/tags/2.zip" />
/**
 * @url https://github.com/Insality/defold-log
 * @noResolution
 */
declare module 'log.log' {
	/**
	 * Create a new logger instance with an optional forced log level for debugging purposes.
	 */
	export function get_logger(
		this: void,
		logger_name: string,
		force_logger_level_in_debug?: string,
	): LoggerInstance;
	class LoggerInstance {
		/**
		 * Log a message at the TRACE level. Trace is typically used to log the start and end of functions or specific events. While it's not recommended to pass data to trace due to potential memory allocation, sometimes it can be useful for in-depth debugging.
		 */
		trace(message: string, data?: {}): void;
		/**
		 * Log a message at the DEBUG level. Debug is suitable for detailed system information that could be helpful during development to track down unexpected behavior.
		 */
		debug(message: string, data?: {}): void;
		/**
		 * Log a message at the INFO level. Info is used for general system information under normal operation.
		 */
		info(message: string, data?: {}): void;
		/**
		 * Log a message at the WARN level. Warn is intended for potentially harmful situations that could require attention.
		 */
		warn(message: string, data?: {}): void;
		/**
		 * Log a message at the ERROR level. Error indicates serious issues that have occurred and should be addressed immediately.
		 */
		error(message: string, data?: {}): void;
	}
}
