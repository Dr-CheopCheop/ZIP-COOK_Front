import React, { useState, useEffect } from "react";
import * as C from "./ChatbotStyle";
import axios from "axios";
import Year from "react-live-clock";
import Month from "react-live-clock";
import { url } from "../../constants/serverURL";
import Day from "react-live-clock";

const ChatbotPage = () => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [dateData, setDateData] = useState([]);
  const [chatbotResponse, setChatbotResponse] = useState([]);
  const [userRequest, setUserRequest] = useState("");

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
    const fetchWeatherData = async () => {
      setLoading(true);
      const response = await axios.get(`${url}/whether`);
      setWeatherData(response.data);
      setLoading(false);
    };
    fetchWeatherData();
  }, []);
  console.log(weatherData);

  useEffect(() => {
    const fetchDateData = async () => {
      setLoading(true);
      const response = await axios.get(`${url}/date`);
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
      await axios
        .post(`${url}/chatbot/message`, {
          question: userRequest,
        })
        .then((response) => {
          console.log(response.data);
          setChatbotResponse(response.data.choices.text);
          setLoading(false);
        });
    };
    getChatBotResponse();
  });

  return (
    <C.Container>
      <C.FirstDiv>
        <C.WeatherBox>
          <C.WeatherIcon>날씨</C.WeatherIcon>
          <C.DateBox>
            <Year format={"YYYY"} ticking={false} timezone={"KR/Pacific"} />
            <Month format={"MMM"} ticking={false} timezone={"KR/Pacific"} />
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
          “Hi, the weather is cloudy today. Please recommend a cooking recipe
          accordingly”dkfslfkjsa;dkf';kdfs;ldfjk;sjfdkjsdkfasksdl
        </C.UserRequestText>
        <C.ChatbotResponseText>
          {chatbotResponse}
          “Hello! A great recipe for a cloudy day is a warm and comforting bowl
          of tomato soup with grilled cheese sandwiches. Here's a simple recipe
          you can try: .... ”
        </C.ChatbotResponseText>
        <C.ChatbotForm onSubmit={onSubmit}>
          <C.UserInput value={userRequest} onChange={onChange} type="text" />
          <C.SubmitButton>전송</C.SubmitButton>
        </C.ChatbotForm>
      </C.SecondDiv>
    </C.Container>
  );
};

export default ChatbotPage;
