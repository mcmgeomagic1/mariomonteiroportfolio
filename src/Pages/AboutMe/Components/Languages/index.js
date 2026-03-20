import { Container } from "../../../../styles/StyledCommon.styled";
import { Top } from "../Certifications/styledCertifications.styled";
import {
  LanguageSection,
  LanguagesDiv,
  LanguageItem,
  Progress,
  LanguageGradient,
  LanguageGraps,
} from "./styledLanguages.styled";
import languagesGraph from "../../../../Assets/languagesgraph.png";
import languageGradient from "../../../../Assets/languageGradient.png";

function Languages() {
  return (
    <LanguageSection>
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
        <LanguagesDiv>
          <LanguageItem
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <span>Portuguese (Native)</span>
            <Progress Percentage="90%"></Progress>
          </LanguageItem>
          <LanguageItem
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.3 },
            }}
            viewport={{ once: true }}
          >
            <span>English (Fluent - C2))</span>
            <Progress Percentage="75%"></Progress>
          </LanguageItem>
          <LanguageItem
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.4 },
            }}
            viewport={{ once: true }}
          >
            <span>Chinese (Intermidiate - HSK 4)</span>
            <Progress Percentage="35%"></Progress>
          </LanguageItem>
        </LanguagesDiv>
      </Container>
      <LanguageGradient src={languageGradient} alt="language gradient" />
      <LanguageGraps src={languagesGraph} alt="Language graphics" />
    </LanguageSection>
  );
}

export default Languages;
