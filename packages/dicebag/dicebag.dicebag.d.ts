/** @noSelfInFile **/

/** @noResolution */
declare module "dicebag.dicebag" {
  /**
   * Sets up the randomseed and clears the first number of random rolls.
   * @param seed optional seed, if not specified a seed will be generated using socket.gettime().
   * @returns the number used to seed the random function.
   */
  export function set_up_rng(seed?: number): number;

  /**
   * Flip a coin.
   * @returns true or false (50% chance).
   */
  export function flip_coin(): boolean;

  /**
   * Roll a number of dice, D&D-style. An example would be rolling 3d6+2. Returns the sum of the resulting roll.
   * @param num_dice Number of dice to roll.
   * @param num_sides Number of sides on the dice.
   * @param modifier Number to add to the result.
   * @returns Sum of rolled dice plus modifier.
   */
  export function roll_dice(num_dice: number, num_sides: number, modifier: number): number;

  /**
   * Roll a number of dice and choose one (or more) of the highest (advantage) or lowest (disadvantage) results. Returns the sum of the relevant dice rolls.
   * @param num_sides Number of sides on the dice.
   * @param advantage If true, the highest rolls will be selected, otherwise the lowest values will be selected.
   * @param num_dice Number of dice to roll.
   * @param num_results How many of the highest (advantage) or lowest (disadvantage) dice to sum up.
   * @returns Sum of the highest (advantage) or lowest (disadvantage) dice rolls
   */
  export function roll_special_dice(num_sides: number, advantage: number, num_dice: number, num_results: number): number;

  /**
   * Roll custom dice. The dice can have sides with different weights and different values.
   * @param num_dice How many dice to roll.
   * @param sides A table describing the sides of the die in the format `{{weight1, value1}, {weight2, value2} ...}`.
   * @returns The sum of the values as specified in the table `sides`.
   */
  export function roll_custom_dice(num_dice: number, sides: Array<{weight: number, value: number}>): number;

  /**
   * Create a marble bag of green (success) and red (fails) 'marbles'. This allows you to, for example, make an unlikely event more and more likely the more fails are accumulated.
   * @param id A unique identifier for the marble bag.
   * @param num_success The number of success marbles in the bag.
   * @param num_fails The number of fails marbles in the bag.
   * @param reset_on_success Whether or not the bag should reset when a successful result is drawn. If false or nil the bag will reset when all marbles have been drawn.
   */
  export function bag_create(id: string | number | hash, num_success: number, num_fails: number, reset_on_success: boolean): void;

  /**
   * Draw a marble from a previously created bag.
   * @param id A unique identifier for the marble bag.
   * @returns True or false
   */
  export function bag_draw(id: string | number | hash): boolean;

  /**
   * Manually reset a marble bag. Will also be called when a marble bag is empty, or a success is drawn in a bag where `reset_on_success` is true.
   * @param id A unique identifier for the marble bag.
   */
  export function bag_reset(id: string | number | hash): void;

  /**
   * Create a rollable table. This is similar to a marble bag, except each entry can have a different weight, and can return any value (not just a boolean).
   * @param id A unique identifier for the rollable table.
   * @param rollable_table A table of weights, values and reset flags.
   */
  export function table_create(id: string | number | hash, rollable_table: Array<{ weight: number, value: any, reset_on_roll?: boolean }>): void;

  /**
   * Draw a random value from the rollable table created in `table_create`. The value will be removed from the table. If `reset_on_roll` is true, the table will reset. Otherwise, the table will reset when all values are drawn.
   * @param id A unique identifier for the rollable table.
   * @returns The value specified in `table_create`.
   */
  export function table_roll(id: string | number | hash): any;

  /**
   * Manually reset a rollable table. Will also be called when the rollable table is empty, or a drawn value where `reset_on_roll` is true.
   * @param id A unique identifier for the rollable table.
   */
  export function table_reset(id: string | number | hash): void;
}