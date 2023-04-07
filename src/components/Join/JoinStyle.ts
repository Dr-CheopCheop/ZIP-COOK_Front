import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 개체의 너비,높이에 대해 각각 -50% 만큼 이동함 */
  text-align: center;
`;

export const Top = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.05em;
`;

export const ul_div = styled.div`
  margin-top: 1rem;
  position: absolute;
  top: 50%;
  left: 38%;
`;

export const List = styled.ul`
  display: table;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  text-align: left;
  font-size: 15px;
  font-style: normal;
`;

export const li_div = styled.div`
  margin-top: -0.5rem;
  width: 100%;
`;

export const Input = styled.input`
  width: 200%;
  height: 30px;
  border-radius: 10px;
`;

export const Button = styled.button`
width: 200px;
height: 60px;
text-align : center;
margin-top : 1rem;
background-color: ${Colors.loginButton}};
border: none;
border-radius: 10px;
color: white;
font-weight: bold;
cursor: pointer;
font-size: 1.5rem;
&:hover {
  color: ${Colors.loginButtonHover};
}
`;
