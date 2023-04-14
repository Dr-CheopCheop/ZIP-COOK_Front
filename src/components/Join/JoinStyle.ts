// import { Link } from "react-router-dom";
import styled from "styled-components";
// import Colors from "../../Styles/Colors";

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
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.05em;
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
