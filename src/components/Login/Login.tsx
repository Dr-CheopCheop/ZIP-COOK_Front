import * as L from "./LoginStyle";
import React, {useEffect} from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../reducer/userSlice";
import axios from "axios";
import { SET_TOKEN } from "../../reducer/tokenSlice";
import ZipCook_logo from '../../img/ZipCook_logo.png'

interface FormValue {
  username: string;
  password: string;
}

const Loginpage = () => {
  const dispatch = useDispatch();
  const movepage = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [meg, setMsg] = useState("");

  function JoinPage() {
    movepage("/join");
  }

  function ForgotPage() {
    movepage("/forgot");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit = async (data: FormValue) => {
    setIsLoading(true);
    //Loading 메세지 출력
    setMsg("Loding...");

    //API
    try {
      const response = await axios.post(
        "/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const user = response.data;
      const jwtToken = user.token;
      //token 저장
      localStorage.setItem("accessToken", jwtToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
      const userInfoRes = await axios.get("/auth/user");
      const userInfo = userInfoRes.data;

      dispatch(SET_TOKEN(jwtToken));
      dispatch(loginUser(userInfo));
      movepage("/main");
    } catch (error) {
      console.log("login fail", error);
      alert("로그인에 실패하셨습니다. 다시 로그인해주세요");
      setIsLoading(false);
      setMsg("LOGIN");
    }
  };


  return (
    <L.Container>
      <L.Test to={"/main"}>
        <L.img src={ZipCook_logo}/>
      </L.Test>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <L.Sign>
            <L.Signinput
              type="text"
              placeholder="username"
              {...register("username", { required: true })}
            />
            {errors.username && <span>username를 입력해주세요!</span>}
            {errors.username && errors.username.type === "maxLength" && (
              <div>username는 8글자 이내로 작성해주세요.</div>
            )}
            <L.Signinput
              type="password"
              placeholder="PassWord"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              })}
            />
            {errors.password && errors.password.type === "minLength" && (
              <div>8글자 이상 입력해주세요</div>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <div>
                비밀번호는 영문 대/소문자, 숫자, 특수문자를 포함해 입력해주세요.
              </div>
            )}
            <L.Loginbutton type="submit" disabled={isLoading}>
              {isLoading ? "LOGING..." : "LOGIN"}
            </L.Loginbutton>
          </L.Sign>
        </form>
        <div>
          <L.button onClick={ForgotPage}>ID/PassWord Forgot</L.button>
          <L.P></L.P>
          <L.button onClick={JoinPage}>Sign UP</L.button>
        </div>
      </div>
    </L.Container>
  );
};

export default Loginpage;
