import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Zap, MapPin } from 'react-feather';
import NavLink from './NavLink';
import { Pages } from '../store/actions';

const Sidebar = () => (
    <Fragment>
        <header>
            <div className="menu">
                <div className="left">
                    <span>
                        Breadcrumb
                    </span>
                </div>
                <div className="right">
                    <Link to={Pages.NEW_IDEA} role="presentation" className="button base small">Post Idea</Link>
                </div>
            </div>
        </header>

        <aside className="sidenav">
            <ul className="list">
                <NavLink page={Pages.IDEAS}><Zap size={24} /></NavLink>
                <NavLink page={Pages.ROADMAP}><MapPin size={24} /></NavLink>
            </ul>
            <div className="account">
                <Link to={Pages.ACCOUNT} role="presentation">
                    <img src="https://cdn.dribbble.com/users/276704/screenshots/4637700/dribbbleshot.png" alt="Profile" />
                </Link>
            </div>
        </aside>
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

