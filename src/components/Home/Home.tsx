import * as H from './HomeStyle';
import NavBar from '../Navbar/Navbar';
import useScrollSnap from 'react-use-scroll-snap';
import React, { useRef } from 'react';
import foodImg from '../../img/HomeImg1.png';
import peopleIcon from '../../img/HomeImg2.png';
import robotIcon from '../../img/HomeImg3.png';
import recipeImg from '../../img/RecipeImg.png';
import sharingImg from '../../img/SharingImg.png';
import saleImg from '../../img/SaleImg.png';
// import UseScrollSnap from '../../hooks/UseScrollSnap';

const HomePage = () => {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 1 });
    return (
        <H.Container ref={scrollRef}>
            <H.FirstDiv>
                <H.FirstBox1>
                    ZIP COOK
                    <H.img1 src={foodImg} />
                </H.FirstBox1>
                <H.FirstBox2>
                    <H.RightText1>CUK에게 물어보세요</H.RightText1>
                    <H.RightText2>Lorem ipsum dolor sit amet consectetur. Dignissim nunc et tempus molestie nibh purus. Nunc tristique lectus mauris dictum rhoncus.</H.RightText2>
                    <H.ButtonWrap>
                        <H.RecipeButton to="/community/recipe">RECIPE</H.RecipeButton>
                        <H.MainButton to="/main">MAIN PAGE</H.MainButton>
                    </H.ButtonWrap>
                </H.FirstBox2>
            </H.FirstDiv>
            <H.SecondDiv>
                <H.SecondBox1>
                    <H.SecondText1>ASK THE<br />CHATBOT<br />ANYTHING!</H.SecondText1>
                    <H.SecondText2>We provide customized recipes<br />such as my mood and weather.</H.SecondText2>
                </H.SecondBox1>
                <H.SecondBox2>
                    <H.img2 src={peopleIcon} />
                    <H.SecondText3>I'm not in a good mood today. So I want to eat something spicy.
                        <br />
                        Can you recommend a recipe accordingly?
                    </H.SecondText3>
                </H.SecondBox2>
                <H.SecondBox3>
                    <H.SecondText4>
                    Sure, I'd be happy to help! Here's a recipe for spicy shrimp stir-fry that you might enjoy:<br />
                    Ingredients:<br />
                    - 1 pound large shrimp, peeled and deveined<br />
                    - 1 tablespoon vegetable oil<br />
                    - 2 cloves garlic, minced<br />
                    - 1 tablespoon grated fresh ginger<br />
                    - 1 red bell pepper, sliced<br />
                    ...............
                    </H.SecondText4>
                    <H.img3 src={robotIcon} />
                </H.SecondBox3>
            </H.SecondDiv>
            <H.RecipeDiv>
                <H.RecipeText1>
                  SHARE YOUR <br />
                  OWN RECIPE !
                </H.RecipeText1>
                <H.RecipeBox>
                    <H.RecipeImg src={recipeImg} />
                    <H.RecipeBox2>
                        <H.RecipeText2>
                          SHARE YOUR OWN RECIPE! <br />
                          AND REFER TO OHTER’S OWN <br />
                          RECIPE!
                        </H.RecipeText2>
                        <H.RecipeButton2 to="/community/recipe">RECIPE</H.RecipeButton2>
                    </H.RecipeBox2>
                </H.RecipeBox>
            </H.RecipeDiv>
            <H.SharingDiv>
                <H.SharingText1>
                  SHARE THE <br />
                  LEFTOVER INGREDIENTS !
                </H.SharingText1>
                <H.SharingBox>
                    <H.SharingImg src={sharingImg} />
                    <H.SharingBox2>
                        <H.SharingText2>
                          남아서 버리기 아까웠던 식재료 <br />
                          이제는 ZIP-COOK 유저들과 <br />
                          나눠보세요 !
                        </H.SharingText2>
                        <H.SharingButton to="/community/share">SHARING</H.SharingButton>
                    </H.SharingBox2>
                </H.SharingBox>
            </H.SharingDiv>
            <H.SaleDiv>
                <H.SaleText1>
                  YOU CAN BUY INGREDIENTS <br />
                  AT A CHEAPER PRICE !
                </H.SaleText1>
                <H.SaleBox>
                    <H.SaleImg src={saleImg} />
                    <H.SaleBox2>
                        <H.SaleText2>
                          주변 마트의 식재료 할인정보 <br />
                          ZIP-COOK 유저들과 공유할 수 <br />
                          있어요
                        </H.SaleText2>
                        <H.SaleButton to="/community/sale">SALE</H.SaleButton>
                    </H.SaleBox2>
                </H.SaleBox>
            </H.SaleDiv>
        </H.Container>
    )
}

export default HomePage;
