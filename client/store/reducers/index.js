import { combineReducers } from 'redux';
import ideas from './ideas';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
    ideas,
    visibilityFilter
});
