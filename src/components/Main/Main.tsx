import * as M from "./MainStyle";
import icon from "../../img/MainPhoto.jpeg";
import React, {useRef} from 'react';

const MainPage = () => {

  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  return (
    <M.img_div>
      <M.img src={icon} />
      <M.span>Make Healty <br/>Home-Cooked</M.span>
      <div>
        <M.sub_span>The chatbot will answer the recipe you want right away!
      <br/>Use Zip Cook anytime, anywhere.</M.sub_span>
      </div>
    </M.img_div>
  );
}

export default MainPage;