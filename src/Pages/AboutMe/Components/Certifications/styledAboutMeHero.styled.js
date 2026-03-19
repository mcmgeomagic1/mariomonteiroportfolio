import styled from "styled-components";
import { motion } from "framer-motion";

export const CertificationSection = styled(motion.div)`
  padding: 100px 0px;
  position: relative;
  z-index: 5;
  flex-wrap: wrap;
`;

export const Top = styled.div`
  h2 {
    margin-bottom: 0.2em;
  }
  p {
    width: 64%;
  }
`;

export const CardsBox = styled.div`
  display: flex;
  grid-gap: 1em;
  height: 207px;
  width: 100%;
  margin-top: 2em;
`;
