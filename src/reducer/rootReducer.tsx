import { combineReducers } from "redux";
import userSlice from "./userSlice";
import addressReducer from "./addressReducer";
import tokenSlice from "./tokenSlice";

const rootReducer = combineReducers({
  user: userSlice,
  address : addressReducer,
  token : tokenSlice,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>