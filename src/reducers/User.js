import {
    SIGNIN_USER_SUCCESS,
    SIGNOUT_USER_SUCCESS,
    SIGNUP_USER_SUCCESS,
} from 'constants/ActionTypes';

import Store from 'util/Store'

const INIT_STATE = {
    authUser: Store.get('auth_user'),
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SIGNUP_USER_SUCCESS: {
            return {
                ...state,
                is_signup: true,
            }
        }
        
        case SIGNIN_USER_SUCCESS: {
            return {
                ...state,
                authUser: action.payload
            }
        }
        
        case SIGNOUT_USER_SUCCESS: {
            return {
                ...state,
                authUser: null,
            }
        }
        default:
            return state;
    }
}
