import Contact from "../../Components/Contact";
import Certifications from "./Components/Certifications";
import Experience from "./Components/Experiences";
import AboutMeHero from "./Components/HeroSection";
import Languages from "./Components/Languages";

function AboutMe() {
  return (
    <>
      <AboutMeHero />
      <Certifications />
      <Languages />
      <Experience />
      <Contact />
    </>
  );
}

export default AboutMe;
