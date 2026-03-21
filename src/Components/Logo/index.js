import { Link } from "react-router-dom";
import { ColoredPart, LogoText } from "./styledNavBar.styled";

export const Logo = () => {
  return (
    <Link to="/" reloadDocument>
      <LogoText>
        <ColoredPart>MARIO</ColoredPart>MONTEIRO
      </LogoText>
    </Link>
  );
};
