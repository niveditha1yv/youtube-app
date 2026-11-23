import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_COUNT } from "../Utils/constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    liveMessage: (state, action) => {
      state.message.splice(OFFSET_LIVE_COUNT, 1);
      state.message.unshift(action.payload);
    },
  },
});

export const { liveMessage } = chatSlice.actions;

export default chatSlice.reducer;
