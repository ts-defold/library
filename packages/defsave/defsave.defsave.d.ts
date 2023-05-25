/** @noSelfInFile **/

/** @noResolution */
declare module "defsave.defsave" {
  export let appname: string;

  export function set_appname(name: string): void;

  export function load(config: string): any;

  export function get(config: string, name: string): any;

  export function set(config: string, name: string, value: any): void;

  export function save(config: string): void;

  /**
   * You can save all files at once. By default, it will only actually save files with changes, but you can force saving all files by setting the force flag to true.
   * @param all_files false only saves changed files and true saves all files
   */
  export function save_all(all_files?: boolean): void;

  /**
   * In your update, if you want autosave to be enabled, you will need to include
   */
  export function update(dt: number): void;
}
