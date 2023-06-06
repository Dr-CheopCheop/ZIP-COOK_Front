import styled from "styled-components";
import Colors from "../../../Styles/Colors";
import { Link } from "react-router-dom";

export const ReadContainer = styled.section`
  width: 1080px;
  margin: 0 auto;
  text-align: center;
`;

//머리부분 -- 이미지 버튼 작성자 날짜
export const TitleContainer = styled.div`
  margin: 10px 0;
  position: relative;
  text-align: right;
  height: 300px;
`;
export const TitleBox = styled.div`
  margin-bottom: 10px;
  width: 1080px;
`;
export const UpperTitle = styled.div`
  height: 150px;
  line-height: 240px;
  padding: 0 20px 0 0;
  border-bottom: 1px solid black;
`;
export const TitleButton = styled.button`
  width: 80px;
  height: 40px;
  margin: 0px 5px;
  border-radius: 10px;
  border: 2px solid ${Colors.postBackground};
  background-color: white;
  font-weight: 700;
  &:hover {
    border: 2px solid ${Colors.postBackgroundBorder};
    background-color: ${Colors.postBackground};
    cursor: pointer;
  }
`;
export const LowTitle = styled.div`
  font-size: 14px;
  padding-right: 30px;
  p:nth-child(1) {
    font-weight: 700;
  }
`;
export const TitleImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

//내용부분 --제목,주소,내용
export const RecipeContentsSummaryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  > div {
    width: 300px;
    position: relative;
  }
  > div:nth-child(1):after {
    content: "";
    position: absolute;
    width: 1px;
    height: 30px;
    border-right: 2px solid black;
    top: 50%;
    left: 100%;
    transform: translate(0%, -50%);
    // 여백 조절을 위해 오른쪽 여백 값 조정
  }
  > div:nth-child(2):after {
    content: "";
    position: absolute;
    width: 1px;
    height: 30px;
    border-right: 2px solid black;
    top: 50%;
    left: 100%;
    transform: translate(0%, -50%);
    // 여백 조절을 위해 오른쪽 여백 값 조정
  }
  span {
    font-size: 24px;
    text-shadow: 2px 2px 2px gray;
  }
`;

export const foodsListContainer = styled.div`
  margin: 10px auto;
  p {
    font-size: 16px;
    margin: 20px 0;
  }
  div {
    font-size: 18px;
    width: 800px;
    margin: 0 auto;
    white-space: normal;
  }
`;

export const manualsListBox = styled.div`
  margin: 100px 0;
  font-size: 24px;
  font-weight: 700;
  h3 {
    margin: 20px 0;
  }
`;

export const RecipeContentsContainer = styled.div`
  width: 1080px;
  text-align: center;
  margin: 0 auto;
  h1 {
    font-size: 40px;
  }
`;

//새로운 디자인
export const MealKitContainer = styled.div`
  width: 1080px;
  height: 700px;
  margin: 20px auto 0;
  display: flex;
  border: 2px solid ${Colors.postBackgroundBorder};
`;

export const MainImg = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const MainTitle = styled.div`
  position: absolute;
  top: 50px;
  left: 20px;

  color: white;
  text-shadow: 2px 2px 2px #000;
  h1 {
    font-size: 50px;
  }
`;

export const Option = styled.div`
  position: absolute;
  bottom: 50px;
  left: 20px;
  display: flex;
  color: black;

  div {
    width: 60px;
    height: 60px;
    position: relative;
    border: 1px solid white;
    border-radius: 50%;
    background-color: ${Colors.postBackground};
    margin: 0 2px;
    svg {
      display: block;
      font-size: 28px;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -30%);
      fill: white;
    }
    span {
      position: absolute;
      top: 80%;
      left: 50%;
      width: 100%;
      text-align: center;
      transform: translate(-50%, -80%);
      font-size: 10px;
      color: white;
    }
  }
`;

export const explainBox = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${Colors.postBackground};
  color: white;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const editButtonBox = styled.div`
  text-align: right;
  margin: 5px 10px 5px 5px;
  button {
    all: unset;
    cursor: pointer;
    margin: 0 2px;
    font-size: 13px;
    width: 50px;
    height: 30px;
    border: 2px solid ${Colors.loginButton};
    text-align: center;
    background-color: white;
    border-radius: 10px;

    color: ${Colors.loginButton};
  }
  button:hover {
    font-size: 15px;
  }
`;

export const IngredientBox = styled.div`
  p {
    font-size: 28px;
    text-align: center;
    font-weight: 700;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center; /* Add this line to center align the items vertically */
    justify-content: center; /* Add this line to center align the items horizontally */

    span {
      flex-basis: 33.33%;
      font-size: 13px;
    }
  }
`;

export const contentBox = styled.div`
  text-align: left;

  width: 80%;
  margin: 20px auto 0;
  div {
    width: 100%;
    height: 65px;
    p {
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
