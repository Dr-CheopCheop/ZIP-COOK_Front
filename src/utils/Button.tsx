import * as S from "./ButtonStyle";

interface buttonProps {
  children: React.ReactNode;
  color?: string;
  active?: boolean;
}

const Button = (props: buttonProps) => {
  const { children, color, active } = props;
  return (
    <S.Button color={color} disabled={active}>
      {children}
      {color}
      zz
    </S.Button>
  );
};

export default Button;
