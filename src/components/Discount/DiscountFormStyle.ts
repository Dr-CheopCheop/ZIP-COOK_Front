import styled from "styled-components";
import Colors from "../../Styles/Colors";
import Frames from "../../Styles/Frames";

export const Form = styled.form`
  border-top: 2px solid rgba(0, 0, 0, 0.5);
  width: 900px;
  margin: 20px auto;
`;

export const Container = styled.div`
  margin: 0px auto;
  padding: 20px 0;
  text-align: center;
`;

export const Manual = styled.div`
  ${Frames.DiscountFormBox};
  margin: 0 auto;
  line-height: 80px;
  background-color: white;
  color: rgba(0, 0, 0, 0.5);
  border: none;
`;

export const Input = styled.input`
  ${Frames.DiscountFormBox};

  line-height: 80px;
  margin: 20px auto;
  text-align: center;
  border: none;
  background-color: ${Colors.postBackground};
`;

export const ImgInput = styled(Input)`
  display: none;
`;

export const ImgView = styled.div`
  ${Frames.DiscountFormBox};
  background-color: white;
  height: 300px;
  line-height: 300px;
  margin: 10px auto;
  color: rgba(0, 0, 0, 0.3);
  border: 3px solid ${Colors.postBackground};
  font-size: 30px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    border: 3px solid ${Colors.postBackgroundBorder};
  }
`;
