import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prediction: "",
  isLoading: false,
  name: "",
};
const predictSlice = createSlice({
  name: "predict",
  initialState,
  reducers: {
    findPredict(state, action) {
      state.isLoading = false;
      state.prediction = action.payload.prediction;
      state.name = action.payload.name;
      console.log("store");
    },
    loading(state, action) {
      state.isLoading = true;
    },
  },
});

export const { findPredict, loading } = predictSlice.actions;

export default predictSlice.reducer;
