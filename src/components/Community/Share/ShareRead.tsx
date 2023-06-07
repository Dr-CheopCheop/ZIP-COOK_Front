import Navbar from "../../Navbar/Navbar";
// import { useParams } from "react-router-dom";
// import DummyData from "../Dummydata";
import * as S from "./ShareReadStyle";
import CommentList from "../Comment/CommentList";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const readData = {
  title: "파프리카 가져가실분~",
  contents:
    "요리하고 남은거 가져가실분 계실까요 채소라 빠르게 가져가셨으면 좋겠습니다! 유통기한 (~3/31)",
};

const ShareRead = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const navigate = useNavigate();

  console.log("요청 url 주소", `/board-share/${id}`);
  console.log("share READ 요청 DATA:", data);

  const onDeleteHandler = async () => {
    //삭제 로직 작성
    try {
      const response = await axios({
        method: "DELETE",
        url: `/board-share/${id}`,
      });
      const responseData = await response.data;
      console.log(responseData);

      navigate("/community/share");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/board-share/${id}`);
        const responseData = await response.data;
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  });

  return (
    <>
      <Navbar />
      <S.ReadContainer>
        <S.TitleContainer>
          <S.TitleBox>
            <S.UpperTitle>
              <Link
                to="/community/share/write"
                state={{
                  update: true,
                  datas: readData,
                  num: id,
                }}
              >
                <S.TitleButton>수정</S.TitleButton>
              </Link>
              <S.TitleButton onClick={onDeleteHandler}>삭제</S.TitleButton>
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
        <CommentList id={id} />
      </S.ReadContainer>
    </>
  );
};

export default ShareRead;
