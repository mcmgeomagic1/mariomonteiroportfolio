import { Button } from "../../../../Components/Button";
import { Container } from "../../../../styles/StyledCommon.styled";
import {
  ExperienceSection,
  ExperienceMainDiv,
} from "./styledExperience.styled";
import { MdOutlineFileDownload } from "react-icons/md";
import resume from "../../../../Assets/mariocv16.pdf";

function Experience() {
  return (
    <ExperienceSection id="experiences">
      <Container
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
        <ExperienceMainDiv>
          <h2>Know my Experience</h2>
          <p>
            I’ve worked with companies and clients across different industries,
            contributing to the design and development of impactful digital
            products. For a detailed overview of my experience and
            responsibilities, download my resume below.
          </p>
          <a href={resume} download>
            <Button
              text="Download my Resume"
              type="primary"
              icon={<MdOutlineFileDownload />}
            />
          </a>
        </ExperienceMainDiv>
      </Container>
    </ExperienceSection>
  );
}

export default Experience;
