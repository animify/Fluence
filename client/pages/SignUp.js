import React, { Fragment } from 'react';
import Nav from '../containers/Nav';
import SignUpForm from '../containers/SignUpForm';
import showResults from '../modules/showResults';

const SignUp = () => (
    <Fragment>
        <Nav />
        <div className="layout">
            <div className="container">
                <h2>Create Account</h2>
                <main>
                    <SignUpForm onSubmit={showResults} />
                </main>
            </div>
        </div>
    </Fragment>
);

export default SignUp;
