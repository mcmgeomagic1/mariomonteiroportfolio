import { Button } from "../../../../Components/Button";
import { Container } from "../../../../styles/StyledCommon.styled";
import {
  ExperienceSection,
  ExperienceMainDiv,
} from "./styledExperience.styled";
import { MdOutlineFileDownload } from "react-icons/md";

function Experience() {
  return (
    <ExperienceSection>
      <Container>
        <ExperienceMainDiv>
          <h2>Know my Experience</h2>
          <p>
            I’ve worked with companies and clients across different industries,
            contributing to the design and development of impactful digital
            products. For a detailed overview of my experience and
            responsibilities, download my resume below.
          </p>
          <Button
            text="Download my Resume"
            type="primary"
            icon={<MdOutlineFileDownload />}
          />
        </ExperienceMainDiv>
      </Container>
    </ExperienceSection>
  );
}

export default Experience;
