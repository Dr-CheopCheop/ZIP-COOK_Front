import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SharePosts from "./SharePosts";
import SharePagination from "./SharePagination";
import * as S from "./ShareMainStyle";
import GetPostList from "../Post/GetPostList";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducer/rootReducer";

const ShareMain = () => {
  const [sharePosts, setSharePosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);
  const [searchQuery, setSearchQuery] = useState("");
  const { sido } = useSelector((state: RootState) => state.address);

  const getValue = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setSearchQuery(value.toLowerCase());
  }

  useEffect(() => {
    const fetchShareData = async () => {
      setLoading(true);
      const response = await axios.get(`/board-share?location=${sido}&page=${currentPage}`);
      setSharePosts(response.data);
      setLoading(false);
    };
    fetchShareData();
  }, []);
  console.log(sharePosts);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts: any) => {
    let filteredPosts = posts.filter((post: any) =>
      post.title.toLowerCase().includes(searchQuery)
    );
    filteredPosts = filteredPosts.slice(indexOfFirst, indexOfLast);
    return filteredPosts;
  };

  const searchPosts = () => {
    setCurrentPage(1);
  }

  return (
    // <div>
    //   <GetPostList category="share" />
    //   <Link to="/community/share/write">작성</Link>
    // </div>
    <S.Container>
      <S.FirstDiv>
        <S.FirstDivText>SHARING</S.FirstDivText>
        <S.SearchForm>
          <S.SearchInput onChange={getValue} />
          <S.SearchButton type="submit" onClick={searchPosts}>검색</S.SearchButton>
        </S.SearchForm>
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
