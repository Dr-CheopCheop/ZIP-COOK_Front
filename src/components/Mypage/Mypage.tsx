import React from 'react';
import {useSelector} from 'react-redux'
import { RootState } from '../../reducer/rootReducer';

const Mypage= () => {
  const user = useSelector((state:RootState) => state.user.username);
  
  return (
    <>
      <div>
        <h1>Mypage</h1>
        <div>{user}님 안녕하세요!</div>
      </div>
    </>
  )
}
export default Mypage;