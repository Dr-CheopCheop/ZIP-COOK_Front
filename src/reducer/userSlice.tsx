import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
  username : "",
  password : "",
  isLoding : false,
  isLogin : null,
}

export const userSlice = createSlice({
  name : "user",
  initialState,
  reducers: {
    //login Success
    loginUser : (state, action) => {
      const {id, password} = action.payload;
      //name, id에 API 값 받아오기
      state.username = id;
      state.password = password;
  
      //state 변화 알림
      return state;
    },
    //login Fail
    clearUser : (state) => {
      //name, id null
      state.username = "";
      state.password = "";
      return state;
    },
  },
});


export const {loginUser, clearUser} = userSlice.actions;

export default userSlice.reducer;