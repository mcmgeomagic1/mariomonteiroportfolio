import { Button } from "../../../../Components/Button";
import { Container, Section } from "../../../../styles/StyledCommon.styled";
import {
  HeroSeactionBox,
  HeroParagraph,
  HeroText,
  ButtonWrapper,
  HeroGradientImage,
  HeroGrillGraphs,
  OvalGlow,
  HeroSectionSection,
} from "./styledHeroSection.styled";
import gradientImage from "../../../../Assets/Gradien-graph-bg.png";
import grillImage from "../../../../Assets/grill.png";
import { ThreeCarousels } from "../../../../Components/Carousell";
import { FaArrowRightLong } from "react-icons/fa6";

function HeroSection() {
  return (
    <HeroSectionSection>
      <Container>
        <HeroSeactionBox>
          <HeroText
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.9, delay: 0.1 },
            }}
            viewport={{ once: true }}
          >
            Elevate Your Digital Product. Increase Your Conversions.
          </HeroText>
          <HeroParagraph
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 0.7,
              transition: { duration: 0.8, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            Turn ideas into fast, scalable, high-converting web experiences.
            With 5+ years in Frontend and UI/UX, I build interfaces that drive
            real business results.
          </HeroParagraph>
          <ButtonWrapper
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.3 },
            }}
            viewport={{ once: true }}
          >
            <Button type="primary" text="Hire me" />
            <Button
              type="secondary"
              text="See my work"
              icon={<FaArrowRightLong />}
            />
          </ButtonWrapper>
        </HeroSeactionBox>
        <ThreeCarousels />
      </Container>
      <OvalGlow />
      <HeroGradientImage src={gradientImage} alt="Hero Image" />
      <HeroGrillGraphs src={grillImage} alt="Hero Image" />
    </HeroSectionSection>
  );
}

export default HeroSection;
