import { createReducer } from "@reduxjs/toolkit";
import comicsActions from "./actions";

const {getComics}= comicsActions

const initialState = { comics : [] }

const comicsReducers = createReducer(
    initialState,
    ( builder ) => { builder //contruye casos de lgca de reduccion
        .addCase(
             getComics.fulfilled,
             (state,action) =>{
                let newState = {
                    comics: action.payload.response.comics //.data.? debo poner la
                                        // misma ruta que esta en la peticion axios
                                        
                }   
                return newState
             }
        )
        //addCase rejected..
    }
)

export default comicsReducers