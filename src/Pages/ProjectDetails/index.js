import { useParams } from "react-router-dom";
import {
  ProjectDetailsBox,
  ProjectTitle,
  TopInfo,
  AboutDiv,
  SkillsDiv,
  ImagesDiv,
  CoverImage,
  ProjectImages,
  HeroGradientImage,
  HeroGrillGraphs,
  OvalGlow,
  SkillsGrid,
  SkillItem,
} from "./styledProjectDetails.styled";
import { projects } from "../../Data/Projects";
import { Container, Section } from "../../styles/StyledCommon.styled";
import { useThemeContext } from "../../Context/ThemeContext";
import { useEffect } from "react";
import gradientImage from "../../Assets/Gradien-graph-bg.png";
import grillImage from "../../Assets/grill.png";

function ProjectDetails() {
  const { id } = useParams();
  const { updateTheme, resetTheme } = useThemeContext();

  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    if (project) {
      updateTheme(project.palette);
    }

    return () => resetTheme(); // 🔥 reset when leaving
  }, [project]);

  if (!project) return <h1>Project not found</h1>;

  return (
    <Section padding="100px 0;">
      <Container>
        <ProjectDetailsBox>
          <TopInfo>
            <h3>{project.type}</h3>
            <ProjectTitle color={project.palette.primary}>
              {project.title}
            </ProjectTitle>
            <span>{project.description}</span>
          </TopInfo>
          <AboutDiv>
            <h3>About the project</h3>
            <p> {project.about}</p>
          </AboutDiv>
          <SkillsDiv>
            <h3>Technologies/skills I used</h3>
            <SkillsGrid>
              {project.technologies.map((skill) => (
                <SkillItem>{skill}</SkillItem>
              ))}
            </SkillsGrid>
          </SkillsDiv>
          <ImagesDiv>
            <CoverImage src={project.cover} />
            {project.images.map((image) => (
              <ProjectImages src={image} />
            ))}
          </ImagesDiv>
        </ProjectDetailsBox>
      </Container>
      <OvalGlow />
      <HeroGradientImage src={gradientImage} alt="Hero Image" />
      <HeroGrillGraphs src={grillImage} alt="Hero Image" />
    </Section>
  );
}

export default ProjectDetails;
