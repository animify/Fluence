import React from 'react';
import FilterToggle from '../containers/FilterToggle';
import FilterLink from '../containers/FilterLink';
import { StatusFilters, FilterNames } from '../store/actions';

const ChangeStatus = () => (
    <div className="dropdown">
        <FilterToggle />
        <ul className="menu">
            {Object.entries(StatusFilters).map(([type, name]) => (
                <FilterLink key={name} filter={name}>
                    {FilterNames[type]}
                </FilterLink>)
            )}
        </ul>
    </div>
);

export default ChangeStatus;
