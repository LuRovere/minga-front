import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const donation= createAsyncThunk(
    "donations",
    async({token,data}) => {
        let url =`http://localhost:8080/api/donations`
        let headers = {headers:{'Authorization':`Bearer ${token}`}}
        try{
            let res = await axios.post(url,data,headers);
            console.log(res)
            return { 
                success: true,
                response: window.location.href = res.data.response.body.init_point,
                
            }
        }catch(error){
            return {
                success: false,
                response: error.response.data
            }
        }
    }
)

const donationActions = {donation}

export default donationActions