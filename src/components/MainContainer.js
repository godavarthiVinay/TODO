import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import AddTodoContainer from '../containers/AddTodo';
import TodoListContainer from '../containers/TodoList';
import Filter from '../containers/Filter';

import '../App.css'

class MainContainer extends React.Component{

    render(){
        return(
            <div className={'mainContainer'}>
                <AddTodoContainer/>
                <TodoListContainer/>
                <Filter/>

            </div>
        )
    }
}
export default MainContainer;
