import styled from "styled-components";
import Colors from "../../../Styles/Colors";

export const Form = styled.form`
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  input {
    width: 900px;
    height: 60px;
    border: 2px solid ${Colors.postBackground};
    font-size: 16px;
    margin-left: 30px;
    padding-left: 10px;
    border-radius: 10px;
    &:focus {
      outline: none;
      border: 2px solid ${Colors.postBackgroundBorder};
    }
  }
  button {
    width: 100px;
    height: 60px;
    margin-right: 10px;
    border: 2px solid ${Colors.postBackground};
    border-radius: 10px;
    background-color: white;
    font-weight: 700;
    &:hover {
      border: 2px solid ${Colors.postBackgroundBorder};
      background-color: ${Colors.postBackground};
      cursor: pointer;
    }
  }
`;
