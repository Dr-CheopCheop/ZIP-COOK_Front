import { Link } from "react-router-dom";
import GetPostList from "../Post/GetPostList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DiscountPosts from "./DiscountPosts";
import DiscountPagination from "./DiscountPagination";
import * as D from "./DiscountMainStyle";

const DiscountMain = () => {
  const [discountPosts, setDiscountPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  useEffect(() => {
    const fetchDiscountData = async () => {
      setLoading(true);
      const response = await axios.get("/board-sale");
      setDiscountPosts(response.data);
      setLoading(false);
    };
    fetchDiscountData();
  }, []);
  console.log(discountPosts);

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
    <D.Container>
      <D.FirstDiv>
        <D.FirstDivText>BARGAIN SALE</D.FirstDivText>
        <D.SearchInput></D.SearchInput>
        <D.WriteButton to="/community/discount/writer">글쓰기</D.WriteButton>
      </D.FirstDiv>
      <D.SecondDiv>
        <DiscountPosts posts={currentPosts(discountPosts)} loading={loading} />
        <DiscountPagination
          postsPerPage={postsPerPage}
          totalPosts={discountPosts.length}
          paginate={setCurrentPage}
        />
      </D.SecondDiv>
    </D.Container>
  );
};

export default DiscountMain;
