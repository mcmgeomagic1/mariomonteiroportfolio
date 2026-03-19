import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSectionSection = styled.header`
  position: relative;
  height: 94vh;
  z-index: 1;
  display: flex;
  align-items: center;
`;

export const HeroSeactionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 35px;
  width: 53%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
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

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 360%;
    line-height: 125%;
  }

  @media (max-width: ${({ theme }) => theme.smallerDevices}) {
    font-size: 332%;
  }
`;

export const HeroParagraph = styled(motion.p)`
  width: 95%;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 auto;
  }
`;

export const HeroImage = styled.img`
  width: 886px;
  height: 579px;
  object-fit: cover;
  position: absolute;
  top: 60%;
  transform: translateY(-60%);
  right: 0;
  z-index: 2;
`;

export const HeroGradientImage = styled.img`
  width: 1149px;
  height: 1202px;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 349px;
    height: 502px;
  }
`;

export const HeroGrillGraphs = styled.img`
  width: 652px;
  height: 765px;
  object-fit: cover;
  position: absolute;
  top: 6%;
  right: 0;
  z-index: 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 352px;
    height: 465px;
  }
`;

export const OvalGlow = styled.div`
  position: relative;
  width: 906.71px;
  height: 1440.62px;
  border-radius: 50% / 60%;
  transform: rotate(1.6deg);
  background: ${({ theme }) => theme.colors.mainPallet.background};
  filter: blur(80px);
  position: absolute;
  top: -20%;
  right: 32.3%;
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    right: 18.3%;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    top: -20%;
    right: 32.3%;
  }
`;

export const ButtonWrapper = styled(motion.div)`
  display: flex;
  position: relative;
  z-index: 100;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    justify-content: center;
    gap: 2px;
  }
`;
