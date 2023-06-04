import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SharePosts from "./SharePosts";
import SharePagination from "./SharePagination";
import * as S from "./ShareMainStyle";
import GetPostList from "../Post/GetPostList";
import { url } from "../../../constants/serverURL";

const ShareMain = () => {
  const [sharePosts, setSharePosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  useEffect(() => {
    const fetchShareData = async () => {
      setLoading(true);
      const response = await axios.get(`${url}/board-share?page=1`);
      setSharePosts(response.data);
      setLoading(false);
    };
    fetchShareData();
  }, []);
  console.log(sharePosts);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts: any) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    // <div>
    //   <GetPostList category="share" />
    //   <Link to="/community/share/write">작성</Link>
    // </div>
    <S.Container>
      <S.FirstDiv>
        <S.FirstDivText>SHARING</S.FirstDivText>
        <S.SearchInput></S.SearchInput>
        <S.WriteButton to="/community/share/write">글쓰기</S.WriteButton>
      </S.FirstDiv>
      <S.SecondDiv>
        <SharePosts posts={currentPosts(sharePosts)} loading={loading} />
        <SharePagination
          postsPerPage={postsPerPage}
          totalPosts={sharePosts.length}
          paginate={setCurrentPage}
        />
      </S.SecondDiv>
    </S.Container>
  );
};

export default ShareMain;
