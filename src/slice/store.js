import { configureStore } from "@reduxjs/toolkit";
import brandReducer, { brandSliceKey } from "./brandSlice";

export const store = configureStore({
  reducer: {
    [brandSliceKey]: brandReducer,
  },
});
