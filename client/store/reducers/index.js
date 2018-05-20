import { combineReducers } from 'redux';
import feedbackList from './feedbackList';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
    feedbackList,
    visibilityFilter
});
