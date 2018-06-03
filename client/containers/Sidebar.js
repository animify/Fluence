import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import NavLink from './NavLink';
import { Pages } from '../store/actions';

const Sidebar = () => (
    <Fragment>
        <header>
            <div className="container">
                <ul className="menu horizontal">
                    <div>
                        <NavLink page={Pages.HOME}>Fluence</NavLink>
                        <NavLink page={Pages.IDEAS}>Ideas</NavLink>
                        <NavLink page={Pages.ROADMAP}>Roadmap</NavLink>
                    </div>
                    <div className="float-right">
                        <NavLink page={Pages.NEW_IDEA}><span className="button base small">Post Idea</span></NavLink>
                        {/* <NavLink page={Pages.ACCOUNT}>
                            <div className="account">
                                <img src="https://cdn.dribbble.com/users/276704/screenshots/4637700/dribbbleshot.png" alt="Profile" />
                            </div>
                        </NavLink> */}
                    </div>
                </ul>
            </div>
        </header>
    </Fragment>
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


export default Sidebar;

