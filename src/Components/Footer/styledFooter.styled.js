import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const FooterLeft = styled.div`
  flex: 1;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  grid-gap: 1em;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    max-width: 100%;
  }
`;

export const FooterRight = styled.div`
  text-align: right;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    text-align: left;
    width: 100%;
  }
`;

export const Role = styled.p`
  font-weight: 500;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.mainPallet.text};
  opacity: 0.8;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 14px;
  }
`;

export const SocialTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainPallet.primary};
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-bottom: 16px;
  }
`;
export const SocialBox = styled.div`
  width: 100%;
`;
export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    justify-content: flex-start;
  }
`;

export const SocialIcon = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.mainPallet.stroke};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.mainPallet.text};
  font-size: 24px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.mainPallet.primary};
    color: #000;
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.mainPallet.primary};
    box-shadow: 0 10px 20px ${({ theme }) => theme.colors.mainPallet.primary}30;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 42px;
    height: 42px;
    font-size: 20px;
  }
`;

export const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainPallet.primary};
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin-bottom: 10px;

  a {
    color: ${({ theme }) => theme.colors.mainPallet.text};
    text-decoration: none;
    font-size: 14px;
    opacity: 0.8;
    transition: all 0.3s ease;
    position: relative;
    padding-bottom: 2px;

    &:hover {
      color: ${({ theme }) => theme.colors.mainPallet.primary};
      opacity: 1;
      padding-left: 5px;
    }

    &::before {
      content: "›";
      opacity: 0;
      margin-right: 0;
      transition: all 0.3s ease;
    }

    &:hover::before {
      opacity: 1;
      margin-right: 8px;
    }
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.mainPallet.text};
  text-decoration: none;
  font-size: 14px;
  opacity: 0.8;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 2px;

  &:hover {
    color: ${({ theme }) => theme.colors.mainPallet.primary};
    opacity: 1;
    padding-left: 5px;
  }

  &::before {
    content: "›";
    opacity: 0;
    margin-right: 0;
    transition: all 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
    margin-right: 8px;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mainPallet.text};
  opacity: 0.6;
  letter-spacing: 0.5px;
`;
