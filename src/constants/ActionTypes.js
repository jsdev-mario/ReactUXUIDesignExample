// Ui action type 
export const SHOW_MESSAGE = 'show_message';
export const HIDE_MESSAGE = 'hide_message';
export const ON_SHOW_LOADER = 'on_show_loader';
export const ON_HIDE_LOADER = 'on_hide_loader';



// auth action type
export const SIGNUP_USER = 'signup_user';
export const SIGNUP_USER_SUCCESS = 'signup_user_success';
export const SIGNIN_USER = 'signin_user';
export const SIGNIN_USER_SUCCESS = 'signin_user_success';
export const SIGNOUT_USER = 'signout_user';
export const SIGNOUT_USER_SUCCESS = 'signout_user_success';
export const INIT_URL = 'init_url';



// subject action type
export const SUBJECT_QUERY = 'subejcts_get';
export const SUBJECT_QUERY_SUCCESS = 'SUBJECT_QUERY_success';
export const SUBJECT_GET = 'subejct_get';
export const SUBJECT_GET_SUCCESS = 'subject_get_success';
export const SUBJECT_RESET = 'subject_reset';
export const SUBJECT_SAVE = 'subject_save';
export const SUBJECT_SAVE_SUCCESS = 'subject_save_success';



//process manager action type
export const PROCESS_QUERY = 'processes_get';
export const PROCESS_QUERY_SUCCESS = 'processes_get_success';
export const PROCESS_GET = 'process_get';
export const CURRENT_PROCESS_RESET = 'current_subject_reset';
export const PROCESS_GET_SUCCESS = 'process_get_success';
export const PROCESS_MANDATORY_FILE_UPLOAD = 'process_mandatory_file_upload';
export const PROCESS_MANDATORY_FILE_UPLOAD_SUCCESS = 'process_mandatory_file_upload_success';
export const PROCESS_MANDATORY_FILEURL_RESET = 'process_mandatory_fileurl_reset';
export const PROCESS_MANDATORY_REMOVE = 'process_mandatory_remove';
export const PROCESS_MANDATORY_REMOVE_SUCCESS = 'process_mandatory_remove_success';
export const PROCESS_MANDATORY_REMOVE_RESET = 'process_mandatory_remove_reset';


// settings action type
export const TOGGLE_COLLAPSED_NAV = 'toggle_collapse_menu';
export const DRAWER_TYPE = 'drawer_type';
export const THEME_COLOR = 'theme_color';
export const DARK_THEME = 'dark_theme';
export const WINDOW_WIDTH = 'window-width';
export const SWITCH_LANGUAGE = 'switch-language';
export const CHANGE_DIRECTION = 'change-direction';
export const CHANGE_NAVIGATION_STYLE = 'change-navigation-style';
export const HORIZONTAL_NAVIGATION = 'horizontal_navigation';
export const HORIZONTAL_MENU_POSITION = 'horizontal_menu_position';
export const FIXED_DRAWER = 'fixed_drawer';
export const COLLAPSED_DRAWER = 'collapsible';
export const MINI_DRAWER = 'mini_drawer';
export const VERTICAL_NAVIGATION = 'vertical_navigation';
export const ABOVE_THE_HEADER = 'above_the_header';
export const INSIDE_THE_HEADER = 'inside_the_header';
export const BELOW_THE_HEADER = 'below_the_header';


// common data action type
export const GET_TIPOS = 'get_tipos';
export const GET_TIPOS_SUCCESS = 'get_tipos_success';
export const GET_UFS = 'get_ufs';
export const GET_UFS_SUCCESS = 'get_ufs_success';
export const GET_CIDADES = 'get_cidades';
export const GET_CIDADES_SUCCESS = 'get_cidades_success';

export const GET_TIPOSLIST_DOCUMENT = 'get_tiposlist_document';
export const GET_TIPOSLIST_DOCUMENT_SUCCESS = 'get_tiposlist_document_success';
export const GET_FORMATLIST_DOCUMENT = 'get_formatlist_document';
export const GET_FORMATLIST_DOCUMENT_SUCCESS = 'get_formatlist_document_success';
export const GET_TIPOSLIST_FLOW = 'get_tiposlist_flow';
export const GET_TIPOSLIST_FLOW_SUCCESS = 'get_tiposlist_flow_success';
export const GET_TIPOSLIST_SETOR = 'get_tiposlist_setor';
export const GET_TIPOSLIST_SETOR_SUCCESS = 'get_tiposlist_setor_success';

