import * as M from "./MypageStyle";
import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux'
import { RootState } from "../../reducer/userSlice";

const Mypage= () => {
  const user = useSelector((state:RootState) => state.user);
  
  return (
    <>
      <div>
        <h1>Mypage</h1>
        <div>{`${user.username}님 안녕하세요!`}</div>
      </div>
    </>
  )
}
export default Mypage;