/**
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.custom.rich_text.rich_text' {
	type RichText = typeof import('druid.custom.rich_text.rich_text');
	type Word = {
		node: node;
		relative_scale: number;
		color: vmath.vector4;
		position: vmath.vector3;
		offset: vmath.vector3;
		scale: vmath.vector3;
		size: vmath.vector3;
		metrics: Metrics;
		pivot: Pivot;
		text: string;
		shadow: vmath.vector4;
		outline: vmath.vector4;
		font: string;
		image: Image;
		br: boolean;
		nobr: boolean;
	};
	type LineMetrics = {
		text_width: number;
		text_height: number;
		lines: Record<number, Metrics>;
	};
	type Metrics = {
		width: number;
		height: number;
		offset_x?: number;
		offset_y?: number;
		node_size?: vmath.vector3;
	};
	type Image = {
		texture: string;
		anim: string;
		width: number;
		height: number;
	};
	type Pivot =
		| typeof gui.PIVOT_CENTER
		| typeof gui.PIVOT_E
		| typeof gui.PIVOT_N
		| typeof gui.PIVOT_NE
		| typeof gui.PIVOT_NW
		| typeof gui.PIVOT_S
		| typeof gui.PIVOT_SE
		| typeof gui.PIVOT_SW
		| typeof gui.PIVOT_W;

	export function characters(this: RichText, word: Word): Word[];
	export function clear(this: RichText): void;
	export function get_line_metric(this: RichText): LineMetrics;
	export function get_text(this: RichText): string;
	export function get_words(this: RichText): Word[];
	export function init(
		this: RichText,
		text_node: node | string,
		value?: string,
	): void;
	export function set_text(
		this: RichText,
		text: string | undefined,
	): LuaMultiReturn<[Word[], LineMetrics]>;
	export function tagged(this: RichText, tag: string): Word[];

	export const style: {
		COLORS: Record<string, string> | undefined;
		ADJUST_STEPS: number | undefined;
		ADJUST_SCALE_DELTA: number | undefined;
	};
	export const druid: typeof import('druid.druid').DruidInstance;
	export const root: node;
	export const text_prefab: node;
}
