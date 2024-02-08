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
      const { title, author } = action.payload;
      if (
        !state.userArticles.some(
          (article) => article.title === title && article.author === author
        )
      ) {
        state.userArticles.push(action.payload);
      }
    },
    articleRemove(state, action) {
      state.userArticles = state.userArticles.filter(
        (article) => article.title !== action.payload.title
      );
    },
    pinArticle(state, action) {
      const pinnedArticle = action.payload;
      // state.pinnedArticle = action.payload;
      // const index = state.userArticles.findIndex(
      //   (article) =>
      //     article.title === pinnedArticle.title &&
      //     article.author === pinnedArticle.author
      // );

      // if (index !== -1) {
      //   const updatedUserArticles = [
      //     pinnedArticle,
      //     ...state.userArticles.slice(0, index),
      //     ...state.userArticles.slice(index + 1),
      //   ];

      //   state.userArticles = updatedUserArticles;
      // }
      if (state.pinnedArticle) {
        state.userArticles.push(state.pinnedArticle);
      }

      // Find the index of the article to be pinned
      const index = state.userArticles.findIndex(
        (article) =>
          article.title === pinnedArticle.title &&
          article.author === pinnedArticle.author
      );

      if (index !== -1) {
        // Remove the article from the userArticles array
        state.userArticles.splice(index, 1);

        // Set the pinned article in the pinnedArticle field
        state.pinnedArticle = pinnedArticle;
      }
    },
  },
});

export const { articleAdd, articleRemove, pinArticle } = articlesSlice.actions;
export const selectedUserArticles = (state) => state.articles.userArticles;
export const selectedPinnedArticle = (state) => state.articles.pinnedArticle;
export default articlesSlice.reducer;
