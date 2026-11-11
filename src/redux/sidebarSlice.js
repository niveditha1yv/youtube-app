import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isToggle: true,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isToggle = !state.isToggle;
    },
  },
});

export const { toggleSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
