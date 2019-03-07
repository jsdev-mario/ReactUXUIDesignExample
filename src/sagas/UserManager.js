import { all, call, fork, put,takeEvery } from 'redux-saga/effects';

import {
    GET_USER_DETAILS,
} from 'constants/ActionTypes';


import {
    getUserDetailsSuccess,
} from 'actions';


import CommonFunc from 'util/CommonFunc'
import API_URL from 'constants/ApiUrl'

const axios = require('axios');

const getUserDetailsRequest = async(params) => {
    return await axios.get(`${API_URL.USER_GET_DETAILS}/${params.idUsuario}`)
        .then(data => data.data)
        .catch(error => {throw error.response.data});
}


function* getUserDetails({payload}) {
    try {
        const response = yield call(getUserDetailsRequest, payload);
        if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0){
            yield put(getUserDetailsSuccess(response.result[0].items));
        }        
    } catch (error) {
        console.log('getTipos_saga', error);
    }
}



export function* getUserDetailsData() {
    yield takeEvery(GET_USER_DETAILS, getUserDetails);
}


export default function* rootSaga() {
    yield all([
        fork(getUserDetailsData),
    ]);
}