import styled from "styled-components";
import Colors from "../../Styles/Colors";
import { Link } from "react-router-dom";
export const CommunityContainer = styled.div`
  width: 1100px;
  margin: 0 auto;

  @media (max-width: 1500px) {
    width: 1080px;
  }
  color: ${Colors.postBackgroundBorder};
  h2 {
    margin: 10px 0;
    height: 40px;
    padding-left: 30px;
  }
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    img {
      width: 100%;
      height: 530px;
      border-radius: 10px;
      padding: 0 2px;
    }
    img:hover {
      width: 101%;
      height: 535px;
      opacity: 0.9;
    }
    list-style: none;
  }

  p {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
  @media (max-width: 1500px) {
    width: 1080px;
    li {
      img {
        width: 100%;
        height: 530px;
        border-radius: 10px;
        padding: 0 2px;
      }
      img:hover {
        width: 101%;
        height: 535px;
        opacity: 0.9;
      }
      list-style: none;
    }
  }
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
