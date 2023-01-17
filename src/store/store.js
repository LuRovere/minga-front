import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./minga-alert/reducers";
import comicReducer from "./comic/reducers";
import chapterReducer from "./chapters/reducers";

export const store = configureStore({
  reducer: {
    alert: alertReducer, 
    comic: comicReducer,
    chapter: chapterReducer
  }
})