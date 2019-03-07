import {
    GET_UFS_SUCCESS,
    GET_TIPOS_SUCCESS,
    GET_CIDADES_SUCCESS,
    GET_TIPOSLIST_DOCUMENT_SUCCESS,
    GET_FORMATLIST_DOCUMENT_SUCCESS,
    GET_TIPOSLIST_FLOW_SUCCESS,
    GET_TIPOSLIST_SETOR_SUCCESS,
    GET_LIST_PROCMANREGION_SUCCESS,
    GET_LIST_PROCMANPART_SUCCESS,
    GET_LIST_PROCMANPART_DOCTIPO_SUCCESS,
    GET_LIST_PROCMANCATEGORIAACTION_SUCCESS,
    GET_LIST_PROCMANORGAO_SUCCESS,
    GET_LIST_CARREGASTATUS_SUCCESS,
    GET_TIPOSLIST_DECISAO_SUCCESS,
    GET_TIPOSLIST_OBRIGACAO_SUCCESS,
    GET_TIPOSLIST_AOEXECUTAR_SUCCESS,
    GET_LIST_SYSTEM_SUCCESS,
    GET_LIST_PROCMANPROBPERDA_SUCCESS,
    GET_LIST_PROCMANTIPOORGAO_SUCCESS,
    GET_LIST_PROCMANBANDEIRA_SUCCESS
} from 'constants/ActionTypes';

import Store from 'util/Store'

const INIT_STATE = {
    tipos: [],
    ufs:[],
    cidades: [],
    document_tipos: [],
    document_formats: [],
    flow_tipos: [],
    setor_tipos: [],
    procman_region_list: [],
    procman_part_list: [],
    procman_partdoctipolist: [],
    procman_categoria_action_list: [],
    procman_probperda_list: [],
    procman_tipoorgao_list: [],
    procman_orgao_list: [],
    procman_tipobandeira_list: [],
    carrega_statuslist: [],
    tipos_decisao: [], 
    tipos_obrigacao: [],
    tipos_acaoExecutar: [],
    system_list: []
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_TIPOS_SUCCESS:
            return {
                ...state,
                tipos: action.payload
            };
        case GET_UFS_SUCCESS:
            return {
                ...state,
                ufs: action.payload
            };
        case GET_CIDADES_SUCCESS:
            return {
                ...state,
                cidades: action.payload
            };
        case GET_TIPOSLIST_DOCUMENT_SUCCESS:
            return {
                ...state,
                document_tipos: action.payload
            };

        case GET_FORMATLIST_DOCUMENT_SUCCESS:
            return {
                ...state,
                document_formats: action.payload
            };

        case GET_TIPOSLIST_FLOW_SUCCESS:
            return {
                ...state,
                flow_tipos: action.payload
            };

        case GET_TIPOSLIST_SETOR_SUCCESS:
            return {
                ...state,
                setor_tipos: action.payload
            };
        case GET_LIST_PROCMANREGION_SUCCESS:
            return {
                ...state,
                procman_region_list: action.payload
            };
        case GET_LIST_PROCMANCATEGORIAACTION_SUCCESS:
            return {
                ...state,
                procman_categoria_action_list: action.payload
            };
        case GET_LIST_PROCMANORGAO_SUCCESS:
            return {
                ...state,
                procman_orgao_list: action.payload
            };
        case GET_LIST_PROCMANPROBPERDA_SUCCESS:
            return {
                ...state,
                procman_probperda_list: action.payload
            };
        case GET_LIST_PROCMANTIPOORGAO_SUCCESS:
            return {
                ...state,
                procman_tipoorgao_list: action.payload
            };
        case GET_LIST_PROCMANBANDEIRA_SUCCESS:
            return {
                ...state,
                procman_tipobandeira_list: action.payload
            };
        case GET_LIST_PROCMANPART_SUCCESS:
            return {
                ...state,
                procman_part_list: action.payload
            };
        case GET_LIST_PROCMANPART_DOCTIPO_SUCCESS:
            return {
                ...state,
                procman_partdoctipolist: action.payload
            };
        case GET_LIST_CARREGASTATUS_SUCCESS:
            return {
                ...state,
                carrega_statuslist: action.payload
            };
        case GET_TIPOSLIST_DECISAO_SUCCESS:
            return {
                ...state,
                tipos_decisao: action.payload
            };
        case GET_TIPOSLIST_OBRIGACAO_SUCCESS:
            return {
                ...state,
                tipos_obrigacao: action.payload
            };
        case GET_TIPOSLIST_AOEXECUTAR_SUCCESS:
            return {
                ...state,
                tipos_acaoExecutar: action.payload
            };
        case GET_LIST_SYSTEM_SUCCESS:
            return {
                ...state,
                system_list: action.payload
            };
        default:
            return state;
    }
}
