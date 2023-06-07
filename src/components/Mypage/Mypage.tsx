import React,{useEffect} from 'react';
import {useSelector} from 'react-redux'
import { RootState } from '../../reducer/rootReducer';
import { useDispatch } from 'react-redux';
import { SET_TOKEN } from '../../reducer/userSlice';
import { useNavigate } from 'react-router-dom'; 

const Mypage= () => {
  const user = useSelector((state:RootState) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
      const accessToken = localStorage.getItem("accessToken");
      if(accessToken){
      dispatch(SET_TOKEN(accessToken));
      }else {
      navigate('/login');
      }
    },[]);

  
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