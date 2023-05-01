import styled from "styled-components";
import Colors from "../../../Styles/Colors";
import Frames from "../../../Styles/Frames";
import TagsInput from "react-tagsinput";
import type { levelViewProps } from "../../../constants/interfaces";

export const LevelBar = styled.div`
  width: 900px;
  margin: 20px auto 10px;
  text-align: right;
`;
export const Form = styled.form`
  border-top: 2px solid rgba(0, 0, 0, 0.5);
  width: 900px;
  margin: 0px auto;
  label {
    display: inline-block;
  }
  svg {
    width: 30px;
    height: 30px;
  }

  text-align: center;
`;

export const Container = styled.div`
  padding: 20px 0;
`;

export const LevelByVIew = styled.div<levelViewProps>`
  display: ${(props) => (props.isView ? "block" : "none")};
`;

export const Manual = styled.div`
  ${Frames.FormBox};
  margin: 0 auto;
  background-color: white;
  border: none;
  color: rgba(0, 0, 0, 0.5);
`;

export const Input = styled.input`
  ${Frames.FormBox};

  &:hover {
    border: 4px solid ${Colors.postBackgroundBorder};
  }
  &:focus {
    outline: none;
  }
`;

export const ImgInput = styled(Input)`
  display: none;
`;

export const ImgView = styled.div`
  ${Frames.FormBox};
  background-color: white;
  height: 300px;
  width: 300px;
  line-height: 300px;
  margin: 10px auto;
  color: rgba(0, 0, 0, 0.3);
  font-size: 30px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    border: 4px solid ${Colors.postBackgroundBorder};
  }
`;

export const Button = styled.button`
  display: block;
  margin: 10px auto;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.color};
  }
`;

export const Error = styled.p`
  color: ${Colors.postBackgroundBorder};
  font-size: 14px;
`;

export const RadioContainer = styled.div`
  ${Frames.FormBox};
  display: flex;
  justify-content: space-around;
  font-size: 30px;
  margin: 20px auto;
  input {
    display: none;
  }
  input:checked + label {
    color: ${Colors.postBackgroundBorder};
  }

  label {
    &:hover {
      font-size: 35px;
    }
  }
`;

export const countContainer = styled.div`
  display: flex;
  position: relative;
  button {
    position: absolute;
    top: 50%;
    background-color: transparent;
    transform: translateY(-50%);
    font-size: 30px;
    border: none;
    &:hover {
      font-size: 35px;
    }
  }
  button:first-child {
    left: 10%;
  }
  button:last-child {
    right: 10%;
  }
`;

export const StyledTags = styled(TagsInput)`
  width: 500px;
  display: block;
  margin: 0px auto;
  overflow: hidden;

  /* padding-left: 5px; */
  padding-top: 5px;
  .react-tagsinput-tag {
    background-color: ${Colors.postBackground};
    border-radius: 10px;
    border: 2px solid ${Colors.postBackgroundBorder};
    color: black;
    display: inline-block;
    font-family: sans-serif;
    font-size: 20px;
    margin-bottom: 5px;
    margin-right: 5px;

    /* margin: 5px; */
    padding: 5px;
  }

  .react-tagsinput-remove {
    cursor: pointer;
    font-weight: bold;
  }

  .react-tagsinput-tag a::before {
    content: " ×";
  }

  .react-tagsinput-input {
    display: block;
    margin: 10px auto;
    background-color: ${Colors.postBackground};
    border-radius: 10px;
    border: 2px solid ${Colors.postBackgroundBorder};
    color: #777;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 6px;
    margin-top: 1px;
    outline: none;
    padding: 5px;
    width: 100px;
    text-align: center;
  }
`;
