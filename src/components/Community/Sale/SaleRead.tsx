import Navbar from "../../Navbar/Navbar";
import * as S from "./SaleReadStyle";
import CommentList from "../Comment/CommentList";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import Icons from "../../../Styles/Icons";
const readData = {
  title: "딸기 한박스",
  place: "역곡 홈플러스",
  price: "12000원",
  discountPrice: "9000원",
};

const DiscountRead = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const onDeleteHandler = () => {
    //삭제 로직 작성
    navigate("/community/sale");
  };

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
              <p>작성자: cooker</p>
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
        <CommentList category={location.state.category} id={id} />
      </S.ReadContainer>
    </>
  );
};

export default DiscountRead;
