export const IdeaStatus = {
    PENDING_REVIEW: 'Pending Review',
    PLANNED: 'Planned',
    IN_PROGRESS: 'In Progress',
    COMPLETED: 'Completed'
};

export const StatusMap = {
    0: 'SHOW_PENDING_REVIEW',
    1: 'SHOW_PLANNED',
    2: 'SHOW_IN_PROGRESS',
    3: 'SHOW_COMPLETED',
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
    HOME: '/',
    IDEA: '/ideas/:idea',
    IDEAS: '/ideas',
    ROADMAP: '/roadmap',
    NEW_IDEA: '/ideas/new',
    SIGN_IN: '/signin',
    SIGN_UP: '/signup',
    LOGOUT: '/logout',
    ACCOUNT: '/account'
};

export const newIdea = ({ _id, summary, details, status, category, by, upvotes, created_at, comments }) => ({
    type: 'NEW_IDEA',
    _id,
    summary,
    status,
    category,
    details,
    by,
    upvotes,
    created_at,
    comments,
});

export const setIdeas = ideas => ({
    type: 'SET_IDEAS',
    ideas
});

export const setStatusFilter = filter => ({
    type: 'SET_STATUS_FILTER',
    filter
});

export const setVisiblePage = page => ({
    type: 'SET_VISIBLE_PAGE',
    page
});

export const setAccount = account => ({
    type: 'SET_ACCOUNT',
    account
});

export const viewingIdea = account => ({
    type: 'SET_ACCOUNT',
    account
});

export const toggleIdea = id => ({
    type: 'TOGGLE_IDEA',
    id
});

export const batchActions = (...actions) => ({
    type: 'BATCH_ACTIONS',
    actions
});
