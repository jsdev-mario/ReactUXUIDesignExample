import { all, call, fork, put,takeEvery } from 'redux-saga/effects';

import {
    GET_UFS,
    GET_TIPOS,
    GET_CIDADES,
    GET_TIPOSLIST_DOCUMENT,
    GET_FORMATLIST_DOCUMENT,
    GET_TIPOSLIST_FLOW,
    GET_TIPOSLIST_SETOR,
    GET_LIST_PROCMANPART,
    GET_LIST_PROCMANREGION,
    GET_LIST_PROCMANCATEGORIAACTION,
    GET_LIST_PROCMANORGAO,
    GET_LIST_PROCMANPROBPERDA,
    GET_LIST_PROCMANTIPOORGAO,
    GET_LIST_PROCMANBANDEIRA,
    GET_LIST_PROCMANPART_DOCTIPO,
    GET_LIST_CARREGASTATUS,
    GET_TIPOSLIST_DECISAO,
    GET_TIPOSLIST_OBRIGACAO,
    GET_TIPOSLIST_AOEXECUTAR,
    GET_LIST_SYSTEM,
} from 'constants/ActionTypes';


import {
    getTiposSuccess,
    getUfsSuccess,
    getCidadesSuccess,
    getTiposListDocumentSuccess,
    getFormatListDocumentSuccess,
    getTiposListFlowSuccess,
    getTiposListSetorSuccess,
    getListProceManRegionSuccess,
    getListProcManCategoriaActionSuccess,
    getListProcManOrgaoSuccess,
    getListProcManProbPerdaSuccess,
    getListProcManTipoOrgaoSuccess,
    getListProcManTipoBandeiraSuccess,
    getListProceManPartSuccess,
    getListProcManPartDocTipoSuccess,
    getListCarregaStatusSuccess,
    getTiposListDecisaoSuccess,
    getTiposListObrigacaoSuccess,
    getTiposListAoexecutarSuccess,
    getListSystemSuccess,
} from 'actions';


import CommonFunc from 'util/CommonFunc'
import API_URL from 'constants/ApiUrl'

const axios = require('axios');

