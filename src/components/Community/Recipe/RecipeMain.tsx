import { Link } from "react-router-dom";
import GetPostList from "../Post/GetPostList";

const RecipeMain = () => {
  return (
    <>
      <GetPostList category="recipe" />
      <Link to="/community/recipe/write">작성</Link>
    </>
  );
};

export default RecipeMain;
