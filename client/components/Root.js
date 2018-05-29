import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import History from '../modules/History';
import App from '../pages/App';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';
import { Pages, setAccount, setIdeas } from '../store/actions';
import AuthedRoute from './AuthedRoute';
import request from '../modules/Request';
import store from '../store';
import { Auth, Ideas } from '../Api';

if (Auth.isUserAuthenticated()) {
    request().get('/api/account')
        .then((response) => {
            store.dispatch(setAccount(response.data.user));
        })
        .catch(() => {
        });

    Ideas.get().then((ideas) => {
        store.dispatch(setIdeas(ideas));
    });
}

const Root = ({ store }) => (
    <Provider store={store}>
        <ConnectedRouter history={History}>
            <Switch>
                <AuthedRoute path={Pages.IDEAS} exact component={App} />
                <Route path={Pages.SIGN_UP} component={SignUp} />
                <Route path={Pages.SIGN_IN} component={SignIn} />
                <Route path="*" component={NotFound} />
            </Switch>
        </ConnectedRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
