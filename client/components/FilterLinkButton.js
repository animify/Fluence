import React from 'react';
import PropTypes from 'prop-types';

const FilterLinkButton = ({ active, children, onClick }) => (
    <button
        className={active ? 'button selected' : 'button'}
        onClick={onClick}
    >
        {children}
    </button>
);

FilterLinkButton.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FilterLinkButton;
