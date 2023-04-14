import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import RecipeMain from "../../../components/Recipe/RecipeMain";
const Recipe = () => {
  return (
    <div>
      <Navbar />
      <h1>레시피 공유페이지</h1>
      <RecipeMain />
    </div>
  );
};

export default Recipe;
