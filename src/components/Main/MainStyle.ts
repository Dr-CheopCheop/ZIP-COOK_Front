import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FirstDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 2% 5% 2% 5%;
  margin: 3%;
  border-radius: 15px 15px 15px 15px;
  position: relative;
`;

export const img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 1rem;
  border-radius: 20px;
  opacity: 0.5;
  z-index: -1;
`;

export const TextBox1 = styled.div`
  display: flex;
  font-size: 3.5rem;
  font-weight: bolder;
  text-align: left;
  align-items: flex-start;
`;

export const TextBox2 = styled.div`
  display: flex;
  font-size: 1rem;
  text-align: left;
  align-items: flex-start;
`;

export const ChatbotButton = styled(Link)`
  width: 20%;
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
  background-color: #f7c04a;
  border: none;
  text-align: left;
  border-radius: 20px 20px 20px 20px;
  padding: 1%;
  padding-left: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
`;

export const SecondDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 20px 20px;
  border: 1px solid #e2e2e2;
  margin-bottom: 1%;
`;

export const AllButton = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
  border: none;
  text-align: center;
  padding: 1% 5% 1% 5%;
`;

export const RecipeButton = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
  border: none;
  text-align: center;
  padding: 1% 5% 1% 5%;
`;

export const SharingButton = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
  border: none;
  text-align: center;
  padding: 1% 5% 1% 5%;
`;

export const DiscountButton = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
  border: none;
  text-align: center;
  padding: 1% 5% 1% 5%;
`;

export const ThirdDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const RecipeText = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  font-weight: bolder;
  font-size: 1.5rem;
`;

export const RecipePostWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const PageButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  padding: 2%;
  justify-content: center;
  align-items: center;
`;

export const PageButton = styled.button`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #f7c04a;
  border-radius: 50%;
  border: none;
  padding: 1%;
  margin: 0.5%;
`;

export const PostSpan = styled.span`
  border: 1px solid black;
  border-radius: 15px;
`;

export const FourthDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const SharingText = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  font-weight: bolder;
  font-size: 1.5rem;
`;

export const SharingPostWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const FifthDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const DiscountText = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  font-weight: bolder;
  font-size: 1.5rem;
`;

export const DiscountPostWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Div = styled.div`
  width: 300px;
`