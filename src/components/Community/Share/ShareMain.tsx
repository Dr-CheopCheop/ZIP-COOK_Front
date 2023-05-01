import { Link } from "react-router-dom";
import GetPostList from "../../Post/GetPostList";
const ShareMain = () => {
  return (
    <div>
      <GetPostList category="share" />
      <Link to="/community/share/write">작성</Link>
    </div>
  );
};

export default ShareMain;
