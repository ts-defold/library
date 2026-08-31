/** @noSelfInFile **/

/**
 * @see {@link https://github.com/ivanquirino/defold-tiny-ecs|Github Source}
 * @noResolution
 */
declare module 'tinyecs.tiny' {
	type Entity = any;

	export function requireAll(...args: any[]): (entity: Entity) => boolean;
	export function requireAny(...args: any[]): (entity: Entity) => boolean;
	export function rejectAll(...args: any[]): (entity: Entity) => boolean;
	export function rejectAny(...args: any[]): (entity: Entity) => boolean;
	export function filter(pattern: string): (entity: Entity) => boolean;
	export function system(table: System): System;
	export function processingSystem(table: System): System;
	export function sortedSystem(table: System): System;
	export function sortedProcessingSystem(table: System): System;
	export function world(...args: any[]): World;
	export function addEntity(world: World, entity: Entity): Entity;
	export function addSystem(world: World, system: System): System;
	export function add(world: World, ...args: any[]): any;
	export function removeEntity(world: World, entity: Entity): Entity;
	export function removeSystem(world: World, system: System): System;
	export function remove(world: World, ...args: any[]): any;
	export function refresh(world: World): void;
	export function update(world: World, dt: number, filter?: () => void): void;
	export function clearEntities(world: World): void;
	export function clearSystems(world: World): void;
	export function getEntityCount(world: World): number;
	export function getSystemCount(world: World): number;
	export function setSystemIndex(world: World): void;

	interface System {
		id: string | number | undefined;
		active: boolean;
		filter?: (this: System, entity: Entity) => void;
		world: World;
		entities: Entity[];
		/** Entity index in entities table */
		indices: LuaTable<Entity, number>;
		nocache: boolean;
		index: number;
		modified: boolean;
		interval?: number;
		onAdd?: (this: System, entity: Entity) => void;
		onRemove?: (this: System, entity: Entity) => void;
		onModify?: (dt: number) => void;
		onAddToWorld?: (this: System, world: World) => void;
		onRemoveFromWorld?: (this: System, world: World) => void;
		preWrap?: (dt: number) => void;
		postWrap?: () => void;
		update?: (dt: number) => void;
		preProcess?: (dt: number) => void;
		process?: (entity: Entity, dt: number) => void;
		postProcess?: (dt: number) => void;
		compare?: (e1: Entity, e2: Entity) => void;
	}

	interface World {
		entities: Entity[];
		systems: System[];
		add: (this: World, ...args: any[]) => any;
		addEntity: (this: World, entity: Entity) => Entity;
		addSystem: (this: World, system: System) => System;
		remove: (this: World) => void;
		removeEntity: (this: World, entity: Entity) => Entity;
		removeSystem: (this: World, system: System) => System;
		refresh: (this: World) => void;
		update: (this: World, dt: number, filter?: () => void) => void;
		clearEntities: (this: World) => void;
		clearSystems: (this: World) => void;
		getEntityCount: (this: World) => number;
		getSystemCount: (this: World) => number;
		setSystemIndex: (this: World) => void;
		entitiesToChange: Entity[];
		entitiesToRemove: Entity[];
		systemsToChange: System[];
		systemsToAdd: System[];
		systemsToRemove: System[];
	}
}
