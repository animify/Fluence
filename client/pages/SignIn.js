import React, { Fragment } from 'react';
import Nav from '../containers/Nav';
import SignInForm from '../containers/SignInForm';
import showResults from '../modules/showResults';

const SignUp = () => (
    <Fragment>
        <Nav />
        <div className="layout">
            <div className="container">
                <h2>Sign In</h2>
                <main>
                    <SignInForm onSubmit={showResults} />
                </main>
            </div>
        </div>
    </Fragment>
);

export default SignUp;
