import { useState, useEffect } from "react";
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
  const [sticky, setSticky] = useState(false);
  const [hideNav] = useState(false);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight;

    if (window.scrollY > triggerHeight) { 
      setSticky(true); 
    } else { 
      setSticky(false); 
    } 
  };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarSection $sticky={sticky} $hide={hideNav}>
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