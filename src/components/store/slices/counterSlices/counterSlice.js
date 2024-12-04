import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 100, 
  },
  reducers: {}, 
});

export default counterSlice.reducer;
