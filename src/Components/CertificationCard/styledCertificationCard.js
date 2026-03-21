import styled from "styled-components";
import { motion } from "framer-motion";

export const CertificationBox = styled(motion.div)`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 25px;
  padding: 24px;
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 190px;
  }
`;

export const TopPart = styled.div`
  display: flex;
  grid-gap: 1em;
  align-items: center;
  height: 75px;

  img {
    width: ${(props) => (props.isImageLarge ? "140px" : "59px")};
    max-width: 100%;
    height: auto;
  }
  span {
    opacity: 0.7;
  }
`;

export const CursoTitle = styled.h4`
  font-weight: 700;
  height: 90px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 120%;
  }
`;

export const BottomPart = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 1em;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 0.75em;
  span {
    opacity: 0.7;
    font-size: ${({ theme }) => theme.fontSize.bodySmall};
  }

  img {
    width: 31px;
  }
`;
