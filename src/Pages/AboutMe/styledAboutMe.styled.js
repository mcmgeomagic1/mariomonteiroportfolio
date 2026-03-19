import styled from "styled-components";
import { motion } from "framer-motion";

export const FlexBox = styled.div`
  display: flex;
  grid-gap: 2em;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
    margin-top: 0px;
  }
`;

export const HeroSeactionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 35px;
  width: 53%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 75%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    text-align: center;
  }
`;

export const HeroText = styled(motion.h1)`
  background: linear-gradient(
    to top left,
    ${({ theme }) => theme.colors.mainPallet.primary},
    ${({ theme }) => theme.colors.mainPallet.secondary} 70%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  z-index: 10;
  width: 59%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 360%;
    line-height: 125%;
  }

  @media (max-width: ${({ theme }) => theme.smallerDevices}) {
    font-size: 332%;
  }
`;

export const Image = styled.img`
  width: 402px;
  height: 518px;
  box-shadow: -12px -12px 0px ${({ theme }) => theme.colors.mainPallet.primary};

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 302px;
    height: 418px;
    margin: auto 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 auto;
    width: 252px;
    height: 318px;
  }
`;

export const ButtonWrapper = styled(motion.div)`
  display: flex;
  position: relative;
  z-index: 100;
  gap: 12px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    gap: 2px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
  }
`;
