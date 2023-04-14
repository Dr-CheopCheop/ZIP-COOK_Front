import styled from "styled-components";
import Frames from "../Styles/Frames";
import Colors from "../Styles/Colors";

export const Input = styled.input`
  ${Frames.FormBox};

  line-height: 80px;
  margin: 20px auto;
  text-align: center;

  border: 4px solid ${Colors.postBackground};
  background-color: ${Colors.postBackground};

  &:hover {
    border: 4px solid ${Colors.postBackgroundBorder};
  }
  &:focus {
    outline: none;
  }
`;
