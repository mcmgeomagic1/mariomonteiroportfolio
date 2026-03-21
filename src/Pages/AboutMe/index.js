import Contact from "../../Components/Contact";
import Certifications from "./Components/Certifications";
import Experience from "./Components/Experiences";
import AboutMeHero from "./Components/HeroSection";
import Languages from "./Components/Languages";
import { AboutmeSection } from "./styledAboutMe.styled";

function AboutMe() {
  return (
    <AboutmeSection>
      <AboutMeHero />
      <Certifications />
      <Languages />
      <Experience />
      <Contact />
    </AboutmeSection>
  );
}

export default AboutMe;
