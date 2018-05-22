import shortid from 'shortid';

export const IdeaStatus = {
    PENDING_REVIEW: 'Pending Review',
    PLANNED: 'Planned',
    IN_PROGRESS: 'In Progress',
    COMPLETED: 'Completed'
};

export const StatusFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_PENDING_REVIEW: 'SHOW_PENDING_REVIEW',
    SHOW_PLANNED: 'SHOW_PLANNED',
    SHOW_IN_PROGRESS: 'SHOW_IN_PROGRESS',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const FilterNames = {
    [StatusFilters.SHOW_ALL]: 'All',
    [StatusFilters.SHOW_PENDING_REVIEW]: IdeaStatus.PENDING_REVIEW,
    [StatusFilters.SHOW_PLANNED]: IdeaStatus.PLANNED,
    [StatusFilters.SHOW_IN_PROGRESS]: IdeaStatus.IN_PROGRESS,
    [StatusFilters.SHOW_COMPLETED]: IdeaStatus.COMPLETED,
    [StatusFilters.SHOW_ACTIVE]: 'Active',
};

export const Pages = {
    IDEAS: '/ideas',
    POST_NEW_IDEA: '/newidea',
    SIGN_IN: '/signin',
    SIGN_UP: '/signup'
};


export const newIdea = (title, text, category) => ({
    type: 'NEW_IDEA',
    id: shortid.generate(),
    title,
    category,
    status: IdeaStatus.PENDING_REVIEW,
    text
});

export const setStatusFilter = filter => ({
    type: 'SET_STATUS_FILTER',
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

export const batchActions = (...actions) => ({
    type: 'BATCH_ACTIONS',
    actions
});
