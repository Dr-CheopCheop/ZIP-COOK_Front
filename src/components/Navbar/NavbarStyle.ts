import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../Styles/Colors";
import Frames from "../Styles/Frames";

export const Header = styled.header`
  width: 100%;
  height: ${Frames.navbar_height};
`;

export const Nav = styled.nav`
  width: 100%;
  align-items: center;
  text-align: center;
  margin: 0 auto;
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

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Logo = styled.div`
  width: 160px;
  height: 40px;
  font-size: 35px;
  padding: 0;
  white-space: nowrap;
  cursor: pointer;
`;

export const Li = styled.li`
  font-size: 20px;
  padding: 0 15px;
  align-items: center;
  white-space: nowrap;
  &:hover {
    font-size: 22px;
  }
`;
