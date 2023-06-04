import * as M from './MainStyle';
import NavBar from '../Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipePosts from './RecipePosts';
import SharingPosts from './SharingPosts';
import SalePosts from './SalePosts';
import Pagination from './Pagination';
import icon from '../../img/MainPhoto.jpeg'

const MainPage = () => {
    const [recipePosts, setRecipePosts] = useState([]);
    const [sharingPosts, setSharingPosts] = useState([]);
    const [salePosts, setSalePosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    useEffect(() => {
        const fetchRecipeData = async () => {
            setLoading(true);
            const response = await axios.get(
                "http://localhost:8080/board-recipe?page=1"
            );
            setRecipePosts(response.data);
            setLoading(false);
        };
        fetchRecipeData();
    }, []);
    console.log(recipePosts);

    useEffect(() => {
        const fetchSharingData = async () => {
            setLoading(true);
            const response = await axios.get(
                "http://localhost:8080/board-share?locaton=seoul&page=1"
            );
            setSharingPosts(response.data);
            setLoading(false);
        };
        fetchSharingData();
    }, []);
    console.log(sharingPosts);

    useEffect(() => {
        const fetchSaleData = async () => {
            setLoading(true);
            const response = await axios.get(
                "http://localhost:8080/board-sale?locaton=seoul&page=1"
            );
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
        <M.Container>
            <M.FirstDiv>
            <M.img src={icon}/>
                <M.TextBox1>
                    Make Healthy<br />
                    Home-Cooked
                </M.TextBox1>
                <M.TextBox2>
                    The chatbot will answer the recipe you want right away!<br />
                    Use Zip Cook anytime, anywhere.
                </M.TextBox2>
                <M.ChatbotButton to="/chatbot">Learn More {'   '} {'>'}</M.ChatbotButton>
            </M.FirstDiv>
            <M.SecondDiv>
                <M.AllButton to="/main">All</M.AllButton>
                <M.RecipeButton to="/community/recipe">RECIPE</M.RecipeButton>
                <M.SharingButton to="/community/share">SHARING INREDIENTS</M.SharingButton>
                <M.DiscountButton to="/community/discount">DISCOUNT</M.DiscountButton>
            </M.SecondDiv>
            <M.ThirdDiv>
                <M.RecipeText>RECIPE</M.RecipeText>
                <RecipePosts posts={currentPosts(recipePosts)} loading={loading} />
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={recipePosts.length}
                  paginate={setCurrentPage}
                />
            </M.ThirdDiv>
            <M.FourthDiv>
                <M.SharingText>SHARING INGREDIENTS</M.SharingText>
                <SharingPosts posts={currentPosts(sharingPosts)} loading={loading} />
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={sharingPosts.length}
                  paginate={setCurrentPage}
                />
            </M.FourthDiv>
            <M.FifthDiv>
                <M.DiscountText>RECIPE</M.DiscountText>
                <SalePosts posts={currentPosts(salePosts)} loading={loading} />
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={salePosts.length}
                  paginate={setCurrentPage}
                />
            </M.FifthDiv>
        </M.Container>
    )
}

export default MainPage;