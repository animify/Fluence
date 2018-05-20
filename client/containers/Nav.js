import React from 'react';
import NavLink from './NavLink';
import { Pages } from '../store/actions';

const Nav = () => (
    <header>
        <ul className="menu horizontal">
            <NavLink page={Pages.IDEAS}>
                Ideas
            </NavLink>
            <NavLink page={Pages.POST_NEW_IDEA}>
                Post New Idea
            </NavLink>
        </ul>
    </header>
);

export default Nav;
