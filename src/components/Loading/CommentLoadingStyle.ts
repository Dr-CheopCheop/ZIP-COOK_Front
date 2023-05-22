import styled, { keyframes } from "styled-components";
import Colors from "../../Styles/Colors";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const loadingComment = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px 0 0 40px;
  border: 3px solid ${Colors.postBackground};
  border-top-color: ${Colors.postBackgroundBorder};
  animation: ${spin} 1s ease-in-out infinite;
`;
