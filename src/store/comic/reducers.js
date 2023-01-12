import comicActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { getComic } = comicActions

const initialState = {
    comics: [],
    message: ""
} 
const comicReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(getComic.fulfilled,
                (state, action) => {
                    let newState = {
                        comics: action.payload.response.comic,
                        message: action.payload.message 
                }
                return newState
            }) 
    } 
)
export default comicReducer 