import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectDiv = styled.div`
  height: 296px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
  grid-gap: 0px;
=======
  grid-gap: 24px;
>>>>>>> cb0526ea6824f08c519e0f4897fdf7325e35a9ca
  position: relative;
  z-index: 1000;

  h4 {
    text-transform: uppercase;
  }

  p {
<<<<<<< HEAD
    margin-bottom: 1.5em;
=======
>>>>>>> cb0526ea6824f08c519e0f4897fdf7325e35a9ca
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin: 0 auto 0.5em auto;
      width: 90%;
    }

    @media (max-height: ${({ theme }) => theme._13inchHeight}) {
      margin-bottom: 1em;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 13em;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-gap: 14px;
<<<<<<< HEAD
    margin-top: 13em;
    text-align: center;
  }
  ${({ theme }) => `
    @media (max-height: ${theme._13inchHeight})  {
      grid-gap: 0em;
      margin-top: -2em;
=======
    margin-top: 17em;
    text-align: center;
  }
  ${({ theme }) => `
    @media (max-height: ${theme._13inchHeight}) and (max-width: 1230px) {
      grid-gap: 0em;
      margin-top: -3em;
>>>>>>> cb0526ea6824f08c519e0f4897fdf7325e35a9ca
    }
  `}
`;
export const ProjectTitle = styled.h2`
  text-align: center;
  background: linear-gradient(
    to left,
    ${(props) => props.color},
    ${({ theme }) => theme.colors.mainPallet.secondary} 70%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  z-index: 10;
  text-transform: uppercase;
`;

export const ProjectImageBox = styled(motion.div)`
  width: 100%;
<<<<<<< HEAD
  height: 55%;
=======
  height: 400px;
>>>>>>> cb0526ea6824f08c519e0f4897fdf7325e35a9ca
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  z-index: 1000;
  bottom: 0;
  left: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 2em 2em 0 2em;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: 27%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      object-fit: fill;
    }
  }

  ${({ theme }) => `
<<<<<<< HEAD
    @media (max-height: ${theme._13inchHeight})  {
      width: 100%;
      height: 55%;
      object-fit:;
=======
    @media (max-height: ${theme._13inchHeight}) and (max-width: 1230px) {
      width: 100%;
      height: 350px;
>>>>>>> cb0526ea6824f08c519e0f4897fdf7325e35a9ca
    }
  `}
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
  z-index: -2;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    right: 18.3%;
  }
`;

export const HeroGradientImage = styled.img`
  width: 749px;
  height: 802px;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 579px;
    height: 642px;
    top: 18%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 339px;
    height: 400px;
    top: -8%;
    right: -14%;
  }
`;

export const HeroGrillGraphs = styled.img`
  width: 552px;
  height: 465px;
  object-fit: cover;
  position: absolute;
  top: 9%;
  right: 0;
  z-index: 0;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    top: 13%;
    width: 452px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: 21%;
    width: 292px;
    height: 265px;
  }
`;

export const HorizontalSection = styled.section`
  position: relative;
  height: ${({ height }) => (height ? `${height}px` : "100vh")};
  border: 2px solid red;
  z-index: 9;
`;

export const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
`;

export const HorizontalTrack = styled.div`
  display: flex;
  height: 100%;
  will-change: transform;

  section {
    min-width: 100vw;
    height: 100vw;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      height: 100vh;
    }
  }
`;

export const Slide = styled.div`
  min-width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const ProjectsSection = styled.div`
  position: relative;
  height: ${({ slides }) => slides * 100}vh;
  z-index: 9;
`;
