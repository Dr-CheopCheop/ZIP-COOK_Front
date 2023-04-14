import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Mypage from "../../components/Mypage/Mypage";
import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <div>
      <Navbar />
      <Mypage/>
    </div>
  );
};

export default MyPage;
