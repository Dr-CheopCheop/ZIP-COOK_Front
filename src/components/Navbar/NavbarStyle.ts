import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Styles/Colors";
import Frames from "../../Styles/Frames";

export const Header = styled.header`
  width: 1500px;
  margin: 0 auto;
  height: ${Frames.navbar_height};
  @media (max-width: 1500px) {
    width: 1080px;
  }
`;

export const Nav = styled.nav`
  /* align-items: center; */
  /* text-align: center; */
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: black;
  }
  &:hover {
    color: ${Colors.postBackground};
  }
`;

export const StyledImg = styled.img``;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Logo = styled.div`
  height: ${Frames.navbar_height};
  font-size: 35px;
  padding: 0;
  line-height: ${Frames.navbar_height};
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Li = styled.li`
  font-size: 20px;
  padding: 0 15px;
  align-items: center;
  white-space: nowrap;
`;

export const LogoImg = styled.img`
  width: 300px;
  margin-top: 3rem;
`;

export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
