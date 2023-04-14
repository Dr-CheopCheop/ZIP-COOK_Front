import useAxios from "../../hooks/useAxios";
import url from "../../constants/path";
//추후 함수명,더미데이터등 모든거 바꿔줘야함.
//폼만들어서 분리 할것. 폼 prevent반드시!

interface dummyType {
  title: string;
  content: string;
}
const dummy: dummyType = {
  title: `제목${Math.random()}`,
  content: `내용 ${Math.random()}`,
};

const NewBoard = () => {
  const axiosData = useAxios();
  const { isLoading, error, sendRequest: sendBoardRequest } = axiosData;

  const postBoardItem = async () => {
    const abc = (responseData: object) => {
      console.log(responseData);
    };

    sendBoardRequest(
      {
        url: `${url}`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: { data: dummy },
      },
      abc
    );
  };

  return (
    <>
      <button onClick={postBoardItem}>작성하기</button>
      {isLoading && "로딩중"}
      {error && "에러"}
    </>
  );
};

export default NewBoard;
