import {
    GET_UFS,
    GET_UFS_SUCCESS,
    GET_TIPOS,
    GET_TIPOS_SUCCESS,
    GET_CIDADES,
    GET_CIDADES_SUCCESS,
    GET_TIPOSLIST_DOCUMENT,
    GET_TIPOSLIST_DOCUMENT_SUCCESS,
    GET_FORMATLIST_DOCUMENT,
    GET_FORMATLIST_DOCUMENT_SUCCESS,
    GET_TIPOSLIST_FLOW,
    GET_TIPOSLIST_FLOW_SUCCESS,
    GET_TIPOSLIST_SETOR,
    GET_TIPOSLIST_SETOR_SUCCESS,
    GET_LIST_PROCMANPART,
    GET_LIST_PROCMANPART_SUCCESS,
    GET_LIST_PROCMANREGION,
    GET_LIST_PROCMANREGION_SUCCESS,
    GET_LIST_PROCMANPART_DOCTIPO,
    GET_LIST_PROCMANPART_DOCTIPO_SUCCESS,
    GET_LIST_PROCMANCATEGORIAACTION,
    GET_LIST_PROCMANCATEGORIAACTION_SUCCESS,
    GET_LIST_PROCMANORGAO,
    GET_LIST_PROCMANORGAO_SUCCESS,
    GET_LIST_PROCMANPROBPERDA,
    GET_LIST_PROCMANPROBPERDA_SUCCESS,
    GET_LIST_PROCMANTIPOORGAO,
    GET_LIST_PROCMANTIPOORGAO_SUCCESS,
    GET_LIST_PROCMANBANDEIRA,
    GET_LIST_PROCMANBANDEIRA_SUCCESS,
    GET_LIST_CARREGASTATUS,
    GET_LIST_CARREGASTATUS_SUCCESS,
    GET_TIPOSLIST_DECISAO,
    GET_TIPOSLIST_DECISAO_SUCCESS,
    GET_TIPOSLIST_OBRIGACAO,
    GET_TIPOSLIST_OBRIGACAO_SUCCESS,
    GET_TIPOSLIST_AOEXECUTAR,
    GET_TIPOSLIST_AOEXECUTAR_SUCCESS,
    GET_LIST_SYSTEM,
    GET_LIST_SYSTEM_SUCCESS,

} from 'constants/ActionTypes';

export function getTipos() {
    return {
        type: GET_TIPOS,
    };
}
export function getTiposSuccess(data) {
    return {
        type: GET_TIPOS_SUCCESS,
        payload: data,
    };
}

export function getUfs() {
    return {
        type: GET_UFS,
    };
}
export function getUfsSuccess(data) {
    return {
        type: GET_UFS_SUCCESS,
        payload: data,
    };
}

export function getCidades() {
    return {
        type: GET_CIDADES,
    };
}
export function getCidadesSuccess(data) {
    return {
        type: GET_CIDADES_SUCCESS,
        payload: data,
    };
}


export function getTiposListDocument() {
    return {
        type: GET_TIPOSLIST_DOCUMENT,
    };
}
export function getTiposListDocumentSuccess(data) {
    return {
        type: GET_TIPOSLIST_DOCUMENT_SUCCESS,
        payload: data,
    };
}

export function getFormatListDocument() {
    return {
        type: GET_FORMATLIST_DOCUMENT,
    };
}
export function getFormatListDocumentSuccess(data) {
    return {
        type: GET_FORMATLIST_DOCUMENT_SUCCESS,
        payload: data,
    };
}

export function getTiposListFlow() {
    return {
        type: GET_TIPOSLIST_FLOW,
    };
}
export function getTiposListFlowSuccess(data) {
    return {
        type: GET_TIPOSLIST_FLOW_SUCCESS,
        payload: data,
    };
}
export function getTiposListSetor() {
    return {
        type: GET_TIPOSLIST_SETOR,
    };
}
export function getTiposListSetorSuccess(data) {
    return {
        type: GET_TIPOSLIST_SETOR_SUCCESS,
        payload: data,
    };
}



