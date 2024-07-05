/**
 * @see {@link https://github.com/britzl/defold-richtext|Github Source}
 * @example `import * as tags from 'richtext.tags'`
 * @noResolution
 */
declare module 'richtext.tags' {
	export function register(
		tag: string,
		fn: (params?: string, settings?: {}) => void,
	): void;
	export function apply(tag: string, params?: string, settings?: {}): void;
}
