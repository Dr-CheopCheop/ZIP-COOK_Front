import Navbar from "../../components/Navbar/Navbar";
import * as S from "./CommunityStyle";
import recipe_img from "../../img/community_recipe.jpg";
import sale_img from "../../img/community_sale.jpg";
import share_img from "../../img/community_share.jpg";

const Community = () => {
  return (
    <div>
      <Navbar />
      <S.CommunityContainer>
        <h2>ZIP COOK에서 ~를 나눠보세요</h2>
        <ul>
          <li>
            <S.StyledLink to="/community/recipe">
              <img src={recipe_img} alt="community_img" />
              <p>RECIPE</p>
            </S.StyledLink>
          </li>
          <li>
            <S.StyledLink to="/community/share">
              <img src={sale_img} alt="community_img" />
              <p>SHARE</p>
            </S.StyledLink>
          </li>
          <li>
            <S.StyledLink to="/community/sale">
              <img src={share_img} alt="community_img" />
              <p>SALE</p>
            </S.StyledLink>
          </li>
        </ul>
      </S.CommunityContainer>
    </div>
  );
};

export default Community;
