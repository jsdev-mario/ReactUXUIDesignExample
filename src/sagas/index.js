import {all} from 'redux-saga/effects';
import authSagas from './Auth';
import commonDataSaga from './CommonData';
import userManagerSaga from './UserManager';



export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        commonDataSaga(),
        userManagerSaga(),
    ]);
}
