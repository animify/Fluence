const ideas = (state = [], action) => {
    switch (action.type) {
        case 'NEW_IDEA':
            return [
                ...state,
                {
                    ...action
                }
            ];

        case 'SET_IDEAS':
            return [...action.ideas];

        case 'TOGGLE_IDEA':
            return state.map((idea) => {
                if (idea.id === action.id) {
                    return { ...idea, completed: !idea.completed };
                }

                return idea;
            });
        default:
            return state;
    }
};

export default ideas;
