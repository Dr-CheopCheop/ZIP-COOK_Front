import Navbar from "../../Navbar/Navbar";
import * as S from "./SaleReadStyle";
import CommentList from "../Comment/CommentList";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Icons from "../../../Styles/Icons";
import { useEffect, useState } from "react";
import axios from "axios";
import type { SaleReadProps } from "../../../constants/interfaces";

const DiscountRead = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState<SaleReadProps>();
  const id = location.pathname.split("/")[3];
  const sido = "서울특별시";

  console.log("요청 url 주소", `/board-sale/${sido}/${id}`);
  console.log("sale READ 요청 DATA:", data);

  const onDeleteHandler = async () => {
    //삭제 로직 작성
    try {
      const response = await axios({
        method: "DELETE",
        url: `/board-sale/${sido}/${id}`,
      });
      const responseData = await response.data;
      console.log(responseData);

      navigate("/community/sale");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`/board-sale/${sido}/${id}`);
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
                to="/community/sale/write"
                state={{ update: true, datas: data, num: id }}
              >
                <S.TitleButton>수정</S.TitleButton>
              </Link>
              <S.TitleButton onClick={onDeleteHandler}>삭제</S.TitleButton>
            </S.UpperTitle>
            <S.LowTitle>
              <p>작성자:{data?.nickname} </p>
            </S.LowTitle>
          </S.TitleBox>
          <S.TitleImage src={`/images/${data?.filepath}`} alt="" />
        </S.TitleContainer>
        <S.ContentsContainer>
          <div>
            <h1>{data?.title}</h1>
            <span>매장 : {data?.place}</span>
          </div>
          <div>
            <p>원가 : {data?.price}</p>
            <p>{Icons.downDirection}</p>
            <p>할인가 : {data?.discountPrice}</p>
          </div>
        </S.ContentsContainer>
        <CommentList id={id} />
      </S.ReadContainer>
    </>
  );
};

export default DiscountRead;
