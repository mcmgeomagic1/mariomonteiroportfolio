import { Button } from "../../Components/Button";
import { Container, Section } from "../../styles/StyledCommon.styled";
import {
  HeroSection,
  HeroParagraph,
  HeroText,
  ButtonWrapper,
  HeroGradientImage,
  HeroGrillGraphs,
  OvalGlow,
} from "./styledHome.styled";
import gradientImage from "../../Assets/Gradien-graph-bg.png";
import grillImage from "../../Assets/grill.png";
import { ThreeCarousels } from "../../Components/Carousell";
import { FaArrowRightLong } from "react-icons/fa6";

function Home() {
  return (
    <>
      <Section className="heroSection">
        <Container>
          <HeroSection>
            <HeroText>
              Elevate Your Digital Product. Increase Your Conversions.
            </HeroText>
            <HeroParagraph>
              Turn ideas into fast, scalable, high-converting web experiences.
              With 5+ years in Frontend and UI/UX, I build interfaces that drive
              real business results.
            </HeroParagraph>
            <ButtonWrapper>
              <Button type="primary" text="Hire me" />
              <Button
                type="secondary"
                text="See my work"
                icon={<FaArrowRightLong />}
              />
            </ButtonWrapper>
          </HeroSection>
          <ThreeCarousels />
        </Container>
        <OvalGlow />
        <HeroGradientImage src={gradientImage} alt="Hero Image" />
        <HeroGrillGraphs src={grillImage} alt="Hero Image" />
      </Section>
      <Section>
        <Container></Container>
      </Section>
    </>
  );
}

export default Home;
