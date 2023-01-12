import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const getChapter = createAsyncThunk(
"getChapter",
async (chapter) => {
    try {
        const response= await axios.get(`http://localhost:8080/api/chapters?comic_id="63bd77a14dc6ee27758ac91b"`)
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
const chapterActions = {
    getChapter
}
// console.log(chapterActions)
export default chapterActions