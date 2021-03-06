import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Main } from './components/index.js';
import './index.scss';

const history = createBrowserHistory();

ReactDOM.render( 
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Main />
        </ConnectedRouter>
    </Provider>,
    document.querySelector('.root')
);