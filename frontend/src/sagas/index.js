import { all } from 'redux-saga/effects';
import { requestsWatcher } from './API';

export function* rootSaga() {
    yield all([
        requestsWatcher()
    ])
}
