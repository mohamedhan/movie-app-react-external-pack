import { RATING_FILTER } from "../constants/actionTypes";


export const ratingReducer=(state=0,action)=>{
    switch(action.type){
        case RATING_FILTER:
            return action.payload
        default:return state    
    }
}