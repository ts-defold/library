/// <library version="2.1.2" src="https://github.com/heroiclabs/nakama-defold/archive/refs/tags/2.1.2.zip" />
/** @noSelfInFile **/

/** @noResolution */
declare module 'nakama.nakama' {
  export type Client = symbol;

  export interface ClientConfig {
    host: string;
    port: number;
    use_ssl?: boolean;
    username: string;
    password: string;
    engine: unknown;
  }

  type SessionToken = symbol;
  interface Session {
    token: SessionToken;
    refresh_token: SessionToken;
    created: boolean;
  }

  export function authenticate_custom(
    client: Client,
    body: { id: string; vars?: unknown },
    create: boolean,
    username: string,
    callback?: (result: unknown) => void
  ): Session;

  export function create_client(config: ClientConfig): Client;

  export function create_api_account_custom(id: string, vars?: unknown): { id: string; vars: unknown };

  export function set_bearer_token(client: Client, token: SessionToken): void;

  export function sync(fn: () => void): void;

  // Generated
  export function create_match_create_message(): void;
  export function create_match_leave_message(match_id: string): void;
  export function create_channel_message_send_message(channel_id: string, content: string): void;
  export function create_channel_message_update_message(channel_id: string, message_id: string, content: string): void;
  export function create_channel_message_remove_message(channel_id: string, message_id: string): void;
  export function create_channel_join_message(target: any, type: any, persistence: any, hidden: any): void;
  export function create_channel_leave_message(channel_id: string): void;
  export function create_matchmaker_add_message(
    query: string,
    min_count: any,
    max_count: any,
    string_properties: string,
    numeric_properties: any
  ): void;
  export function create_matchmaker_remove_message(ticket: any): void;
  export function create_match_data_message(match_id: string, op_code: number, data: string): void;
  export function create_status_follow_message(user_ids: string): void;
  export function create_status_unfollow_message(user_ids: string): void;
  export function create_status_update_message(status: string): void;
  export function create_group_user_list_group_user(state_int: any, user_api_user: any): void;
  export function create_user_group_list_user_group(group_api_group: any, state_int: any): void;
  export function create_write_leaderboard_record_request_leaderboard_record_write(
    metadata_str: any,
    operator_api_operator: any,
    score_str: any,
    subscore_str: any
  ): void;
  export function create_write_tournament_record_request_tournament_record_write(
    metadata_str: any,
    operator_api_operator: any,
    score_str: any,
    subscore_str: any
  ): void;
  export function create_api_account(
    custom_id_str: any,
    devices_arr: any,
    disable_time_str: any,
    email_str: any,
    user_api_user: any,
    verify_time_str: any,
    wallet_str: any
  ): void;
  export function create_api_account_apple(token_str: any, vars_obj: any): void;
  //export function create_api_account_custom(id_str: any, vars_obj: any): void;
  export function create_api_account_device(id_str: any, vars_obj: any): void;
  export function create_api_account_email(email_str: any, password_str: any, vars_obj: any): void;
  export function create_api_account_facebook(token_str: any, vars_obj: any): void;
  export function create_api_account_facebook_instant_game(signed_player_info_str: any, vars_obj: any): void;
  export function create_api_account_game_center(
    bundle_id_str: any,
    player_id_str: any,
    public_key_url_str: any,
    salt_str: any,
    signature_str: any,
    timestamp_seconds_str: any,
    vars_obj: any
  ): void;
  export function create_api_account_google(token_str: any, vars_obj: any): void;
  export function create_api_account_steam(token_str: any, vars_obj: any): void;
  export function create_api_channel_message(
    channel_id_str: any,
    code_int: any,
    content_str: any,
    create_time_str: any,
    group_id_str: any,
    message_id_str: any,
    persistent_bool: any,
    room_name_str: any,
    sender_id_str: any,
    update_time_str: any,
    user_id_one_str: any,
    user_id_two_str: any,
    username_str: any
  ): void;
  export function create_api_channel_message_list(
    cacheable_cursor_str: any,
    messages_arr: any,
    next_cursor_str: any,
    prev_cursor_str: any
  ): void;
  export function create_api_create_group_request(
    avatar_url_str: any,
    description_str: any,
    lang_tag_str: any,
    max_count_int: any,
    name_str: any,
    open_bool: any
  ): void;
  export function create_api_delete_storage_object_id(collection_str: any, key_str: any, version_str: any): void;
  export function create_api_delete_storage_objects_request(object_ids_arr: any): void;
  export function create_api_event(external_bool: any, name_str: any, properties_obj: any, timestamp_str: any): void;
  export function create_api_friend(state_int: any, update_time_str: any, user_api_user: any): void;
  export function create_api_friend_list(cursor_str: any, friends_arr: any): void;
  export function create_api_group(
    avatar_url_str: any,
    create_time_str: any,
    creator_id_str: any,
    description_str: any,
    edge_count_int: any,
    id_str: any,
    lang_tag_str: any,
    max_count_int: any,
    metadata_str: any,
    name_str: any,
    open_bool: any,
    update_time_str: any
  ): void;
  export function create_api_group_list(cursor_str: any, groups_arr: any): void;
  export function create_api_group_user_list(cursor_str: any, group_users_arr: any): void;
  export function create_api_leaderboard_record(
    create_time_str: any,
    expiry_time_str: any,
    leaderboard_id_str: any,
    max_num_score_int: any,
    metadata_str: any,
    num_score_int: any,
    owner_id_str: any,
    rank_str: any,
    score_str: any,
    subscore_str: any,
    update_time_str: any,
    username_str: any
  ): void;
  export function create_api_leaderboard_record_list(
    next_cursor_str: any,
    owner_records_arr: any,
    prev_cursor_str: any,
    records_arr: any
  ): void;
  export function create_api_link_steam_request(account_api_account_steam: any, sync_bool: any): void;
  export function create_api_match(
    authoritative_bool: any,
    handler_name_str: any,
    label_str: any,
    match_id_str: any,
    size_int: any,
    tick_rate_int: any
  ): void;
  export function create_api_match_list(matches_arr: any): void;
  export function create_api_notification(
    code_int: any,
    content_str: any,
    create_time_str: any,
    id_str: any,
    persistent_bool: any,
    sender_id_str: any,
    subject_str: any
  ): void;
  export function create_api_notification_list(cacheable_cursor_str: any, notifications_arr: any): void;
  export function create_api_read_storage_object_id(collection_str: any, key_str: any, user_id_str: any): void;
  export function create_api_read_storage_objects_request(object_ids_arr: any): void;
  export function create_api_rpc(http_key_str: any, id_str: any, payload_str: any): void;
  export function create_api_session(created_bool: any, refresh_token_str: any, token_str: any): void;
  export function create_api_session_logout_request(refresh_token_str: any, token_str: any): void;
  export function create_api_session_refresh_request(token_str: any, vars_obj: any): void;
  export function create_api_storage_object(
    collection_str: any,
    create_time_str: any,
    key_str: any,
    permission_read_int: any,
    permission_write_int: any,
    update_time_str: any,
    user_id_str: any,
    value_str: any,
    version_str: any
  ): void;
  export function create_api_storage_object_ack(
    collection_str: any,
    key_str: any,
    user_id_str: any,
    version_str: any
  ): void;
  export function create_api_storage_object_acks(acks_arr: any): void;
  export function create_api_storage_object_list(cursor_str: any, objects_arr: any): void;
  export function create_api_storage_objects(objects_arr: any): void;
  export function create_api_tournament(
    can_enter_bool: any,
    category_int: any,
    create_time_str: any,
    description_str: any,
    duration_int: any,
    end_active_int: any,
    end_time_str: any,
    id_str: any,
    max_num_score_int: any,
    max_size_int: any,
    metadata_str: any,
    next_reset_int: any,
    operator_api_operator: any,
    prev_reset_int: any,
    size_int: any,
    sort_order_int: any,
    start_active_int: any,
    start_time_str: any,
    title_str: any
  ): void;
  export function create_api_tournament_list(cursor_str: any, tournaments_arr: any): void;
  export function create_api_tournament_record_list(
    next_cursor_str: any,
    owner_records_arr: any,
    prev_cursor_str: any,
    records_arr: any
  ): void;
  export function create_api_update_account_request(
    avatar_url_str: any,
    display_name_str: any,
    lang_tag_str: any,
    location_str: any,
    timezone_str: any,
    username_str: any
  ): void;
  export function create_api_update_group_request(
    avatar_url_str: any,
    description_str: any,
    group_id_str: any,
    lang_tag_str: any,
    name_str: any,
    open_bool: any
  ): void;
  export function create_api_user(
    apple_id_str: any,
    avatar_url_str: any,
    create_time_str: any,
    display_name_str: any,
    edge_count_int: any,
    facebook_id_str: any,
    facebook_instant_game_id_str: any,
    gamecenter_id_str: any,
    google_id_str: any,
    id_str: any,
    lang_tag_str: any,
    location_str: any,
    metadata_str: any,
    online_bool: any,
    steam_id_str: any,
    timezone_str: any,
    update_time_str: any,
    username_str: any
  ): void;
  export function create_api_user_group_list(cursor_str: any, user_groups_arr: any): void;
  export function create_api_users(users_arr: any): void;
  export function create_api_validate_purchase_apple_request(receipt_str: any): void;
  export function create_api_validate_purchase_google_request(purchase_str: any): void;
  export function create_api_validate_purchase_huawei_request(purchase_str: any, signature_str: any): void;
  export function create_api_validate_purchase_response(validated_purchases_arr: any): void;
  export function create_api_validated_purchase(
    create_time_str: any,
    environment_validated_purchase_environment: any,
    product_id_str: any,
    provider_response_str: any,
    purchase_time_str: any,
    store_validated_purchase_store: any,
    transaction_id_str: any,
    update_time_str: any
  ): void;
  export function create_api_write_storage_object(
    collection_str: any,
    key_str: any,
    permission_read_int: any,
    permission_write_int: any,
    value_str: any,
    version_str: any
  ): void;
  export function create_api_write_storage_objects_request(objects_arr: any): void;
  export function create_protobuf_any(type_url_str: any, value_str: any): void;
  export function create_rpc_status(code_int: any, details_arr: any, message_str: any): void;
  //export function create_client(config: any): void;
  export function on_notification(socket: any, fn: any): void;
  export function on_matchdata(socket: any, fn: any): void;
  export function on_matchpresence(socket: any, fn: any): void;
  export function on_matchmakermatched(socket: any, fn: any): void;
  export function on_statuspresence(socket: any, fn: any): void;
  export function on_streampresence(socket: any, fn: any): void;
  export function on_streamdata(socket: any, fn: any): void;
  export function on_channelmessage(socket: any, fn: any): void;
  export function on_channelpresence(socket: any, fn: any): void;
  export function on_disconnect(socket: any, fn: any): void;
  export function create_socket(client: any): void;
  export function socket_connect(socket: any, callback: any): void;
  export function socket_send(socket: any, message: string, callback: any): void;
  // export function sync(fn: any): void;
  // export function set_bearer_token(client: any, bearer_token: any): void;
  export function healthcheck(client: any, callback: any): void;
  export function get_account(client: any, callback: any): void;
  export function update_account(client: any, body_api_update_account_request: any, callback: any): void;
  export function authenticate_apple(
    client: any,
    body_api_account_apple: any,
    create_bool: any,
    username_str: any,
    callback: any
  ): void;
  //export function authenticate_custom(
  //  client: any,
  //  body_api_account_custom: any,
  //  create_bool: any,
  //  username_str: any,
  //  callback: any
  //): void;
  export function authenticate_device(
    client: any,
    body_api_account_device: any,
    create_bool: any,
    username_str: any,
    callback: any
  ): void;
  export function authenticate_email(
    client: any,
    body_api_account_email: any,
    create_bool: any,
    username_str: any,
    callback: any
  ): void;
  export function authenticate_facebook(
    client: any,
    body_api_account_facebook: any,
    create_bool: any,
    username_str: any,
    sync_bool: any,
    callback: any
  ): void;
  export function authenticate_facebook_instant_game(
    client: any,
    body_api_account_facebook_instant_game: any,
    create_bool: any,
    username_str: any,
    callback: any
  ): void;
  export function authenticate_game_center(
    client: any,
    body_api_account_game_center: any,
    create_bool: any,
    username_str: any,
    callback: any
  ): void;
  export function authenticate_google(
    client: any,
    body_api_account_google: any,
    create_bool: any,
    username_str: any,
    callback: any
  ): void;
  export function authenticate_steam(
    client: any,
    body_api_account_steam: any,
    create_bool: any,
    username_str: any,
    sync_bool: any,
    callback: any
  ): void;
  export function link_apple(client: any, body_api_account_apple: any, callback: any): void;
  export function link_custom(client: any, body_api_account_custom: any, callback: any): void;
  export function link_device(client: any, body_api_account_device: any, callback: any): void;
  export function link_email(client: any, body_api_account_email: any, callback: any): void;
  export function link_facebook(client: any, body_api_account_facebook: any, sync_bool: any, callback: any): void;
  export function link_facebook_instant_game(
    client: any,
    body_api_account_facebook_instant_game: any,
    callback: any
  ): void;
  export function link_game_center(client: any, body_api_account_game_center: any, callback: any): void;
  export function link_google(client: any, body_api_account_google: any, callback: any): void;
  export function link_steam(client: any, body_api_link_steam_request: any, callback: any): void;
  export function session_refresh(client: any, body_api_session_refresh_request: any, callback: any): void;
  export function unlink_apple(client: any, body_api_account_apple: any, callback: any): void;
  export function unlink_custom(client: any, body_api_account_custom: any, callback: any): void;
  export function unlink_device(client: any, body_api_account_device: any, callback: any): void;
  export function unlink_email(client: any, body_api_account_email: any, callback: any): void;
  export function unlink_facebook(client: any, body_api_account_facebook: any, callback: any): void;
  export function unlink_facebook_instant_game(
    client: any,
    body_api_account_facebook_instant_game: any,
    callback: any
  ): void;
  export function unlink_game_center(client: any, body_api_account_game_center: any, callback: any): void;
  export function unlink_google(client: any, body_api_account_google: any, callback: any): void;
  export function unlink_steam(client: any, body_api_account_steam: any, callback: any): void;
  export function list_channel_messages(
    client: any,
    channel_id_str: any,
    limit_int: number,
    forward_bool: any,
    cursor_str: any,
    callback: any
  ): void;
  export function event(client: any, body_api_event: any, callback: any): void;
  export function delete_friends(client: any, ids_arr: any, usernames_arr: any, callback: any): void;
  export function list_friends(client: any, limit_int: number, state_int: any, cursor_str: any, callback: any): void;
  export function add_friends(client: any, ids_arr: any, usernames_arr: any, callback: any): void;
  export function block_friends(client: any, ids_arr: any, usernames_arr: any, callback: any): void;
  export function import_facebook_friends(
    client: any,
    body_api_account_facebook: any,
    reset_bool: any,
    callback: any
  ): void;
  export function import_steam_friends(client: any, body_api_account_steam: any, reset_bool: any, callback: any): void;
  export function list_groups(
    client: any,
    name_str: any,
    cursor_str: any,
    limit_int: number,
    lang_tag_str: any,
    members_int: any,
    open_bool: any,
    callback: any
  ): void;
  export function create_group(client: any, body_api_create_group_request: any, callback: any): void;
  export function delete_group(client: any, group_id_str: any, callback: any): void;
  export function update_group(client: any, group_id_str: any, body_api_update_group_request: any, callback: any): void;
  export function add_group_users(client: any, group_id_str: any, user_ids_arr: any, callback: any): void;
  export function ban_group_users(client: any, group_id_str: any, user_ids_arr: any, callback: any): void;
  export function demote_group_users(client: any, group_id_str: any, user_ids_arr: any, callback: any): void;
  export function join_group(client: any, group_id_str: any, callback: any): void;
  export function kick_group_users(client: any, group_id_str: any, user_ids_arr: any, callback: any): void;
  export function leave_group(client: any, group_id_str: any, callback: any): void;
  export function promote_group_users(client: any, group_id_str: any, user_ids_arr: any, callback: any): void;
  export function list_group_users(
    client: any,
    group_id_str: any,
    limit_int: number,
    state_int: any,
    cursor_str: any,
    callback: any
  ): void;
  export function validate_purchase_apple(
    client: any,
    body_api_validate_purchase_apple_request: any,
    callback: any
  ): void;
  export function validate_purchase_google(
    client: any,
    body_api_validate_purchase_google_request: any,
    callback: any
  ): void;
  export function validate_purchase_huawei(
    client: any,
    body_api_validate_purchase_huawei_request: any,
    callback: any
  ): void;
  export function delete_leaderboard_record(client: any, leaderboard_id_str: any, callback: any): void;
  export function list_leaderboard_records(
    client: any,
    leaderboard_id_str: any,
    owner_ids_arr: any,
    limit_int: number,
    cursor_str: any,
    expiry_str: any,
    callback: any
  ): void;
  export function write_leaderboard_record(
    client: any,
    leaderboard_id_str: any,
    body_write_leaderboard_record_request_leaderboard_record_write: any,
    callback: any
  ): void;
  export function list_leaderboard_records_around_owner(
    client: any,
    leaderboard_id_str: any,
    owner_id_str: any,
    limit_int: number,
    expiry_str: any,
    callback: any
  ): void;
  export function list_matches(
    client: any,
    limit_int: number,
    authoritative_bool: any,
    label_str: any,
    min_size_int: any,
    max_size_int: any,
    query_str: any,
    callback: any
  ): void;
  export function delete_notifications(client: any, ids_arr: any, callback: any): void;
  export function list_notifications(client: any, limit_int: number, cacheable_cursor_str: any, callback: any): void;
  export function rpc_func2(client: any, id_str: any, payload_str: any, http_key_str: any, callback: any): void;
  export function rpc_func(client: any, id_str: any, body_: any, http_key_str: any, callback: any): void;
  export function session_logout(client: any, body_api_session_logout_request: any, callback: any): void;
  export function read_storage_objects(client: any, body_api_read_storage_objects_request: any, callback: any): void;
  export function write_storage_objects(client: any, body_api_write_storage_objects_request: any, callback: any): void;
  export function delete_storage_objects(
    client: any,
    body_api_delete_storage_objects_request: any,
    callback: any
  ): void;
  export function list_storage_objects(
    client: any,
    collection_str: any,
    user_id_str: any,
    limit_int: number,
    cursor_str: any,
    callback: any
  ): void;
  export function list_storage_objects2(
    client: any,
    collection_str: any,
    user_id_str: any,
    limit_int: number,
    cursor_str: any,
    callback: any
  ): void;
  export function list_tournaments(
    client: any,
    category_start_int: any,
    category_end_int: any,
    start_time_int: any,
    end_time_int: any,
    limit_int: number,
    cursor_str: any,
    callback: any
  ): void;
  export function list_tournament_records(
    client: any,
    tournament_id_str: any,
    owner_ids_arr: any,
    limit_int: number,
    cursor_str: any,
    expiry_str: any,
    callback: any
  ): void;
  export function write_tournament_record2(
    client: any,
    tournament_id_str: any,
    body_write_tournament_record_request_tournament_record_write: any,
    callback: any
  ): void;
  export function write_tournament_record(
    client: any,
    tournament_id_str: any,
    body_write_tournament_record_request_tournament_record_write: any,
    callback: any
  ): void;
  export function join_tournament(client: any, tournament_id_str: any, callback: any): void;
  export function list_tournament_records_around_owner(
    client: any,
    tournament_id_str: any,
    owner_id_str: any,
    limit_int: number,
    expiry_str: any,
    callback: any
  ): void;
  export function get_users(client: any, ids_arr: any, usernames_arr: any, facebook_ids_arr: any, callback: any): void;
  export function list_user_groups(
    client: any,
    user_id_str: any,
    limit_int: number,
    state_int: any,
    cursor_str: any,
    callback: any
  ): void;
}

/** @noSelfInFile **/

/** @noResolution */
declare module 'nakama.engine.defold' {
  export function uuid(): string;

  export function http(
    config: unknown,
    url_path: string,
    query_params: string,
    method: string,
    post_data: string,
    callback: (response: unknown) => void
  ): void;

  export function socket_create(config: unknown, on_message: (socket: symbol, message: unknown) => void): void;

  export function socket_connect(socket: symbol, callback: (success: boolean, error: string) => void): void;

  export function socket_send(socket: symbol, message: string, callback: () => void): void;
}

/** @noSelfInFile **/

/** @noResolution */
declare module 'nakama.util.log' {
  function print(): void;
  function silent(): void;
}
