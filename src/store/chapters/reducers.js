import chapterActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { getChapters } = chapterActions

const initialState = {
    chapters: [],
    message: ""
} 
const chapterReducer = createReducer(
    initialState,
    (builder) =>  {
    builder
    .addCase(getChapters.fulfilled,
        (state, action) => {
            let newState = {
                chapters: action.payload.response.chapter,
                message: action.payload.message
            }
            return newState
        }
        )
})
export default chapterReducer