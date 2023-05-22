import { combineReducers } from "redux";
import userSlice from "./userSlice";
import addressReducer from "./addressReducer";

const rootReducer = combineReducers({
  user: userSlice,
  address : addressReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>