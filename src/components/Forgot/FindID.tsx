import React, { useState } from "react";
import {useForm, SubmitHandler} from 'react-hook-form'
import * as F from './idStyled'
import axios from "axios";
import {  useNavigate } from "react-router-dom";

interface FormValue {
  email : string
}

const FindID = () => {
  const [checkId, setCheckId] = useState(false); //아이디 표시상태 여부
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  const {register, handleSubmit, formState : {errors}} = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    axios.get(`/auth/findId/${data.email}`,{
      headers : {"Content-Type" : "text/plain;charset=UTF-8"}
    })
    .then(response => {
      const username = response.data.username;
      setUserId(username);
      setCheckId(true);
      console.log(username);
    }).catch((error) => {
      console.log("아이디 찾기 실패", error);

    })
    // setCheckId(true);
    // setUserId("dustn123");
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
      {!checkId ? (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
        <F.Div><label>Email</label></F.Div>
        <F.Input
              type="text"
              placeholder="test@email.com"
              // input의 기본 config를 작성
              {...register("email", {
                required: "이메일은 필수 입력입니다.",
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: "이메일 형식에 맞지 않습니다.",
                },
              })}
            />
        <F.Div>
        <F.Button type="submit">Check</F.Button>
        </F.Div>
      </form>
      ) : (
      <F.Div>
        <p>ID : {userId} </p>
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

export default FindID;