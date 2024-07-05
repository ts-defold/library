// @noSelfInFile is typically used to avoid requiring self as the first param of a function
/** @noSelfInFile **/

// @noResolution is used as we are exporting the exact module path in the declaration
/** @noResolution */
declare module 'template' { // -> this is the name of the require in lua i.e. "thing.thing.lib"
  export function some_function(): void;
}
