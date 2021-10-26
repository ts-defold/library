/// <library version="0.6.4" src="https://github.com/indiesoftby/defold-yagames/archive/refs/tags/0.6.4.zip" />
/** @noSelfInFile **/

/** @noResolution */
declare module 'yagames.yagames' {
  export type Context = {};

  export interface ApiCallback {
    (this: Context, err: string, data?: unknown): void;
  }

  export function init(callback: ApiCallback): void;

  //* Advertisement

  export interface AdvCallbacks {
    open: (this: Context) => void;
    close: (this: Context, was_shown: boolean) => void;
    offline: (this: Context) => void;
    error: (err: string) => void;
  }
  export function adv_show_fullscreen_adv(callbacks: AdvCallbacks): void;

  export interface RewardedCallbacks {
    open: (this: Context) => void;
    rewarded: (this: Context) => void;
    close: (this: Context) => void;
    error: (this: Context, err: string) => void;
  }
  export function adv_show_rewarded_video(callbacks: RewardedCallbacks): void;

  //* Authentication + Player 

  export function auth_open_auth_dialog(callback: ApiCallback): void;

  export interface PlayerInitOptions {
    signed: boolean;
    scopes: boolean;
  }
  export function player_init(options: PlayerInitOptions, callback: ApiCallback): void;

  export function player_set_data(data: Record<string, unknown>, flush: boolean, callback: ApiCallback): void;

  export function player_get_data(keys: Array<string> | null, callback: ApiCallback): void;

  export function player_set_stats(stats: Record<string, number>, callback: ApiCallback): void;

  export function player_increment_stats(stats: Record<string, number>, callback: ApiCallback): void;

  export function player_get_stats(keys: Array<string> | null, callback: ApiCallback): void;

  export function player_get_unique_id(): string;

  export function player_get_name(): string;

  export function player_get_id(): string;

  export interface PlayerGetIdsCallback {
    (this: Context, err: string, data: Array<{
      appID: string;
      userID: string;
    }>): void;
  }
  export function player_get_ids_per_game(callback: PlayerGetIdsCallback): void

  export function player_get_name(): string;

  export function player_get_photo(size: 'small' | 'medium' | 'large'): string;

  //* In-Game Purchases

  export function payments_init(options: { signed?: boolean } | null, callback: ApiCallback): void;

  export interface PaymentsPurchaseOptions {
    id: string;
    developerPayload?: string;
  }
  export interface PaymentsPurchaseCallback {
    (this: Context, err: string, data: {
      productId: string;
      purchaseToken: string;
      developerPayload: string;
      signature: string;
    }): void;
  }
  export function payments_purchase(options: PaymentsPurchaseOptions | null, callback: PaymentsPurchaseCallback): void;

  export interface PaymentsPurchasesCallback {
    (this: Context, err: string, data: {
      purchases: Array<{
        productId: string;
        purchaseToken: string;
        developerPayload: string;
      }>;
      signature: Array<string>;
    }): void;
  }
  export function payments_get_purchases(callback: PaymentsPurchasesCallback): void;

  export interface PaymentsCatalogCallback {
    (this: Context, err: string, data: Array<{
      id: string;
      title: string;
      description: string;
      imageURI: string;
      price: string;
      priceValue: string;
      priceCurrencyCode: string;
    }>): void;
  }
  export function payments_get_catalog(callback: PaymentsCatalogCallback): void;

  export function payments_consume_purchase(purchase_token: string, callback: ApiCallback): void;
}
