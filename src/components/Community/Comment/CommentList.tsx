import * as S from "./CommentListStyle";
import CommentPost from "./CommentPost";
import CommentItem from "./CommentItem";
import type { commentDataProps } from "../../../constants/interfaces";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const CommentList = (props: any) => {
  const [datas, setDatas] = useState<commentDataProps[]>([]);

  const location = useLocation();
  const { id } = props;
  const category = location.key;
  const { sid } = useParams();
  console.log(location.pathname, sid);

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
            writer: responseData[key].writer,
            time: responseData[key].time,
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

export default CommentList;
