import {LOG_IN,LOG_OUT} from "../constants/ActionTypes";

const initialState={
    username:'admin',
    password:'admin',
    loginStatus:false
};

const login =(state=initialState,action)=>{
    switch (action.type){
        case LOG_IN:
            if (state.username === action.username && state.password === action.password){
                return {...state,loginStatus:true}
            }else {
                return {...state,loginStatus:false}
            }
        case LOG_OUT:
            return {...state,loginStatus:action.logout};
        default:
            return state
    }

};
export default login