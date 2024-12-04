import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/slices/counterSlices/counterSlice"; 

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
  },
});
