import React from 'react';
import PropTypes from 'prop-types';

const FilterLinkButton = ({ active, children, onClick }) => (
    <li className={active ? 'selected' : undefined}>
        <a role="presentation" onClick={onClick}>
            {children}
        </a>
    </li>
);

FilterLinkButton.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FilterLinkButton;
