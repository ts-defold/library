/// <library version="5.21.1" src="https://github.com/britzl/defold-richtext/archive/refs/tags/5.21.1.zip" />
/**
 * @see {@link https://github.com/britzl/defold-richtext|Github Source}
 * @example `import * as richtext from 'richtext.richtext'`
 * @noResolution
 */
declare module 'richtext.richtext' {
	type FontSettings = {
		regular: hash;
		italic: hash;
		bold: hash;
		bold_italic: hash;
	};

	type FontsTable = {
		[name: string]: FontSettings;
	};

	type LayersTable = {
		fonts: LuaMap<hash, hash>; // { [font: hash]: hash };
		images: LuaMap<hash, hash>; // { [texture: hash]: hash };
		spinescenes: LuaMap<hash, hash>; // { [spinescene: hash]: hash };
	};

	type Settings = {
		width?: number;
		position?: vmath.vector3;
		size?: number;
		parent?: node;
		fonts?: FontsTable;
		layers?: LayersTable;
		color?: vmath.vector4;
		shadow?: vmath.vector4;
		outline?: vmath.vector4;
		align?: Alignment;
		valign?: VAlignment;
		line_spacing?: number;
		paragraph_spacing?: number;
		image_pixel_grid_snap?: boolean;
		combine_words?: boolean;
		dryrun?: boolean;
	};

	type Word = {
		size: number;
		color: vmath.vector4;
		shadow: vmath.vector4;
		outline: vmath.vector4;
		node: node;
		metrics: {
			width: number;
			height: number;
			total_width: number;
			max_descent?: number;
			max_ascent?: number;
		};
		font: string;
		text: string;
	};

	type TextMetrics = {
		width: number;
		height: number;
		char_count: number;
		img_count: number;
		spine_count: number;
	};

	/** Creates rich text gui nodes from a text containing markup. */
	export function create(
		text: string,
		font: string,
		settings?: Settings,
	): LuaMultiReturn<[Word[], TextMetrics]>;

	/** Get all words with a specific tag. */
	export function tagged(words: Word[], tag: string): Word[];

	/**
	 * Truncate a text down to a specific length. This function has two modes of operation:
	 * 1) It can truncate the text on a per word basis or
	 * 2) on a per character/image basis.
	 * The function will disable nodes that shouldn't be visible and in the case of truncating
	 * on a per character basis also update the text in nodes that should be partially visible.
	 * The text metrics of a truncated word will be updated.
	 */
	export function truncate(
		words: Word[],
		length: number,
		options?: { words: boolean },
	): Word;

	/** Get the length of a text ignoring any tags except image and spine tags which are treated as having a length of 1. */
	export function length(text: Word[] | string): number;

	/** Split a word into it's characters, including the creation of the gui nodes. Each of the characters will be given the same attributes as the word, and they will be positioned correctly within the word. */
	export function characters(word: Word): Word[];

	/** Call this function when a click/touch has been detected and your text contains words with an a tag. These words act as "hyperlinks" and will generate a message when clicked. */
	export function on_click(
		words: Word[],
		action: {
			node_id: hash;
			text: string;
			screen_x: number;
			screen_y: number;
			tags: string[];
		},
	): boolean;

	/** Removes all gui text nodes created by richtext.create(). */
	export function remove(words: Word[]): void;

	/** Returns the words created by richtext.create() as a plain text string without any formatting or tags. Linebreaks are included in the returned string. */
	export function plaintext(words: Word[]): string;

	type Alignment = hash & Readonly<{ __brand: 'richtext.alignment' }>;
	type VAlignment = hash & Readonly<{ __brand: 'richtext.v.alignment' }>;

	export const ALIGN_LEFT: Alignment;
	export const ALIGN_CENTER: Alignment;
	export const ALIGN_RIGHT: Alignment;
	export const ALIGN_JUSTIFY: Alignment;
	export const VALIGN_TOP: VAlignment;
	export const VALIGN_MIDDLE: VAlignment;
	export const VALIGN_BOTTOM: VAlignment;
}

/**
 * @see {@link https://github.com/britzl/defold-richtext|Github Source}
 * @example `import * as color from 'richtext.color'`
 * @noResolution
 */
declare module 'richtext.color' {
	export function add(name: string, color: number | string): void;

	export const COLORS: {
		aqua: vmath.vector4;
		black: vmath.vector4;
		blue: vmath.vector4;
		brown: vmath.vector4;
		cyan: vmath.vector4;
		darkblue: vmath.vector4;
		fuchsia: vmath.vector4;
		green: vmath.vector4;
		grey: vmath.vector4;
		lightblue: vmath.vector4;
		lime: vmath.vector4;
		magenta: vmath.vector4;
		maroon: vmath.vector4;
		navy: vmath.vector4;
		olive: vmath.vector4;
		orange: vmath.vector4;
		purple: vmath.vector4;
		red: vmath.vector4;
		silver: vmath.vector4;
		teal: vmath.vector4;
		white: vmath.vector4;
		yellow: vmath.vector4;
	};
}

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
