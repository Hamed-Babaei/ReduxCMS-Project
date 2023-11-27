import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArticlesFromServer = createAsyncThunk(
  "articles/getCoursesFromServer",
  async () => {
    return fetch("https://redux-cms.iran.liara.run/api/articles")
      .then((res) => res.json())
      .then((data) => data);
  }
);

export const removeArticles = createAsyncThunk(
  "articles/removeArticles",
  async (id) => {
    return fetch(`https://redux-cms.iran.liara.run/api/articles/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getArticlesFromServer.fulfilled, (state, action) => {
      console.log("action: ", action);
      return action.payload;
    });
    builder.addCase(removeArticles.fulfilled, (state, action) => {
      console.log(state, action);
      // return action.payload;
      const newArticles = state.filter(
        (article) => article._id !== action.payload.id
      );

      return newArticles;
    });
  },
});

export default slice.reducer;
