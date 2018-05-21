import shortid from 'shortid';

export const IdeaStatus = {
    PENDING_REVIEW: 'Pending Review',
    PLANNED: 'Planned',
    IN_PROGRESS: 'In Progress',
    COMPLETED: 'Completed'
};

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_PENDING_REVIEW: 'SHOW_PENDING_REVIEW',
    SHOW_PLANNED: 'SHOW_PLANNED',
    SHOW_IN_PROGRESS: 'SHOW_IN_PROGRESS',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const Pages = {
    IDEAS: 'IDEAS',
    POST_NEW_IDEA: 'POST_NEW_IDEA',
    SIGN_IN: 'SIGN_IN',
    CREATE_ACCOUNT: 'CREATE_ACCOUNT'
};


export const newIdea = (title, text, category) => ({
    type: 'NEW_IDEA',
    id: shortid.generate(),
    title,
    category,
    status: IdeaStatus.PENDING_REVIEW,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const setVisiblePage = page => ({
    type: 'SET_VISIBLE_PAGE',
    page
});

export const toggleIdea = id => ({
    type: 'TOGGLE_IDEA',
    id
});