import styled from "styled-components";
import { motion } from "framer-motion";

export const TechnologiesSection = styled(motion.section)`
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  margin-top: -1px;
  background: ${({ theme }) => theme.colors.mainPallet.background};
`;

export const Paragraph = styled.p`
  width: 60%;
  margin: 24px auto 0 auto;
  color: ${({ theme }) => theme.colors.mainPallet.text};
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
    line-height: 2;
  }
`;

export const SkillsBoxWrapper = styled.div`
  display: flex;
  grid-gap: 2em;
  height: 474px;
  width: 100%;
  margin-top: 64px;
  position: relative;
  z-index: 20;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
    height: auto;
  }
`;

export const SkillsBox = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid ${({ theme }) => theme.colors.mainPallet.stroke};
  border-radius: 25px;
  padding: 32px 24px;
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.mainPallet.primary};
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: auto;
    min-height: 300px;
  }
`;

export const SkillsTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.Headline4};
  margin-bottom: 24px;
  position: relative;
  padding-bottom: 12px;
  width: 50%;
`;

export const SkillsList = styled.div`
  flex: 1;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
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

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    cursor: default;
  }
`;

export const SkillsGradient = styled.img`
  width: 375px;
  object-fit: cover;
  position: absolute;
  top: 2%;
  left: 0;
  z-index: 1;
  opacity: 0.6;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 250px;
    opacity: 0.3;
  }
`;

export const SkillsGradient2 = styled.img`
  width: 87px;
  height: 401px;
  object-fit: cover;
  position: absolute;
  right: 0%;
  top: 35%;
  z-index: 0;
  opacity: 0.5;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 130px;
    height: 601px;
    opacity: 0.2;
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
  z-index: -2;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    right: 18.3%;
  }
`;

export const IconBox = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background-color: #162e3dff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.mainPallet.primary};
  margin-bottom: 1em;

  svg {
    font-size: 50px;
  }

  ${({ theme }) => `
  @media (max-height: ${theme._13inchHeight}) and (max-width: 1230px) {
   width: 70px;
  height: 70px;
  margin-bottom: .5em;

   svg {
    font-size: 30px;
  }
  }
`}
`;
