import { SEND_REQUEST, REQUEST_FAILURE, REQUEST_SUCCESS } from '../constants/index';

export function MainReducer(state = null, action) {
    switch (action.type) {
        case SEND_REQUEST:
            return {...state, requestSent: true }
        case REQUEST_SUCCESS:
            return {...state, photos: action.data.slice(0, 20), status: action.status, statusText: 'OK', requestSent: false }
        case REQUEST_FAILURE:
            return {...state, status: action.status, statusText: action.text, requestSent: false }

        default:
            return state;
    }
  }