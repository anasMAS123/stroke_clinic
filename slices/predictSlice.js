import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prediction: "",
};
const predictSlice = createSlice({
  name: "predict",
  initialState,
  reducers: {
    findPredict(state, action) {
      state.prediction = action.payload;
      console.log("store");
    },
  },
});

export const { findPredict } = predictSlice.actions;

export default predictSlice.reducer;
