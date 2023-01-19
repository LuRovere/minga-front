import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const getChapters = createAsyncThunk( 
    "getChapter",
    async ({id, page, limit}) => {
        try {
            const response= await axios.get(`http://localhost:8080/api/chapters?comic_id=${id}&page=${page}&${limit}`)
        return {
            response: {chapter: response.data},
            message: "Chapter obtained"
        }
        } catch (error) {
            return {
                response: {chapter: error.response.data},
                message: "Error obtained chapter"
            }
        }
    }
)

const chapterActions = {getChapters} 
export default chapterActions