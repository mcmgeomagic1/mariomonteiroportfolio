import styled from "styled-components";
import { motion } from "framer-motion";

export const CertificationBox = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.mainPallet.stroke};
  height: 100%;
  border-radius: 25px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  grid-gap: 1em;
`;

export const TopPart = styled.div`
  display: flex;
  grid-gap: 1em;
  align-items: center;
  height: 40px;

  img {
    width: 20%;
  }

  span {
    opacity: 0.7;
  }
`;

export const CursoTitle = styled.h4`
  font-weight: 700;
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
