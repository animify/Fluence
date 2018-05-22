import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import '@fluence-stylekit/kit';
import History from './modules/History';
import rootReducer from './store/reducers';
import Root from './components/Root';

const middleware = routerMiddleware(History);
const enhancer = composeWithDevTools(
    applyMiddleware(middleware)
);

const store = createStore(
    rootReducer,
    enhancer
);

const initialRoot = <Root store={store} />;

const r = Component =>
    render(
        <AppContainer>
            {Component}
        </AppContainer>,
        document.getElementById('app')
    );

r(initialRoot);
if (module.hot) module.hot.accept('./components/Root', () => r(initialRoot));
