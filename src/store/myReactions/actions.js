import { createAsyncThunk } from "@reduxjs/toolkit"; //metoro para realizar acciones asincronas
import axios from "axios";

const getFavourites = createAsyncThunk(
  //dos parametros,nombre de la accion,y la funcion asincrona
  "getFavourites",
  async () => {
    try {
      let reactions = await axios.get("http://localhost:8080/api/reactions");
      return {
        success: true,
        response: { reactions: reactions },
      };
    } catch (error) {
      return {
        success: false,
        response: { error: error },
      };
    }
  }
);
const favouritesActions = {getFavourites}

export default favouritesActions
