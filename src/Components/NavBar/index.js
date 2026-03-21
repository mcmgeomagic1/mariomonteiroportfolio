import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "../../styles/StyledCommon.styled";
import { Logo } from "../Logo";
import {
  NavbarSection,
  StyledNavLink,
  Nav,
  Hamburger,
  MobileMenu,
  Overlay,
} from "./styledNavBar.styled";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleClose = () => setOpen(false);

  return (
    <NavbarSection>
      <Container>
        <main>
          <Logo />

          <Nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/#projects">Projects</StyledNavLink>
            <StyledNavLink to="/about">About Me</StyledNavLink>
            <StyledNavLink to="/#contact">Contact</StyledNavLink>
          </Nav>

          <Hamburger onClick={() => setOpen(!open)}>
            <span />
            <span />
            <span />
          </Hamburger>
        </main>
      </Container>

      <Overlay $open={open} onClick={handleClose} />

      <MobileMenu $open={open}>
        <StyledNavLink to="/" onClick={handleClose}>
          Home
        </StyledNavLink>
        <StyledNavLink to="/#projects" onClick={handleClose}>
          Projects
        </StyledNavLink>
        <StyledNavLink to="/about" onClick={handleClose}>
          About Me
        </StyledNavLink>
        <StyledNavLink to="/#contact" onClick={handleClose}>
          Contact
        </StyledNavLink>
      </MobileMenu>
    </NavbarSection>
  );
};
