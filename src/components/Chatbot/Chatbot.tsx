import { useState, useEffect } from 'react';
import * as C from './ChatbotStyle';
import axios from 'axios';
import Clock from 'react-live-clock';

const ChatbotPage = () => {
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState({
      icon: '',
    });
    const [monthFoods, setMonthFoods] = useState([]);
    const [chatbotResponse, setChatbotResponse] = useState([]);
    const [userRequest, setUserRequest] = useState("");
    let monthArray: string[] = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let now = new Date();
    let tempMonth = now.getMonth();
    // setMonth(monthArray[tempMonth]);
    let month = monthArray[tempMonth];
    // const examples = ['오렌지', '사과', '딸기', '포도', '수박'];

  useEffect(() => {
    const cityName = 'Seoul';
    const apiKey = `3cd159f4738663f7bef01ba94f76bc30`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    axios
    .get(url)
    .then((responseData) => {
      console.log(responseData);
      const data = responseData.data;
      setWeatherData({
        icon: data.weather[0].icon
      });
    })
    .catch((error) => console.log(error));
  })

  const weatherImgSrc = `https://openweathermap.org/img/w/${weatherData.icon}.png`;


  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      const response = await axios.get(`/monthFood/${month}`);
      setMonthFoods(response.data);
      setLoading(false);
    };
    fetchFoodData();
  }, []);
  console.log(monthFoods);
    
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
        .post(`/chatbot`, {
          question: userRequest,
        })
        .then((response) => {
          console.log(response.data);
          setChatbotResponse(response.data.choices.text);
          setLoading(false);
        });
    };
    getChatBotResponse();
  }, [setLoading]);

    return (
        <C.Container>
            <C.FirstDiv>
                <C.WeatherBox>
                    <C.WeatherIcon src={weatherImgSrc} />
                    <C.DateBox>
                        <span>
                            <Clock format={'YYYY-MM-DD'} ticking={false} timezone={"Asia/Seoul"} />
                        </span>
                    </C.DateBox>
                </C.WeatherBox>
                <C.FoodBox>
                    <C.FoodText1>제철 음식</C.FoodText1>
                    <C.MonthFoodBox>{monthFoods.map(monthFood => (
                      <C.MonthFoodList>{monthFood}</C.MonthFoodList>
                    ))}</C.MonthFoodBox>
                    {/* <C.MonthFoodBox>{examples.map(example => (
                      <C.MonthFoodList>{example}</C.MonthFoodList>
                    ))}</C.MonthFoodBox> */}
                </C.FoodBox>
            </C.FirstDiv>
            <C.ChatbotDiv>
                <C.UserRequestText>
                    {userRequest}
                </C.UserRequestText>
                <C.ChatbotResponseText>
                {chatbotResponse}
                </C.ChatbotResponseText>
                <C.ChatbotForm onSubmit={onSubmit}>
                    <C.UserInput
                      value={userRequest}
                      onChange={onChange}
                      type="text"
                    />
                    <C.SubmitButton type="submit">&uarr;</C.SubmitButton>
                </C.ChatbotForm>
            </C.ChatbotDiv>
        </C.Container>
    )
}
export default ChatbotPage;
