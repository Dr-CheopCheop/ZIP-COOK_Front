import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../../Styles/Colors';

export const Container = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const FirstDiv = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

export const WeatherBox = styled.div`
    display: flex;
    width: 80%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    box-shadow: 3px 3px 5px gray;
    background-color: white;
    margin: 10%;
    font-size: 3rem;
    text-align: left;
`;

export const WeatherIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5%;
`;

export const DateBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5%;
    font-size: 3rem;
    text-align: left;
`;

export const FoodBox = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 15px;
    box-shadow: 3px 3px 5px gray;
    background-color: white;
    margin: 10%;
`;

export const FoodText1 = styled.div`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #006B2B;
    margin: 5%;
`;

export const FoodText2 = styled.div`
    text-align: center;
    font-size: 1rem;
    margin: 5%;
`;

export const SecondDiv = styled.div`
    /* display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #C5DEC6;
    border-radius: 20px 20px 20px 20px;
    padding: 1%; */
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    /* position: relative; */
    width: 50%;
    background-color: #C5DEC6;
    border-radius: 15px;
    padding: 1%;
`;

export const UserRequestText = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
    width: 80%;
    /* position: absolute; */
    font-size: 1rem;
    background-color: white;
    border-radius: 15px;
    padding: 1.2%;
    margin: 1%;
    /* overflow: hidden; */
    /* left: 100px; */
`;

export const ChatbotResponseText = styled.div`
    /* display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    font-size: 1rem;
    background-color: #FEFFC7;
    border-radius: 15px;
    padding: 1.2%;
    margin: 1%; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    font-size: 1rem;
    background-color: #FEFFC7;
    border-radius: 15px;
    padding: 1.2%;
    margin: 1%;
    /* overflow: hidden; */
    width: 80%;
`;

export const UserInput = styled.input``;

export const ChatbotForm = styled.form``;

export const SubmitButton = styled.button``;