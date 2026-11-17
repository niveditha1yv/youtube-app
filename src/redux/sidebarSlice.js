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
    closeMenu: (state) => {
      state.isToggle = false;
    },
  },
});

export const { toggleSideBar, closeMenu } = sideBarSlice.actions;
export default sideBarSlice.reducer;
