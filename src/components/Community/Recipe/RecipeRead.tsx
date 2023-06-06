import Navbar from "../../Navbar/Navbar";
import React, { useState } from "react";
import * as S from "./RecipeReadStyle";
// import CommentList from "../Comment/CommentList";
import { useNavigate, useParams } from "react-router-dom";
import tbk from "../../../img/tteokbbokki.jpg";
import CommentList from "../Comment/RecipeCommentList";

import Icons from "../../../Styles/Icons";

const readData = {
  title: "치즈 해물 떡볶이",
  level: "상",
  time: "1시간 30분",
  serving: "2인분",
  summary: "#불맛이 가득한",
  ingredients: [
    "고추장 3큰술",
    "떡 300g",
    "어묵 2장",
    "설탕 1큰술",
    "모짜렐라 치즈",
    "다진마늘 2큰술",
    "진간장 3큰술",
    "파 80g",
    "고춧가루",
    "홍합 100g",
    "새우 150g",
    "",
  ],
  content: [
    "떡을 물에 담가서 불립니다.",
    "냄비에 고추장 3큰술을 넣고 중불로 끓여줍니다",
    "다진마늘을 넣고 진간장3스푼,설탕 1큰술을 넣어줍니다.",
    "잘씻은 홍합과 새우를 넣고 4분간 끓입니다",
    "어묵과 떡을 넣고 3분간 끓입니다. ",
    "파와 고춧가루를 넣어줍니다.",
    "모짜렐라 치즈를 기호에 맞게 넣어줍니다.",
  ],
};

const RecipeRead = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [commentViewToggle, setCommentViewToggle] = useState<boolean>(false);

  // const selectData = DummyData.find((data) => data.id === Number(id));
  // const { title, level, cookTime } = selectData ?? {
  //   title: "존재하지 않는 게시물 입니다.",
  // };
  const onDeleteHandler = () => {
    //삭제 로직 작성
    navigate(`/community/recipe`);
  };

  return (
    <>
      {/* <Navbar />
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
      </S.ReadContainer> */}
      <Navbar />
      <S.MealKitContainer>
        <S.MainImg>
          <img src={tbk} alt="main_img" />
          <S.MainTitle>
            <h1>{readData.title}</h1>
            <p>{readData.summary}</p>
          </S.MainTitle>
          <S.Option>
            <div>
              {Icons.level}
              <span>{readData.level}</span>
            </div>
            <div>
              {Icons.spoon}
              <span>{readData.serving}</span>
            </div>
            <div>
              {Icons.clock}
              <span>{readData.time}</span>
            </div>
          </S.Option>
        </S.MainImg>
        <S.explainBox>
          <S.editButtonBox>
            <S.StyledLink
              to="/community/recipe/write"
              state={{ update: true, datas: readData, num: id }}
            >
              <button>수정</button>
            </S.StyledLink>
            <button onClick={onDeleteHandler}>삭제</button>
            <button onClick={() => setCommentViewToggle(!commentViewToggle)}>
              {Icons.comment}
              댓글
            </button>
          </S.editButtonBox>
          <S.IngredientBox>
            <p>재료</p>
            <div>
              {readData.ingredients.map((food, idx) => (
                <span key={food}>
                  {food}
                  {/* {idx !== readData.ingredients.length - 1 && <span>,</span>} */}
                </span>
              ))}
            </div>
          </S.IngredientBox>
          <S.contentBox>
            {readData.content.map((manual, idx) => (
              <div key={manual}>
                <p>{idx + 1}</p>
                <span>{manual}</span>
              </div>
            ))}
          </S.contentBox>
        </S.explainBox>
      </S.MealKitContainer>
      {commentViewToggle && <CommentList id={id} />}
    </>
  );
};

export default RecipeRead;
