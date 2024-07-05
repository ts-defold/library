/// <library version="1.24.0" src="https://github.com/britzl/defold-clipboard/archive/refs/tags/1.24.0.zip" />
/** @noSelfInFile */

/**
 * Defold native extension to access the clipboard
 * @see {@link https://github.com/britzl/defold-clipboard|Github Source}
 */
declare namespace clipboard {
	/**
	 * Copy text to the clipboard.
	 * @param {string} text
	 */
	export function copy(text: string): void;

	/**
	 * Get text from the clipboard.
	 * @returns {string}
	 */
	export function paste(): string;
}
