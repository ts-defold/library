/// <library version="7.3.0" src="https://github.com/britzl/ludobits/archive/refs/tags/7.3.0.zip" />
/** @noSelfInFile **/

/** @noResolution */
declare module "ludobits.m.broadcast" {
  export function register(name: string): void;

  export function unregister(name: string): void;

  export function on_message(message_id: hash, message: any, sender: any): void;

  export function send(message_id: hash, message: any): void;
}
