/// <library version="1.0.0" src="https://github.com/NaakkaDev/defold-skippy/archive/refs/tags/1.0.zip" />
/** @noSelfInFile */

/**
 * Steps counter & detector extension for the Defold game engine. 
 * @see {@link https://github.com/NaakkaDev/defold-skippy|Github Source}
 */
declare namespace skippy {
	/** Start the sensor listeners. */
	export function start(): void;
	/** Stop the sensor listeners. */
	export function stop(): void;
	/**
	 * All the steps since the device was powered on.
	 * For Android this means the TYPE_STEP_COUNTER sensor data.
	 */
	export function get_steps(): number;
	/**
	 * Amount of steps detected since the app was started.
	 * For Android this means the TYPE_STEP_DETECTOR sensor data.
	 */
	export function get_steps_detector(): number; // TYPE_STEP_DETECTOR
}
