// import Modal from "react-modal";
// import React, {useState} from 'react';
import * as S from "./JoinStyle";

const Signup = () => {
  return (
    <S.Container>
      <S.Top>
        Join Us
        <div>
          <S.List>
            <li>
              Name
              <input type="text" placeholder="이름을 입력하세요" />
            </li>
            <li>
              ID
              <input type="text" placeholder="아이디를 입력하세요" />
            </li>
            <li>
              Password
              <input
                type="password"
                placeholder="비밀번호를 입력하세요.(특수문자 포함 8글자 이상)"
              />
            </li>
            <li>
              verify password
              <input type="password" placeholder="비밀번호 재입력" />
            </li>
            <li>
              Email
              <input type="text" placeholder="이메일을 입력하세요" />
            </li>
            <li>
              Email Verification Number
              <input type="text" placeholder="이메일 인증번호" />
            </li>
          </S.List>
          <div>
            <button type="button">SIGN UP</button>
          </div>
        </div>
      </S.Top>
    </S.Container>
  );
};

export default Signup;
