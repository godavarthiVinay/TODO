import {
    LOG_IN, LOG_OUT, ADD_TODO, EDIT_TODO, COMPLETED_TODO, DELETE_TODO,
    SET_VISIBILITY_FILTER
} from '../constants/ActionTypes'

// Login Actions starts
export const loginCheck =(username,password)=>({type:LOG_IN,username,password});
export const logout =(logout)=>({type:LOG_OUT,logout});

// Login Actions ends

//AddTodo Action starts

export const addTodo =(todo)=>({type:ADD_TODO,todo});
//AddTodo Action ends

//TodoList starts

export const onEditTodo=(todo)=>({type:EDIT_TODO,todo});
export const onCompleteTodo=id=>({type:COMPLETED_TODO,id});
export const removeItem=id=>({type:DELETE_TODO,id});

//TodoList ends

//Filter Action starts
export  const toggleFilter=(filter)=>({type:SET_VISIBILITY_FILTER,filter});
//Filter action ends