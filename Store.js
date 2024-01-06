import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./Slices/navSlice";

const Store = configureStore({
  reducer: {
    nav: navSlice,
  },
});

export default Store;
