import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoursesFromServer = createAsyncThunk(
  "courses/getCoursesFromServer",
  async () => {
    return fetch("https://redux-cms.iran.liara.run/api/courses")
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const removeCourses = createAsyncThunk(
  "courses/removeCourses",
  async (id) => {
    return fetch(`https://redux-cms.iran.liara.run/api/courses/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCoursesFromServer.fulfilled, (state, action) => {
      console.log("state :", state);
      console.log("action :", action.payload.users);

      return action.payload;
    });
    builder.addCase(removeCourses.fulfilled, (state, action) => {
      console.log(state, action);
      // return action.payload;
      const newCourses = state.filter(
        (course) => course._id !== action.payload.id
      );

      return newCourses;
    });
  },
});

export default slice.reducer;
