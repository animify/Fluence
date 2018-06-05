import React from 'react';
import FilterToggle from '../containers/FilterToggle';
import FilterLink from '../containers/FilterLink';
import { StatusFilters, StatusText } from '../store/actions';

const Filters = () => (
    <div className="filters mt6 mb3"> Show me <div className="dropdown">
        <FilterToggle />
        <ul className="menu">
            {Object.entries(StatusFilters).map(([type, name]) => (
                <FilterLink key={name} filter={name}>
                    {StatusText[type]}
                </FilterLink>)
            )}
        </ul>
    </div> ideas, sorted by <div className="dropdown">
            <FilterToggle />
            <ul className="menu">
                {Object.entries(StatusFilters).map(([type, name]) => (
                    <FilterLink key={name} filter={name}>
                        {StatusText[type]}
                    </FilterLink>)
                )}
            </ul>
        </div>.
    </div>
);

export default Filters;
