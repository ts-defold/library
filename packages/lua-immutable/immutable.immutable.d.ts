/** @noSelfInFile **/

/**
 * Runtime immutable Lua table implementation 
 * @see {@link https://github.com/paweljarosz/lua-immutable|Github Source}
 * @noResolution
 * @example `import * as IMMUTABLE from 'immutable.immutable'`
 */
declare module 'immutable.immutable' {
	type table = object | any[] | LuaTable | LuaSet | LuaMap;
	export function make<T extends table>(original_table: T): Readonly<T>;
	export function is_immutable(table_to_check: table): boolean;
}
