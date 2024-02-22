/// <library version="2.4.0" src="https://github.com/britzl/defcon/archive/refs/tags/2.4.0.zip" />
/** @noSelfInFile **/

/** @noResolution **/
declare module 'defcon.console' {
  /** @noSelf */
  export interface CommandCallback {
    (args: Array<string>, stream: unknown): string;
  }

  export function start(port: number): void;

  export function stop(): void;

  export function update(): void;

  export function register_module(module: unknown): void;

  export function register_command(command: string, description: string, callback: CommandCallback): void;

  export function set_environment(env: unknown): void;
}