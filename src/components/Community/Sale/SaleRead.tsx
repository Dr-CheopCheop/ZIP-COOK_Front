import Navbar from "../../Navbar/Navbar";
import * as S from "./SaleReadStyle";
import CommentList from "../Comment/CommentList";
import { Link, useParams, useNavigate } from "react-router-dom";
import Icons from "../../../Styles/Icons";
import { useEffect, useState } from "react";
import axios from "axios";

const readData = {
  title: "딸기 한박스",
  place: "역곡 홈플러스",
  price: "12000원",
  discountPrice: "9000원",
};

const DiscountRead = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();

  console.log("요청 url 주소", `/board-sale/${id}`);
  console.log("sale READ 요청 DATA:", data);
  const onDeleteHandler = async () => {
    //삭제 로직 작성
    try {
      const response = await axios({
        method: "DELETE",
        url: `/board-sale/${id}`,
      });
      const responseData = await response.data;
      console.log(responseData);

      navigate("/community/sale");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/board-sale/${id}`);
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
                to="/community/sale/write"
                state={{ update: true, datas: readData, num: id }}
              >
                <S.TitleButton>수정</S.TitleButton>
              </Link>
              <S.TitleButton onClick={onDeleteHandler}>삭제</S.TitleButton>
            </S.UpperTitle>
            <S.LowTitle>
              <p>작성자:임시데이터 </p>
              <p>2023.03.26 16:53</p>
            </S.LowTitle>
          </S.TitleBox>
          <S.TitleImage src="http://placehold.it/250x250" alt="" />
        </S.TitleContainer>
        <S.ContentsContainer>
          <div>
            <h1>{readData.title}</h1>
            <span>매장 : {readData.place}</span>
          </div>
          <div>
            <p>원가 : {readData.price}</p>
            <p>{Icons.downDirection}</p>
            <p>할인가 : {readData.discountPrice}</p>
          </div>
        </S.ContentsContainer>
        <CommentList id={id} />
      </S.ReadContainer>
    </>
  );
};

export default DiscountRead;
