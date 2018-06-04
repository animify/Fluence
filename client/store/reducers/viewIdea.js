const viewIdea = (state = null, action) => {
    switch (action.type) {
        case 'VIEW_IDEA':
            return action.idea;

        default:
            return state;
    }
};

export default viewIdea;
