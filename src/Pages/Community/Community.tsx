import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div>
      <Navbar />
      <h1>통합 커뮤니티 페이지</h1>
      <ul>
        <li>
          <Link to="/community/recipe">레시피</Link>
        </li>
        <li>
          <Link to="/community/share">공유</Link>
        </li>
        <li>
          <Link to="/community/discount">할인정보</Link>
        </li>
      </ul>
    </div>
  );
};

export default Community;
