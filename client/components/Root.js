import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import History from '../modules/History';
import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={History}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
