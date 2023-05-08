import styled from "styled-components";
import Colors from "../../../Styles/Colors";
import Frames from "../../../Styles/Frames";
import TagsInput from "react-tagsinput";
import type {
  levelViewProps,
  levelActiveProps,
} from "../../../constants/interfaces";

export const LevelBar = styled.div`
  width: 1080px;
  margin: 20px auto 10px;
  text-align: right;
  p {
    margin: 10px 10px 0 0;
    font-size: 10px;
  }
`;
export const LevelButton = styled.button<levelActiveProps>`
  margin: 0px 5px;
  width: 40px;
  height: 40px;
  font-size: 16px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive ? `${Colors.chatbotBackground}` : "white"};
  &:hover {
    background-color: ${Colors.chatbotBackground};
  }
`;
export const Form = styled.form`
  border-top: 2px solid rgba(0, 0, 0, 0.5);
  width: 1080px;
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

  svg {
    width: 100px;
    height: 100px;
  }
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
  width: 800px;
  display: block;
  margin: 0px auto;
  overflow: hidden;

  /* padding-left: 5px; */
  padding-top: 180px;
  .react-tagsinput-tag {
    background-color: ${Colors.postBackground};
    border-radius: 10px;
    border: 2px solid ${Colors.postBackgroundBorder};
    color: black;
    display: inline-block;
    font-size: 16px;
    margin-bottom: 10px;
    margin-right: 10px;

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
    margin: 100px auto;
    background-color: ${Colors.postBackground};
    border-radius: 10px;
    border: 2px solid ${Colors.postBackgroundBorder};
    color: black;
    font-size: 20px;
    margin-bottom: 6px;
    margin-top: 1px;
    outline: none;
    padding: 5px;
    width: 100px;
    text-align: center;
  }
`;
export const StyledManuals = styled(TagsInput)`
  width: 800px;
  display: block;
  margin: 0px auto;
  overflow: hidden;

  /* padding-left: 5px; */
  padding-top: 180px;
  .react-tagsinput-tag {
    background-color: ${Colors.postBackground};
    border-radius: 10px;
    border: 2px solid ${Colors.postBackgroundBorder};
    color: black;
    display: inline-block;
    font-size: 16px;
    margin: 10px auto;
    width: 700px;
    text-align: left;
    padding: 20px;
    /* margin: 5px; */
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
    margin: 100px auto;
    background-color: ${Colors.postBackground};
    border-radius: 10px;
    border: 2px solid ${Colors.postBackgroundBorder};
    color: black;
    font-size: 20px;
    margin-bottom: 6px;
    margin-top: 1px;
    outline: none;
    padding: 20px;
    width: 700px;
  }
`;
