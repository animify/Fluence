import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import NavLink from './NavLink';
import { Pages } from '../store/actions';

const Nav = () => (
    <header>
        <div className="container">
            <ul className="menu horizontal">
                <NavLink page={Pages.IDEAS}>Fluence</NavLink>
                <div className="float-right">
                    <NavLink page={Pages.IDEAS}>Ideas</NavLink>
                    <NavLink page={Pages.POST_NEW_IDEA}>Post Idea</NavLink>
                    <NavAccount />
                </div>
            </ul>
        </div>
    </header>
);

let NavAccount = ({ account }) => (
    account == null ? (
        <Fragment>
            <NavLink page={Pages.SIGN_IN}>Sign In</NavLink>
            <NavLink page={Pages.SIGN_UP}>Create Account</NavLink>
        </Fragment>
    ) : (
            <NavLink page={Pages.ACCOUNT}>{account.name}</NavLink>
        )
);

const mapStateToProps = state => ({
    account: state.account
});

NavAccount = connect(
    mapStateToProps
)(NavAccount);


export default Nav;

