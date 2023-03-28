import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Pages/Main/Main";
import Help from "./Pages/Help/Help";
import Chatbot from "./Pages/Chatbot/Chatbot";
import Community from "./Pages/Community/Community";
import Recipe from "./Pages/Community/Recipe/Recipe";
import Share from "./Pages/Community/Share/Share";
import Discount from "./Pages/Discount/Discount";
import Login from "./Pages/Login/Login";
import Join from "./Pages/Join/Join";
import MyPage from "./Pages/MyPage/MyPage";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/help" element={<Help />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/recipe" element={<Share />} />
        <Route path="/community/share" element={<Recipe />} />
        <Route path="/community/discount" element={<Discount />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// return (
//   <BrowserRouter>
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <>
//             <Navbar />
//             <Home />
//           </>
//         }
//       />
//       <Route path="/main" element={<Main />} />
//       <Route path="/help" element={<Help />} />
//       <Route
//         path="/chatbot"
//         element={
//           <>
//             <Navbar />
//             <Chatbot />
//           </>
//         }
//       />
//       <Route path="/community" element={<Community />} />
//       <Route path="/community/recipe" element={<Share />} />
//       <Route path="/community/share" element={<Recipe />} />
//       <Route path="/community/discount" element={<Discount />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/join" element={<Join />} />
//       <Route path="/mypage" element={<MyPage />} />

//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   </BrowserRouter>
// );
