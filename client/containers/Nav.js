import React from 'react';
import NavLink from './NavLink';
import { Pages } from '../store/actions';

const Nav = () => (
    <header>
        <div className="container">
            <ul className="menu horizontal">
                <NavLink page={Pages.IDEAS}>Fluence</NavLink>
                <div className="float-right">
                    <NavLink page={Pages.IDEAS}>Ideas</NavLink>
                    <NavLink page={Pages.POST_NEW_IDEA}>Post New Idea</NavLink>
                    <NavLink page={Pages.SIGN_IN}>Sign In</NavLink>
                    <NavLink page={Pages.CREATE_ACCOUNT}>Create an Account</NavLink>
                </div>
            </ul>
        </div>
    </header>
);

export default Nav;
