import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./CommentPostStyle";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducer/rootReducer";

interface CommentProps {
  content: string;
}

const CommentPost = (props: any) => {
  const { register, handleSubmit, reset } = useForm<CommentProps>({});
  const user = useSelector((state: RootState) => state.user);
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const category = location.pathname.split("/")[2];

  const onSubmitHandler: SubmitHandler<CommentProps> = async (data) => {
    console.log(data);
    const postData = {
      board_id: id,
      nickname: user.username,
      content: data.content,
    };

    try {
      const response = await axios({
        url: `/${category}-comment`,
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
