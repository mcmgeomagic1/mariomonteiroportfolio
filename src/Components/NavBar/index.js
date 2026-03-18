import { Link } from "react-router-dom";
import { Container } from "../../styles/StyledCommon.styled";
import { Logo } from "../Logo";
import { NavbarSection } from "./styledNavBar.styled";

export const Navbar = () => {
  return (
    <NavbarSection>
      <Container>
        <main>
          <Logo />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/">Projects</Link>
            <Link to="/about">About Me</Link>
            <Link to="/">Contact Me</Link>
          </nav>
        </main>
      </Container>
    </NavbarSection>
  );
};
