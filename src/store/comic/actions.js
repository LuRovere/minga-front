import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getComic= createAsyncThunk(
    "getComic",
    async (comics) => { 
        try{ 
            let response= await axios.get(`http://localhost:8080/api/comics/63bcb17715ceef4e7f62a604`) 
            console.log(response)
            return {
                response: {comics: response.data},
                message: "comic obtained"
            } 
        }catch(error) {
            console.log(error)
            return {
                response: {comics: error.response.data},
                message: "error obtained comic"
            }
        }
    }
)
const comicActions = { getComic } 
export default comicActions 