/// <library version="0.0.1" src="https://github.com/baochungit/defold-imagepicker/archive/refs/heads/main.zip" />
/** @noSelfInFile */

/**
 * An Image Picker extension for Android, iOS.
 * @see {@link https://github.com/baochungit/defold-imagepicker|Github Source}
 */
declare namespace imagepicker {
	/**
	 * Show the image picker and crop the selected image to square. On success, it returns the cropped image url via callback.
	 */
	export function show(cb: (this: any, uri: string | undefined) => void): void;
}
