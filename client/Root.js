import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import request from './modules/Request';
import History from './modules/History';
import { PageRoutes, setAccount } from './store/actions';
import AuthedRoute from './components/AuthedRoute';
import store from './store';
import { Auth } from './Api';
import {
    NewIdeaPage,
    IdeaPage,
    IdeasPage,
    SignUpPage,
    SignInPage,
    LogoutPage,
    NotFoundPage
} from './pages';

if (Auth.isUserAuthenticated()) {
    request().get('/api/account')
        .then((response) => {
            console.log('got account', response.data);
            store.dispatch(setAccount(response.data.user));
        })
        .catch(() => {
        });
}

const Root = () => (
    <Provider store={store}>
        <ConnectedRouter history={History}>
            <Switch>
                <AuthedRoute path={PageRoutes.IDEAS} exact component={IdeasPage} />
                <AuthedRoute path={PageRoutes.NEW_IDEA} component={NewIdeaPage} />
                <AuthedRoute path={PageRoutes.IDEA} component={IdeaPage} />
                <Route path={PageRoutes.SIGN_UP} component={SignUpPage} />
                <Route path={PageRoutes.SIGN_IN} component={SignInPage} />
                <Route path={PageRoutes.LOGOUT} component={LogoutPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </ConnectedRouter>
    </Provider>
);

export default Root;
