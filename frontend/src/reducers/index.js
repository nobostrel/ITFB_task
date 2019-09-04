import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { MainReducer } from './MainReducer';

export const rootReducer = history => combineReducers({
    router: connectRouter(history),
    Data: MainReducer
  });