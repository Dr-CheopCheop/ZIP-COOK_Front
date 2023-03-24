import * as S from "./NavbarStyle";

const Navbar = () => {
  return (
    <S.Nav>
      <S.Ul>
        <S.Li>HELP</S.Li>
        <S.Li>CHATBOT</S.Li>
        <S.Li>COMMUNITY</S.Li>
        <S.Logo>로고위치</S.Logo>
        <S.Li>LOGIN</S.Li>
        <S.Li>JOIN</S.Li>
        <S.Li>MY PAGE</S.Li>
      </S.Ul>
    </S.Nav>
  );
};

export default Navbar;
