const visibleIdea = (state = null, action) => {
    switch (action.type) {
        case 'SET_VISIBLE_IDEA':
            return action.idea;

        case 'UPDATE_IDEA':
            console.log('azza', state, action.idea);
            return action.idea;

        default:
            return state;
    }
};

export default visibleIdea;
