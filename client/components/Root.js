import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import History from '../modules/History';
import { Pages, setAccount } from '../store/actions';
import AuthedRoute from './AuthedRoute';
import request from '../modules/Request';
import store from '../store';
import { Auth } from '../Api';
import NewIdea from '../pages/NewIdea';
import IdeaPage from '../pages/IdeaPage';
import IdeasPage from '../pages/IdeasPage';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import LogoutPage from '../pages/LogoutPage';
import NotFound from '../pages/NotFound';

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
                <AuthedRoute path={Pages.IDEAS} exact component={IdeasPage} />
                <AuthedRoute path={Pages.NEW_IDEA} component={NewIdea} />
                <AuthedRoute path={Pages.IDEA} component={IdeaPage} />
                <Route path={Pages.SIGN_UP} component={SignUp} />
                <Route path={Pages.SIGN_IN} component={SignIn} />
                <Route path={Pages.LOGOUT} component={LogoutPage} />
                <Route path="*" component={NotFound} />
            </Switch>
        </ConnectedRouter>
    </Provider>
);

export default Root;
