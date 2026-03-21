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
            <StyledNavLink to="/" reloadDocument>
              Home
            </StyledNavLink>
            <StyledNavLink to="/#projects" reloadDocument>
              Projects
            </StyledNavLink>
            <StyledNavLink to="/about" reloadDocument>
              About Me
            </StyledNavLink>
            <StyledNavLink to="/#contact" reloadDocument>
              Contact Me
            </StyledNavLink>
          </nav>
        </main>
      </Container>
    </NavbarSection>
  );
};
