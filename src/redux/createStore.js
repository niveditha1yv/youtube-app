import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sidebarSlice";
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    sidebar: sideBarReducer,
    videos: videoSlice,
    search: searchSlice,
  },
});
