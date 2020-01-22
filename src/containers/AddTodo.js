
import {connect} from 'react-redux';
import AddTodo from '../components/AddTodo';
import {addTodo} from '../actions/actions';


const getId=(todoList)=>{
    let id=0;
    if(todoList.length > 0){
        for(let i=0;i<todoList.length;i++){
            if(todoList[i].id > id ){
                id=todoList[i].id
            }
        }
        id=id+1;
        return id;
    }else{
        id=1;
        return id;
    }
};

const mapStateToProps =(state,ownprops)=>({
    todoListId:getId(state.todoList)
});

const mapDispatchToProps = (dispatch,ownProps) =>({
   addTodo :(todo) =>dispatch(addTodo(todo))
});

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)