
const todoList= (state=[],action)=>{

    switch (action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id:action.todo.id,
                    text:action.todo.text,
                    completed:action.todo.completed
                }];

        case 'DELETE_TODO':
            return state.filter((todo)=>todo.id !== action.id);

        case 'EDIT_TODO':
            return state.map(todo =>{
                if(todo.id === action.todo.id){
                    return {...todo,text:action.todo.text}

                }else{
                    return todo
                }
            });

        case 'COMPLETED_TODO':
            return state.map(todo =>
                todo.id === action.id ?{...todo,completed:!todo.completed}:todo
        );

        case 'ACTIVE_TODO':
            return state.filter(todo=>!todo.completed);

        case 'All_TODO':
            return state;

        default:
            return state
    }

} ;
export default todoList;