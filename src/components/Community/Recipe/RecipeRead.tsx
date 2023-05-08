import Navbar from "../../Navbar/Navbar";
// import { useParams } from "react-router-dom";
// import DummyData from "../Dummydata";
import * as S from "./RecipeReadStyle";
import CommentList from "../Comment/CommentList";

const readData = {
  title: "해물 떡볶이",
  difficulty: "상",
  cookTime: "1시간 30분",
  quantity: "2인분",
  foods: ["고추장 3큰술", "떡 1봉지", "어묵 2장", "설탕 1큰술"],
};

const RecipeRead = () => {
  // const { id } = useParams();
  // const selectData = DummyData.find((data) => data.id === Number(id));
  // const { title, difficulty, cookTime } = selectData ?? {
  //   title: "존재하지 않는 게시물 입니다.",
  // };

  return (
    <>
      <Navbar />
      <S.ReadContainer>
        <S.TitleContainer>
          <S.TitleBox>
            <S.UpperTitle>
              <S.TitleButton>수정</S.TitleButton>
              <S.TitleButton>삭제</S.TitleButton>
            </S.UpperTitle>
            <S.LowTitle>
              <p>작성자: cooker</p>
              <p>2023.03.26 16:53</p>
            </S.LowTitle>
          </S.TitleBox>
          <S.TitleImage src="http://placehold.it/250x250" alt="" />
        </S.TitleContainer>
        <S.RecipeContentsContainer>
          <h1>{readData.title}</h1>
          <S.RecipeContentsSummaryBox>
            <div>
              <h4>분량</h4>
              <span>{readData.quantity}</span>
            </div>
            <div>
              <h4>조리시간</h4>
              <span>{readData.cookTime}</span>
            </div>
            <div>
              <h4>조리난이도</h4>
              <span>{readData.difficulty}</span>
            </div>
          </S.RecipeContentsSummaryBox>
        </S.RecipeContentsContainer>
        <CommentList />
      </S.ReadContainer>
    </>
  );
};

export default RecipeRead;
