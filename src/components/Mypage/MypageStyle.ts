import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Form = styled.div`
  padding: 5px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 0px;
  margin-left: -220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 10px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 200%;
`;

export const Button = styled.button`
position: absolute;
left: 50%;
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

export const Div = styled.div`
  display: flex;
  padding-bottom: 7px;
  align-items: center;
  width: 400px;
`;

export const E_button = styled.button`
  position: absolute;
  background: #17571e4d;
  border: none;
  width: 160px;
  height: 37px;
  border-radius: 10px;
  margin-top: -20px;
  margin-left: 160px;
  cursor: pointer;
`;

export const Line = styled.hr`
  margin-top: 0;
  margin-bottom: 1rem;
  width: 200%;
  height: 1px;
  border: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const Lable = styled.label`
  flex: 1;
  text-align: left;
`;
