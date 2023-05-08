import React from "react";
import * as S from "./ErrorMessageStyle";
const ErrorMessage = (props: any) => {
  return (
    <>
      <S.Error>{props.children}</S.Error>
    </>
  );
};

export default ErrorMessage;
