/// <library version="0.0.1" src="https://github.com/klaytonkowalski/library-defold-persist/archive/main.zip" />
/** @noSelfInFile */

/**
 * A simple interface for saving and loading data.
 * @see {@link https://github.com/klaytonkowalski/library-defold-persist|Github Source}
 * @example `import * as persist from 'persist.persist'`
 * @noResolution
 */
declare module 'persist.persist' {
	/**
	 * Creates a file with the specified data.
	 * If the file already exists, then its data can be overwritten.
	 */
	export function create(
		file_name: string,
		data: any,
		overwrite?: boolean,
	): void;

	/** Writes data to a file. */
	export function write(file_name: string, key: string, value: any): void;

	/** Flushes unsaved data from a file. If a key is specified, then only that field is flushed. */
	export function flush(file_name: string, key?: string): void;

	/** Saves data that was written to a file. */
	export function save(file_name: string): void;

	/**
	 * Loads data from a file, including data that has not yet been saved.
	 * Returns an `object`, or `undefined` if the file does not exist.
	 */
	export function load(file_name: string): {} | undefined;
}
