import { createAsyncThunk } from "@reduxjs/toolkit"; //metoro para realizar acciones asincronas
import axios from "axios";

const getReactions = createAsyncThunk(
  //dos parametros,nombre de la accion,y la funcion asincrona
  "getReactions",
  async (token) => {
    let url =`http://localhost:8080/api/reactions/me`
    
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    try {
      let reactions = await axios.get(url,headers);
      console.log(reactions)
      return {
        success: true,
        response: { 
          reactions: reactions.data.response,
          
        },
      };
    } catch (error) {
      return {
        success: false,
        response: { error: error.message },
      };
    }
  }
);
const reactionsActions = {getReactions}

export default reactionsActions
