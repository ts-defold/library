/// <library version="3.0.2" src="https://github.com/defold/extension-adinfo/archive/refs/tags/3.0.2.zip" />
/** @noSelfInFile */

/**
 * @url https://github.com/defold/extension-adinfo
 * @noResolution
 */
declare namespace adinfo {
	/**
	 * The function to call when advertising information is available.
	 * On iOS 14 and above this will trigger a tracking request popup.
	 */
	export function get(
		callback: (
			this: any,
			info: { ad_ident?: unknown; ad_tracking_enabled?: boolean },
		) => void,
	): void;
}
