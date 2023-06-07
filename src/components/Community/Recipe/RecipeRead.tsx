import Navbar from "../../Navbar/Navbar";
import React, { useState, useEffect } from "react";
import * as S from "./RecipeReadStyle";
// import CommentList from "../Comment/CommentList";
import { useNavigate, useLocation } from "react-router-dom";
import CommentList from "../Comment/RecipeCommentList";

import Icons from "../../../Styles/Icons";
import axios from "axios";
import type { RecipeReadProps } from "../../../constants/interfaces";

const RecipeRead = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState<RecipeReadProps>();
  const id = location.pathname.split("/")[3];
  const [commentViewToggle, setCommentViewToggle] = useState<boolean>(false);

  console.log("요청 url 주소", `/board-recipe/${id}`);
  console.log("recipe READ 요청 DATA:", data);

  const onDeleteHandler = async () => {
    //삭제 로직 작성
    navigate(`/community/recipe`);
    try {
      const response = await axios({
        method: "DELETE",
        url: `/board-recipe/${id}`,
      });
      const responseData = await response.data;
      console.log(responseData);

      navigate("/community/recipe");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`/board-recipe/${id}`);
      const responseData = await response.data;
      setData(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <Navbar />
      <S.MealKitContainer>
        <S.MainImg>
          <img src={`/images/${data?.filepath}`} alt="main_img" />
          <S.MainTitle>
            <h1>{data?.title}</h1>
            <p>{data?.summary}</p>
          </S.MainTitle>
          <S.Option>
            <div>
              {Icons.level}
              <span>{data?.level}</span>
            </div>
            <div>
              {Icons.spoon}
              <span>{data?.serving}</span>
            </div>
            <div>
              {Icons.clock}
              <span>{data?.time}</span>
            </div>
          </S.Option>
        </S.MainImg>
        <S.explainBox>
          <S.editButtonBox>
            <S.StyledLink
              to="/community/recipe/write"
              state={{ update: true, datas: data, num: id }}
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
              {data?.ingredients.map((food: string, idx: number) => (
                <span key={food}>
                  {food}
                  {/* {idx !== data.ingredients.length - 1 && <span>,</span>} */}
                </span>
              ))}
            </div>
          </S.IngredientBox>
          <S.contentBox>
            {data?.content.map((manual: string, idx: number) => (
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
