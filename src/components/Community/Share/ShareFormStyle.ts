import styled from "styled-components";
import Colors from "../../../Styles/Colors";
import Frames from "../../../Styles/Frames";

export const Form = styled.form`
  border-top: 2px solid rgba(0, 0, 0, 0.5);
  width: 900px;
  margin: 20px auto;
  label {
    display: inline-block;
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
`;
