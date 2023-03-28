import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>맨처음 페이지</h1>
      <Link to={"/main"}>메인 페이지 가기</Link>
    </>
  );
};

export default Home;
