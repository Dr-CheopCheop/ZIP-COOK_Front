import { Link } from "react-router-dom";
import GetPostList from "../Post/GetPostList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SalePosts from "./SalePosts";
import SalePagination from "./SalePagination";
import * as S from "./SaleMainStyle";
import { url } from "../../../constants/serverURL";

const SaleMain = () => {
  const [salePosts, setSalePosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  useEffect(() => {
    const fetchSaleData = async () => {
      setLoading(true);
      const response = await axios.get(`${url}/board-sale?page=1`);
      setSalePosts(response.data);
      setLoading(false);
    };
    fetchSaleData();
  }, []);
  console.log(salePosts);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts: any) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    // <div>
    //   <GetPostList category="discount" />
    //   <Link to="/community/discount/write">작성</Link>
    // </div>
    <S.Container>
      <S.FirstDiv>
        <S.FirstDivText>BARGAIN SALE</S.FirstDivText>
        <S.SearchInput></S.SearchInput>
        <S.WriteButton to="/community/sale/write">글쓰기</S.WriteButton>
      </S.FirstDiv>
      <S.SecondDiv>
        <SalePosts posts={currentPosts(salePosts)} loading={loading} />
        <SalePagination
          postsPerPage={postsPerPage}
          totalPosts={salePosts.length}
          paginate={setCurrentPage}
        />
      </S.SecondDiv>
    </S.Container>
  );
};

export default SaleMain;
