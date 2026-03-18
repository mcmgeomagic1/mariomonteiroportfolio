import Contact from "../../Components/Contact";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import Technologies from "./Components/Texhnologies";
import { HomeBox } from "./styledHome.styled";

function Home() {
  return (
    <HomeBox>
      <HeroSection />
      <Projects />
      <Technologies />
      <Contact />
    </HomeBox>
  );
}

export default Home;
