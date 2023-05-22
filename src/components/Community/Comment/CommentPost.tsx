import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import url from "../../../constants/path";
import * as S from "./CommentPostStyle";

interface CommentProps {
  content: string;
}

const CommentPost = (props: any) => {
  const axiosData = useAxios();

  const { register, handleSubmit, reset } = useForm<CommentProps>({});
  const { sendRequest: sendCommentRequest } = axiosData;

  const abc = (responseData: any) => {
    console.log(responseData);
    reset();
  };
  const onSubmitHandler: SubmitHandler<CommentProps> = (data) => {
    const postData = {
      id: Math.random(),
      writer: "Lee Ga yeong",
      time: "10분전",
      content: data.content,
    };
    props.onAddComment(postData);
    sendCommentRequest(
      {
        url: `${url}/comments.json`,
        method: "POST",
        data: postData,
        headers: { "Content-Type": "application/json" },
      },
      abc
    );
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
        <input type="text" {...register("content")} />
        <button type="submit">작성</button>
      </S.Form>
    </>
  );
};

export default CommentPost;
