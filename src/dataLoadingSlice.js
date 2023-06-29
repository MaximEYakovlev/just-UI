import { createSlice } from "@reduxjs/toolkit";
import { product } from "./data/data";

export const dataLoadingSlice = createSlice({
  name: "dataLoader",
  initialState: product,
  reducers: {},
});

export const {} = dataLoadingSlice.actions;
export default dataLoadingSlice.reducer;
