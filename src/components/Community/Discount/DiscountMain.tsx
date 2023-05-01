import { Link } from "react-router-dom";
import GetPostList from "../../Post/GetPostList";
const DiscountMain = () => {
  return (
    <div>
      <GetPostList category="discount" />
      <Link to="/community/discount/write">작성</Link>
    </div>
  );
};

export default DiscountMain;
