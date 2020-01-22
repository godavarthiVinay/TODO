import React from 'react';

import TodoItem from './TodoItem';
import '../stylesheets/TodoList.css'
class TodoList extends React.Component{


    render(){
        let items=this.props.todoList.map((todo,index)=>{
            return(
                <TodoItem key ={todo.id}
                          todoData={todo}
                          onEdit={this.props.onEdit}
                          onCompleteTodo={this.props.onCompleteTodo}
                          removeItem={this.props.removeItem}/>


            )
        })
        return(
            <div className={'todoMainContainer'}>
                {items}
            </div>
        )
    }
}

export default TodoList;