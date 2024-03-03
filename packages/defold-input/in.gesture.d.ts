/** @noSelfInFile */

/**
 * @url https://github.com/britzl/defold-input
 * @noResolution
 */
declare module 'in.gesture' {
	type GestureInstance = {
		on_input(action_id: hash, action: {}): DetectedGestures;
	};

	type DetectedGestures = {
		tap?: { position: { x: number; y: number } };
		double_tap?: { position: { x: number; y: number } };
		long_press?: { position: { x: number; y: number }; time: number };
		repeated?: boolean;
		swipe_left?: boolean;
		swipe_right?: boolean;
		swipe_up?: boolean;
		swipe_down?: boolean;
		swipe?: {
			from: { x: number; y: number };
			to: { x: number; y: number };
			time: number;
		};
		two_finger?: {
			tap?: boolean;
			double_tap?: boolean;
			long_press?: boolean;
			repeated?: boolean;
			swipe_left?: boolean;
			swipe_right?: boolean;
			swipe_up?: boolean;
			swipe_down?: boolean;
			pinch?: { center: { x: number; y: number }; ratio: number };
		};
	};

	export const SETTINGS: {
		action_id: hash;
		tap_threshold: number;
		double_tap_interval: number;
		swipe_threshold: number;
		swipe_time: number;
		long_press_time: number;
		multi_touch: boolean;
	};

	export function create(settings?: {
		action_id?: string;
		tap_threshold?: number;
		double_tap_interval?: number;
		swipe_threshold?: number;
		swipe_time?: number;
		long_press_time?: number;
		multi_touch?: boolean;
	}): GestureInstance;

	export function on_input(
		this: any,
		action_id: hash,
		action: {},
	): DetectedGestures;
}
