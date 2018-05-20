const feedbackList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FEEDBACK':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_FEEDBACK':
            return state.map((feedback) => {
                if (feedback.id === action.id) {
                    return { ...feedback, completed: !feedback.completed };
                }

                return feedback;
            });
        default:
            return state;
    }
};

export default feedbackList;
