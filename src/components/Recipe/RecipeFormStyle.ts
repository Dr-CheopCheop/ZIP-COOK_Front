import styled from "styled-components";
import Colors from "../../Styles/Colors";
import Frames from "../../Styles/Frames";

export const Form = styled.form`
  border-top: 2px solid rgba(0, 0, 0, 0.5);
  width: 900px;
  margin: 20px auto;
  label {
    display: inline-block;
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const Container = styled.div`
  margin: 0px auto;
  padding: 20px 0;
  text-align: center;
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
