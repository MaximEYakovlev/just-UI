import { configureStore } from "@reduxjs/toolkit";
import dataLoadingReducer from "./dataLoadingSlice";

export default configureStore({
  reducer: {
    dataLoader: dataLoadingReducer,
  },
});
