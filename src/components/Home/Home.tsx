import * as H from "./HomeStyle";
import NavBar from "../Navbar/Navbar";
// import foodImg from '../../img/HomeImg1.png';
// import peopleIcon from '../../img/HomeImg2.png';
// import robotIcon from '../../img/HomeImg3.png';

const HomePage = () => {
  return (
    <H.Container>
      <NavBar />
      <H.FirstDiv>
        <H.FirstBox1>
          ZIP COOK
          {/* <H.img1 src={foodImg} /> */}
        </H.FirstBox1>
        <H.FirstBox2>
          <H.RightText1>CUK에게 물어보세요</H.RightText1>
          <H.RightText2>
            Lorem ipsum dolor sit amet consectetur. Dignissim nunc et tempus
            molestie nibh purus. Nunc tristique lectus mauris dictum rhoncus.
          </H.RightText2>
          <H.ButtonWrap>
            <H.RecipeButton to="/community/recipe">RECIPE</H.RecipeButton>
            <H.MainButton to="/main">MAIN PAGE</H.MainButton>
          </H.ButtonWrap>
        </H.FirstBox2>
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
        </H.SecondBox1>
        <H.SecondBox2>
          {/* <H.img2 src={peopleIcon} /> */}
          <H.SecondText3>
            I'm not in a good mood today. So I want to eat something spicy.
            <br />
            Can you recommend a recipe accordingly?
          </H.SecondText3>
        </H.SecondBox2>
        <H.SecondBox3>
          <H.SecondText4>
            Sure, I'd be happy to help! Here's a recipe for spicy shrimp
            stir-fry that you might enjoy:
            <br />
            Ingredients:
            <br />
            - 1 pound large shrimp, peeled and deveined
            <br />
            - 1 tablespoon vegetable oil
            <br />
            - 2 cloves garlic, minced
            <br />
            - 1 tablespoon grated fresh ginger
            <br />
            - 1 red bell pepper, sliced
            <br />
            ...............
          </H.SecondText4>
          {/* <H.img3 src={robotIcon} /> */}
        </H.SecondBox3>
      </H.SecondDiv>
    </H.Container>
  );
};

export default HomePage;
