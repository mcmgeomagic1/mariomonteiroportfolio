import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSectionSection = styled.header`
  position: relative;
  height: 90vh;
  z-index: 1;
  display: flex;
  align-items: center;

  h1 {
   @media (max-width: ${({ theme }) => theme.mobile}) {
   font-size: 290%;
   line-height: 125%;
   margin-bottom: .4em;
  }
   @media (max-width: ${({ theme }) => theme.smallerDevices}) {
   font-size: 450%;
   line-height: 125%;
   margin-bottom: .4em;
  }}
`;

export const HeroSeactionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 35px;
  width: 60%;
  position: relative;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    grid-gap: 0px;
  }

  ${({ theme }) => `
  @media (max-height: ${theme._13inchHeight}) and (max-width: 1230px) {
    width: 54%;
    grid-gap: 0px;
    margin-top: -2em;

    h1 {
      margin: 0;
    }
  }
`}

  ${({ theme }) => `
  @media (max-height: ${theme._13inchHeight}) and (max-width: ${theme.tablet}) {
    width: 70%;
    margin: 0 auto;
    text-align: center;
  }
`}
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
    margin-bottom: .4em;
  }

  @media (max-width: ${({ theme }) => theme.smallerDevices}) {
    font-size: 332%;
  }

    ${({ theme }) => `
  @media (max-height: ${theme._13inchHeight}) and (max-width: 1230px) {
    margin-top: .5em;
    margin-bottom: 7em;
  }
`}
`;

export const HeroParagraph = styled(motion.p)`
  width: 75%;
  z-index: 10;

   @media (max-width: ${({ theme }) => theme.tablet}) {
    margin: 0 auto;
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 auto 2em auto;
    width: 90%;
    font-size: 110%;
    line-height: 1.4em;
  }

  

  ${({ theme }) => `
  @media (max-height: ${theme._13inchHeight}) and (max-width: 1230px) {
    margin-top: .5em;
    margin-bottom: 1.5em;
  }
`}
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

  @media (max-height: ${({ theme }) => theme._13inchHeight}) {
    width: 949px;
    height: 1002px;
    top: -13%;
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

  @media (max-height: ${({ theme }) => theme._13inchHeight}) {
    width: 452px;
    height: 565px;
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

  @media (max-height: ${({ theme }) => theme._13inchHeight}) {
    right: 29.3%;
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
