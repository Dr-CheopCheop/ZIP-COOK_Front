import Modal from "react-modal";
import * as L from "./LoginStyle";
import icon from "../../img/Gb.jpeg";
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const movepage = useNavigate();
  
  function JoinPage() {
    movepage('/join');
  }

  return (
    <L.Container>
      <L.Test to={"/main"}>
        <h1>LOGO 넣기</h1>
      </L.Test>
      <L.Sign>
        <L.Signinput type="text" placeholder="ID" />
        <L.Signinput type="password" placeholder="PassWord" />
        <L.Loginbutton type="button">LOGIN</L.Loginbutton>
        <div>
          <L.button onClick={()=> setModalIsOpen(true)}>ID/PassWord Forgot</L.button>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            아이디/비밀번호 찾아주는 모달창
          </Modal>
          <L.P></L.P>
          <L.button onClick={JoinPage}>Sign UP</L.button>
        </div>
        <L.Line></L.Line>
        <L.Div>
        <L.Googleb type="button">
          <L.img src={icon} />
        </L.Googleb>
        </L.Div>
      </L.Sign>
    </L.Container>
  );
};

export default Loginpage;
