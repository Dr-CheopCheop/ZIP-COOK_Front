import Navbar from "../../Navbar/Navbar";
// import { useParams } from "react-router-dom";
// import DummyData from "../Dummydata";
import * as S from "./ShareReadStyle";
import CommentList from "../Comment/CommentList";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import type { ShareReadProps } from "../../../constants/interfaces";

const ShareRead = () => {
  const location = useLocation();
  const [data, setData] = useState<ShareReadProps>();
  const id = location.pathname.split("/")[3];
  const navigate = useNavigate();
  const [sido, setSido] = useState();

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

  const fetchSido = async () => {
    const userInfoRes = await axios.get("/auth/user");
    const userInfo = await userInfoRes.data;

    setSido(userInfo.location.split(" ")[0]);
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
    fetchSido();
  }, []);

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
              <p>작성자: {data?.nickname}</p>
            </S.LowTitle>
          </S.TitleBox>
          <S.TitleImage src={`/images/${data?.filepath}`} alt="" />
        </S.TitleContainer>
        <S.ContentsContainer>
          <h1>{data?.title}</h1>
          <div>{data?.content}</div>
        </S.ContentsContainer>
        <CommentList id={id} />
      </S.ReadContainer>
    </>
  );
};

export default ShareRead;
