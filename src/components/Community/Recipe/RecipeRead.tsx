import Navbar from "../../Navbar/Navbar";
import React, { useState, useEffect } from "react";
import * as S from "./RecipeReadStyle";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CommentList from "../Comment/RecipeCommentList";

import axios from "axios";
import type { RecipeReadProps } from "../../../constants/interfaces";

const RecipeRead = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState<RecipeReadProps>();
  const id = location.pathname.split("/")[3];

  console.log("요청 url 주소", `/board-recipe/${id}`);
  console.log("recipe READ 요청 DATA:", data);

  const onDeleteHandler = async () => {
    //삭제 로직 작성
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
  }, []);

  return (
    <>
      <Navbar />

      <S.ReadContainer>
        <S.TitleContainer>
          <S.TitleBox>
            <S.UpperTitle>
              <Link
                to="/community/recipe/write"
                state={{ update: true, datas: data, num: id }}
              >
                <S.TitleButton>수정</S.TitleButton>
              </Link>
              <S.TitleButton onClick={onDeleteHandler}>삭제</S.TitleButton>
            </S.UpperTitle>
            <S.LowTitle>
              <p>작성자: {data?.nickname}</p>
            </S.LowTitle>
          </S.TitleBox>
          <S.TitleImage src={`/images/${data?.filepath}`} alt="" />
        </S.TitleContainer>
        <S.RecipeContentsContainer>
          <h1>{data?.title}</h1>
          <S.RecipeContentsSummaryBox>
            <div>
              <h4>분량</h4>
              <span>{data?.serving}</span>
            </div>
            <div>
              <h4>조리시간</h4>
              <span>{data?.time}</span>
            </div>
            <div>
              <h4>조리난이도</h4>
              <span>{data?.level}</span>
            </div>
          </S.RecipeContentsSummaryBox>
          <S.foodsListContainer>
            <p>재료</p>
            <div>
              {data?.ingredients.map((food, idx) => (
                <React.Fragment key={food}>
                  <span> {food}</span>
                  {idx !== data?.ingredients.length - 1 && <span>,</span>}
                </React.Fragment>
              ))}
            </div>
          </S.foodsListContainer>
          <S.manualsListBox>
            {data?.content.map((manual) => (
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
