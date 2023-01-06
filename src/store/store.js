import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./minga-alert/reducers";

export const store = configureStore({
  reducer: {
    alert: alertReducer
  }
})