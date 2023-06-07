import { Link } from "react-router-dom";
import GetPostList from "../Post/GetPostList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SalePosts from "./SalePosts";
import SalePagination from "./SalePagination";
import * as S from "./SaleMainStyle";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducer/rootReducer";
import Icons from '../../../Styles/Icons';

const SaleMain = () => {
  const [salePosts, setSalePosts] = useState([]);
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
    const fetchSaleData = async () => {
      setLoading(true);
      const response = await axios.get(`/board-sale?location=${sido}`);
      setSalePosts(response.data);
      setLoading(false);
    };
    fetchSaleData();
  }, []);
  console.log(salePosts);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts: any) => {
    let filteredPosts = posts.filter((post: any) =>
      post.title.toLowerCase().includes(searchQuery)
    );
    filteredPosts = filteredPosts.slice(indexOfFirst, indexOfLast);
    return filteredPosts;
  }

  const searchPosts = () => {
    setCurrentPage(1);
  };

  return (
    // <div>
    //   <GetPostList category="discount" />
    //   <Link to="/community/discount/write">작성</Link>
    // </div>
    <S.Container>
      <S.CommunityListHeader>
        <span>SALE</span>
        <div>
          <S.InputBox>
            <input type="text" onChange={getValue} />
            <S.SearchButton type="submit" onClick={searchPosts}>{Icons.search}</S.SearchButton>
          </S.InputBox>
          <S.WriteButton to="/community/sale/write">글쓰기</S.WriteButton>
        </div>
      </S.CommunityListHeader>
      <S.SecondDiv>
        <S.PostList>
        <SalePosts posts={currentPosts(salePosts)} loading={loading} />
        </S.PostList>
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
