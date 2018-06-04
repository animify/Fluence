import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import NavLink from './NavLink';
import { PageRoutes } from '../store/actions';

const Sidebar = () => (
    <Fragment>
        <header>
            <div className="container">
                <ul className="menu horizontal">
                    <div>
                        <NavLink page={PageRoutes.HOME}>Fluence</NavLink>
                        <NavLink page={PageRoutes.IDEAS}>Ideas</NavLink>
                        <NavLink page={PageRoutes.ROADMAP}>Roadmap</NavLink>
                    </div>
                    <div className="float-right">
                        <NavLink page={PageRoutes.NEW_IDEA}><span className="button base small">Post Idea</span></NavLink>
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


export default Sidebar;

