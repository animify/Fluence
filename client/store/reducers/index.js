import { combineReducers } from 'redux';
import ideas from './ideas';
import statusFilter from './statusFilter';
import visiblePage from './visiblePage';

export default combineReducers({
    ideas,
    statusFilter,
    visiblePage
});
