import { configureStore } from "@reduxjs/toolkit";
import comicsReducers from "./comics/reducers";
import chapterReducer from "./chapter/reducers";
import alertReducer from "./minga-alert/reducers";
import comicReducer from "./comic/reducers";
import chaptersReducer from "./chapters/reducers";
import filterCategoryReducer from "./comicCategories/reducers"
import authReducer from './auth/reducers';
import allcomicsreducers from "./getAllComics/reducer.getAllComics";
import getIdReducer from "../store/getIdActions/getIdReducer";
import chapterReducerPato from "./chaptersInputs/reducers";



export const store = configureStore({
  reducer: {
    comic: comicReducer,
    alert: alertReducer,
    comics: comicsReducers,
    filterCategoryComic: filterCategoryReducer,
    chapter: chapterReducer,
    chapters: chaptersReducer,
    auth: authReducer,
    allComics: allcomicsreducers,
    id: getIdReducer,
    chapterReducerPato:chapterReducerPato
  }
})
