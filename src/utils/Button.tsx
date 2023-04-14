import * as S from "./ButtonStyle";
import Colors from "../Styles/Colors";
import type { buttonProps } from "../constants/interfaces";

const Button = (props: buttonProps) => {
  const { children, active } = props;
  return (
    <S.Button color={`${Colors.zipCookYellow}`} disabled={active}>
      {children}
    </S.Button>
  );
};

export default Button;
