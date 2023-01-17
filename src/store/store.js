import { configureStore } from "@reduxjs/toolkit";
import comicsReducers from "./comics/reducers";
import chapterReducer from "./chapter/reducers";
import alertReducer from "./minga-alert/reducers";
import filterCategoryReducer from "./comicCategories/reducers";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    comics: comicsReducers,
    filterCategoryComic: filterCategoryReducer,
    chapter: chapterReducer
  }
})
