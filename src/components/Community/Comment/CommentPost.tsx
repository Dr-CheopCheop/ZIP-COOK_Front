import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import useAxios from "../../hooks/useAxios";
// import url from "../../constants/path";
import * as S from "./CommentPostStyle";

interface CommentProps {
  comment: string;
}

const CommentPost = () => {
  //   const axiosData = useAxios();

  const { register, handleSubmit } = useForm<CommentProps>({});
  //   const { isLoading, error, sendRequest: sendCommentRequest } = axiosData;

  const onSubmitHandler: SubmitHandler<CommentProps> = (data) => {
    console.log(data.comment);
  };

  //   if (isLoading) return <>댓글 작성중...</>;
  //   if (error) return <>댓글 작성 오류발생</>;
  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
        <input type="text" {...register("comment")} />
        <button type="submit">작성</button>
      </S.Form>
    </>
  );
};

export default CommentPost;
