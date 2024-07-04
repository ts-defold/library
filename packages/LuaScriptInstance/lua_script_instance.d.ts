/** @noSelfInFile */

/**
 * Library to expose access for getting and setting the current script instance
 * @url https://github.com/DanEngelbrecht/LuaScriptInstance
 */
declare namespace lua_script_instance {
	type Instance = Readonly<{ __brand: 'LuaScriptInstance' }>;
	export function Get(): Instance;
	export function Set(i: Instance): void;
}
