import * as L from "./LoginStyle";
import icon from "../../img/Gb.jpeg";
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

interface FormValue {
  ID : string
  PW : string
}

const Loginpage = () => {
  const movepage = useNavigate();
  const [isLoding,setIsLoading] = useState(false);
  const[errorMessage, setErrorMessage] = useState("");

  function JoinPage() {
    movepage('/join');
  }

  function ForgotPage() {
    movepage('/forgot');
  }

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValue>();

  const onSubmit = async (data: FormValue) => {
    setIsLoading(true);
    try{
      const response = await axios.post('',data); //login api
      console.log(response.data);
      setIsLoading(false);
      alert("로그인 성공하셨습니다.")
      movepage('/main');
    } catch(error){
      console.log("로그인 실패하셨습니다.");
      setIsLoading(false);
      setErrorMessage("로그인 실패하셨습니다.");
    }
  }

  return (
    <L.Container>
      <L.Test to={"/main"}>
        <h1>LOGO 넣기</h1>
      </L.Test>
      <L.Sign>
        <form onSubmit={handleSubmit(onSubmit)}>
        <L.Signinput type="text" placeholder="ID" {...register("ID", {required: true, minLength : 6, maxLength: 8})}/>
        {errors.ID && <span>아이디를 입력해주세요!</span>}
        {errors.ID && errors.ID.type === "maxLength" && (
            <div>아이디는 8글자 이내로 작성해주세요.</div>
          )}
        <L.Signinput type="password" placeholder="PassWord" {...register("PW", {required:true,
        minLength: 8,
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        })}/>
        {errors.PW && <span>비밀번호를 입력해주세요!</span>}
        {errors.PW && errors.PW.type === "pattern" && (
              <div>비밀번호는 영문 대/소문자, 숫자, 특수문자를 포함해 8글자 이상 입력해주세요.</div>
            )}
        <L.Loginbutton type="submit" disabled={isLoding}>LOGIN</L.Loginbutton>
        {isLoding ? "로딩중..." : "로그인"}
        </form>
        <div>
          <L.button onClick={ForgotPage}>ID/PassWord Forgot</L.button>
          <L.P></L.P>
          <L.button onClick={JoinPage}>Sign UP</L.button>
        </div>
        <L.Line></L.Line>
        <L.Div>
        <L.Googleb type="button">
          <L.img src={icon} />
        </L.Googleb>
        </L.Div>
      </L.Sign>
    </L.Container>
  );
};

export default Loginpage;
