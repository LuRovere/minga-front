import { createAsyncThunk } from "@reduxjs/toolkit"; //metoro para realizar acciones asincronas
import axios from "axios";

const getReactions = createAsyncThunk(
  //dos parametros,nombre de la accion,y la funcion asincrona
  "getReactions",
  async () => {
    try {
      let reactions = await axios.get("http://localhost:8080/api/reactions/me");
      console.log(reactions)
      return {
        success: true,
        response: { reactions: reactions.data.response },
      };
    } catch (error) {
      return {
        success: false,
        response: { error: error },
      };
    }
  }
);
const reactionsActions = {getReactions}

export default reactionsActions
