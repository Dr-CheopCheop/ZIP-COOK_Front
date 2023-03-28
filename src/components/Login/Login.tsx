import * as L from "./LoginStyle";
import icon from "../../img/google.png";

const Loginpage = () => {
  return (
    <L.Container>
      <h1>LOGO</h1>
      <L.Sign>
        <L.Signinput type="text" placeholder="ID"/>
        <L.Signinput type="password" placeholder="PassWord"/>
        <L.Loginbutton type="button">LOGIN</L.Loginbutton>
       <div>
        <L.button>ID/PassWord Forgot</L.button>
        <L.P></L.P>
        <L.button>Sign UP</L.button>
        </div>
      <L.Line></L.Line>
      <L.Googlesign type="button">
          <L.Logo src={icon}/><p>Sign with Google</p>
      </L.Googlesign>
      </L.Sign>
    </L.Container>
  );
};

export default Loginpage;