import styled, { css } from "styled-components";
import { buttonProps } from "../../constants/interfaces";

export const Div = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 개체의 너비,높이에 대해 각각 -50% 만큼 이동함 */
  text-align: center;
`;

export const Container = styled.div`
  display: block;
`;

export const Line = styled.hr`
  width: 50%;
  margin: 0 auto;
  height: 1px;
  border: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const Button = styled.button<buttonProps>`
  display: inline-block;
  width: 25%;
  border: 1rem;
  font-color: black;
  background-color: ${(props) => (props.active ? "#cde990" : "transparent")};
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 1rem;
`;
