import { createReducer } from "@reduxjs/toolkit";
import donationActions from "./actions";

const { donation } = donationActions;

const initialState = { donations: "" };

const donationReducers = createReducer(initialState, (builder) => {
  builder.addCase(donation.fulfilled, (state, action) => {
    let newState = {
      donations: action.payload.response,
    };
    return newState;
  });
});

export default donationReducers