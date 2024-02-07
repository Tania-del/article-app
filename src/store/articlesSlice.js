import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    userArticles: [],
    pinnedArticle: null,
    totalPages: 1,
    currentPage: 1,
  },
  reducers: {
    articleAdd(state, action) {
      state.userArticles.push(action.payload);
    },
    articleRemove(state, action) {
      state.userArticles = state.userArticles.filter(
        (article) => article.id !== action.id
      );
    },
    pinArticle(state, action) {
      state.pinnedArticle = action.payload;
    },
  },
});

export const { articleAdd, articleRemove, pinArticle } = articlesSlice.actions;
export const selectedUsersArticles = (state) => state.articles.userArticles;
export const selectedPinnedArticle = (state) => state.articles.pinnedArticle;
export default articlesSlice.reducer;
