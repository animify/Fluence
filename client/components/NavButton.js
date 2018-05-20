import React from 'react';
import PropTypes from 'prop-types';

const NavButton = ({ active, children, onClick }) => (
    <li className={active ? 'item active' : 'item'}>
        <a role="presentation" onClick={onClick}>{children}</a>
    </li>
);

NavButton.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default NavButton;
