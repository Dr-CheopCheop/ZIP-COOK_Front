import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeImg1 from '../../img/HomeImg1.jpeg';

export const Container = styled.div`
  width: 100%;
  text-align: center;
`;

export const FirstDiv = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 7% 15% 7% 15%;
  overflow: auto;
  ::after {
    width: 100%;
    height: 100%;
    content: "";
    background-image: url(${HomeImg1});
    opacity: 0.4;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const FirstBox1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  font-size: 5rem;
  text-align: left;
  align-items: flex-start;
  justify-content: center;
`;

export const FirstBox2 = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  font-weight: normal;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 5%;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 5%;
  font-weight: bold;
`;

export const ChatbotButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
  cursor: pointer;
  background-color: #609966;
  border: none;
  text-align: center;
  border-radius: 20px 20px 20px 20px;
  width: 200px;
  height: 50px;
  box-shadow: 3px 3px 5px gray;
`;

export const MainButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
  cursor: pointer;
  background-color: #b8c27a;
  border: none;
  text-align: center;
  border-radius: 20px 20px 20px 20px;
  margin-right: 3%;
  width: 200px;
  height: 50px;
  box-shadow: 3px 3px 5px gray;
  white-space: nowrap;
`;

export const SecondDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #cde990;
  width: 100%;
  height: 100vh;
  padding: 7% 15% 7% 15%;
  overflow: auto;
`;

export const SecondBox1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SecondText1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 5rem;
  font-weight: bolder;
  line-height: 130%;
`;

export const SecondText2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
  justify-content: left;
  font-size: 1.5rem;
  margin-top: 3%;
  margin-bottom: 7%;
`;

export const SecondBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 0%;
  padding: 0%;
`;

export const ChatbotImg = styled.img`
  display: flex;
  /* width: 500px;
  height: 450px; */
  width: 120%;
  height: 60%;
  margin: auto 0 0 auto;
`;

export const RecipeDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 7% 15% 7% 15%;
  padding-right: 1%;
  overflow: auto;
`;

export const RecipeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const RecipeText1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 5rem;
  font-weight: bolder;
  line-height: 130%;
`;

export const RecipeText2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.5rem;
  margin-top: 3%;
  margin-bottom: 7%;
`;

export const RecipeButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
  cursor: pointer;
  background-color: #b8c27a;
  border: none;
  text-align: center;
  border-radius: 20px 20px 20px 20px;
  width: 200px;
  height: 50px;
  box-shadow: 3px 3px 5px gray;
`;

export const RecipeBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 10%;
`;

export const RecipeImg = styled.img`
  display: flex;
  width: 100%;
  height: 60%;
  margin: auto 0 0 auto;
`;

export const SharingDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #cde990;
  padding: 7% 10% 7% 10%;
  padding-right: 3%;
  overflow: auto;
`;

export const SharingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 60%;
`;

export const SharingText1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 5rem;
  font-weight: bolder;
  line-height: 130%;
`;

export const SharingText2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.5rem;
  margin-top: 3%;
  margin-bottom: 7%;
`;

export const SharingButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
  cursor: pointer;
  background-color: #609966;
  border: none;
  text-align: center;
  border-radius: 20px 20px 20px 20px;
  width: 200px;
  height: 50px;
  box-shadow: 3px 3px 5px gray;
`;

export const SharingBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 10%;
  width: 40%;
`;

export const SharingImg = styled.img`
  display: flex;
  width: 100%;
  height: 60%;
  margin-right: 2%;
`;

export const SaleDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 7% 15% 7% 15%;
  padding-right: 1%;
  overflow: auto;
`;

export const SaleBox1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SaleText1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 4rem;
  font-weight: bolder;
  line-height: 130%;
`;

export const SaleBox2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  /* margin-left: 10%; */
`;

export const SaleTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SaleText2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.5rem;
  margin-top: 3%;
  margin-bottom: 7%;
`;

export const SaleButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
  cursor: pointer;
  background-color: #b8c27a;
  border: none;
  text-align: center;
  border-radius: 20px 20px 20px 20px;
  width: 200px;
  height: 50px;
  box-shadow: 3px 3px 5px gray;
`;

export const SaleImg = styled.img`
  display: flex;
  margin-left: 25%;
  /* width: 500px;
  height: 300px; */
  width: 30%;
  
`;