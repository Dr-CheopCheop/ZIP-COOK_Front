import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Input = styled.input`
  width: 20%;
  height: 40px;
  border-radius: 10px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Div = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const Button = styled.button`
  width: 200px;
  height: 60px;
  text-align: center;
  margin-top: 1rem;
  background-color: #f7c04a;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 1rem;
  &:hover {
    color: ${Colors.loginButtonHover};
  }
`;

export const Line = styled.hr`
  width: 50%;
  margin: 0 auto;
  height: 1px;
  border: 0;
  background: rgba(0, 0, 0, 0.3);
  margin-top: 2rem;
`;
