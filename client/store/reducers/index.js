import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import ideas from './ideas';
import statusFilter from './statusFilter';
import visiblePage from './visiblePage';

export default combineReducers({
    form: formReducer,
    router: routerReducer,
    ideas,
    statusFilter,
    visiblePage
});
