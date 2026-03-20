import { CertificationCard } from "../../../../Components/CertificationCard";
import { Container } from "../../../../styles/StyledCommon.styled";
import {
  CertificationSection,
  Top,
  CardsBox,
} from "./styledCertifications.styled";
import udemy from "../../../../Assets/udemy.png";
import andrey from "../../../../Assets/andrey.png";
import jonas from "../../../../Assets/jonas.png";
import freecodecamp from "../../../../Assets/freecodecamp.png";
import codecampinstructor from "../../../../Assets/codecampinstructor.png";

function Certifications() {
  return (
    <CertificationSection
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
      <Container>
        <Top>
          <h2>Certifications</h2>
          <p>
            I believe great professionals never stop learning. The
            certifications below represent my commitment to continuously
            improving my skills in development, design, and technology while
            staying aligned with modern industry standards.
          </p>
        </Top>
        <CardsBox>
          <CertificationCard
            courseImage={udemy}
            course="Fullstack Web Development (React.js/Node.js)"
            instructureImg={andrey}
            instructoreName="By Andrei Naegoe"
            delayProp={0.1}
          />
          <CertificationCard
            courseImage={freecodecamp}
            course="Responsive Web Design online course"
            instructureImg={codecampinstructor}
            instructoreName="By Freecodecamp"
            isImageLarge={true}
            delayProp={0.3}
          />
          <CertificationCard
            courseImage={udemy}
            course="full Web Design for Web Developers"
            instructureImg={jonas}
            instructoreName="By Jonas Schmendtmann"
            delayProp={0.5}
          />
        </CardsBox>
      </Container>
    </CertificationSection>
  );
}

export default Certifications;
