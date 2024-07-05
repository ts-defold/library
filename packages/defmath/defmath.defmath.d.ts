/** @noSelfInFile **/

/** 
 * @see {@link https://github.com/subsoap/defmath|Github Source}
 * @noResolution
 */
declare module "defmath.defmath" {
  /**
   * Angle-Diff (gets the smallest angle between two angles, using radians)
   */
  export function anglediff_rad(rad1: number, rad2: number): number;
  
  /**
   * Angle-Diff (gets the smallest angle between two angles, using degrees)
   */
  export function anglediff_deg(deg1: number, deg2: number): number;
  
  /**
   * Round
   */
  export function round(x: number): number;

  /**
   * Round to decimal point
   */
  export function round_decimal(number: number, decimal: number): number;
  
  /**
   * Clamp
   */
  export function clamp(x: number, min: number, max: number): number;


  /**
   * Sign
   */
  export function sign(x: number): number;

  /**
   * Checks if two numbers have the same sign
   */
  export function same_sign(a: number, b: number): boolean;

  /**
   * Vect to Quat
   */
  export function vect_to_quat(vect: vmath.vector3 | vmath.vector4): vmath.quaternion;


  /**
   * Vect to Quat + 90 degrees (perpendicular)
   */
  export function vect_to_quat90(vect: vmath.vector3 | vmath.vector4): vmath.quaternion;

  /**
   * Random float from -1 to 1
   */
  export function rand11(): number;

  /**
   * Random float in range
   */
  export function rand_range(min: number, max: number): number;

  /**
   * Linear interpolation
   */
  export function lerp(start: number, stop: number, amount: number): number;

  /**
   * Distance between two 2d points
   */
  export function dist2d(x1: number, y1: number, x2: number, y2: number): number;

  /**
   * Distance between two 3d points
   */
  export function dist3d(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
  
  /** 
   * Angle in radians of vector between two points
   */
  export function angle_of_vector_between_two_points(x1: number, y1: number, x2: number, y2: number): number;

  /**
   * Clears bad RNG and sets seed to be based on OS time
   */
  export function setup_rng(): void;

  /**
   * Check if number is within range
   */
  export function is_within_range(number: number, min: number, max: number): boolean;

  /**
   * Convert radians to degrees
   */
  export function radians_to_degrees(radian: number): number;

  /**
   * Convert degrees to radians
   */
  export function degrees_to_radians(degrees: number): number;

  /**
   * Wrap a number to betwen 0 and a range bound
   */
  export function wrap(number: number, bound: number): number;

  /**
   * Bound a number so that it is no larger than max and no smaller than min
   */
  export function bound(number: number, min: number, max: number): number;

  /**
   * Adds an amount to a value within the value going over max or below min
   */
  export function bound_add(number: number, amount: number, min: number, max: number): number;
  
  /**
   * Sums a set of values
   */
  export function sum(...vararg: number[]): number;

  /**
   * Average of set of values
   */
  export function average(...vararg: number[]): number;

  /**
   * Get difference between two values
   */
  export function difference(a: number, b: number): number;

  /**
   * if a number is even
   */
  export function is_even(number: number): boolean;
  
  /**
   * if a number is odd
   */
  export function is_odd(number: number): boolean;

  /**
   * Wrap an angle between -180 and +180
   */
  export function wrap_angle(angle: number): number;

  /**
   * Angle between vmath vectors in radians
   */
  export function angle_between_vectors(vector1: vmath.vector3 | vmath.vector4, vector2: vmath.vector3 | vmath.vector4): number;

  /**
   * Average midpoint of a set of vmath vectors
   */
  export function average_midpoint_of_vectors(...vararg: Array<vmath.vector3 | vmath.vector4>): LuaMultiReturn<[number, number]>;

  /**
   * Fraction of
   */
  export function fraction_of(a: number, b: number): number;

  /**
   * Percent of
   */
  export function percent_of(a: number, b: number): number;

  /**
   * Used for MinMax Range
   */
  export function min_max(min: number, max: number, value: number): number;

  export function min_value(smallest: number, value: number): number;

  export function max_value(largest: number, value: number): number;

  /**
   * Used to find a point in a triangle
   * x0, y0 are the points that are being checked against the rest to see if it's inside
   */
  export function in_triangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): boolean;

  /**
   * arr must be 6 in length: top x/y, bottom right x/y, bottom left x/y
   */
  export function box_intersect(ax: number, ay: number, awidth: number, aheight: number, bx: number, by: number, bwidth: number, bheight: number): boolean;

  /**
   * see if a single point is within a rotated rectangle
   */
  export function check_point_in_rect(rx: number, ry: number, rw: number, rh: number, rot: number, px: number, py: number): boolean;
}
