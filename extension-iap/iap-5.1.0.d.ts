/// <library version="5.1.0" src="https://github.com/defold/extension-iap/archive/refs/tags/5.1.0.zip" />
/** @noSelfInFile */

/**
 * @url https://github.com/defold/extension-iap
 * @noResolution
 */
declare namespace iap {
	/**
	 * Purchase a product.
	 * @param {string} id product to buy
	 * @param {table} options optional parameters as properties
	 * @example ```lua
		local function iap_listener(self, transaction, error)
			if error == nil then
				-- purchase is successful.
				print(transaction.date)
				-- required if auto finish transactions is disabled in project settings
				if (transaction.state == iap.TRANS_STATE_PURCHASED) then
					-- do server-side verification of purchase here..
					iap.finish(transaction)
				end
			else
				print(error.error, error.reason)
			end
		end

		function init(self)
				iap.set_listener(iap_listener)
				iap.buy("my_iap")
		end
	```
	*/
	export function buy(
		id: string,
		options?: { request_id?: string; token?: string },
	): void;

	/**
	 * Explicitly finish a product transaction. [icon:attention] Calling iap.finish is required on a successful transaction if `auto_finish_transactions` is disabled in project settings. Calling this function with `auto_finish_transactions` set will be ignored and a warning is printed. The `transaction.state` field must equal `iap.TRANS_STATE_PURCHASED`.
	 * @param {table} transaction transaction table parameter as supplied in listener callback
	 */
	export function finish(transaction: {}): void;

	/**
	 * Acknowledge a transaction. [icon:attention] Calling iap.acknowledge is required on a successful transaction on Google Play unless iap.finish is called. The transaction.state field must equal iap.TRANS_STATE_PURCHASED.
	 * @param {table} transaction transaction table parameter as supplied in listener callback
	 */
	export function acknowledge(transaction: {}): void;

	/**
	 * Get current iap provider
	 * @returns {constant} one of the following values
	- `iap.PROVIDER_ID_GOOGLE`
	- `iap.PROVIDER_ID_AMAZON`
	- `iap.PROVIDER_ID_APPLE`
	- `iap.PROVIDER_ID_FACEBOOK`
	*/
	export function get_provider_id(): ProviderId;

	/**
	 * Get a list of all avaliable iap products.
	 * @param {table} ids table (array) of identifiers to get products from
	 * @param {function} callback
	 * @example ```lua
		local function iap_callback(self, products, error)
			if error == nil then
				for k,p in pairs(products) do
					-- present the product
					print(p.title)
					print(p.description)
				end
			else
				print(error.error)
			end
		end

		function init(self)
				iap.list({"my_iap"}, iap_callback)
		end
	```
 	*/
	export function list(
		ids: {},
		callback: (
			this: any,
			products: {
				ident: string;
				title: string;
				description: string;
				price: number;
				price_string: string;
				currency_code: string;
				subscriptions?: {
					token: string;
					pricing: {
						price_string: string;
						price: number;
						currency_code: string;
						billing_period: string;
						billing_cycle_count: number;
						recurrence_mode: 'FINITE' | 'INFINITE' | 'NONE';
					};
				};
			},
			error:
				| {
						error: string;
				  }
				| undefined,
		) => void,
	): void;

	/**
	 * Restore previously purchased products.
	 * @returns {boolean} value is `true` if current store supports handling restored transactions, otherwise `false`.
	 */
	export function restore(): boolean;

	/**
	 * Set the callback function to receive purchase transaction events.
	 * @param {function} listener listener callback function. Pass an empty function if you no longer wish to receive callbacks.
	 */
	export function set_listener(
		listener: (
			this: any,
			transaction: {
				ident: string;
				state: TransactionState;
				date: string;
				trans_ident?: string;
				receipt?: string;
				original_trans?: string;
				original_json: string;
				signature: string;
				request_id: string;
				user_id: string;
				is_sandbox_mode: boolean;
				cancel_date: string;
				canceled: boolean;
			},
			error: { error: string; reason: ErrorReason } | undefined,
		) => void,
	): void;

	type ProviderId = number & Readonly<{ __brand: 'ProviderId' }>;
	/**
	 * provider id for Amazon
	 */
	export const PROVIDER_ID_AMAZON: ProviderId;
	/**
	 * provider id for Apple
	 */
	export const PROVIDER_ID_APPLE: ProviderId;
	/**
	 * provider id for Facebook
	 */
	export const PROVIDER_ID_FACEBOOK: ProviderId;
	/**
	 * iap provider id for Google
	 */
	export const PROVIDER_ID_GOOGLE: ProviderId;

	type ErrorReason = number & Readonly<{ __brand: 'ErrorReason' }>;
	/**
	 * unspecified error reason
	 */
	export const REASON_UNSPECIFIED: ErrorReason;
	/**
	 * user canceled reason
	 */
	export const REASON_USER_CANCELED: ErrorReason;

	type TransactionState = number & Readonly<{ __brand: 'TransactionState' }>;
	/**
	 * transaction failed state
	 */
	export const TRANS_STATE_FAILED: TransactionState;
	/**
	 * transaction purchased state
	 */
	export const TRANS_STATE_PURCHASED: TransactionState;
	/**
	 * transaction purchasing state This is an intermediate mode followed by TRANS_STATE_PURCHASED. Store provider support dependent.
	 */
	export const TRANS_STATE_PURCHASING: TransactionState;
	/**
	 * transaction restored state This is only available on store providers supporting restoring purchases.
	 */
	export const TRANS_STATE_RESTORED: TransactionState;
	/**
	 * transaction unverified state, requires verification of purchase
	 */
	export const TRANS_STATE_UNVERIFIED: TransactionState;
}
