import React, { Fragment } from 'react';
import Nav from '../containers/Nav';
import SignInForm from '../containers/SignInForm';
import { Auth } from '../Api';

const SignInPage = () => (
    <Fragment>
        <Nav />
        <div className="layout">
            <div className="container">
                <h2>Sign In</h2>
                <main>
                    <SignInForm onSubmit={Auth.signIn} />
                </main>
            </div>
        </div>
    </Fragment>
);

export default SignInPage;
