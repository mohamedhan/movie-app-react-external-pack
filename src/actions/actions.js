import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE, NAME_FILTER, RATING_FILTER } from "../constants/actionTypes";

export const addMovie=(payload)=>({
    type:ADD_MOVIE,
    payload
})
export const removeMovie=(payload)=>({
    type:REMOVE_MOVIE,
    payload
})
export const editMovie=(payload)=>({
    type:EDIT_MOVIE,
    payload
})

export const nameFilter=(payload)=>({
    type:NAME_FILTER,
    payload
})
export const ratingFilter=(payload)=>({
    type:RATING_FILTER,
    payload
})