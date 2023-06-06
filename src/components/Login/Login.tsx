import * as L from "./LoginStyle";
import icon from "../../img/Gb.jpeg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, SET_TOKEN } from "../../reducer/userSlice";
import axios from "axios";
import setAuthorizationToken from '../../utils/setAuthorizationToken'

interface FormValue {
  username: string;
  password: string;
}

const Loginpage = () => {
  const dispatch = useDispatch();
  const movepage = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");

  function JoinPage() {
    movepage("/join");
  }

  function ForgotPage() {
    movepage("/forgot");
  }

  function Googlepage() {
    movepage("/googleLogin");
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
      const jwtToken = response.data.token;
      //token 저장
      localStorage.setItem("accessToken", jwtToken);
      //setAuthorizationToken(jwtToken);
      const userInfoRes = await axios.get("/auth/user");
      const userInfo = userInfoRes.data;

      dispatch(SET_TOKEN(jwtToken));
      dispatch(loginUser(userInfo));
      movepage("/main");
    } catch (error) {
      console.log("login fail", error);
    }
  };

  return (
    <L.Container>
      <L.Test to={"/main"}>
        <h1>LOGO 넣기</h1>
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
