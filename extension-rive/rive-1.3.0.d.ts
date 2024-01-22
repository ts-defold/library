/// <library version="1.3.0" src="https://github.com/defold/extension-rive/archive/refs/tags/1.3.0.zip" />
/** @noSelfInFile **/

/** @noResolution */
declare namespace rive {
  /**
   * Plays the specified animation on a Rive model
   */
  export function play_anim(
    url: hash | url | string,
    anim_id: hash | string,
    playback: number,
    options?: {
      offset?: number;
      playback_rate?: number;
    },
    complete_function?: (
      message_id: hash | url | string,
      message?: any,
      sender?: url | string
    ) => void
  ): void;

  /**
   * Plays the specified animation on a Rive model
   */
  export function play_state_machine(
    url: hash | url | string,
    state_machine_id: hash | string,
    options?: {
      playback_rate?: number;
    }
  ): void;

  /**
   * Cancels all running animations on a specified spine model component
   */
  export function cancel(url: hash | url | string): hash | url | string;

  /**
   * Returns the id of the game object that corresponds to a specified skeleton bone.
   */
  export function get_go(
    url: hash | url | string,
    bone_id: hash | string
  ): hash | url | string;
}
