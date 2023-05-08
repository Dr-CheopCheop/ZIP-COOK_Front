import { createSlice } from "@reduxjs/toolkit";
import type { FormProps } from "../constants/interfaces";

const initialPostState: FormProps = {
  title: "",
  img: new FileList(),
  price: "",
  contents: "",
  cookTimes: "1시간",
  quantity: "1인분",
  difficulty: "",
  foods: [],
  manuals: [],
};

const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setImage(state, action) {
      state.img = action.payload;
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
