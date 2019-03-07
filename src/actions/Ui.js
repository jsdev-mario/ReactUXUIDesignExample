import {
    HIDE_MESSAGE,
    INIT_URL,
    ON_HIDE_LOADER,
    ON_SHOW_LOADER,
    SHOW_MESSAGE,
} from 'constants/ActionTypes';

export const showMessage = (message) => {
    return {
        type: SHOW_MESSAGE,
        payload: message
    };
};

export const setInitUrl = (url) => {
    return {
        type: INIT_URL,
        payload: url
    };
};
export const showLoader = () => {
    return {
        type: ON_SHOW_LOADER,
    };
};

export const hideMessage = () => {
    return {
        type: HIDE_MESSAGE,
    };
};
export const hideLoader = () => {
    return {
        type: ON_HIDE_LOADER,
    };
};
