import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedbacks: [],
};

export const feedbacksSlice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {
    setFeedbacks: (state, action) => {
      state.feedbacks = action.payload;
    },
  },
});

export const { setFeedbacks } = feedbacksSlice.actions;

export default feedbacksSlice.reducer;
