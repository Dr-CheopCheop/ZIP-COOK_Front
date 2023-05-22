import styled from "styled-components";
import Colors from "../../../Styles/Colors";

export const CommentItem = styled.div`
  padding: 10px 30px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  height: 60px;
  span {
    font-size: 10px;
    color: gray;
    padding-left: 4px;
  }
`;

export const CommentContent = styled.div`
  input {
    width: 900px;
    height: 40px;
    border: 2px solid ${Colors.postBackground};
    font-size: 16px;
    border-radius: 10px;
    padding-left: 10px;
    &:focus {
      outline: none;
      border: 2px solid ${Colors.postBackgroundBorder};
    }
  }
`;

export const CommentButtonContainer = styled.div`
  display: flex;
  align-items: center;
  button {
    background-color: ${Colors.postBackground};
    font-size: 20px;
    border-radius: 10px;
    position: relative;
    border: none;
    margin-left: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
