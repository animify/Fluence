import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import History from '../modules/History';
import App from '../pages/App';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import { Pages } from '../store/actions';

const Root = ({ store }) => (
    <Provider store={store}>
        <ConnectedRouter history={History}>
            <Switch>
                <Route path={Pages.IDEAS} exact component={App} />
                <Route path={Pages.SIGN_UP} component={SignUp} />
                <Route path={Pages.SIGN_IN} component={SignIn} />
            </Switch>
        </ConnectedRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
