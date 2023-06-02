import { Link } from 'react-router-dom';
import styled from  'styled-components';
import Colors from '../../../Styles/Colors';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
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

export const SearchInput = styled.input`
    width: 10%;
    margin-left: 60%;
`;

export const WriteButton = styled(Link)`
    font-size: 1rem;
    text-decoration: none;
    color: black;
    cursor: pointer;
    border: none;
    text-align: center;
    margin-left: 1%;
    padding: .5%;
    background-color: #F7C04A;
    border-radius: 15px 15px 15px 15px;
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
    background-color: #F7C04A;
    border-radius: 50%;
    border: none;
    padding: 1%;
    margin: 0.5%;
`;

