/**
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.custom.rich_text.rich_text' {
	type RichText = typeof import('druid.custom.rich_text.rich_text');
	type Word = {}; // TO-DO
	type LineMetrics = {}; // TO-DO

	export function characters(this: RichText, word: Word): Word[];
	export function clear(this: RichText): void;
	export function get_line_metric(this: RichText): LineMetrics;
	export function get_text(this: RichText): string;
	export function get_words(this: RichText): Word[];
	export function init(
		this: RichText,
		text_node: node | string,
		value?: string | undefined,
	): void;
	export function set_text(
		this: RichText,
		text: string | undefined,
	): LuaMultiReturn<[Word[], LineMetrics]>;
	export function tagged(this: RichText, tag: string): Word[];

	export const style: {
		COLORS: {} | undefined;
		ADJUST_STEPS: number | undefined;
		ADJUST_SCALE_DELTA: number | undefined;
	};
	export const druid: typeof import('druid.druid').DruidInstance;
	export const root: node;
	export const text_prefab: node;
}
