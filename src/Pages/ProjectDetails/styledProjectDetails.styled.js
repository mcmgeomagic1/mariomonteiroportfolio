import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectDetailsBox = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-gap: 3em;
  width: 100%;
  z-index: 9;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    align-items: center;
    text-align: center;
    grid-gap: 2em;
  }

  p {
    width: 69%;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      width: 90%;
      margin: 0 auto;
    }

    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 110%;
    line-height: 1.4em;
    }
  }

  span {
  opcacity: 0.7;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 90%;
      margin: 0 auto;
      font-size: 110%;
    line-height: 1.4em;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: center;
    text-align: center;
  }
`;

export const ProjectTitle = styled.h2`
  background: linear-gradient(
    to left,
    ${({ color, theme }) => (color ? color : theme.colors.mainPallet.primary)}
      50%,
    ${({ theme }) => theme.colors.mainPallet.secondary}
  );

  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
    margin: 0 auto 0.3em auto;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export const TopInfo = styled.div`
  grid-gap: 1em;
  display: flex;
  flex-direction: column;

  span {
    opacity: 0.7;
`;

export const AboutDiv = styled.div`
  h3 {
    margin-bottom: 19px;
  }
`;
export const SkillsDiv = styled.div`
  h3 {
    margin-bottom: 19px;
  }

  width: 69%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    gap: 24px;
  }
`;

export const SkillItem = styled.span`
  font-size: 14px;
  height: 45px;
  color: ${({ theme }) => theme.colors.mainPallet.text};
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    cursor: default;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 12px;
  }
`;

export const ImagesDiv = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  grid-gap: 5em;

  img {
    border-radius: 25px;
  }
`;

export const CoverImage = styled(motion.img)`
  width: 100%;
  object-position: cover;
  border: 1px solid ${({ theme }) => theme.colors.mainPallet.stroke};
`;

export const ProjectImages = styled(motion.img)`
  border: 1px solid ${({ theme }) => theme.colors.mainPallet.stroke};
`;
export const HeroGradientImage = styled.img`
  width: 1149px;
  height: 1202px;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 549px;
    height: 502px;
    right: -11%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: 0%;
    right: -89%;
  }
`;

export const HeroGrillGraphs = styled.img`
  width: 652px;
  height: 465px;
  object-fit: cover;
  position: absolute;
  top: 1%;
  right: 0;
  z-index: 0;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 402px;
    height: 365px;
    top: 1%;
    right: -19%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    right: -79%;
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
  top: 0%;
  right: 32.3%;
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    top: -20%;
    right: 32.3%;
  }
`;
