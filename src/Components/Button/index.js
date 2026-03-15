import { ButtonBox } from "./styledNavBar.styled";

export const Button = ({ type, text, icon }) => {
  return (
    <ButtonBox $type={type}>
      {text} {icon ? icon : null}
    </ButtonBox>
  );
};
