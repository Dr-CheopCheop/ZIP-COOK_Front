import React, { useState, useEffect } from 'react';
import * as C from './ChatbotStyle';
import axios from 'axios';
import Clock from 'react-live-clock';
import { url } from "../../constants/serverURL";

const ChatbotPage = () => {
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState([]);
    // const [dateData, setDateData] = useState([]);
    const [chatbotResponse, setChatbotResponse] = useState([]);
    const [userRequest, setUserRequest] = useState("");
    // const [today, setToday] = useState(now.getDate())
    
  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const {
      currentTarget: { value },
    } = e;
    setUserRequest(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userRequest);
  };

  useEffect(() => {
    const getChatBotResponse = async () => {
      setLoading(true);
      await axios
        .post(`/chatbot/message`, {
          question: userRequest,
        })
        .then((response) => {
          console.log(response.data);
          setChatbotResponse(response.data.choices.text);
          setLoading(false);
        });
    };
    getChatBotResponse();
  },[setLoading]);
    return (
        <C.Container>
            <C.FirstDiv>
                <C.WeatherBox>
                    <C.WeatherIcon>날씨</C.WeatherIcon>
                    <C.DateBox>
                        <span>
                            <Clock format={'YYYY-MM-DD'} ticking={false} timezone={"Asia/Seoul"} />
                        </span>
                    </C.DateBox>
                </C.WeatherBox>
                <C.FoodBox>
                    <C.FoodText1>제철 음식</C.FoodText1>
                    <C.FoodText2>API로 제철음식 리스트 가져오기</C.FoodText2>
                </C.FoodBox>
            </C.FirstDiv>
            <C.SecondDiv>
                <C.UserRequestText>
                    {userRequest}
                </C.UserRequestText>
                <C.ChatbotResponseText>
                {chatbotResponse}
                “Hello! A great recipe for a cloudy day is a warm 
                and comforting bowl of tomato soup with grilled
                cheese sandwiches.
                Here's a simple recipe you can try: .... ”
                </C.ChatbotResponseText>
                <C.ChatbotForm onSubmit={onSubmit}>
                    <C.UserInput
                      value={userRequest}
                      onChange={onChange}
                      type="text"
                    />
                    <C.SubmitButton>전송</C.SubmitButton>
                </C.ChatbotForm>
            </C.SecondDiv>
        </C.Container>
    )
}
export default ChatbotPage;
