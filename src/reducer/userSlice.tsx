import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
  username : "",
  password : "",
  isLoding : false,
  isLogin : null,
}

type UserState = typeof initialState;

type RootState = {
  user: UserState;
  // 다른 리듀서의 상태들도 포함시켜줄 수 있습니다.
};

export const userSlice = createSlice({
  name : "user",
  initialState,
  reducers: {
    //login Success
    loginUser : (state, action) => {
      //name, id에 API 값 받아오기
      state.username = action.payload.id;
      state.password = action.payload.password;
  
      //localstorage저장
       localStorage.setItem('user', JSON.stringify(state));
      //state 변화 알림
      return state;
    },
    //login Fail
    clearUser : (state) => {
      //name, id null
      state.username = "";
      state.password = "";

      localStorage.removeItem('user');
      return state;
    },
  },
});

export const {loginUser, clearUser} = userSlice.actions;
export type { RootState };

export default userSlice.reducer;