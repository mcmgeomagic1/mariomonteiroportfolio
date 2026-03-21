import styled from "styled-components";
import { motion } from "framer-motion";

export const ExperienceSection = styled(motion.section)`
  padding: 100px 0px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.05);
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 60px 0px;
  }
`;

export const ExperienceMainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 1em;
  flex-direction: column;

  p {
    text-align: center;
    width: 69%;
    margin-bottom: 1em;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      width: 80%;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }
  }

   @media (max-width: ${({ theme }) => theme.mobile}) {
    h2 {
    text-align: center;
    }
  }
`;
