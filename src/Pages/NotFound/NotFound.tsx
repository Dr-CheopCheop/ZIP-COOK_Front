import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import * as S from "./NotFoundStyle";
import Icons from "../../Styles/Icons";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <S.ErrorContainer>
        <div>
          {Icons.robot}
          <h1>404 Error</h1>
          <p>Sorry.page not found</p>
        </div>
      </S.ErrorContainer>
    </>
  );
};

export default NotFound;
