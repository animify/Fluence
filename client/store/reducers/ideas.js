const ideas = (state = [], action) => {
    switch (action.type) {
        case 'NEW_IDEA':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    text: action.text,
                    category: action.category,
                    status: action.status,
                    completed: false
                }
            ];
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
