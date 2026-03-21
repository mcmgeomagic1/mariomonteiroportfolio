import { ButtonBox } from "./styledNavBar.styled";

export const Button = ({ type, text, icon, onClick }) => {
  return (
    <ButtonBox $type={type} onClick={onClick}>
      {text} {icon ? icon : null}
    </ButtonBox>
  );
};
