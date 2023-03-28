import * as S from "./NavbarStyle";

const Navbar = () => {
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
                <S.StyledLink to="chatbot">Chatbot</S.StyledLink>
              </S.Li>
              <S.Li>
                <S.StyledLink to="community">COMMUNITY</S.StyledLink>
              </S.Li>
            </S.Div>
            <S.Div>
              <S.Logo>
                <S.StyledLink to="/">ZIP COOK</S.StyledLink>
              </S.Logo>
            </S.Div>
            <S.Div>
              <S.Li>
                <S.StyledLink to="/login">LOGIN</S.StyledLink>
              </S.Li>
              <S.Li>
                <S.StyledLink to="/join">JOIN</S.StyledLink>
              </S.Li>
              <S.Li>
                <S.StyledLink to="/mypage">MY PAGE</S.StyledLink>
              </S.Li>
            </S.Div>
          </S.Ul>
        </S.Nav>
      </S.Header>
    </>
  );
};

export default Navbar;
