import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../configs";

const getCarousel = createAsyncThunk('get-carousel', async () => {
  try {
    const comics = await axios.get(`${API_URL}comics/carousel`)
    console.log(comics.data.response)
    return {
      success: true,
      response: comics.data.response
    } 
  } catch (error) {
    return {
      success: false,
      response: {
        error: error.message
      }
    }
  }
})

const carouselActions = { getCarousel }

export default carouselActions