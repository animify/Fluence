import { Pages } from '../actions';

const visiblePage = (state = Pages.IDEAS, action) => {
    switch (action.type) {
        case 'SET_VISIBLE_PAGE':
            return action.page;
        default:
            return state;
    }
};

export default visiblePage;
