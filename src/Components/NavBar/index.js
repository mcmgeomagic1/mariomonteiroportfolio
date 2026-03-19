import { Link } from "react-router-dom";
import { Container } from "../../styles/StyledCommon.styled";
import { Logo } from "../Logo";
import { NavbarSection, StyledNavLink } from "./styledNavBar.styled";

export const Navbar = () => {
  return (
    <NavbarSection>
      <Container>
        <main>
          <Logo />
          <nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/projects">Projects</StyledNavLink>
            <StyledNavLink to="/about">About Me</StyledNavLink>
            <StyledNavLink to="/contact">Contact Me</StyledNavLink>
          </nav>
        </main>
      </Container>
    </NavbarSection>
  );
};
