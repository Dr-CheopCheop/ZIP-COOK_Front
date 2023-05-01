import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Styles/Colors";
import Frames from "../../Styles/Frames";

export const Header = styled.header`
  width: 100%;
  height: ${Frames.navbar_height};
  align-items: center;
  margin: 0 auto;
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
  width: 160px;
  height: ${Frames.navbar_height};
  font-size: 35px;
  padding: 0;
  line-height: 60px;
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
  /* @media only screen and (max-width: 1080px) {
    display: none;
  } */
`;
