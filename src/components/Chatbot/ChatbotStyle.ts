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
    width: 40%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    margin: 0%;
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

export const WeatherIcon = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
`;

export const DateBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5%;
    font-size: 2rem;
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
    font-size: 1.5rem;
    font-weight: bold;
    color: #006B2B;
    margin-top: 5%;
`;

export const MonthFoodBox = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1rem;
    margin: 5%;
`;

export const MonthFoodList = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1rem;
    /* margin: 2%; */
`;

export const ChatbotDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 70vh;
    background-color: #C5DEC6;
    border-radius: 15px;
    padding: 1%;
    margin: 5%;
    position: relative;
`;

export const UserRequestWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const ChatbotResponseWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const UserRequestText = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    text-align: right;
    width: 90%;
    font-size: 1rem;
    background-color: white;
    border-radius: 15px;
    /* padding: 1.2%; */
    margin: 1%;
`;

export const ChatbotResponseText = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    font-size: 1rem;
    background-color: #FEFFC7;
    border-radius: 15px;
    /* padding: 1.2%; */
    margin: 1%;
    width: 90%;
`;

export const UserInput = styled.input`
    width: 650px;
    height: 30px;
    border-radius: 15px;
`;

export const ChatbotForm = styled.form`
    display: flex;
    position: absolute;
    top: 100%;
    transform: translateY(-200%);
`;

export const SubmitButton = styled.button`
    --webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: rgba(255, 255, 255, 0);
    width: 10px;
    height: 20px;
    margin-left: 2%;
`;