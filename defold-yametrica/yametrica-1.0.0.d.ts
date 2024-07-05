/// <library version="1.0.0" src="https://github.com/indiesoftby/defold-yametrica/archive/refs/tags/1.0.0.zip" />
/** @noSelfInFile */

/**
 * Yandex.Metrica for Defold
 * @see {@link https://github.com/indiesoftby/defold-yametrica|Github Source}
 */
declare namespace yametrica {
	/**
	 * ym(XXXXXX, 'hit', url[, options])
	 * @param {string} url
	 * @param {object} options
	 */
	export function hit(url: string, options?: {}): void;

	/**
	 * ym(XXXXXX, 'notBounce', [options])
	 * @param {object} options
	 */
	export function not_bounce(options?: {}): void;

	/**
	 * ym(XXXXXX, 'params', visitParams[, goalParams])
	 * @param {object} visit_params
	 * @param {object} goal_params
	 */
	export function params(visit_params: {}, goal_params?: {}): void;

	/**
	 * ym(XXXXXX, 'reachGoal', target[, params[, callback[, ctx]]])
	 * @param {string} target
	 * @param {object} params
	 */
	export function reach_goal(target: string, params?: {}): void;

	/**
	 * ym(XXXXXX, 'userParams', parameters)
	 * @param {object} params
	 */
	export function user_params(params: {}): void;
}
