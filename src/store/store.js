import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "./articlesSlice";
export const store = configureStore({
  reducer: {
    articles: articlesSlice,
  },
});
