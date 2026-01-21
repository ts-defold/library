/** @noSelfInFile **/

/** @noResolution */
declare module "ludobits.m.flow" {
  export enum FlowType {
    READY = "READY",
    RUNNING = "RUNNING",
    RESUMING = "RESUMING",
    WAITING = "WAITING",
  }

  export type FlowInstance = {
    id: string;
    url: url;
    state: FlowType;
    co: hash | url | string;
    timer_id: hash | string;
  };

  /*
     Start a new flow. If this function is called from
     -- within an existing flow the existing flow can either
     -- wait for the new flow to finish or run in parallel
     -- @param fn The function to run within the flow
     -- @param options Key value pairs. Allowed keys:
     --		parallel = true if running flow shouldn't wait for this flow
     -- @param on_error Function to call if something goes wrong while
     -- running the flow
     -- @return The created flow instance

     Example:

     ```js
      import * as flow from "ludobits.m.flow"

      flow.start(() => {
        // your flow code here.
      });
     ```
   */
  export function start(
    fn: () => void,
    options?: { parallel?: boolean },
    on_error?: () => void
  ): FlowInstance;

  export function parallel(fn: () => void, on_error: () => void): FlowInstance;

  /*
     Wait until a certain time has elapsed
     -- @param seconds
   */
  export function delay(seconds: number): LuaMultiReturn<any[]>;

  /*
     Stop a created flow before it has completed
     -- @param instance This can be either the returned value from
     -- a call to @{start}, a coroutine or URL. Defaults to the URL of the
     -- running script
   */
  export function stop(instance: FlowInstance): void;

  /*
     Wait until a certain number of frames have elapsed
     -- @param frames
   */
  export function frames(frames: number): LuaMultiReturn<any[]>;

  export function yield(): LuaMultiReturn<any[]>;

  /*
     Wait until a function returns true
     -- @param fn
   */
  export function until_true(fn: () => boolean): LuaMultiReturn<any[]>;

  /*
     Wait until any message is received
     -- @return message_id
     -- @return message
     -- @return sender
   */
  export function until_any_message(): LuaMultiReturn<any[]>;

  /*
     Wait until a specific message is received
     -- @param message_1 Message to wait for
     -- @param message_2 Message to wait for
     -- @param message_n Message to wait for
     -- @return message_id
     -- @return message
     -- @return sender
   */
  export function until_message(messages: hash[]): LuaMultiReturn<any[]>;

  /*
     Wait until input action with pressed state
     -- @param action_1 Action to wait for (nil for any action)
     -- @param action_2 Action to wait for
     -- @param action_n Action to wait for
     -- @return action_id
     -- @return action
   */
  export function until_input_pressed(messages: hash[]): LuaMultiReturn<any[]>;

  /*
     --- Wait until input action with released state
     -- @param action_1 Action to wait for (nil for any action)
     -- @param action_2 Action to wait for
     -- @param action_n Action to wait for
     -- @return action_id
     -- @return action
  */
  export function until_input_released(messages: hash[]): LuaMultiReturn<any[]>;

  /*
     Wait until a callback function is invoked
     -- @param fn The function to call. The function must take a callback function as its first argument
     -- @param arg1 Additional argument to pass to fn
     -- @param arg2 Additional argument to pass to fn
     -- @param argn Additional argument to pass to fn
     -- @return Any values passed to the callback function
   */
  export function until_callback(
    fn: () => void,
    messages: hash[]
  ): LuaMultiReturn<any[]>;

  /*
     Load a collection asynchronously and wait until it is loaded and enabled
     -- @param collection_url
   */
  export function load_async(
    collection_url: string | hash | url
  ): LuaMultiReturn<any[]>;

  /*
     Unload a collection and wait until it is unloaded
     -- @param collection_url The collection to unload
   */
  export function unload(
    collection_url: string | hash | url
  ): LuaMultiReturn<any[]>;

  /*
     Load the resources used by a factory
     -- @param factory_url The factory to load resources for
     -- @return True if resources were loaded sucessfully
   */
  export function load_factory(
    factory_url: string | hash | url
  ): LuaMultiReturn<any[]>;

  /*
   Load the resources used by a collection factory
-- @param factory_url The collection factory to load resources for
-- @return True if resources were loaded sucessfully
*/
  export function load_collection_factory(
    collection_url: url
  ): LuaMultiReturn<any[]>;

  /*
   Call go.animate and wait until it has finished
-- @param url
-- @param property
-- @param playback
-- @param to
-- @param easing
-- @param duration
-- @param delay
*/
  export function go_animate(
    url: string | hash | url,
    property: string | hash,
    playback: any,
    to: number | vmath.vector3 | vmath.vector4 | vmath.quaternion,
    easing: any,
    duration: number,
    delay?: number
  ): LuaMultiReturn<any[]>;

  /*
     Call gui.animate and wait until it has finished
     -- NOTE: The argument order differs from gui.animate() (playback is shifted
     -- to the same position as for go.animate)
     -- @param node
     -- @param property
     -- @param playback
     -- @param to
     -- @param easing
     -- @param duration
     -- @param delay
   */
  export function gui_animate(
    node: node,
    property: any,
    to: vmath.vector3 | vmath.vector4,
    easing: any,
    duration: number,
    delay?: number
  ): LuaMultiReturn<any[]>;

  /*
     Play a sprite animation and wait until it has finished
     -- @param sprite_url
     -- @param id
   */
  export function play_animation(
    sprite_url: string | hash | url,
    id: string | hash | url
  ): LuaMultiReturn<any[]>;

  /*
     Wait until other flow coroutines were finished
     -- @param flows one coroutine or array of coroutines*
   */
  export function until_flows(flows: FlowInstance[]): LuaMultiReturn<any[]>;

  /*
     Forward any received messages in your scripts to this function
   */
  export function on_message(message_id: any, message: any, sender: any): void;

  export function on_input(action_id: any, action: any): void;
}
