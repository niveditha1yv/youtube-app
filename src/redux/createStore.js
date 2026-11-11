import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sideBarReducer,
  },
});
