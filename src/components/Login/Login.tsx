import * as L from "./LoginStyle";
import icon from "../../img/Gb.jpeg";

const Loginpage = () => {
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
          <L.button>ID/PassWord Forgot</L.button>
          <L.P></L.P>
          <L.button>Sign UP</L.button>
        </div>
        <L.Line></L.Line>
        <L.Googleb type="button">
          <L.img src={icon} />
        </L.Googleb>
      </L.Sign>
    </L.Container>
  );
};

export default Loginpage;
