import { NAME_FILTER } from "../constants/actionTypes";


export const nameReducer=(state='',action)=>{
    switch(action.type){
        case NAME_FILTER:
            return action.payload
        default :return state    
    }
}