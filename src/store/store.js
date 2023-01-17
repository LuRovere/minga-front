import { configureStore } from "@reduxjs/toolkit";
import chapterReducer from "./chapter/reducers";
import alertReducer from "./minga-alert/reducers";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    chapter: chapterReducer
  }
})