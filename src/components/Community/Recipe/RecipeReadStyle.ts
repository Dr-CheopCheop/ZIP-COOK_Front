import styled from "styled-components";
import Colors from "../../../Styles/Colors";
import { Link } from "react-router-dom";

export const ReadContainer = styled.section`
  width: 1080px;
  margin: 0 auto;
  text-align: center;
  margin-top: 3rem;
`;

//머리부분 -- 이미지 버튼 작성자 날짜
export const TitleContainer = styled.div`
  margin: -100px 0;
  position: relative;
  text-align: right;
  height: 650px;
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
  font-size: 16px;
  margin-top: 0.5rem;
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
  height: 300px;
  width: 300px;
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
    font-size: 20px;
    margin: 30px 0;
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
