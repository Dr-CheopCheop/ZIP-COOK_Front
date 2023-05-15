import * as S from "./NavbarStyle";
import { useSelector, useDispatch } from "react-redux";
import { RootState, clearUser } from "../../reducer/userSlice";


const Navbar = () => {
  // const user = useSelector((state:RootState)=> state.user);
  // const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(clearUser());
  // }

  return (
    <>
      <S.Header>
        <S.Nav>
          <S.Ul>
            <S.Div>
              <S.Li>
                <S.StyledLink to="/help">HELP</S.StyledLink>
              </S.Li>
              <S.Li>
                <S.StyledLink to="/chatbot">Chatbot</S.StyledLink>
              </S.Li>
              <S.Li>
                <S.StyledLink to="/community">COMMUNITY</S.StyledLink>
              </S.Li>
            </S.Div>
            <S.Div>
              <S.Logo>
                <S.StyledLink to="/main">ZIP COOK</S.StyledLink>
              </S.Logo>
            </S.Div>
            <S.Div>
              {/* {user.isLogin ? (
                <>
                <S.Li>
                  <button onClick={handleLogout}>LOGOUT</button>
                </S.Li>
                <S.Li>
                  <S.StyledLink to="/mypage">MY PAGE</S.StyledLink>
                </S.Li>
                </>
              ) : ( */}
                <>
                <S.Li>
                  <S.StyledLink to="/login">LOGIN</S.StyledLink>
                </S.Li>
                <S.Li>
                  <S.StyledLink to="/join">JOIN</S.StyledLink>
                </S.Li>
                </>
              {/* )} */}
            </S.Div>
          </S.Ul>
        </S.Nav>
      </S.Header>
    </>
  );
};

export default Navbar;
