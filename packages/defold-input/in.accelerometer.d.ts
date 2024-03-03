/** @noSelfInFile */

/**
 * @url https://github.com/britzl/defold-input
 * @noResolution
 */
declare module 'in.accelerometer' {
	type AccelerometerInstance = {
		reset: () => void;
		calibrate: () => void;
		on_input: (action: { acc_x: number; acc_y: number; acc_z: number }) => void;
		calibrated: () => vmath.vector3;
		adjusted: () => vmath.vector3;
		average: () => vmath.vector3;
		zero: () => vmath.vector3;
		latest: () => vmath.vector3;
		on_window_resized: (width: number, height: number) => void;
	};

	export function create(samplecount?: number): AccelerometerInstance;
	export function reset(instance?: AccelerometerInstance): void;
	export function calibrate(instance?: AccelerometerInstance): void;
	export function on_input(
		action: { acc_x: number; acc_y: number; acc_z: number },
		instance?: AccelerometerInstance,
	): void;
	export function calibrated(instance?: AccelerometerInstance): vmath.vector3;
	export function adjusted(instance?: AccelerometerInstance): vmath.vector3;
	export function average(instance?: AccelerometerInstance): vmath.vector3;
	export function zero(instance?: AccelerometerInstance): vmath.vector3;
	export function latest(instance?: AccelerometerInstance): vmath.vector3;
	export function on_window_resized(
		width: number,
		height: number,
		instance?: AccelerometerInstance,
	): void;
}
