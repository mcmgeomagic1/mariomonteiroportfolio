import styled from "styled-components";
import { motion } from "framer-motion";

export const TrackerCircle = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;

  width: 90px;
  height: 90px;

  border-radius: 50%;

  pointer-events: none;
  z-index: 9999;

  transform: translate(-50%, -50%);
  will-change: transform;

  transition: all 0.15s ease;

  background: ${({ theme }) => theme.colors.mainPallet.primary};

  filter: blur(70px);

  &.outline {
    width: 90px;
    height: 90px;

    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.mainPallet.standard.white};

    filter: blur(0);

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 50px;
      height: 50px;
    }
  }
`;
