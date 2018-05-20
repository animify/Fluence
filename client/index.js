import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import '@fluence-stylekit/kit';
import rootReducer from './store/reducers';
import Root from './components/Root';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
