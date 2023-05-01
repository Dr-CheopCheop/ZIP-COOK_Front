import styled from "styled-components";
import Colors from "../../Styles/Colors";
import { Link } from "react-router-dom";

export const Form = styled.div`
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
  width: 400px;
`;

export const li_div = styled.div`
  margin-top: -0.5rem;
  width: 100%;
`;

export const Input = styled.input`
  width: 20%;
  height: 40px;
  border-radius: 10px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
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

export const Div = styled.div`
  width: 100%;
`;

export const E_button = styled.button`
  position: absolute;
  background: #17571e4d;
  border: none;
  width: 160px;
  height: 37px;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

export const p = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin: 1rem;
`;

export const Test = styled(Link)`
  text-decoration: none;
`;

export const map = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;
