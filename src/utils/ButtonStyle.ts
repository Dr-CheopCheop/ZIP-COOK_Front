import styled from "styled-components";

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.color};
  }
`;
