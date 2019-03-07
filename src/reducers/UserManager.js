import {
    GET_USER_DETAILS_SUCCESS,
} from 'constants/ActionTypes';

const INIT_STATE = {
    user_details: undefined,
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_USER_DETAILS_SUCCESS:
            return {
                ...state,
                user_details: action.payload
            };
        
        default:
            return state;
    }
}
