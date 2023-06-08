import * as M from './MainStyle';
import NavBar from '../Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipePosts from './RecipePosts';
import SharingPosts from './SharingPosts';
import SalePosts from './SalePosts';
import Pagination from './Pagination';
import icon from '../../img/MainPhoto.jpeg'
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { SET_TOKEN } from '../../reducer/userSlice';


const MainPage = () => {
    const [recipePosts, setRecipePosts] = useState<any[]>([]);
    const [sharingPosts, setSharingPosts] = useState([]);
    const [salePosts, setSalePosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [recipecurrentPage, setRecipeCurrentPage] = useState(1);
    const[salecurrentPage, setSaleCurrentPage] = useState(1);
    const[sharecurrentPage, setShareCurrentPage] = useState(1);

    // const [communityNum,setCommunityNum]=useState({
    //     recipeNum:1,
    //     shareeNum:1,
    //     saleNum:1,
    // })

    const [postsPerPage, setPostsPerPage] = useState(5);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [msg, setMsg] = useState("");

    console.log('recipe:',recipecurrentPage)

    console.log('sale:',salecurrentPage)
    console.log('share:',sharecurrentPage)

    useEffect(() => {
        const fetchRecipeData = async () => {
            setLoading(true);
            const response = await axios.get(
                `/board-recipe/main?page=${recipecurrentPage}`
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
                `/board-share/main?page=${sharecurrentPage}`
            );
            setSharingPosts(response.data);
            console.log(response);
            setLoading(false);
        };
        fetchSharingData();
    },[]);
    console.log(sharingPosts);

    useEffect(() => {
        const fetchSaleData = async () => {
            setLoading(true);
            const response = await axios.get(
                `/board-sale/main?page=${salecurrentPage}`
            );
            setSalePosts(response.data);
            console.log(response);
            setLoading(false);
        };
        fetchSaleData();
    }, []);
    console.log(salePosts);

    const indexOfLast1 = recipecurrentPage * postsPerPage;
    const indexOfLast2 = salecurrentPage * postsPerPage;
    const indexOfLast3 = sharecurrentPage * postsPerPage;
    const indexOfFirst1 = indexOfLast1 - postsPerPage;
    const indexOfFirst2 = indexOfLast2 - postsPerPage;
    const indexOfFirst3 = indexOfLast3 - postsPerPage;
    const currentPosts1 = (posts: any) => {
        return posts.slice(indexOfFirst1, indexOfLast1);
    };

    const currentPosts2 = (posts : any) => {
        return posts.slice(indexOfFirst2, indexOfLast2);
    }

    const currentPosts3 = (posts: any) => {
        return posts.slice(indexOfFirst3, indexOfLast3);
    }

    useEffect(() => {
       const accessToken = localStorage.getItem("accessToken");
       if(accessToken){
        setMsg("그대로 유지");
        dispatch(SET_TOKEN(accessToken));
       }else {
        navigate('/login');
       }
      },[]);

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
                <M.DiscountButton to="/community/sale">DISCOUNT</M.DiscountButton>
            </M.SecondDiv>
            <M.ThirdDiv>
                <M.RecipeText>RECIPE</M.RecipeText>
                <RecipePosts posts={currentPosts1(recipePosts)} loading={loading} />
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={recipePosts.length}
                  paginate={setRecipeCurrentPage}
                />
            </M.ThirdDiv>
            <M.FourthDiv>
                <M.SharingText>SHARING INGREDIENTS</M.SharingText>
                <SharingPosts posts={currentPosts2(sharingPosts)} loading={loading} />
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={sharingPosts.length}
                  paginate={setShareCurrentPage}
                />
            </M.FourthDiv>
            <M.FifthDiv>
                <M.DiscountText>SALE INCREDINENTS</M.DiscountText>
                <SalePosts posts={currentPosts3(salePosts)} loading={loading} />
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={salePosts.length}
                  paginate={setSaleCurrentPage}
                />
            </M.FifthDiv>
        </M.Container>
    )
}

export default MainPage;
