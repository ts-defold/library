/**
 * @see {@link https://github.com/ts-defold/library|Github Source}
 * @see {@link https://insality.github.io/druid/modules/Druid.html|Documentation}
 * @noResolution
 */
declare module 'druid.custom.rich_input.rich_input' {
	type RichInput = typeof import('druid.custom.rich_input.rich_input');

	export function get_text(this: RichInput): void; // TO-DO: is this return value right??
	export function init(this: RichInput, template: string, nodes: node[]): void;
	export function select(this: RichInput): void;
	export function set_allowed_characters(
		this: RichInput,
		characters: string,
	): RichInput;
	export function set_font(this: RichInput, font: hash): RichInput;
	export function set_placeholder(
		this: RichInput,
		placeholder_text: string,
	): void;
	export function set_text(this: RichInput, text: string): RichInput;

	export const cursor: node;
	export const cursor_position: vmath.vector3;
	export const cursor_text: node;
	export const drag: typeof import('druid.druid').Drag;
	export const druid: typeof import('druid.druid').DruidInstance;
	export const input: typeof import('druid.extended.input');
	export const input_text: typeof import('druid.druid').Text;
	export const placeholder: typeof import('druid.druid').Text;
	export const root: node;
	export const text_position: vmath.vector3;
}
