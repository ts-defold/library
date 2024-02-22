/** @noSelfInFile */

/**
 * Defold native extension to access the clipboard
 * @url https://github.com/britzl/defold-clipboard
 * @noResolution
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
