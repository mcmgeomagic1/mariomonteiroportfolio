import styled from "styled-components";
import { motion } from "framer-motion";

export const CertificationSection = styled(motion.div)`
  padding: 100px 0px;
  position: relative;
  z-index: 5;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 60px 0px;
  }
`;

export const Top = styled.div`


  h2 {
    margin-bottom: 0.2em;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      margin-bottom: 0.5em;
    }
  }

  p {
    width: 64%;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    p {
      width: 100%;
    }
  }
`;

export const CardsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  width: 100%;
  margin-top: 2.2em;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
  }
`;
