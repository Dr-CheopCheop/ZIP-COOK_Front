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

export const Test = styled(Link)`
  text-decoration: none;
`;

export const Sign = styled.div`
  width: 80%;
  max-width: 30rem;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
`;

export const Signinput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  border: none;
  line-height: 2;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Loginbutton = styled.button`
  width: 100%;
  background-color: ${Colors.loginButton}};
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  &:hover {
    color: ${Colors.loginButtonHover};
  }
`;

export const P = styled.p`
  display: inline-block;
  width: 240px;
`;

export const button = styled.button`
  display: inline-block;
  background-color: white;
  font-size: 1rem;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
  &:hover {
    background-color: ;
  }
`;

export const Line = styled.hr`
  margin-top: 0;
  width: 100%;
  height: 1px;
  border: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export const Googleb = styled.button`
  border: none;
  color: black;
  font-size: 1rem;
  cursor: pointer;
  background-color: white;
  margin: 1rem;
`;

export const img = styled.img`
  width: 250px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;
