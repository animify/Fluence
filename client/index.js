import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import '@fluence-stylekit/kit';
import store from './store';
import Root from './components/Root';


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
