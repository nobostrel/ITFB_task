import { 
    SEND_REQUEST, 
    REQUEST_SUCCESS, 
    REQUEST_FAILURE
 } from '../constants/index';

export const sendRequestAction = url => {
    return {
        type: SEND_REQUEST,
        url: url
    }
}

export const requestSuccessAction = (status, data) => {
    return {
        type: REQUEST_SUCCESS,
        status: status,
        data: data
    }
}

export const requestFailureAction = (status, text) => {
    return {
        type: REQUEST_FAILURE,
        status: status,
        text: text
    }
}