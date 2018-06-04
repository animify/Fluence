import React, { Fragment } from 'react';
import Nav from '../containers/Nav';
import SignUpForm from '../containers/SignUpForm';
import { Auth } from '../Api';

const SignUpPage = () => (
    <Fragment>
        <Nav />
        <div className="layout">
            <div className="container">
                <h2>Create Account</h2>
                <main>
                    <SignUpForm onSubmit={Auth.signUp} />
                </main>
            </div>
        </div>
    </Fragment>
);

export default SignUpPage;
