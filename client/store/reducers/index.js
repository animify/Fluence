import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import ideas from './ideas';
import statusFilter from './statusFilter';
import visiblePage from './visiblePage';
import viewIdea from './viewIdea';
import account from './account';

export default combineReducers({
    account,
    form: formReducer,
    router: routerReducer,
    viewIdea,
    ideas,
    statusFilter,
    visiblePage
});
