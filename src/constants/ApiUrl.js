import Constants from 'constants/Constants';
export default {
    USER_SIGNIN: `${Constants.SERVER_URL}/login`,
    GET_TIPOS: `${Constants.SERVER_URL}/carregar_lista_tipos_credenciamento`,
    GET_UFS: `${Constants.SERVER_URL}/carregar_lista_uf`,
    GET_CIDADES: `${Constants.SERVER_URL}/carregar_lista_cidade`,
    USER_SIGNUP: `${Constants.SERVER_URL}/salvar_credenciamento`,

    SUBJECT_QUERY: `${Constants.SERVER_URL}/assuntos`,
    SUBJECT_DELETE: `${Constants.SERVER_URL}/assuntos/removesubject`,
    SUBJECT_GET: `${Constants.SERVER_URL}/assunto`,
    GET_TIPOSLIST_DOCUMENT: `${Constants.SERVER_URL}/assunto/carregar_lista_tipo_documento`,
    GET_FORMATLIST_DOCUMENT: `${Constants.SERVER_URL}/assunto/carregar_lista_formato_documento`,
    GET_TIPOSLIST_FLOW: `${Constants.SERVER_URL}/assunto/carregar_lista_fluxo`,
    GET_TIPOSLIST_SETOR: `${Constants.SERVER_URL}/assunto/carregar_lista_setor`,
    SUBJECT_SAVE: `${Constants.SERVER_URL}/assunto`,

    GET_LIST_PROCMANREGION: `${Constants.SERVER_URL}/processo/carregar_lista_regionais`,
    GET_LIST_PROCMANCATEGORIAACTION: `${Constants.SERVER_URL}/processo/carregar_categoria_acao`,
    GET_LIST_PROCMANORGAO: `${Constants.SERVER_URL}/processo/carregar_orgao`,
    GET_LIST_PROCMANPROBPERDA: `${Constants.SERVER_URL}/processo/carregar_tipo_perda`,
    GET_LIST_PROCMANTIPOORGAO: `${Constants.SERVER_URL}/processo/carregar_tipo_orgao`,
    GET_LIST_PROCMANTIPOBANDEIRA: `${Constants.SERVER_URL}/processo/carregar_tipo_bandeira`,
    GET_LIST_PROCMANPART: `${Constants.SERVER_URL}/processo/carregar_lista_partes`,
    GET_LIST_PROCMANPART_DOCTIPO: `${Constants.SERVER_URL}/processo/carregar_lista_doc`,
    PROCESS_QUERY: `${Constants.SERVER_URL}/processo/consulta_processo`,
    PROCESS_GET: `${Constants.SERVER_URL}/processo`,
    PROCESS_GET_MANDATORY: `${Constants.SERVER_URL}/processo/documentoscessesario`,
    PROCESS_MANDATORY_FILE_UPLOAD: `${Constants.SERVER_URL}/processo/uploadmandatorydocument`,
    PROCESS_MANDATORY_DELETE: `${Constants.SERVER_URL}/processo/removemandatorydocument`,
    PROCESS_PART_CHECK: `${Constants.SERVER_URL}/processo/carregar_processos_parte`,
    PROCESS_PART_DELETE: `${Constants.SERVER_URL}/processo/removepart`,
    PROCESS_PART_GETCANDICATE_NAME: `${Constants.SERVER_URL}/processo/consulta_documento`,
    PROCESS_SAVE: `${Constants.SERVER_URL}/processo`,

    PROCURACOES_QUERY: `${Constants.SERVER_URL}/procuracao/consultar`,
    PROCURACOE_DETAIL: `${Constants.SERVER_URL}/procuracao`,
    PROCURACOES_SOLICITANTE_QUERY: `${Constants.SERVER_URL}/procuracao/consulta_solicitante`,
    PROCURACOES_CONSULTA_PROCESSO_QUERY: `${Constants.SERVER_URL}/procuracao/consulta_processo`,
    PROCURACOES_CONSULTA_ADVOGADO_QUERY: `${Constants.SERVER_URL}/procuracao/consulta_usuario_advogado`,
    PROCURACOE_SALVAR: `${Constants.SERVER_URL}/procuracao/salvar`,

    GET_LIST_CARREGASTATUS: `${Constants.SERVER_URL}/contrato/carregar_tipo_status`,
    CONTRATOS_QUERY: `${Constants.SERVER_URL}/contrato/consultar`,
    CONTRATO_DETAIL: `${Constants.SERVER_URL}/contrato`,
    CONTRATO_SAVE: `${Constants.SERVER_URL}/contrato/salvar`,
    
    RECLAMACOS_QUERY: `${Constants.SERVER_URL}/reclamacao/consulta_reclamacao`,
    RECLAMACO_DETAIL: `${Constants.SERVER_URL}/reclamacao`,
    RECLAMACO_SAVE: `${Constants.SERVER_URL}/reclamacao`,

    PROCESS_LIST_QUERY: `${Constants.SERVER_URL}/lista_processos`,
    PROCESS_LIST_RECEIPT_EXCUTE: `${Constants.SERVER_URL}/lista_processo/recepcao_processo`,
    PROCESS_LIST_RECEIPT_ATTACHFILE: `${Constants.SERVER_URL}/lista_processo/recepcao_processo/novoAnexo`,
    PROCESS_LIST_RECEIPT_NEWNOTE: `${Constants.SERVER_URL}/lista_processo/recepcao_processo/novaNota`,
    PROCESS_LIST_RECEIPT: `${Constants.SERVER_URL}/lista_processo/recepciona_processo`,
    PROCESS_LIST_ANALYSIS_EXCUTE: `${Constants.SERVER_URL}/lista_processo/analise_processo`,
    PROCESS_LIST_ANALYSIS_ATTACHFILE: `${Constants.SERVER_URL}/lista_processo/analise_processo/novoAnexo`,
    PROCESS_LIST_ANALYSIS_NEWNOTE: `${Constants.SERVER_URL}/lista_processo/analise_processo/novaNota`,
    PROCESS_LIST_ANALYSIS_GET_SETORS: `${Constants.SERVER_URL}/lista_processo/analise_processo/carregaSetores`,
    PROCESS_LIST_ANALYSIS: `${Constants.SERVER_URL}/lista_processo/analise_processo/encaminha_processo`,

    JULG_CONTROL_LIST: `${Constants.SERVER_URL}/controle_julgamento`,
    JULG_CONTROL_DECIDE_DETAIL: `${Constants.SERVER_URL}/controle_julgamento/proferir_decisao`,
    JULG_CONTROL_ATTACHFILE: `${Constants.SERVER_URL}/controle_julgamento/novoAnexo`,
    JULG_CONTROL_NEWNOTE: `${Constants.SERVER_URL}/controle_julgamento/novaNota`,
    GET_TIPOSLIST_DECISAO: `${Constants.SERVER_URL}/controle_julgamento/carregar_lista_decisao`,
    GET_TIPOSLIST_OBRIGACAO: `${Constants.SERVER_URL}/controle_julgamento/carregar_acao_executar`,
    GET_TIPOSLIST_AOEXECUTAR: `${Constants.SERVER_URL}/controle_julgamento/carregar_acao_tipo_executar`,
    JULG_CONTROL_PROCESS_SAVE: `${Constants.SERVER_URL}/controle_julgamento/proferir_decisao`,

    SYSTEM_QUERY: `${Constants.SERVER_URL}/controle_sistema`,
    SYSTEM_REMOVE: `${Constants.SERVER_URL}/controle_sistema/remove`,
    SYSTEM_SAVE: `${Constants.SERVER_URL}/controle_sistema/create`,

    APPLICATION_GET_SYSTEM: `${Constants.SERVER_URL}/controle_aplicacao`,
    APPLICATION_QUERY: `${Constants.SERVER_URL}/controle_aplicacao`,
    APPLICATION_DELETE: `${Constants.SERVER_URL}/controle_aplicacao/remove`,
    APPLICATION_CREATE_GET_SYSTEM: `${Constants.SERVER_URL}/controle_aplicacao/create/lista_sistemas`,
    APPLICATION_CREATE_GET_MSTAPP: `${Constants.SERVER_URL}/controle_aplicacao/create/lista_aplicacoes`,
    APPLICATION_SAVE: `${Constants.SERVER_URL}/controle_aplicacao/create`,


    POSITION_QUERY: `${Constants.SERVER_URL}/controle_cargos`,
    POSITION_REMOVE: `${Constants.SERVER_URL}/controle_cargos/remove`,
    POSITION_SAVE: `${Constants.SERVER_URL}/controle_cargos/create`,
    POSITION_CREATE_GET_PROFILE: `${Constants.SERVER_URL}/controle_cargos/create/lista_perfis`,
    POSITION_SAVE: `${Constants.SERVER_URL}/controle_cargos/create`,


    PROFILE_QUERY: `${Constants.SERVER_URL}/controle_perfis`,
    PROFILE_REMOVE: `${Constants.SERVER_URL}/controle_perfis/remove`,
    PROFILE_CREATE_GET_SYSTEM: `${Constants.SERVER_URL}/controle_perfis/carregar_lista_sistema`,
    PROFILE_CREATE_GET_APPLICATION: `${Constants.SERVER_URL}/controle_perfis/carregar_lista_aplicacoes`,
    PROFILE_SAVE: `${Constants.SERVER_URL}/controle_perfis`,


    UNIT_QUERY: `${Constants.SERVER_URL}/controle_unidades`,
    UNIT_REMOVE: `${Constants.SERVER_URL}/controle_unidades/remove`,
    UNIT_CREATE_GET_MASTERUNITS: `${Constants.SERVER_URL}/controle_unidades/create/lista_unidades`,
    UNIT_SAVE: `${Constants.SERVER_URL}/controle_unidades`,


    USER_SEARCH_GET_UNIT: `${Constants.SERVER_URL}/controle_usuarios/lista_unidades`,
    USER_SEARCH_GET_PROFILE: `${Constants.SERVER_URL}/controle_usuarios/lista_perfis`,
    USER_QUERY: `${Constants.SERVER_URL}/usuario/list`,
    USER_SET_NEW_PASSWORD: `${Constants.SERVER_URL}/controle_usuarios/generatenewpassword`,
    USER_SET_BLOCK: `${Constants.SERVER_URL}/controle_usuarios/blockuser`,
    USER_SET_INACTIVE: `${Constants.SERVER_URL}/controle_usuarios/inactivate`,
    USER_GET_DETAILS: `${Constants.SERVER_URL}/controle_usuarios/carrega_detalhe`,
    USER_SAVE_GET_UNITS: `${Constants.SERVER_URL}/controle_usuarios/lista_unidades`,
    USER_SAVE_GET_PROFILES: `${Constants.SERVER_URL}/controle_usuarios/lista_perfis`,
    USER_SAVE_DELETE_PROFILE: `${Constants.SERVER_URL}/controle_usuarios/removeprofile`,
    USER_SAVE_DELETE_UNIT: `${Constants.SERVER_URL}/controle_usuarios/removeunit`,
    
    // UNIT_REMOVE: `${Constants.SERVER_URL}/controle_unidades/remove`,
    // UNIT_CREATE_GET_MASTERUNITS: `${Constants.SERVER_URL}/controle_unidades/create/lista_unidades`,
    // UNIT_SAVE: `${Constants.SERVER_URL}/controle_unidades`,

    



}
