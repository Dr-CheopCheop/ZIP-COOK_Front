import { css } from "styled-components";
import Colors from "./Colors";

const DiscountFormBox = css`
  display: block;
  border-radius: 10px;
  border: 3px solid black;
  width: 800px;
  height: 80px;
  font-size: 20px;
  background-color: ${Colors.postBackground};
`;

const Frames = {
  navbar_height: "60px",
  DiscountFormBox,
};

export default Frames;
