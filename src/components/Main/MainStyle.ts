import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const img_div = styled.div`
  position: absolute;
  width: 95%;
  height: 600px;
  left: 25px;
  top: 114px;
  border-radius: 20px;
`;

export const img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 1rem;
  border-radius: 20px;
  opacity: 0.5;
`;

export const span = styled.span`
  position: absolute;
  width: 470px;
  height: 199px;
  left: 107px;
  top: 114px;
  font-weight: bold;
  font-size: 60px;
`;

export const sub_span = styled.span`
  position: absolute;
  width: 450px;
  height: 80px;
  left: 109px;
  top: 299px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-transform: capitalize;
`;
