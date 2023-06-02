import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Container = styled.div<{ref: any}>`
  width: 100%;
  text-align: center;
`;
export const FirstDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`

export const FirstBox1 = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 4rem;
  text-align: center;
  padding-top: 5%;
  align-items: center;
  justify-content: center;
`

export const FirstBox2 = styled.div`
  width: 55%;
  top: 20%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10%;
  padding-top: 15%;
`

export const RightText1 = styled.div`
  display: flex;
  margin: 3%;
  font-size: 3rem;
  font-weight: bold;
`

export const RightText2 = styled.div`
  display: flex;
  margin: 3%;
  font-size: small;
`

export const ButtonWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const RecipeButton = styled(Link)`
  /* width: 30%; */
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
  cursor: pointer;
  background-color: #609966;
  border: none;
  text-align: center;
  border-radius: 20px 20px 20px 20px;
  margin: 3%;
  padding: 4%;
  box-shadow: 3px 3px 5px gray;
`

export const MainButton = styled(Link)`
  /* width: 40%; */
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
  cursor: pointer;
  background-color: #B8C27A;
  border: none;
  text-align: center;
  border-radius: 20px 20px 20px 20px;
  margin: 3%;
  padding: 4%;
  box-shadow: 3px 3px 5px gray;
  white-space: nowrap;
`

export const SecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #CDE990;
  width: 100%;
  height: 100vh;
  padding: 6%;
  padding-left: 20%;
  padding-right: 20%;
`

export const SecondBox1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
`

export const SecondText1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
  justify-content: left;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 130%;
`

export const SecondText2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
  justify-content: left;
  font-size: 1rem;
`

export const SecondBox2 = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
`

export const SecondText3 = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  background-color: white;
  border-radius: 20px 20px 20px 20px;
  padding: 1%;
`

export const SecondBox3 = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
`

export const SecondText4 = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  background-color: white;
  border-radius: 20px 20px 20px 20px;
  padding: 1%;
`

export const img1 = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 4%;
  box-shadow: 50px 50px #cceecc;
`

export const img2 = styled.img`
  display: flex;
  width: 8%;
  height: 40%;
  margin: 4%;
`

export const img3 = styled.img`
  display: flex;
  width: 8%;
  height: 40%;
  margin: 4%;
`

export const RecipeDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-left: 20%;
  padding-right: 20%;
`
export const RecipeText1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 2.5rem;
  font-weight: bolder;
  line-height: 130%;
  padding-top: 6%;
`;

export const RecipeBox = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;

export const RecipeImg = styled.img`
  display: flex;
  width: 50%;
  height: 100%;
  margin: 4%;
  border: 1px solid black;
`;

export const RecipeBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 10%;
`;

export const RecipeText2 = styled.div`
  display: flex;
  font-size: 1rem;
  line-height: 240%;
  text-align: left;
  align-items: center;
  justify-content: center;
`;

export const RecipeButton2 = styled(Link)`
  width: 60%;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
  cursor: pointer;
  background-color: #CDE990;
  border: none;
  text-align: center;
  border-radius: 20px 20px 20px 20px;
  margin: 3%;
  padding: 4%;
  box-shadow: 3px 3px 5px gray;
`

export const SharingDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #CDE990;
  padding-left: 20%;
  padding-right: 20%;
`
export const SharingText1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 2.5rem;
  font-weight: bolder;
  line-height: 130%;
  padding-top: 6%;
`;

export const SharingBox = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;

export const SharingImg = styled.img`
  display: flex;
  width: 50%;
  height: 100%;
  margin: 4%;
  border: 1px solid black;
`;

export const SharingBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 10%;
`;

export const SharingText2 = styled.div`
  display: flex;
  font-size: 1rem;
  line-height: 240%;
  text-align: left;
  align-items: center;
  justify-content: center;
`;

export const SharingButton = styled(Link)`
  width: 70%;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
  cursor: pointer;
  background-color: #609966;
  border: none;
  text-align: center;
  border-radius: 20px 20px 20px 20px;
  margin: 3%;
  padding: 4%;
  box-shadow: 3px 3px 5px gray;
`;

export const SaleDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-left: 20%;
  padding-right: 20%;
`
export const SaleText1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 2.5rem;
  font-weight: bolder;
  line-height: 130%;
  padding-top: 6%;
`;

export const SaleBox = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;

export const SaleImg = styled.img`
  display: flex;
  width: 50%;
  height: 100%;
  margin: 4%;
  border: 1px solid black;
`;

export const SaleBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 10%;
`;

export const SaleText2 = styled.div`
  display: flex;
  font-size: 1rem;
  line-height: 240%;
  text-align: left;
  align-items: center;
  justify-content: center;
`;

export const SaleButton = styled(Link)`
  width: 60%;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
  cursor: pointer;
  background-color: #CDE990;
  border: none;
  text-align: center;
  border-radius: 20px 20px 20px 20px;
  margin: 3%;
  padding: 4%;
  box-shadow: 3px 3px 5px gray;
`;