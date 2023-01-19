import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../configs";

const getChapter = createAsyncThunk(
  'get-chapter',
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}chapters/${id}`)
      console.log(res.data)
      return {
        success: true,
        response: res.data.response
      }
    } catch (error) {
      return rejectWithValue({
        success: false,
        response: error.response.data
      })
    }
  }
)

const chapterActions = { getChapter }

export default chapterActions