import styled, { keyframes } from "styled-components";
import Colors from "../../Styles/Colors";

const hourglass = keyframes`
  0% {
    transform: rotate(0deg);
    box-shadow:
      inset ${Colors.postBackgroundBorder} 0 -0em 0 0,
      inset gray 0 -2em 0 0,
      inset ${Colors.chatbotBackground} 0 -4em 0 0;
      
  }
  80% {
    transform: rotate(0deg);
    box-shadow:
      inset ${Colors.postBackgroundBorder} 0 -2em 0 0,
      inset gray 0 -2em 0 0,
      inset ${Colors.postBackgroundBorder} 0 -2em 0 0;
  }
  100% {
    transform: rotate(180deg);
    box-shadow:
      inset ${Colors.postBackgroundBorder} 0 -2em 0 0,
      inset gray 0 -2em 0 0,
      inset ${Colors.postBackgroundBorder} 0 -2em 0 0;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);

  @media (max-width: 1500px) {
    width: 100%;
  }
`;

export const Hourglass = styled.svg`
  font-size: 20px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  background: ${Colors.postBackgroundBorder};

  width: 2em;
  height: 4em;
  animation: ${hourglass} 1s linear infinite;
`;

export const Outer = styled.path`
  fill: ${Colors.postBackgroundBorder};
`;

export const Middle = styled.path`
  fill: gray;
`;
