import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Pages/Main/Main";
import Help from "./Pages/Help/Help";
import Chatbot from "./Pages/Chatbot/Chatbot";
import Community from "./Pages/Community/Community";
import Recipe from "./Pages/Community/Recipe/Recipe";
import RecipeForm from "./components/Community/Recipe/RecipeForm";
import RecipeRead from "./components/Community/Recipe/RecipeRead";
import Share from "./Pages/Community/Share/Share";
import ShareForm from "./components/Community/Share/ShareForm";
import ShareRead from "./components/Community/Share/ShareRead";
import Login from "./Pages/Login/Login";
import Join from "./Pages/Join/Join";
import MyPage from "./Pages/MyPage/MyPage";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Forgot from "./Pages/Forgot/Forgot";
import Sale from "./Pages/Community/Sale/Sale";
import SaleForm from "./components/Community/Sale/SaleForm";
import SaleRead from "./components/Community/Sale/SaleRead";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/help" element={<Help />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/recipe" element={<Recipe />} />
        <Route path="/community/recipe/write" element={<RecipeForm />} />
        <Route path="/community/recipe/:id" element={<RecipeRead />} />

        <Route path="/community/share" element={<Share />} />
        <Route path="/community/share/write" element={<ShareForm />} />
        <Route path="/community/share/:id" element={<ShareRead />} />

        <Route path="/community/sale" element={<Sale />} />
        <Route path="/community/sale/write" element={<SaleForm />} />
        <Route path="/community/sale/:id" element={<SaleRead />} />

        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