const getTiposRequest = async() => {
    return await axios.post(API_URL.GET_TIPOS, {})
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getUfsRequest = async() => {
    return await axios.post(API_URL.GET_UFS, {})
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getCidadesRequest = async(idEstado) => {
    return await axios.post(API_URL.GET_CIDADES, {codigo: idEstado})
    .then(data => data.data)
    .catch(error => {throw error.response.data});
}

const getTiposListDocumentRequest = async() => {
    return await axios.post(API_URL.GET_TIPOSLIST_DOCUMENT, {})
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getFormatListDocumentRequest = async() => {
    return await axios.post(API_URL.GET_FORMATLIST_DOCUMENT, {})
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getTiposListFlowRequest = async() => {
    return await axios.post(API_URL.GET_TIPOSLIST_FLOW, {})
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getTiposListSetorRequest = async() => {
    return await axios.post(API_URL.GET_TIPOSLIST_SETOR, {
        valor : ''
    })
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}

const getListProceRegionRequest = async() => {
    return await axios.get(API_URL.GET_LIST_PROCMANREGION)
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getListProceCategoriaActionRequest = async() => {
    return await axios.get(API_URL.GET_LIST_PROCMANCATEGORIAACTION)
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getListProceOrgaoRequest = async() => {
    return await axios.get(API_URL.GET_LIST_PROCMANORGAO)
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getListProceProbPerdaRequest = async() => {
    return await axios.get(API_URL.GET_LIST_PROCMANPROBPERDA)
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getListProceTipoOrgaoRequest = async() => {
    return await axios.get(API_URL.GET_LIST_PROCMANTIPOORGAO)
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getListProceTipoBandeiraRequest = async() => {
    return await axios.get(API_URL.GET_LIST_PROCMANTIPOBANDEIRA)
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getListProcePartRequest = async() => {
    return await axios.get(API_URL.GET_LIST_PROCMANPART)
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getListProcePartDocTipoRequest = async() => {
    return await axios.get(API_URL.GET_LIST_PROCMANPART_DOCTIPO)
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getListCarregaStatusRequest = async() => {
    return await axios.get(API_URL.GET_LIST_CARREGASTATUS)
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getTiposListDecisaoRequest = async() => {
    return await axios.get(API_URL.GET_TIPOSLIST_DECISAO)
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getTiposListObrigacaoRequest = async() => {
    return await axios.get(API_URL.GET_TIPOSLIST_OBRIGACAO)
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getTiposListAoexecutarRequest = async() => {
    return await axios.get(API_URL.GET_TIPOSLIST_AOEXECUTAR)
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}
const getListSystemRequest = async() => {
    return await axios.get(API_URL.PROFILE_CREATE_GET_SYSTEM)
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}



function* getTipos() {
    try {
        const response = yield call(getTiposRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getTiposSuccess(response.result));
        }        
    } catch (error) {
        console.log('getTipos_saga', error);
    }
}

function* getUfs() {
    try {
        const response = yield call(getUfsRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getUfsSuccess(response.result));
        }
    } catch (error) {
        console.log('getUfs_saga', error);
    }
}

function* getCidades(idEstado) {
    try {
        const response = yield call(getCidadesRequest(idEstado));
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getCidadesSuccess(response.result));
        }
    } catch (error) {
        console.log('getCidades_saga', error);
    }
}
function* getTiposListDocument() {
    try {
        const response = yield call(getTiposListDocumentRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getTiposListDocumentSuccess(response.result));
        }
    } catch (error) {
        console.log('getTiposListDocuments_saga', error);
    }
}

function* getFormatListDocument() {
    try {
        const response = yield call(getFormatListDocumentRequest);

        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getFormatListDocumentSuccess(response.result));
        }
    } catch (error) {
        console.log('getFormatListDocuments_saga', error);
    }
}

function* getTiposListFlow() {
    try {
        const response = yield call(getTiposListFlowRequest);

        console.log(response);

        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getTiposListFlowSuccess(response.result));
        }
    } catch (error) {
        console.log('getTiposListFlow_saga', error);
    }
}

function* getTiposListSetor() {
    try {
        const response = yield call(getTiposListSetorRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getTiposListSetorSuccess(response.result));
        }
    } catch (error) {
        console.log('getTiposListSetor_saga', error);
    }
}
function* getListProceRegion() {
    try {
        const response = yield call(getListProceRegionRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getListProceManRegionSuccess(response.result));
        }
    } catch (error) {
        console.log('getListProceRegion_saga', error);
    }
}
function* getListProceCategoriaAction() {
    try {
        const response = yield call(getListProceCategoriaActionRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getListProcManCategoriaActionSuccess(response.result));
        }
    } catch (error) {
        console.log('getListProceCategoriaAction_saga', error);
    }
}
function* getListProceOrgao() {
    try {
        const response = yield call(getListProceOrgaoRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getListProcManOrgaoSuccess(response.result));
        }
    } catch (error) {
        console.log('getListProceOrgao_saga', error);
    }
}
function* getListProceProbPerda() {
    try {
        const response = yield call(getListProceProbPerdaRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getListProcManProbPerdaSuccess(response.result));
        }
    } catch (error) {
        console.log('getListProceProbPerda_saga', error);
    }
}
function* getListProceTipoOrgao() {
    try {
        const response = yield call(getListProceTipoOrgaoRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getListProcManTipoOrgaoSuccess(response.result));
        }
    } catch (error) {
        console.log('getListProceTipoOrga_saga', error);
    }
}
function* getListProceTipoBandeira() {
    try {
        const response = yield call(getListProceTipoBandeiraRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getListProcManTipoBandeiraSuccess(response.result));
        }
    } catch (error) {
        console.log('getListProceTipoOrga_saga', error);
    }
}

function* getListProcePart() {
    try {
        const response = yield call(getListProcePartRequest);

        console.log(response);

        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getListProceManPartSuccess(response.result));
        }
    } catch (error) {
        console.log('getListProcePart_saga', error);
    }
}

