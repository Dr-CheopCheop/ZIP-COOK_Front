import Modal from "react-modal";
import React, {useState} from 'react';
import * as S from "./JoinStyle";

const Signup = () => {
  return (
    <S.Container>
      <S.Top>
        Join Us
        <div>
          <S.ul_div>
            <S.List>
              <li>Name
                <S.li_div><S.Input type="text" placeholder=" 이름을 입력하세요"/></S.li_div>
              </li>
              <li>ID
                <S.li_div><S.Input type="text" placeholder=" 아이디를 입력하세요"/></S.li_div>
              </li>
              <li>Password
                <S.li_div className="li-div"><S.Input type="password" placeholder=" 비밀번호를 입력하세요.(특수문자 포함 8글자 이상)"/></S.li_div>
              </li>
              <li>verify password
                <S.li_div className="li-div"><S.Input type="password" placeholder=" 비밀번호 재입력"/></S.li_div>
              </li>
              <li>Email
                <S.li_div className="li-div"><S.Input type="text" placeholder=" 이메일을 입력하세요"/></S.li_div>
              </li>
              <li>Email Verification Number
                <S.li_div className="li-div"><S.Input type="text" placeholder=" 이메일 인증번호"/></S.li_div>
              </li>
            </S.List>
            <div>
              <S.Button type="button">SIGN UP</S.Button>
            </div>
          </S.ul_div>
        </div>
      </S.Top>
    </S.Container>
  );
};


export default Signup;