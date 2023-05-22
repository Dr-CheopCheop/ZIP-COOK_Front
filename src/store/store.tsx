import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducer/userSlice";
import addressReducer from "../reducer/addressReducer";
import rootReducer from "../reducer/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
