import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from "../constants/ActionTypes";
import {connect} from "react-redux";
import TodoList from '../components/TodoList';

import {onEditTodo,onCompleteTodo,removeItem} from '../actions/actions'

const getListOnFilter =(todoList,visibilityFilter)=>{
    if(visibilityFilter === SHOW_ALL){
        return todoList;
    }
    else if (visibilityFilter === SHOW_ACTIVE){
        return todoList.filter((todo) =>!todo.completed)
    }
    else if (visibilityFilter === SHOW_COMPLETED){
        return todoList.filter((todo) =>todo.completed)
    }
    else {
        throw new Error("No filter")
    }

};




const mapStateToProps= (state,ownProps)=>({
    todoList:getListOnFilter(state.todoList,state.visibilityFilter),
    visibilityFilter:state.visibilityFilter

});
const mapDispatchToProps =(dispatch,ownProps)=>({
    onEdit:(todo)=>dispatch(onEditTodo(todo)),
    onCompleteTodo: (id)=>dispatch(onCompleteTodo(id)),
    removeItem :(id) =>dispatch(removeItem(id)),

});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)