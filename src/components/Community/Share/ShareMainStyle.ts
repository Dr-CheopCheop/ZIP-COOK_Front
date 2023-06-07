import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../../Styles/Colors";

export const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

export const FirstDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 2%;
`;

export const FirstDivText = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bolder;
  margin-left: 7%;
`;

export const SearchForm = styled.form`
    display: flex;
`;

export const SearchInput = styled.input`
  width: 10%;
  margin-left: 60%;
`;

export const SearchButton = styled.button`
    --webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: rgba(255, 255, 255, 0);
`;

export const WriteButton = styled(Link)`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
  border: none;
  text-align: center;
  width: 100px;
  height: 50%;
  margin-top: 5%;
  margin-left: 5%;
  justify-content: center;
  align-items: center;
  background-color: #f7c04a;
  border-radius: 10px;
`;

export const SecondDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const PostSpan = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;
`;

export const PostWrap = styled.div`
  width: 100%;
  height: 20%;
  margin-bottom: 4%;
  border: 1px solid black;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const PostImgDiv = styled.div`
  text-align: center;
`;

export const PostImg = styled.img`
  max-width: 95%;
  max-height: 100%;
`;

export const PostList = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, minmax(10rem, auto));
  grid-template-rows: repeat(5, minmax(30%, auto));
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 2rem 2rem;
  place-items: stretch stretch;
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

export const InputBox = styled.form`
  position: relative;
  width: 300px;
  height: 30px;
  margin: 30px auto 0;
  color: ${Colors.zipCookYellow};
  input {
    display: block;
    width: 300px;
    height: 100%;
    background-color: transparent;
    border: 1px solid white;
    padding-right: 50px;
    color: ${Colors.zipCookYellow};
    font-size: 12px;
    border-bottom: 1px solid ${Colors.zipCookYellow};
  }
  input::placeholder {
    color: #d9d9d9;
  }
  input:focus {
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0%, -50%);
    font-size: 20px;
  }
`;

export const CommunityListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 40px;
    line-height: 80px;
  }
  div {
    display: flex;
  }
`;
