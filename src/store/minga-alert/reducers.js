import { createReducer } from "@reduxjs/toolkit";
import alertActions from "./actions";

const { mingaAlert } = alertActions

const initialState = {
  message: '',
  visible: false
}

const alertReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(mingaAlert, (state, action) => {
        console.log(action)
        const newState = {
          message: action.payload.message,
          visible: action.payload.visible
        }
        return newState
      })
  }
)

export default alertReducer