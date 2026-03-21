import { Container } from "../../../../styles/StyledCommon.styled";
import {
  HeroSectionSection,
  HeroParagraph,
} from "../../../Home/Components/HeroSection/styledHeroSection.styled";
import { Button } from "../../../../Components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  HeroSeactionBox,
  FlexBox,
  Image,
  ButtonWrapper,
  HeroText,
  HeroGradientImage,
  HeroGrillGraphs,
  OvalGlow,
} from "./styledAboutMeHero.styled";
import myImage from "../../../../Assets/mariomonteirophoto.png";
import gradientImage from "../../../../Assets/Gradien-graph-bg.png";
import grillImage from "../../../../Assets/grill.png";
import { Link } from "react-router-dom";

function AboutMeHero() {
  return (
    <HeroSectionSection>
      <Container>
        <FlexBox>
          <HeroSeactionBox>
            <HeroText
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.9, delay: 0.5 },
              }}
              viewport={{ once: true }}
            >
              I am Mario Monteiro
            </HeroText>
            <HeroParagraph
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 0.7,
                transition: { duration: 0.8, delay: 0.6 },
              }}
              viewport={{ once: true }}
            >
              I am a Frontend Developer and UI/UX Designer with 5+ years of
              experience; outside of work, I enjoy continuous learning,
              bodybuilding, DJing and producing music, taking care of my family,
              and following sports from my home country, Angola.
            </HeroParagraph>
            <ButtonWrapper
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.8, delay: 0.7 },
              }}
              viewport={{ once: true }}
            >
              <Link to="/about#certifications" reloadDocument>
                <Button type="primary" text="More about me" />
              </Link>
              <Link to="/about#experiences" reloadDocument>
                <Button
                  type="secondary"
                  text="Download my resume"
                  icon={<FaArrowRightLong />}
                />
              </Link>
            </ButtonWrapper>
          </HeroSeactionBox>
          <Image
            src={myImage}
            alt="mario monteiro photo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.1,
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true }}
          />
        </FlexBox>
      </Container>
      <OvalGlow />
      <HeroGradientImage src={gradientImage} alt="Hero Image" />
      <HeroGrillGraphs src={grillImage} alt="Hero Image" />
    </HeroSectionSection>
  );
}

export default AboutMeHero;
