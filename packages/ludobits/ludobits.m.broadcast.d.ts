/** @noSelfInFile **/

/** @noResolution */
declare module "ludobits.m.broadcast" {
  export function register(name: string): void;

  export function unregister(name: string): void;

  export function on_message(message_id: hash, message: any, sender: any): void;

  export function send(message_id: hash, message: any): void;
}
