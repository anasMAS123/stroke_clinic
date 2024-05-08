import { configureStore } from "@reduxjs/toolkit";
import predictReducer from "./slices/predictSlice.js";

const store = configureStore({
  reducer: {
    predict: predictReducer,
  },
});
export default store;
