import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const obtenerComics = createAsyncThunk(
    "obtenerComics",   
    async ({inputText,inputSort,inputCategory})=>{//solo deja enviar 1 parametro
        try{
            let comics = await axios.get(`http://localhost:8080/api/comics?title=${inputText}&category_id=${inputCategory}&sort=${inputSort}`)
            console.log(comics)
            return {
                success: true ,
                response: {comics:comics}//ver que pide para poner en la respuesta
            }
        } catch(error){
            return{
                success: false,
                response:{error:error.message}
            }
        }
    }
)

const comicsActions = {obtenerComics}

export default comicsActions