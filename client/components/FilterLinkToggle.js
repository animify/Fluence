import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from 'react-feather';

const FilterLinkToggle = ({ filterName }) => (
    <a className="toggle">{filterName} <ChevronDown size={14} /></a>
);

FilterLinkToggle.propTypes = {
    filterName: PropTypes.string.isRequired
};

export default FilterLinkToggle;