export function getListProcManRegion() {
    return {
        type: GET_LIST_PROCMANREGION,
    }
}
export function getListProceManRegionSuccess(data) {
    return {
        type: GET_LIST_PROCMANREGION_SUCCESS,
        payload: data
    }
}
export function getListProcManPart() {
    return {
        type: GET_LIST_PROCMANPART,
    }
}
export function getListProceManPartSuccess(data) {
    return {
        type: GET_LIST_PROCMANPART_SUCCESS,
        payload: data
    }
}
export function getListProcManPartDocTipo() {
    return {
        type: GET_LIST_PROCMANPART_DOCTIPO,
    }
}
export function getListProcManPartDocTipoSuccess(data) {
    return {
        type: GET_LIST_PROCMANPART_DOCTIPO_SUCCESS,
        payload: data
    }
}
export function getListProcManCategoriaAction() {
    return {
        type: GET_LIST_PROCMANCATEGORIAACTION,
    }
}
export function getListProcManCategoriaActionSuccess(data) {
    return {
        type: GET_LIST_PROCMANCATEGORIAACTION_SUCCESS,
        payload: data
    }
}
export function getListProcManOrgao() {
    return {
        type: GET_LIST_PROCMANORGAO,
    }
}
export function getListProcManOrgaoSuccess(data) {
    return {
        type: GET_LIST_PROCMANORGAO_SUCCESS,
        payload: data
    }
}
export function getListProcManProbPerda() {
    return {
        type: GET_LIST_PROCMANPROBPERDA,
    }
}
export function getListProcManProbPerdaSuccess(data) {
    return {
        type: GET_LIST_PROCMANPROBPERDA_SUCCESS,
        payload: data
    }
}
export function getListProcManTipoOrgao() {
    return {
        type: GET_LIST_PROCMANTIPOORGAO,
    }
}
export function getListProcManTipoOrgaoSuccess(data) {
    return {
        type: GET_LIST_PROCMANTIPOORGAO_SUCCESS,
        payload: data
    }
}
export function getListProcManTipoBandeira() {
    return {
        type: GET_LIST_PROCMANBANDEIRA,
    }
}
export function getListProcManTipoBandeiraSuccess(data) {
    return {
        type: GET_LIST_PROCMANBANDEIRA_SUCCESS,
        payload: data
    }
}
export function getListCarregaStatus() {
    return {
        type: GET_LIST_CARREGASTATUS,
    }
}
export function getListCarregaStatusSuccess(data) {
    return {
        type: GET_LIST_CARREGASTATUS_SUCCESS,
        payload: data
    }
}




export function getTiposListDecisao() {
    return {
        type: GET_TIPOSLIST_DECISAO,
    };
}
export function getTiposListDecisaoSuccess(data) {
    return {
        type: GET_TIPOSLIST_DECISAO_SUCCESS,
        payload: data,
    };
}
export function getTiposListObrigacao() {
    return {
        type: GET_TIPOSLIST_OBRIGACAO,
    };
}
export function getTiposListObrigacaoSuccess(data) {
    return {
        type: GET_TIPOSLIST_OBRIGACAO_SUCCESS,
        payload: data,
    };
}
export function getTiposListAoexecutar() {
    return {
        type: GET_TIPOSLIST_AOEXECUTAR,
    };
}
export function getTiposListAoexecutarSuccess(data) {
    return {
        type: GET_TIPOSLIST_AOEXECUTAR_SUCCESS,
        payload: data,
    };
}



export function getListSystem() {
    return {
        type: GET_LIST_SYSTEM,
    };
}
export function getListSystemSuccess(data) {
    return {
        type: GET_LIST_SYSTEM_SUCCESS,
        payload: data,
    };
}

