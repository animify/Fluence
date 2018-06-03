import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavButton = ({ active, children, page }) => (
    <li className={active ? 'active item' : 'item'}>
        <Link to={page} role="presentation">{children}</Link>
    </li>
);

NavButton.propTypes = {
    active: PropTypes.bool.isRequired,
    page: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default NavButton;
