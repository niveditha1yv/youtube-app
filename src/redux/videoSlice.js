import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    data: [],
  },
  reducers: {
    getvideosData: (state, payload) => {
      state.data = payload.data;
    },
  },
});

export const { getvideosData } = videoSlice.actions;

export default videoSlice.reducer;
