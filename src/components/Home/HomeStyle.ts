import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Container = styled.div`
  width: 100%;
  text-align: center;
`;

export const FirstDiv = styled.div`
    width: 100%;
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
  padding: 6%;
  padding-left: 10%;
  padding-right: 10%;
`

export const SecondBox1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
  justify-content: left;
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
  justify-content: left;
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
  justify-content: left;
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
  height: 8%;
  margin: 4%;
`

export const img3 = styled.img`
  display: flex;
  width: 8%;
  height: 8%;
  margin: 4%;
`
