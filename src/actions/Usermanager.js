import {
    GET_USER_DETAILS, 
    GET_USER_DETAILS_SUCCESS,
} from 'constants/ActionTypes';

export function getUserDetails(params) {
    return {
        type: GET_USER_DETAILS,
        payload: params
    };
}
export function getUserDetailsSuccess(data) {
    return {
        type: GET_USER_DETAILS_SUCCESS,
        payload: data,
    };
}
