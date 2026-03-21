import styled from "styled-components";
import { motion } from "framer-motion";

export const LanguageSection = styled.div`
  position: relative;
  padding: 100px 0px;
  z-index: 5;
  height: 730px;
  p {
    width: 59%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 60px 0px;
    height: 520px;

    h2 {
      margin-bottom: 0.5em;
    }

    p {
      width: 100%;
    }
  }
`;

export const LanguagesDiv = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1em;
  margin-top: 2em;
`;

export const LanguageItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  grid-gap: 1em;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-gap: 2em;
  }
`;

export const Progress = styled.div`
  width: 324px;
  height: 43px;
  background: #15222a;
  border-radius: 100px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 3%;
    transform: translate(3%, -50%);
    width: 90%;
    height: 14.83px;
    background-color: #214d69;
    border-radius: 25px;
    z-index: 1;
  }

  &::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 3%;
    transform: translate(3%, -50%);
    width: ${(props) => (props.Percentage ? props.Percentage : "50%")};
    height: 14.83px;
    background-color: #5abbf7;
    border-radius: 25px;
    z-index: 2;
  }
`;

export const LanguageGradient = styled.img`
  width: 810px;
  height: 1019px;
  object-fit: cover;
  position: absolute;
  top: -16%;
  right: -12%;
  z-index: 0;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    right: -40%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    right: -62%;
    top: 14%;
    width: 290px;
    height: 489px;
  }
`;
export const LanguageGraps = styled.img`
  width: 436px;
  height: 389px;
  object-fit: cover;
  position: absolute;
  top: 25%;
  right: 12%;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`;
