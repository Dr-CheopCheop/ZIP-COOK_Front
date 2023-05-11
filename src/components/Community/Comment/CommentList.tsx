import * as S from "./CommentListStyle";
// import useAxios from "../../hooks/useAxios";
import CommentPost from "./CommentPost";

const datas = [
  {
    id: 1,
    writer: "Lee Ga Yeong",
    time: "30분전",
    comment: "아무도 없나요..",
  },
  {
    id: 2,
    writer: "Kim Ga Yeong",
    time: "1시간전",
    comment: "가나다라",
  },
];
const CommentList = () => {
  return (
    <S.CommentListWrapper>
      <S.CountComments>
        댓글 <span>{datas.length}</span>
      </S.CountComments>
      {datas.map((data) => (
        <S.CommentItem key={data.id}>
          <div>
            {data.writer}
            <span>{data.time}</span>
          </div>
          <div>{data.comment}</div>
        </S.CommentItem>
      ))}
      <CommentPost />
    </S.CommentListWrapper>
  );
};

export default CommentList;
