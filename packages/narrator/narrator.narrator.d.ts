/**
 * This is a definition stub with incomplete or untested signatures.
 * Contributions to improve the accuracy of these types are welcome.
 * @url https://github.com/ts-defold/library
 * @noResolution
 */
declare module 'narrator.narrator' {
	type Paragraph = {
		text: string;
		tags?: string[];
	};

	type Choice = {
		text: string;
		tags?: string[];
	};

	type Book = {};

	type SaveState = {};

	export class Story {
		begin(): void;
		can_continue(): boolean;
		continue(steps?: number): Paragraph[] | Paragraph;
		can_choose(): boolean;
		get_choices(): Choice[];
		choose(index: number): void;
		jump_to(path: string): void;
		get_visits(path: string): number;
		get_tags(path: string): string[];
		save_state(): SaveState;
		load_state(state: SaveState): void;
		observe(
			variable: string,
			observer: (this: void, value: unknown) => void,
		): void;
		bind(
			func_name: string,
			handler: (this: void, ...args: any[]) => unknown,
		): void;
		global_tags: string[];
		constants: Readonly<{ [key: string]: unknown }>;
		variables: { [key: string]: unknown };
		migrate: (
			this: void,
			state: SaveState,
			old_version: number,
			new_version: number,
		) => SaveState;
	}

	export function parse_file(
		this: void,
		path: string,
		params?: { save?: boolean },
	): Book;

	export function parse_content(
		this: void,
		content: string,
		inclusions?: string[],
	): Book;

	export function init_story(this: void, book: Book): Story;
}
