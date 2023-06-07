import Navbar from "../../Navbar/Navbar";
// import { useParams } from "react-router-dom";
// import DummyData from "../Dummydata";
import * as S from "./ShareReadStyle";
import CommentList from "../Comment/CommentList";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import type { ShareReadProps } from "../../../constants/interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducer/rootReducer";

const ShareRead = () => {
  const location = useLocation();
  const [data, setData] = useState<ShareReadProps>();
  const id = location.pathname.split("/")[3];
  const navigate = useNavigate();

  const { sido } = useSelector((state: RootState) => state.address);

  console.log("요청 url 주소", `/board-share/${sido}/${id}`);
  console.log("share READ 요청 DATA:", data);

  const onDeleteHandler = async () => {
    //삭제 로직 작성
    try {
      const response = await axios({
        method: "DELETE",
        url: `/board-share/${sido}/${id}`,
      });
      const responseData = await response.data;
      console.log(responseData);

      navigate("/community/share");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`/board-share/${sido}/${id}`);
      const responseData = await response.data;
      setData(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                  datas: data,
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
          <h1>{data?.title}</h1>
          <div>경기도 부천시 역곡동 12-1</div>

          <div>{data?.content}</div>
        </S.ContentsContainer>
        <CommentList id={id} />
      </S.ReadContainer>
    </>
  );
};

export default ShareRead;
