/**
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.extended.lang_text' {
	type LangText = typeof import('druid.extended.lang_text');
	type TEXT_ADJUST =
		(typeof import('druid.const').TEXT_ADJUST)[keyof typeof import('druid.const').TEXT_ADJUST];

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
		locale_id: string | undefined,
		adjust_type?: TEXT_ADJUST | undefined,
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

	export const node: node;
	export const on_change: import('druid.druid').DruidEvent;
	export const text: import('druid.druid').Text;
}