export const GET_LIST_PROCMANREGION = 'get_list_region';
export const GET_LIST_PROCMANREGION_SUCCESS = 'get_list_region_success';
export const GET_LIST_PROCMANPART = 'get_list_part';
export const GET_LIST_PROCMANPART_SUCCESS = 'get_list_part_success';
export const GET_LIST_PROCMANPART_DOCTIPO = 'get_list procmanpart_doctipo';
export const GET_LIST_PROCMANPART_DOCTIPO_SUCCESS = 'get_list procmanpart_doctipo_success';
export const GET_LIST_PROCMANCATEGORIAACTION = 'get_categoria_action_list';
export const GET_LIST_PROCMANCATEGORIAACTION_SUCCESS = 'get_categoria_action_list_success';
export const GET_LIST_PROCMANORGAO = 'get_orgao_list';
export const GET_LIST_PROCMANORGAO_SUCCESS = 'get_orgao_list_success';
export const GET_LIST_PROCMANPROBPERDA = 'get_probperda_list';
export const GET_LIST_PROCMANPROBPERDA_SUCCESS = 'get_probperda_list_success';
export const GET_LIST_PROCMANTIPOORGAO = 'get_tipoorgao_list';
export const GET_LIST_PROCMANTIPOORGAO_SUCCESS = 'get_tipoorgao_list_success';
export const GET_LIST_PROCMANBANDEIRA = 'get_tipobandeira_list';
export const GET_LIST_PROCMANBANDEIRA_SUCCESS = 'get_tipobandeira_list_success';

export const GET_LIST_CARREGASTATUS = 'get_carregar_tipo_status';
export const GET_LIST_CARREGASTATUS_SUCCESS = 'get_carregar_tipo_status_success';


export const GET_TIPOSLIST_DECISAO = 'get_tiposlist_decisao';
export const GET_TIPOSLIST_DECISAO_SUCCESS = 'get_tiposlist_decisao_success';
export const GET_TIPOSLIST_OBRIGACAO = 'get_tiposlist_obrigacao';
export const GET_TIPOSLIST_OBRIGACAO_SUCCESS = 'get_tiposlist_obrigacao_success';
export const GET_TIPOSLIST_AOEXECUTAR = 'get_tiposlist_aoexecutar';
export const GET_TIPOSLIST_AOEXECUTAR_SUCCESS = 'get_tiposlist_aoexecutar_success';


export const GET_LIST_SYSTEM = 'get_list_system';
export const GET_LIST_SYSTEM_SUCCESS = 'get_list_system_success';

export const GET_USER_DETAILS = 'get_user_details';
export const GET_USER_DETAILS_SUCCESS = 'get_user_details_success';





// export const FETCH_ALL_CONTACT = 'fetch_all_contact';
// export const FETCH_ALL_CONTACT_SUCCESS = 'fetch_all_contact_success';
// export const ADD_FAVOURITE = 'add_favourite';
// export const ON_CONTACT_SELECT = 'on_contact_select';
// export const ON_ADD_CONTACT = 'on_add_contact';
// export const ON_CONTACT_CLOSE = 'on_contact_close';
// export const ON_FILTER_OPTION_SELECT = 'on_filter_option_select';
// export const ON_SAVE_CONTACT = 'on_save_contact';
// export const ON_DELETE_CONTACT = 'on_delete_contact';
// export const ON_DELETE_SELECTED_CONTACT = 'on_delete_selected_contact';
// export const FILTER_CONTACT = 'filter_contact';
// export const GET_ALL_CONTACT = 'get_all_contact';
// export const GET_UNSELECTED_ALL_CONTACT = 'get_unselected_all_contact';
// export const ON_ALL_CONTACT_SELECT = 'on_all_contact_select';
// export const UPDATE_SEARCH_USER = 'update_search_user';
// export const ON_TOGGLE_DRAWER = 'on_toggle_drawer';
// export const HANDLE_REQUEST_CLOSE = 'handle_request_close';
// export const HIDE_CONTACT_LOADER = 'hide_contact_loader';

//Auth const


// Chat Module const

