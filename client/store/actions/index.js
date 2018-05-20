import shortid from 'shortid';

export const addFeedback = (title, text) => ({
    type: 'ADD_FEEDBACK',
    id: shortid.generate(),
    title,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleFeedback = id => ({
    type: 'TOGGLE_FEEDBACK',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
