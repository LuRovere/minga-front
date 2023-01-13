import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getComics = createAsyncThunk(
  "getComics",
  async ({ inputText, inputSort, inputCategory, inputLimit }) => {
    //solo deja enviar 1 parametro
    try {
      let comics = await axios.get(
        `http://localhost:8080/api/comics?title=${inputText}&category_id=${inputCategory}&sort=${inputSort}&limit=${inputLimit}`
      );
      console.log(inputCategory);
      return {
        success: true,
        response: { comics: comics.data.response }, //ver que pide para poner en la respuesta
      };
    } catch (error) {
      return {
        success: false,
        response: { error: error.message },
      };
    }
  }
);

const comicsActions = { getComics };

export default comicsActions;
