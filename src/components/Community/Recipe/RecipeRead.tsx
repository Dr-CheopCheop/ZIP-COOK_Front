import Navbar from "../../Navbar/Navbar";
import React from "react";
import * as S from "./RecipeReadStyle";
import CommentList from "../Comment/CommentList";
import { Link, useNavigate, useParams } from "react-router-dom";
import { url } from "../../../constants/serverURL";

const readData = {
  title: "해물 떡볶이",
  level: "상",
  time: "1시간 30분",
  serving: "2인분",
  summary: "불맛이 가득한",
  ingredients: [
    "고추장 3큰술",
    "떡 1봉지",
    "어묵 2장",
    "설탕 1큰술",
    "다진마늘 2큰술",
    "진간장 3스푼",
    "파",
    "고춧가루",
  ],
  content: [
    "1. 떡을 물에 담가서 불립니다.",
    "2. 냄비에 고추장 3큰술을 넣고 중불로 끓여줍니다",
    "3. 다진마늘을 넣고 진간장3스푼,설탕 1큰술을 넣어줍니다.",
    "4. 가나다라마바사",
    "5. 기호에맞게 ",
    "6. 어쩌구저쩌구~~",
    "7. 어쩌구저쩌구~~",
  ],
};

const RecipeRead = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // const selectData = DummyData.find((data) => data.id === Number(id));
  // const { title, level, cookTime } = selectData ?? {
  //   title: "존재하지 않는 게시물 입니다.",
  // };
  const onDeleteHandler = () => {
    //삭제 로직 작성
    navigate(`${url}/community/recipe`);
  };

  return (
    <>
      <Navbar />
      <S.ReadContainer>
        <S.TitleContainer>
          <S.TitleBox>
            <S.UpperTitle>
              <Link
                to="/community/recipe/write"
                state={{ update: true, datas: readData, num: id }}
              >
                <S.TitleButton>수정</S.TitleButton>
              </Link>
              <S.TitleButton onClick={onDeleteHandler}>삭제</S.TitleButton>
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
              <span>{readData.serving}</span>
            </div>
            <div>
              <h4>조리시간</h4>
              <span>{readData.time}</span>
            </div>
            <div>
              <h4>조리난이도</h4>
              <span>{readData.level}</span>
            </div>
          </S.RecipeContentsSummaryBox>
          <S.foodsListContainer>
            <p>재료</p>
            <div>
              {readData.ingredients.map((food, idx) => (
                <React.Fragment key={food}>
                  <span> {food}</span>
                  {idx !== readData.ingredients.length - 1 && <span>,</span>}
                </React.Fragment>
              ))}
            </div>
          </S.foodsListContainer>
          <S.manualsListBox>
            {readData.content.map((manual) => (
              <React.Fragment key={manual}>
                <h3> {manual}</h3>
              </React.Fragment>
            ))}
          </S.manualsListBox>
        </S.RecipeContentsContainer>
        <CommentList id={id} />
      </S.ReadContainer>
    </>
  );
};

export default RecipeRead;
