import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./CommentPostStyle";
import { url } from "../../../constants/serverURL";
import axios from "axios";
import { useParams } from "react-router-dom";

interface CommentProps {
  content: string;
}

const CommentPost = (props: any) => {
  const { register, handleSubmit, reset } = useForm<CommentProps>({});
  const { id } = useParams();

  const onSubmitHandler: SubmitHandler<CommentProps> = async (data) => {
    const postData = {
      board_id: id,
      nickname: "Lee Ga yeong",
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
