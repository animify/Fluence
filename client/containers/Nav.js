import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import NavLink from './NavLink';
import { PageRoutes } from '../store/actions';

const Nav = () => (
    <header>
        <div className="container">
            <ul className="menu horizontal">
                <NavLink page={PageRoutes.IDEAS}>Fluence</NavLink>
                <div className="float-right">
                    <NavLink page={PageRoutes.IDEAS}>Ideas</NavLink>
                    <NavAccount />
                </div>
            </ul>
        </div>
    </header>
);

let NavAccount = ({ account }) => (
    account == null ? (
        <Fragment>
            <NavLink page={PageRoutes.SIGN_IN}>Sign In</NavLink>
            <NavLink page={PageRoutes.SIGN_UP}>Create Account</NavLink>
        </Fragment>
    ) : (
            <NavLink page={PageRoutes.ACCOUNT}>{account.name}</NavLink>
        )
);

const mapStateToProps = state => ({
    account: state.account
});

NavAccount = connect(
    mapStateToProps
)(NavAccount);


export default Nav;

