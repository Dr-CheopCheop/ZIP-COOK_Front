import { Link } from "react-router-dom";
import GetPostList from "../Post/GetPostList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipePosts from "./RecipePosts";
import RecipePagination from "./RecipePagination";
import * as R from "./RecipeMainStyle";

const RecipeMain = () => {
  const [recipePosts, setRecipePosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);
  const [searchQuery, setSearchQuery] = useState("");

  const getValue = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setSearchQuery(value.toLowerCase());
  }

  useEffect(() => {
    const fetchRecipeData = async () => {
      setLoading(true);
      const response = await axios.get(`/board-recipe?page=1`);
      setRecipePosts(response.data);
      setLoading(false);
    };
    fetchRecipeData();
  }, []);
  console.log(recipePosts);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  // const currentPosts = (posts: any) => {
  //   let currentPosts = 0;
  //   currentPosts = posts.slice(indexOfFirst, indexOfLast);
  //   return currentPosts;
  // };
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
    // <>
    //   <GetPostList category="recipe" />
    //   <Link to="/community/recipe/write">작성</Link>
    // </>
    <R.Container>
      <R.FirstDiv>
        <R.FirstDivText>RECIPE</R.FirstDivText>
        <R.SearchForm>
          <R.SearchInput onChange={getValue} />
          <R.SearchButton type="submit" onClick={searchPosts}>검색</R.SearchButton>
        </R.SearchForm>
        <R.WriteButton to="/community/recipe/write">글쓰기</R.WriteButton>
      </R.FirstDiv>
      <R.SecondDiv>
        <RecipePosts posts={currentPosts(recipePosts)} loading={loading} />
        <RecipePagination
          postsPerPage={postsPerPage}
          totalPosts={recipePosts.length}
          paginate={setCurrentPage}
        />
      </R.SecondDiv>
    </R.Container>
  );
};

export default RecipeMain;
