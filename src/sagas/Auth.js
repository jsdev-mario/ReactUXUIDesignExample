import { all, call, fork, put,takeEvery } from 'redux-saga/effects';

import {
    SIGNIN_USER,
    SIGNOUT_USER,
    SIGNUP_USER,
} from 'constants/ActionTypes';


import {
    showMessage,
    showLoader,
    setInitUrl,
    hideLoader,
    userSignInSuccess,
    userSignOutSuccess,
    userSignUpSuccess,
} from 'actions';


import CommonFunc from 'util/CommonFunc'
import API_URL from 'constants/ApiUrl'
import Store from 'util/Store'
const axios = require('axios');


const signUpRequest = async(param) => {
    return await axios.post(API_URL.USER_SIGNUP, param)
    .then(data => data.data)
    .catch(error => {throw error.response.data});
}

const signInRequest =  async(param) => {

    var obj = {
        login: param.name,
        senha: param.password
    };

    return await axios.post(API_URL.USER_SIGNIN, obj)
    .then(data => data.data)
    .catch(error => {throw error.response.data});
}

const signOutRequest =  () =>{
    return {}
}

function* signUp({payload}) {
    try {
        yield put(showLoader());
        const response = yield call(signUpRequest, payload);
        yield put(hideLoader());
        if (CommonFunc.isResponseSuccess(response)){
            yield put(setInitUrl('/login'));
            yield put(showMessage({
                message: response.message,
                type: 'success'
            }));    
        }else{
            yield put(showMessage({
                message: JSON.stringify(response),
                type: 'error'
            }));    
        }
    } catch (error) {
        yield put(hideLoader());
        yield put(showMessage({
            message: error.message,
            type: 'success'
        }));
    }
}

function* signIn({payload}) {
    try {
        const user = {
            id: '4567890',
            name: 'JaonMicle'
        }
        yield put(userSignInSuccess(user));
        Store.set('auth_user', user);
        // yield put(showLoader());
        // const response = yield call(signInRequest, payload);
        // yield put(hideLoader());
        // if (CommonFunc.isResponseSuccess(response)){
        //     Store.set('auth_user', response.result[0]);
        //     yield put(showMessage({
        //         message: response.message,
        //         type: 'success'
        //     }));
        //     yield put(userSignInSuccess(response.result[0]));

        // }else{
        //     yield put(showMessage({
        //         message: JSON.stringify(response),
        //         type: 'error'
        //     }));    
        // }
    } catch (error) {
        yield put(hideLoader());
        yield put(showMessage({
            message: error.message,
            type: 'error'
        }));
    }
}

function* signOut() {
    try {
        Store.remove('auth_user');
        Store.remove('token');
        yield put(userSignOutSuccess());
        
    } catch (error) {
        yield put(showMessage(error));
    }
}



export function* signUpUser() {
    yield takeEvery(SIGNUP_USER, signUp);
}

export function* signInUser() {
    yield takeEvery(SIGNIN_USER, signIn);
}

export function* signOutUser() {
    yield takeEvery(SIGNOUT_USER, signOut);
}



export default function* rootSaga() {
    yield all([
        fork(signInUser),
        fork(signUpUser),
        fork(signOutUser),
    ]);
}