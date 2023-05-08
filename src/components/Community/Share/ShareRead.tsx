import Navbar from "../../Navbar/Navbar";
// import { useParams } from "react-router-dom";
// import DummyData from "../Dummydata";
import * as S from "./ShareReadStyle";
import CommentList from "../Comment/CommentList";
const ShareRead = () => {
  // const { id } = useParams();
  // const selectData = DummyData.find((data) => data.id === Number(id));
  // const { title, difficulty, cookTime } = selectData ?? {
  //   title: "존재하지 않는 게시물 입니다.",
  // };

  return (
    <>
      <Navbar />
      <S.ReadContainer>
        <S.TitleContainer>
          <S.TitleBox>
            <S.UpperTitle>
              <S.TitleButton>수정</S.TitleButton>
              <S.TitleButton>삭제</S.TitleButton>
            </S.UpperTitle>
            <S.LowTitle>
              <p>작성자: cooker</p>
              <p>2023.03.26 16:53</p>
            </S.LowTitle>
          </S.TitleBox>
          <S.TitleImage src="http://placehold.it/250x250" alt="" />
        </S.TitleContainer>
        <S.ContentsContainer>
          <h1>파프리카 가져가실분~</h1>
          <div>경기도 부천시 역곡동 12-1</div>

          <div>
            요리하고 남은거 가져가실분 계실까요 채소라 빠르게 가져가셨으면
            좋겠습니다! 유통기한 (~3/31)
          </div>
        </S.ContentsContainer>
        <CommentList />
      </S.ReadContainer>
    </>
  );
};

export default ShareRead;
