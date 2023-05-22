import * as L from "./LoginStyle";
import icon from "../../img/Gb.jpeg";
import React,{useState} from 'react';
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import {  useNavigate } from "react-router-dom";
import {loginUser} from "../../reducer/userSlice"
import axios from 'axios';

interface FormValue {
  username : string
  password : string
}

const Loginpage = () => {
  const dispatch = useDispatch();
  const movepage = useNavigate();
  const [isLoading,setIsLoading] = useState(false);
  const [meg, setMsg] = useState("");

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

  const onSubmit = async (data:FormValue) => {
    //Loading 메세지 출력
    setMsg("Loding...");

    //API
    try {
      const response = await axios.post("https://b0d2bc38-cfd6-424a-ba7d-49f70bab80b4.mock.pstmn.io/login", data); //login api
      console.log(response.data);
      setIsLoading(false);
      const code = response.data.code;
      if(code === 400) {
        //empty
        alert("비어있는 내용입니다.");
      } else if(code === 401){
        alert("존재하지 않는 아이디입니다.");
      } else if(code === 402){
        alert("비밀번호가 일치하지 않습니다.");
      } else if(code === 200) {
        dispatch(loginUser(response.data));
        movepage('/main');
      }
    } catch (error){
      console.log("Fail Login", error);
      setIsLoading(false);
      setMsg("로그인에 실패하셨습니다.");
    }
  };
 
  return (
    <L.Container>
      <L.Test to={"/main"}>
        <h1>LOGO 넣기</h1>
      </L.Test>
        <L.Sign onSubmit={handleSubmit(onSubmit)}>
          <L.Signinput
            type="text"
            placeholder="username"
            {...register("username", { required: true, minLength: 6, maxLength: 8 })}
          />
          {errors.username && <span>아이디를 입력해주세요!</span>}
          {errors.username && errors.username.type === "maxLength" && (
            <div>아이디는 8글자 이내로 작성해주세요.</div>
          )}
        <L.Signinput type="password" placeholder="PassWord" {...register("password", {required:true,
        minLength: 8,
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        })}/>
        {errors.password && <span>비밀번호를 입력해주세요!</span>}
        {errors.password && errors.password.type === "pattern" && (
              <div>비밀번호는 영문 대/소문자, 숫자, 특수문자를 포함해 8글자 이상 입력해주세요.</div>
            )}
        <L.Loginbutton type="submit" disabled={isLoading}>{isLoading ? "LOGING..." : "LOGIN"}</L.Loginbutton>
        </L.Sign>
        <div>
          <L.button onClick={ForgotPage}>ID/PassWord Forgot</L.button>
          <L.P></L.P>
          <L.button onClick={JoinPage}>Sign UP</L.button>
        </div>
        <L.Line></L.Line>
        <L.Div>
        <L.Googleb type="button" onClick={Googlepage} >
            <L.img src={icon} />
          </L.Googleb>
        </L.Div>
    </L.Container>
  );
};

export default Loginpage;
