import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters, IdeaStatus } from '../store/actions';

const Filters = () => (
    <div className="group vertical">
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_PENDING_REVIEW}>
            {IdeaStatus.PENDING_REVIEW}
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_PLANNED}>
            {IdeaStatus.PLANNED}
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_IN_PROGRESS}>
            {IdeaStatus.IN_PROGRESS}
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            {IdeaStatus.COMPLETED}
        </FilterLink>
    </div>
);

export default Filters;
