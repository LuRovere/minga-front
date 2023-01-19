import { createReducer } from "@reduxjs/toolkit";
import favouritesActions from "./actions";

const { getFavourites } = favouritesActions;

const initialState = { favourites: [] };

const favouritesReducers = createReducer(initialState, (builder) => {
  builder.addCase(getFavourites.fulfilled, (state, action) => {
    let newState = {
      favourites: action.payload.response.reactions,
    };
    return newState;
  });
});

export default favouritesReducers
