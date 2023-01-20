import { createReducer } from "@reduxjs/toolkit";
import reactionsActions from "./actions";

const { getReactions } = reactionsActions;

const initialState = { reactions: [] };

const reactionsReducers = createReducer(initialState, (builder) => {
  builder.addCase(getReactions.fulfilled, (state, action) => {
    let newState = {
      reactions: action.payload.response.reactions
    };
    return newState;
  });
});

export default reactionsReducers
