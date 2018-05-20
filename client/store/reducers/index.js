import { combineReducers } from 'redux';
import ideas from './ideas';
import visibilityFilter from './visibilityFilter';
import visiblePage from './visiblePage';

export default combineReducers({
    ideas,
    visibilityFilter,
    visiblePage
});
