import React, { useState, useEffect } from 'react';
import * as C from './ChatbotStyle';
import axios from 'axios';

const ChatbotPage = () => {
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState([]);
    const [dateData, setDateData] = useState([]);
    const [chatbotResponse, setChatbotResponse] = useState([]);
    const [userRequest, setUserRequest] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            setLoading(true);
            const response = await axios.get(
                "/weather"
            );
            setWeatherData(response.data);
            setLoading(false);
        };
        fetchWeatherData();
    }, []);
    console.log(weatherData);

    useEffect(() => {
        const fetchDateData = async () => {
            setLoading(true);
            const response = await axios.get(
                "/date"
            );
            setDateData(response.data);
            setLoading(false);
        };
        fetchDateData();
    }, []);
    console.log(dateData);

    // useEffect(() => {
    //     const fetchChatbotResponse = async () => {
    //         setLoading(true);
    //         const response = await axios.get(
    //             "/chatbot/message"
    //         );
    //         setChatbotResponse(response.data);
    //         setLoading(false);
    //     };
    //     fetchChatbotResponse();
    // }, []);
    // console.log(chatbotResponse);

    useEffect(() => {
        const getChatBotResponse = async () => {
            setLoading(true);
            await axios.post("/chatbot/message", {
                question: userRequest,
            })
            .then ((response) => {
                console.log(response.data)
                setChatbotResponse(response.data.choices.text);
                setLoading(false);
            })
        };
        getChatBotResponse();
    })

    return (
        <C.Container>
            <C.FirstDiv>
                <C.WeatherBox>
                    <C.WeatherIcon>{weatherData}날씨</C.WeatherIcon>
                    <C.DateBox>{dateData}2023-05-08</C.DateBox>
                </C.WeatherBox>
                <C.FoodBox>
                    <C.FoodText1>제철 음식</C.FoodText1>
                    <C.FoodText2>API로 제철음식 리스트 가져오기</C.FoodText2>
                </C.FoodBox>
            </C.FirstDiv>
            <C.SecondDiv>
                <C.UserRequestText>
                {userRequest}
                “Hi, the weather is cloudy today. 
                Please recommend a cooking recipe 
                accordingly”
                </C.UserRequestText>
                <C.ChatbotResponseText>
                {chatbotResponse}
                “Hello! A great recipe for a cloudy day is a warm 
                and comforting bowl of tomato soup with grilled
                cheese sandwiches.
                Here's a simple recipe you can try: .... ”
                </C.ChatbotResponseText>
                <C.UserInput>
                    
                </C.UserInput>
            </C.SecondDiv>
        </C.Container>
    )
}

export default ChatbotPage;