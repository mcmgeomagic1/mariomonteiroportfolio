import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarSection = styled.header`
  position: relative;
  z-index: 29;
`;

export const StyledNavLink = styled(NavLink)`
  opacity: 0.7;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
    color: ${({ theme }) => theme.colors.mainPallet.primary};
  }
`;
