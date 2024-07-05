/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions are welcome to improve the accuracy of these types.
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.extended.lang_text' {
	export function format(
		this: LangText,
		a?: string,
		b?: string,
		c?: string,
		d?: string,
		e?: string,
		f?: string,
		g?: string,
	): LangText;
	export function init(
		this: LangText,
		node: node | string,
		locale_id: string,
		adjust_type?: string,
	): void;
	export function set_to(this: LangText, text: string): LangText;
	export function translate(
		this: LangText,
		locale_id: string,
		a?: string,
		b?: string,
		c?: string,
		d?: string,
		e?: string,
		f?: string,
		g?: string,
	): LangText;

	const on_change: import('druid.druid').DruidEvent;
	const text: import('druid.druid').Text;
}

type LangText = typeof import('druid.extended.lang_text');
