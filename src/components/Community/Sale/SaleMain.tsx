import { Link } from "react-router-dom";
import GetPostList from "../Post/GetPostList";
const SaleMain = () => {
  return (
    <div>
      <GetPostList category="sale" />
      <Link to="/community/sale/write">작성</Link>
    </div>
  );
};

export default SaleMain;
