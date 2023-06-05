import * as S from "./RecipeCommentListStyle";
import CommentPost from "./CommentPost";
import CommentItem from "./CommentItem";
import type { commentDataProps } from "../../../constants/interfaces";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const RecipeCommentList = (props: any) => {
  const [datas, setDatas] = useState<commentDataProps[]>([]);

  const location = useLocation();
  const { id } = props;
  const category = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `/${category}-comment/${id}`,
        });
        const responseData = await response.data;
        const loadedDatas: commentDataProps[] = [];
        for (const key in responseData) {
          loadedDatas.push({
            id: responseData[key].id,
            nickname: responseData[key].nickname,
            content: responseData[key].content,
          });
        }

        setDatas(loadedDatas);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  });

  const onAddCommentHanlder = (content: any) => {
    setDatas([...datas, content]);
  };

  const onDeleteCommentHandler = (id: any) => {
    const filteredDatas = datas.filter((data) => data.id !== id);
    setDatas(filteredDatas);
  };

  const onEditCommentHandler = (id: any, editComment: string) => {
    setDatas(
      datas.map((data) =>
        data.id === id ? { ...data, content: editComment } : data
      )
    );
  };

  return (
    <S.CommentListWrapper>
      <S.CountComments>
        댓글 <span>{datas.length}</span>
      </S.CountComments>
      {datas.map((data) => (
        <CommentItem
          key={data.id}
          data={data}
          onDeleteComment={onDeleteCommentHandler}
          onEditComment={onEditCommentHandler}
        />
      ))}
      <CommentPost onAddComment={onAddCommentHanlder} />
    </S.CommentListWrapper>
  );
};

export default RecipeCommentList;