function* getListProcePartDocTipo() {
    try {
        const response = yield call(getListProcePartDocTipoRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getListProcManPartDocTipoSuccess(response.result));
        }
    } catch (error) {
        console.log('getListProcManPartDocTipo_saga', error);
    }
}
function* getListCarregaStatus() {
    try {
        const response = yield call(getListCarregaStatusRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getListCarregaStatusSuccess(response.result));
        }
    } catch (error) {
        console.log('getListCarregaStatus_saga', error);
    }
}
function* getTiposListDecisao() {
    try {
        const response = yield call(getTiposListDecisaoRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getTiposListDecisaoSuccess(response.result));
        }
    } catch (error) {
        console.log('getTiposListDocuments_saga', error);
    }
}
function* getTiposListObrigacao() {
    try {
        const response = yield call(getTiposListObrigacaoRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getTiposListObrigacaoSuccess(response.result));
        }
    } catch (error) {
        console.log('getTiposListDocuments_saga', error);
    }
}
function* getTiposListAoexecutar() {
    try {
        const response = yield call(getTiposListAoexecutarRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getTiposListAoexecutarSuccess(response.result));
        }
    } catch (error) {
        console.log('getTiposListDocuments_saga', error);
    }
}
function* getListSystem() {
    try {
        const response = yield call(getListSystemRequest);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getListSystemSuccess(response.result));
        }
    } catch (error) {
        console.log('getListSystem_saga', error);
    }
}







export function* getTiposData() {
    yield takeEvery(GET_TIPOS, getTipos);
}

export function* getUfsData() {
    yield takeEvery(GET_UFS, getUfs);
}

export function* getCidadesData() {
    yield takeEvery(GET_CIDADES, getCidades);
}

export function* getTiposListDocumentData() {
    yield takeEvery(GET_TIPOSLIST_DOCUMENT, getTiposListDocument);
}

export function* getFormatListDocumentData() {
    yield takeEvery(GET_FORMATLIST_DOCUMENT, getFormatListDocument);
}

export function* getTiposListFlowData() {
    yield takeEvery(GET_TIPOSLIST_FLOW, getTiposListFlow);
}

export function* getTiposListSetorData() {
    yield takeEvery(GET_TIPOSLIST_SETOR, getTiposListSetor);
}
export function* getListProceRegionData() {
    yield takeEvery(GET_LIST_PROCMANREGION, getListProceRegion);
}
export function* getListProceCategoriaActionData() {
    yield takeEvery(GET_LIST_PROCMANCATEGORIAACTION, getListProceCategoriaAction);
}
export function* getListProceOrgaoData() {
    yield takeEvery(GET_LIST_PROCMANORGAO, getListProceOrgao);
}
export function* getListProceProbPerdaData() {
    yield takeEvery(GET_LIST_PROCMANPROBPERDA, getListProceProbPerda);
}
export function* getListProceTipoOrgaoData() {
    yield takeEvery(GET_LIST_PROCMANTIPOORGAO, getListProceTipoOrgao);
}
export function* getListProceTipoBandeiraData() {
    yield takeEvery(GET_LIST_PROCMANBANDEIRA, getListProceTipoBandeira);
}

export function* getListProcePartData() {
    yield takeEvery(GET_LIST_PROCMANPART, getListProcePart);
}
export function* getListProcePartDocTipoData() {
    yield takeEvery(GET_LIST_PROCMANPART_DOCTIPO, getListProcePartDocTipo);
}
export function* getListCarregaStatusData() {
    yield takeEvery(GET_LIST_CARREGASTATUS, getListCarregaStatus);
}
export function* getTiposListDecisaoData() {
    yield takeEvery(GET_TIPOSLIST_DECISAO, getTiposListDecisao);
}

export function* getTiposListObrigacaoData() {
    yield takeEvery(GET_TIPOSLIST_OBRIGACAO, getTiposListObrigacao);
}

export function* getTiposListAoexecutarData() {
    yield takeEvery(GET_TIPOSLIST_AOEXECUTAR, getTiposListAoexecutar);
}
export function* getListSystemData() {
    yield takeEvery(GET_LIST_SYSTEM, getListSystem);
}






export default function* rootSaga() {
    yield all([
        fork(getTiposData),
        fork(getUfsData),
        fork(getCidadesData),
        fork(getTiposListDocumentData),
        fork(getFormatListDocumentData),
        fork(getTiposListFlowData),
        fork(getTiposListSetorData),
        fork(getListProceRegionData),
        fork(getListProceCategoriaActionData),
        fork(getListProceOrgaoData),
        fork(getListProceProbPerdaData),
        fork(getListProceTipoOrgaoData),
        fork(getListProceTipoBandeiraData),
        fork(getListProcePartData),
        fork(getListProcePartDocTipoData),
        fork(getListCarregaStatusData),
        fork(getTiposListDecisaoData),
        fork(getTiposListObrigacaoData),
        fork(getTiposListAoexecutarData),
        fork(getListSystemData),
    ]);
}