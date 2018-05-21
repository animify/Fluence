import { StatusFilters } from '../actions';

const statusFilter = (state = StatusFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_STATUS_FILTER':
            return action.filter;
        default:
            return state;
    }
};

export default statusFilter;
