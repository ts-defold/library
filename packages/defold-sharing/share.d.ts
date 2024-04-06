/** @noSelfInFile */

/**
 * Defold native extension to share data
 * from a Defold application using native dialogs
 * @url https://github.com/britzl/defold-sharing
 */
declare namespace share {
	/**
	 * Share text using a native sharing dialog.
	 *
	 * @param text The text to share
	 */
	export function text(text: string): void;

	/**
	 * Share an image (with optional text) using a native sharing dialog. Supported formats depend on the platform:
	 *
	 * - Android - The image format must be supported by BitmapFactory.decodeByteArray(). On Android the image will first be stored locally as a file and then shared using a FileProvider.
	 * - iOS and macOS - The image format must be supported by UIImage.initWithData
	 * - HTML5 - Either DataURI or any image format supported by the underlying platform.
	 *
	 * @param bytes The image bytes to share
	 * @param text Optional text to share
	 * @param file_name Optional Only for HTML5 image name. Default "file.png"
	 */
	export function image(bytes: string, text?: string, file_name?: string): void;

	/**
	 * Share a file (with optional text) using a native sharing dialog.
	 * On Android the file will first be copied to a predefined location
	 * and then shared using a FileProvider.
	 * Files are shared with their original filename and extension.
	 * This will allow iOS to offer different kinds of applications
	 * depending on the shared content.
	 *
	 * @param path Full path to the file to share. For HTML5: specify the name of the file. Default file.txt.
	 * @param text Optional text to share. For HTML5: specify the data that should be in the file.
	 * @param options Optional Only for HTML5.
	 * - type (string) - data type. Default "text/plain"
	 * - text (string) - text to be shared
	 * - title (string) - title to be shared. May be ignored by the target
	 * - url (string) - URL to be shared
	 */
	export function file(
		path: string,
		text?: string,
		options?: { type: string; text: string; title: string; url: string },
	): void;
}
