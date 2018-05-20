import shortid from 'shortid';

export const newIdea = (title, text, category) => ({
    type: 'NEW_IDEA',
    id: shortid.generate(),
    title,
    category,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleIdea = id => ({
    type: 'TOGGLE_IDEA',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
