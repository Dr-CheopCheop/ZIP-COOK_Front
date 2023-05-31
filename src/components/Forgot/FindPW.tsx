import React,{useState} from "react";
import {useForm, SubmitHandler} from 'react-hook-form'
import * as F from './pwStyled'
import axios from "axios";
import {  useNavigate } from "react-router-dom";

interface FormValue {
  username : string
}

const FindPW = () => {
  const [checkPw, setCheckPw] = useState(false); //아이디 표시상태 여부
  const [userPw, setUserPw] = useState("");
  const navigate = useNavigate();
  const {register, handleSubmit, formState : {errors}} = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    axios.get(`http://localhost:8080/auth/findPassword/${data.username}`)
    .then(response => {
      const password = response.data.password;
      setUserPw(password);
      setCheckPw(true);
    }).catch((error) => {
      console.log("비밀번호 찾기 실패", error);

    })
    // setCheckPw(true);
    // setUserPw("dustn123");
    // console.log("아이디찾기성공!");
  }

  function handleLogin() {
    navigate('/login')
  } 

  function handleHome() {
    navigate('/main');
  }

  return (
    <>
    <div>
      {!checkPw ? (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
        <F.Div>
            <label>ID</label>
          </F.Div>
          <div>
            <F.Input placeholder="ID을 입력해주세요." {...register("username", { required: true })} />
          </div>
          {errors.username && <div>ID을 작성해주세요!</div>}
        <F.Div>
        <F.Button type="submit">Check</F.Button>
        </F.Div>
      </form>
      ) : (
      <F.Div>
          <F.P>{userPw} 회원님!</F.P>
          <F.P>회원님의 이메일로 임시비밀번호를 발급해드렸습니다. </F.P>
          <F.P>확인 후, 회원 아이디와 임시비밀번호를 입력 후 로그인하세요.</F.P>
          <F.P>(비밀번호는 my page에서 수정해주세요)</F.P>
        <F.Line></F.Line>
        <span>
          <F.Button onClick={handleHome}>HOME</F.Button>
          <F.Button onClick={handleLogin}>LOGIN</F.Button>
        </span>
      </F.Div>
      )}
    </div>
    </>
  )
}

export default FindPW;