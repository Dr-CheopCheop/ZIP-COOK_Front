import styled from "styled-components";

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  width: 100px;
  height: 40px;
  font-weight: 700;
`;
