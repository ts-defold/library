/// <library version="4.3.1" src="https://github.com/britzl/platypus/archive/refs/tags/4.3.1.zip" />
/** @noSelfInFile */

/**
 * Defold platformer engine
 * @see {@link https://github.com/britzl/platypus|Github Source}
 * @example `import * as platypus from 'platypus.platypus'`
 * @noResolution
 */
declare module 'platypus.platypus' {
	interface PlatypusConfig {
		collisions: {
			groups: LuaMap<hash, Direction>;
			left: number;
			right: number;
			top: number;
			bottom: number;
			offset?: vmath.vector3;
		};
		debug?: boolean;
		reparent?: boolean;
		gravity?: number;
		max_velocity?: number;
		wall_jump_power_ratio_x?: number;
		wall_jump_power_ratio_y?: number;
		allow_double_jump?: boolean;
		allow_wall_jump?: boolean;
		const_wall_jump?: boolean;
		allow_wall_slide?: boolean;
		wall_slide_velocity?: number;
	}

	/** @noSelf **/
	interface PlatypusInstance extends PlatypusConfig {
		velocity: vmath.vector3;
		update(dt: number): void;
		on_message(message_id: hash, message: AnyNotNil): void;
		left(velocity: number): void;
		right(velocity: number): void;
		up(velocity: number): void;
		down(velocity: number): void;
		move(velocity: vmath.vector3): void;
		jump(power: number): void;
		force_jump(power: number): void;
		abort_jump(reduction: number): void;
		abort_wall_slide(): void;
		has_ground_contact(): boolean;
		has_wall_contact(): boolean;
		is_falling(): boolean;
		is_jumping(): boolean;
		is_wall_jumping(): boolean;
		is_wall_sliding(): boolean;
		toggle_debug(): void;
		set_collisions(collisions: {
			top: number;
			left: number;
			right: number;
			bottom: number;
		}): void;
	}

	export function create(config: PlatypusConfig): PlatypusInstance;
	export const FALLING: hash;
	export const GROUND_CONTACT: hash;
	export const WALL_CONTACT: hash;
	export const JUMP: hash;
	export const WALL_JUMP: hash;
	export const DOUBLE_JUMP: hash;
	export const WALL_SLIDE: hash;

	type Direction = number;
	export const DIR_UP: Direction;
	export const DIR_LEFT: Direction;
	export const DIR_RIGHT: Direction;
	export const DIR_DOWN: Direction;
	export const DIR_ALL: Direction;
}
