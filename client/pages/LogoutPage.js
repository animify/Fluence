import React, { Fragment } from 'react';
import Nav from '../containers/Nav';
import { Auth } from '../Api';
import History from '../modules/History';

const LogoutPage = () => {
    Auth.deauthenticateUser();
    History.replace('/');

    return (
        <Fragment>
            <Nav />
            <div className="layout">
                <div className="container">
                    <h2>Logging out</h2>
                </div>
            </div>
        </Fragment>
    );
};

export default LogoutPage;
