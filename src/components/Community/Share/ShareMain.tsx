import React, { useState, useEffect } from "react";
import axios from "axios";
import SharePosts from "./SharePosts";
import SharePagination from "./SharePagination";
import * as S from "./ShareMainStyle";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducer/rootReducer";
import Icons from "../../../Styles/Icons";
import { Link } from "react-router-dom";

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
  };

  useEffect(() => {
    const fetchShareData = async () => {
      setLoading(true);
      const response = await axios.get(
        `/board-share?location=${sido}`
      );
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
  };

  // const SharePosts = ({ posts, loading }: any) => {
  //   return (
  //     <>
  //       {loading && <div> loading... </div>}
  //       <div>
  //         <Link to="/community/share">
  //         {posts.map((post: any) => (
  //           <Link to={`/community/share/${post.id}`} key={post.id}>
  //           <S.PostWrap>
  //             <S.PostImg src={`/images/${post.filepath}`} />{<br />}
  //             {post.title}{<br />}
  //             DATE: {post.date}
  //           </S.PostWrap>
  //           </Link>
  //         ))}
  //         </Link>
  //       </div>
  //     </>
  //   );
  // };

  return (
    <S.Container>
      <S.CommunityListHeader>
        <span>SHARING</span>
        <div>
          <S.InputBox>
            <input type="text" onChange={getValue} />
            <S.SearchButton type="submit" onClick={searchPosts}>{Icons.search}</S.SearchButton>
          </S.InputBox>
          <S.WriteButton to="/community/share/write">글쓰기</S.WriteButton>
        </div>
      </S.CommunityListHeader>

      <S.SecondDiv>
        <S.PostList>
        <SharePosts posts={currentPosts(sharePosts)} loading={loading} />
        </S.PostList>
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
