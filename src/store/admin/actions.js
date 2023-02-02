import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL as apiUrl } from "../../configs"

const adminAuthors = createAsyncThunk('modificar_company_o_author', async(token)=>{
    try {
        let url = `${apiUrl}auth/role/author/:id`
        let headers = {headers: {'Authorization': `Bearer ${token}`}}
        const response = await axios.put(url,headers)
        return {
            succes: true,
            response: {data:response.data}
        }
    } catch(error){
        return{
            success:false,
            response: error.response.data.response
        }
    }
})
const getAuthors = createAsyncThunk( 
    "getAuthors",
    async (token) => {
        try {
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response= await axios.get(`http://localhost:8080/api/authors?active=true`, headers)
        return {
            response: {authors: response.data},
            message: "authors obtained"
        }
        } catch (error) {
            return {
                response: {authors: error.response.data},
                message: "Error obtained authors"
            }
        }
    }
)
const getCompanies = createAsyncThunk( 
    "getCompanies",
    async (token) => {
        try {
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response= await axios.get(`http://localhost:8080/api/companies?active=true`, headers)
        return {
            response: {companies: response.data},
            message: "companies obtained"
        }
        } catch (error) {
            return {
                response: {companies: error.response.data},
                message: "Error obtained companies"
            }
        }
    }
)
const adminActions= {adminAuthors, getAuthors, getCompanies}

export default adminActions