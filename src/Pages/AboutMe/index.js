import { Container, Section } from "../../styles/StyledCommon.styled";
import { Text } from "./styledHome.styled";

function AboutMe() {
  return (
    <Section paddingTop={60}>
      <Container>
        <h1>About Page</h1>
        <p>This is the about page.</p>
      </Container>
    </Section>
  );
}

export default AboutMe;
