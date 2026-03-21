import { Container } from "../../../../styles/StyledCommon.styled";
import {
  TechnologiesSection,
  Paragraph,
  SkillsBoxWrapper,
  SkillsBox,
  SkillsGradient,
  SkillsTitle,
  SkillsList,
  SkillItem,
  SkillsGrid,
  SkillsGradient2,
  IconBox,
} from "./styledTechnologiesstyled";

import SkillsGraph from "../../../../Assets/skillsGraph.png";
import SkillsGraph2 from "../../../../Assets/skillsGraph2.png";
import { LuCodesandbox } from "react-icons/lu";
import { FaFigma } from "react-icons/fa";

function Technologies() {
  return (
    <TechnologiesSection id="technologies">
      <Container
        textAlign="center"
        initial={{ opacity: 0, sale: 0.5 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{
          once: true,
        }}
      >
        <h2>My Skills and Technologies</h2>
        <Paragraph>
          Turn ideas into fast, scalable, high-converting web experiences. With
          5+ years in Frontend and UI/UX, I build interfaces that drive real
          business results.
        </Paragraph>
        <SkillsBoxWrapper>
          <SkillsBox>
            <IconBox>
              <LuCodesandbox />
            </IconBox>
            <SkillsTitle>Frontend</SkillsTitle>
            <SkillsList>
              <SkillsGrid>
                <SkillItem>React/Next.js</SkillItem>
                <SkillItem>HTML/CSS</SkillItem>
                <SkillItem>Javascript</SkillItem>
                <SkillItem>Styled-components</SkillItem>
                <SkillItem>Hooks</SkillItem>
                <SkillItem>Context API</SkillItem>
                <SkillItem>Redux</SkillItem>
                <SkillItem>Chartjs</SkillItem>
                <SkillItem>Animations</SkillItem>
                <SkillItem>REST API</SkillItem>
              </SkillsGrid>
            </SkillsList>
          </SkillsBox>
          <SkillsBox>
            <IconBox>
              <FaFigma />
            </IconBox>
            <SkillsTitle>UI/UX Design</SkillsTitle>
            <SkillsList>
              <SkillsGrid>
                <SkillItem>Figma</SkillItem>
                <SkillItem>Wireframing</SkillItem>
                <SkillItem>Prototyping</SkillItem>
                <SkillItem>UX Process</SkillItem>
                <SkillItem>UI Fundamentals</SkillItem>
                <SkillItem>Auto-layout</SkillItem>
                <SkillItem>Design System</SkillItem>
                <SkillItem>Components</SkillItem>
                <SkillItem>Responsiveness</SkillItem>
              </SkillsGrid>
            </SkillsList>
          </SkillsBox>
        </SkillsBoxWrapper>
      </Container>
      <SkillsGradient src={SkillsGraph} alt="Skills Image" />
      <SkillsGradient2 src={SkillsGraph2} alt="Skills Image2" />
    </TechnologiesSection>
  );
}

export default Technologies;
