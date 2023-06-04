import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./CommentPostStyle";
import { url } from "../../../constants/serverURL";
import axios from "axios";

interface CommentProps {
  content: string;
}

const CommentPost = (props: any) => {
  const { register, handleSubmit, reset } = useForm<CommentProps>({});

  const onSubmitHandler: SubmitHandler<CommentProps> = async (data) => {
    const postData = {
      id: Math.random(),
      writer: "Lee Ga yeong",
      time: "10분전",
      content: data.content,
    };
    try {
      const response = await axios({
        url: `${url}/recipe-comment`,
        method: "POST",
        data: postData,
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);

      props.onAddComment(postData);
      reset();
    } catch (e) {
      console.error(e);
    }
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
