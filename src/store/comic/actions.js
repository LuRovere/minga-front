import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getComic= createAsyncThunk(
    "getComic",
    async (idComic) => { 
        try{ 
            let response= await axios.get(`http://localhost:8080/api/comics/${idComic}`)
            console.log(response)
            return {
                response: {idComic: response.data},
                message: "comic obtained"
            } 
        }catch(error) {
            console.log(error)
            return {
                response: {idComic: error.response.data},
                message: "error obtained comic"
            }
        }
    }
)
const comicActions={getComic}

export default comicActions