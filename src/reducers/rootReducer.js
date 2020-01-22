import {combineReducers} from 'redux'
import todoList from './todoListReducer';
import visibilityFilter from './filterReducer';
import login from './loginReducer';

const rootReducer =combineReducers({
    todoList,
    visibilityFilter,
    login
});
export default rootReducer;