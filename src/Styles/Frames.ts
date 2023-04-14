import { css } from "styled-components";
import Colors from "./Colors";

const FormBox = css`
  border-radius: 10px;
  border: 3px solid black;
  width: 800px;
  height: 80px;
  line-height: 80px;

  text-align: center;
  font-size: 20px;

  margin: 20px auto;
  background-color: ${Colors.postBackground};
  border: 4px solid ${Colors.postBackground};
`;

const Frames = {
  navbar_height: "60px",
  FormBox,
};

export default Frames;
