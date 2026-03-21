import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  width: 100%;
  position: relative;
  z-index: 1;
  padding: ${(props) => (props.padding ? props.padding : "0px 0px 0px 0px")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background: ${(props) => (props.background ? props.background : "auto")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 60px 0px;
  }
`;

export const Container = styled(motion.div)`
  max-width: 1170px;
  margin: 0 auto;
  position: ${(props) => (props.position ? props.position : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0px 0px 0px 0px")};
  height: ${(props) => (props.height ? props.height : "auto")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};

  @media (max-width: ${({ theme }) => theme.desktop}) {
    width: 1100px;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
    padding: 0px 0px;
  }

  ${({ theme }) => `
  @media (max-height: ${theme._13inchHeight}) and (max-width: 1230px) {
    max-width: 1000px;
  }
`}
`;
