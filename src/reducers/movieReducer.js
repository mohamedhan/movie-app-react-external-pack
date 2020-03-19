
import movies from '../components/Data'
import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE } from '../constants/actionTypes'
const initState=movies
export const movieReducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_MOVIE:
            return [...state,action.payload]
        case REMOVE_MOVIE:
            return state.filter(el=> el.id!==action.payload)
        case EDIT_MOVIE:
            return state.map(el=>
                (el.id==action.payload.id)? {...action.payload.newmovie} :el
                ) 
        default:return state           
            
    }
}