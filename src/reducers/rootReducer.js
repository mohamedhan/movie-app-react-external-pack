import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { nameReducer } from "./nameReducer";
import { ratingReducer } from "./ratingReducer";

export const rootReducer=combineReducers({
    movies:movieReducer,
    nameFilter:nameReducer,
    ratingFilter:ratingReducer
})