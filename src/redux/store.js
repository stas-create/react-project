import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices/movieSlice";

let rootReducer = combineReducers({
    movies:moviesReducer
});

const setUpStore=()=>configureStore({
    reducer:rootReducer
})

export {
    setUpStore
}