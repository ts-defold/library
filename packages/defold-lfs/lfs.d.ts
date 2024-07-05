/** @noSelfInFile */

/**
 * LuaFileSystem port to a Defold native extension
 * @see {@link https://github.com/britzl/defold-lfs|Github Source}
 */
declare namespace lfs {
	type ResultOrError<T> = LuaMultiReturn<[undefined, string]> | T;
	type FileHandle = LuaUserdata;

	/**
	 * Get file or symbolic link information
	 */
	export function attributes(
		filepath: string,
		attribute?: string,
	): ResultOrError<string | {}>;

	/**
	 * This function changes the working (current) directory
	 */
	export function chdir(path: string): ResultOrError<boolean>;

	export function currentdir(): ResultOrError<string>;

	export function dir(
		path: string,
	): LuaMultiReturn<
		[(() => string | undefined) | undefined, FileHandle | undefined]
	>;

	/**
	 * Creates a link.
	 * @param old Object to link to.
	 * @param new_ Name of link.
	 * @param symlink True if link is symbolic (optional).
	 */
	export function link(
		old: string,
		new_: string,
		symlink?: boolean,
	): ResultOrError<boolean>;

	/**
	 * Creates lock metatable.
	 * @param fh File handle.
	 * @param mode String with lock mode ('w'rite, 'r'ead).
	 * @param start Number with start position (optional).
	 * @param length Number with length (optional).
	 */
	export function lock(
		fh: FileHandle,
		mode: string,
		start?: number,
		length?: number,
	): ResultOrError<boolean>;

	export function lock_dir(path: string): ResultOrError<FileHandle>;

	export function mkdir(path: string): ResultOrError<boolean>;

	export function rmdir(path: string): ResultOrError<boolean>;

	export function setmode(
		fh: FileHandle,
		mode: string,
	):
		| LuaMultiReturn<[boolean, string | undefined]>
		| LuaMultiReturn<[undefined, string]>;

	/**
	 * Get symbolic link information using lstat.
	 */
	export function symlinkattributes(
		filepath: string,
		attribute?: string | {},
	): ResultOrError<{}>;

	/**
	 * Set access time and modification values for file
	 */
	export function touch(
		filepath: string,
		atime?: number,
		mtime?: number,
	): ResultOrError<boolean>;

	/**
	 * Unlocks a file.
	 * @param fh File handle.
	 * @param start Number with start position (optional).
	 * @param length Number with length (optional).
	 */
	export function unlock(
		fh: FileHandle,
		start?: number,
		length?: number,
	): ResultOrError<boolean>;
}
