const axios = require('axios');
import { takeLatest, put } from 'redux-saga/effects';
import { requestFailureAction, requestSuccessAction } from '../actions/index';
import { SEND_REQUEST } from '../constants/index';

function* getData(action) {
    try {
        const response = yield axios.get(action.url);
        yield put(requestSuccessAction(response.status, response.data));
    } catch (error) {
        yield put(requestFailureAction(response.status, response.statusText));
    }
}

export function* requestsWatcher() {
    yield takeLatest(SEND_REQUEST, getData);
}