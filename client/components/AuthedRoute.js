import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router';
import { Auth } from '../Api';
import { Pages } from '../store/actions';

const AuthedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            Auth.isUserAuthenticated()
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: Pages.SIGN_IN
                }}
                />
        )}
    />
);

AuthedRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default AuthedRoute;
