// 참고용으로 챗지피티꺼 복붙해놨습니다~

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

//참고용 예시코드
// import React from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { setUsername, setPassword, setIsAuthenticated } from "./authSlice";

// export default function LoginForm() {
//   const dispatch = useDispatch();
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     // 여기에서 실제 로그인 로직을 구현합니다.
//     // 로그인이 성공하면 Redux 스토어에 인증 정보를 저장합니다.
//     dispatch(setUsername(data.username));
//     dispatch(setPassword(data.password));
//     dispatch(setIsAuthenticated(true));
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label htmlFor="username">Username</label>
//         <input
//           id="username"
//           type="text"
//           {...register("username", { required: true })}
//         />
//         {errors.username && <span>This field is required</span>}
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           type="password"
//           {...register("password", { required: true })}
//         />
//         {errors.password && <span>This field is required</span>}
//       </div>
//       <button type="submit">Log In</button>
//     </form>
//   );
// }
