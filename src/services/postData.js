import axios from "axios";

const postData = async (url,data)=>{
    try{
        const response= await axios.post(url,data)
        return response.data.response
    }
    catch(error){
        throw new Error(error)
    }
}

export default postData