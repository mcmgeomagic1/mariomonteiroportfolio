import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarSection = styled.header`
  position: ${({ $sticky }) => ($sticky ? "fixed" : "relative")};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  transition: all 0.3s ease;

  background: ${({ $sticky }) =>
    $sticky ? "rgba(8, 22, 32, 0.8)" : "transparent"};

  backdrop-filter: ${({ $sticky }) =>
    $sticky ? "blur(10px)" : "none"};

  box-shadow: ${({ $sticky }) =>
    $sticky ? "0 10px 30px rgba(0,0,0,0.2)" : "none"};

  /* ✅ Only animate when sticky */
  transform: ${({ $sticky }) =>
    $sticky ? "translateY(0)" : "none"};

  animation: ${({ $sticky }) =>
    $sticky ? "slideDown 0.3s ease forwards" : "none"};

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2em;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  opacity: 0.7;
  text-decoration: none;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.mainPallet.primary};
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  span {
    width: 25px;
    height: 3px;
    background: ${({ theme }) => theme.colors.mainPallet.standard.white};
    transition: 0.3s;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.mainPallet.background};
  display: flex;
  flex-direction: column;
  padding: 100px 20px;
  gap: 1.5em;
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;
  z-index: 9999;

  a {
    font-size: 18px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "all" : "none")};
  transition: 0.3s;
  z-index: 99;
`;
