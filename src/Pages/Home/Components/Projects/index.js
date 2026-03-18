import { Section, Container } from "../../../../styles/StyledCommon.styled";
import { projects } from "../../../../Data/Projects";
import { ProjectDiv } from "./styledProjects.styled";
import { Button } from "../../../../Components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import gradientImage from "../../../../Assets/Gradien-graph-bg.png";
import grillImage from "../../../../Assets/grill.png";
import {
  ProjectTitle,
  ProjectImageBox,
  OvalGlow,
  HeroGradientImage,
  HeroGrillGraphs,
  HorizontalSection,
  StickyContainer,
  HorizontalTrack,
  Slide,
  ProjectsSection,
} from "./styledProjects.styled";
import { useRef, useEffect, useState } from "react";

function Projects() {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const horizontal = horizontalRef.current;

      if (!section || !horizontal) return;

      const scrollTop = window.scrollY;
      const offsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // only run when inside section
      if (scrollTop >= offsetTop && scrollTop <= offsetTop + sectionHeight) {
        const progress =
          (scrollTop - offsetTop) / (sectionHeight - window.innerHeight);

        const maxScroll = horizontal.scrollWidth - window.innerWidth;

        horizontal.style.transform = `translateX(-${progress * maxScroll}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ProjectsSection ref={sectionRef} slides={projects.length}>
      <StickyContainer>
        <HorizontalTrack ref={horizontalRef}>
          {projects.map((project, index) => (
            <Section key={index} background={project.palette.background}>
              <Container height="100vh" padding="45px 0px" position="relative">
                <ProjectDiv>
                  <h4>{project.type}</h4>
                  <ProjectTitle color={project.palette.primary}>
                    {project.title}
                  </ProjectTitle>
                  <p>{project.description}</p>
                  <Button
                    type="primary"
                    text="View project"
                    icon={<FaArrowRightLong />}
                  />
                </ProjectDiv>
                <ProjectImageBox>
                  <img src={project.thumbnail} alt="project thumbnail" />
                </ProjectImageBox>
                {/* <OvalGlow /> */}
              </Container>
              <HeroGradientImage src={gradientImage} alt="Hero Image" />
              <HeroGrillGraphs src={grillImage} alt="Hero Image" />
            </Section>
          ))}
        </HorizontalTrack>
      </StickyContainer>
    </ProjectsSection>
  );
}

export default Projects;
