import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sidebarSlice";
import videoSlice from "./videoSlice";

export const store = configureStore({
  reducer: {
    sidebar: sideBarReducer,
    videos: videoSlice,
  },
});