// export const FETCH_ALL_CHAT_USER = 'fetch_all_chat_user';
// export const FETCH_ALL_CHAT_USER_CONVERSATION = 'fetch_all_chat_user_conversation';
// export const FETCH_ALL_CHAT_USER_SUCCESS = 'fetch_all_chat_user_success';
// export const FETCH_ALL_CHAT_USER_CONVERSATION_SUCCESS = 'fetch_all_chat_user_conversation_success';
// export const FILTER_USERS = 'filter_users';
// export const ON_SELECT_USER = 'on_select_user';
// export const USER_INFO_STATE = 'user_info_state';
// export const SUBMIT_COMMENT = 'submit_comment';
// export const UPDATE_MESSAGE_VALUE = 'update_message_value';
// export const UPDATE_SEARCH_CHAT_USER = 'update_search_chat_user';

//// Mail Module const


// export const ADD_LABEL = 'ADD_LABEL';
// export const GET_ALL_MAIL = 'get_all_mail';
// export const FETCH_ALL_MAIL = 'fetch_all_mail';
// export const FETCH_ALL_MAIL_SUCCESS = 'fetch_all_mail_success';
// export const GET_IMPORTANT_MAIL = 'get_important_mail';
// export const GET_NAV_FILTERS = 'get_nav_filters';
// export const GET_NAV_LABELS = 'get_nav_labels';
// export const GET_NAV_FOLDER = 'get_nav_folder';
// export const GET_READ_MAIL = 'get_read_mail';
// export const GET_STARRED_MAIL = 'get_starred_mail';
// export const GET_UNIMPORTANT_MAIL = 'get_unimportant_mail';
// export const GET_UNREAD_MAIL = 'get_unread_mail';
// export const GET_UNSELECTED_ALL_MAIL = 'get_unselected_all_mail';
// export const GET_UNSTARRED_MAIL = 'get_unstarred_mail';
// export const ON_ALL_MAIL_SELECT = 'on_all_mail_select';
// export const ON_FOLDER_MENU_ITEM_SELECT = 'on_folder_menu_item_select';
// export const ON_FOLDER_SELECT = 'on_folder_select';
// export const ON_IMPORTANT_SELECT = 'on_important_select';
// export const ON_LABEL_MENU_ITEM_SELECT = 'on_label_menu_item_select';
// export const GET_MARK_AS_START = 'get_mark_as_start';
// export const ON_LABEL_SELECT = 'on_label_select';
// export const ON_MAIL_CHECKED = 'on_mail_checked';
// export const ON_MAIL_SELECT = 'on_mail_select';
// export const ON_MAIL_SEND = 'on_mail_send';
// export const ON_OPTION_MENU_ITEM_SELECT = 'on_option_menu_item_select';
// export const ON_OPTION_MENU_SELECT = 'on_option_menu_select';
// export const ON_START_SELECT = 'on_start_select';
// export const SEARCH_MAIL = 'search_mail';
// export const ON_DELETE_MAIL = 'on_delete_mail';
// export const SET_CURRENT_MAIL_NULL = 'set_current_mail_null';
// export const ON_COMPOSE_MAIL = 'on_compose_mail';

//// TO-DO Module const

// export const ON_SORTEND = 'on_sortend';
// export const FETCH_ALL_TODO = 'fetch_all_todo';
// export const FETCH_ALL_TODO_SUCCESS = 'fetch_all_todo-success';
// export const FETCH_ALL_TODO_CONVERSATION = 'fetch_all_todo_conversation';
// export const FETCH_ALL_TODO_CONVERSATION_SUCCESS = 'fetch_all_todo_conversation_success';
// export const SELECT_ALL_TODO = 'select_all_todo';
// export const GET_ALL_TODO = 'get_all_todo';
// export const GET_UNSELECTED_ALL_TODO = 'get_unselected_all_todo';
// export const GET_STARRED_TODO = 'get_starred_todo';
// export const GET_UNSTARRED_TODO = 'get_unstarred_todo';
// export const GET_IMPORTANT_TODO = 'get_important_todo';
// export const GET_UNIMPORTANT_TODO = 'get_unimportant_todo';
// export const ON_LABEL_UPDATE = 'on_label_update';
// export const ON_TODO_UPDATE = 'on_todo_update';
// export const ON_DELETE_TODO = 'on_delete_todo';
// export const SEARCH_TODO = 'search_todo';
// export const SHOW_TODOS = 'show_todos';
// export const GET_TODO_CONVERSATION = 'get_todo_conversation';
// export const ON_TODO_CHECKED = 'on_todo_checked';
// export const ON_TODO_ADD = 'on_todo_add';
// export const ON_TODO_SELECT = 'on_todo_select';
// export const SET_CURRENT_TODO_NULL = 'set_current_todo_null';
// export const REMOVE_LABEL = 'remove_label';
// export const UPDATE_SEARCH = 'update_search';



