import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const getChapters = createAsyncThunk( 
    "getChapter",
    async ({id, pages, limit}) => {
        try {
            const response= await axios.get(`http://localhost:8080/api/chapters?comic_id=${id}&page=${pages}&limit=${limit}`)
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