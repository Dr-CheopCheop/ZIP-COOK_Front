import { Link } from "react-router-dom";
import GetPostList from "../Post/GetPostList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipePosts from "./RecipePosts";
import RecipePagination from "./RecipePagination";
import * as R from "./RecipeMainStyle";
import Icons from "../../../Styles/Icons";
import { useDispatch } from 'react-redux';
import { SET_TOKEN } from '../../../reducer/userSlice';
import { useNavigate } from 'react-router-dom'; 


const RecipeMain = () => {
  const [recipePosts, setRecipePosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
      const accessToken = localStorage.getItem("accessToken");
      if(accessToken){
      dispatch(SET_TOKEN(accessToken));
      }else {
      navigate('/login');
      }
    },[]);


  const getValue = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setSearchQuery(value.toLowerCase());
  }

  useEffect(() => {
    const fetchRecipeData = async () => {
      setLoading(true);
      const response = await axios.get(`/board-recipe?page=${currentPage}`);
      setRecipePosts(response.data);
      setLoading(false);
    };
    fetchRecipeData();
  }, []);
  console.log(recipePosts);

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
    <R.Container>
      <R.CommunityListHeader>
        <span>RECIPE</span>
        <div>
          <R.InputBox>
            <input type="text" onChange={getValue} />
            <R.SearchButton type="submit" onClick={searchPosts}>{Icons.search}</R.SearchButton>
          </R.InputBox>
          <R.WriteButton to="/community/recipe/write">글쓰기</R.WriteButton>
        </div>
      </R.CommunityListHeader>
      <R.SecondDiv>
        <R.PostList>
          <RecipePosts posts={currentPosts(recipePosts)} loading={loading} />
        </R.PostList>
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
