import { configureStore } from "@reduxjs/toolkit";
// import postSlice from "./post-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    // post: postSlice,
    auth: authSlice,
  },
});

export default store;
