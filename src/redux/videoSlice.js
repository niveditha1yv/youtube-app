import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    data: [],
  },
  reducers: {
    videosData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { videosData } = videoSlice.actions;

export default videoSlice.reducer;
