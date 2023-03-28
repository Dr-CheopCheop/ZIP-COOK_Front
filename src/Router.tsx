import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Help from "./components/Pages/Help/Help";
import Chatbot from "./components/Pages/Chatbot/Chatbot";
import Community from "./components/Pages/Community/Community";
import Recipe from "./components/Pages/Community/Recipe/Recipe";
import Share from "./components/Pages/Community/Share/Share";
import Discount from "./components/Pages/Discount/Discount";
import Login from "./components/Pages/Login/Login";
import Join from "./components/Pages/Join/Join";
import MyPage from "./components/Pages/MyPage/MyPage";
import NotFound from "./components/Pages/NotFound/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/recipe" element={<Share />} />
        <Route path="/community/share" element={<Recipe />} />
        <Route path="/community/discount" element={<Discount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<MyPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
