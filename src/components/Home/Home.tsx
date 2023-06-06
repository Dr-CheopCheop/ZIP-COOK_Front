import * as H from "./HomeStyle";
import useScrollSnap from "react-use-scroll-snap";
import React, { useRef } from "react";
import chatbotImg from '../../img/ChatbotImg.png';
import recipeImg from "../../img/RecipeImg.png";
import sharingImg from "../../img/SharingImg.png";
import saleImg from "../../img/SaleImg.png";

const HomePage = () => {
  return (
    <H.Container>
      <H.FirstDiv>
        <H.FirstBox1>
            오늘 뭐먹을 지 <br />고민될 때
            <H.FirstBox2>
                날씨, 계절에 따른 추천 레시피 <br />
                먹고싶은 음식에 대한 레시피 모두 ZIP COOK에게 물어보세요!
            </H.FirstBox2>
            <H.ButtonWrap>
                <H.MainButton to="/main">MAIN PAGE</H.MainButton>
                <H.ChatbotButton to="/chatbot">CHATBOT</H.ChatbotButton>
            </H.ButtonWrap>
        </H.FirstBox1>
      </H.FirstDiv>
      <H.SecondDiv>
        <H.SecondBox1>
          <H.SecondText1>
            ASK THE
            <br />
            CHATBOT
            <br />
            ANYTHING!
          </H.SecondText1>
          <H.SecondText2>
            We provide customized recipes
            <br />
            such as my mood and weather.
          </H.SecondText2>
          <H.ChatbotButton to="/chatbot">CHATBOT</H.ChatbotButton>
        </H.SecondBox1>
        <H.SecondBox2>
            <H.ChatbotImg src={chatbotImg} />
        </H.SecondBox2>
      </H.SecondDiv>
      <H.RecipeDiv>
        <H.RecipeBox>
          <H.RecipeText1>
            SHARE YOUR <br />
            OWN RECIPE !
          </H.RecipeText1>
          <H.RecipeText2>
            SHARE YOUR OWN RECIPE! <br />
            AND REFER TO OTHER'S OWN RECIPE!
          </H.RecipeText2>
          <H.RecipeButton to="/community/recipe">RECIPE</H.RecipeButton>
        </H.RecipeBox>
        <H.RecipeBox2>
            <H.RecipeImg src={recipeImg} />
        </H.RecipeBox2>
      </H.RecipeDiv>
      <H.SharingDiv>
        <H.SharingBox>
            <H.SharingText1>
            SHARE THE <br />
            LEFTOVER <br />
            INGREDIENTS !
            </H.SharingText1>
            <H.SharingText2>
              남아서 버리기 아까웠던 식재료 <br />
              이제는 ZIP-COOK 유저들과 나눠보세요 !
            </H.SharingText2>
            <H.SharingButton to="/community/share">SHARING</H.SharingButton>
        </H.SharingBox>
        <H.SharingBox2>
            <H.SharingImg src={sharingImg} />
        </H.SharingBox2>
      </H.SharingDiv>
      <H.SaleDiv>
        <H.SaleBox1>
            <H.SaleText1>
            YOU CAN BUY <br />
            INGREDIENTS <br />
            AT A CHEAPER PRICE !
            </H.SaleText1>
        </H.SaleBox1>
        <H.SaleBox2>
            <H.SaleTextBox>
                <H.SaleText2>
                주변 마트의 식재료 할인정보 <br />
                ZIP-COOK 유저들과 공유할 수 <br />
                있어요
                </H.SaleText2>
                <H.SaleButton to="/community/sale">SALE</H.SaleButton>
            </H.SaleTextBox>
            <H.SaleImg src={saleImg} />
        </H.SaleBox2>
      </H.SaleDiv>
    </H.Container>
  );
};

export default HomePage;
