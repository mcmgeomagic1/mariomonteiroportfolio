import { CertificationCard } from "../../../../Components/CertificationCard";
import { Container } from "../../../../styles/StyledCommon.styled";
import {
  CertificationSection,
  Top,
  CardsBox,
} from "./styledAboutMeHero.styled";

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
          <CertificationCard />
          <CertificationCard />
          <CertificationCard />
        </CardsBox>
      </Container>
    </CertificationSection>
  );
}

export default Certifications;
