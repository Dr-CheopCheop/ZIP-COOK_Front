import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const ErrorContainer = styled.div`
  width: 1500px;
  height: 100vh;
  margin: 0 auto;
  @media (max-width: 1500px) {
    width: 1080px;
  }

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${Colors.postBackground};
    svg {
      position: absolute;
      top: -100%;
      left: 50%;
      transform: translate(-50%, 0%);
      font-size: 90px;
      color: ${Colors.postBackground};
    }
    h1 {
      font-size: 50px;
      text-align: center;
    }
    p {
      font-size: 22px;
    }
  }
`;
