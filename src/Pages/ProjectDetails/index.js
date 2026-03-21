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
import { easeInOut } from "framer-motion";

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
<<<<<<< HEAD
    <Section padding="60px 0;">
=======
    <Section padding="100px 0;">
>>>>>>> cb0526ea6824f08c519e0f4897fdf7325e35a9ca
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
            <CoverImage
              src={project.cover}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                    delay: 1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            />
            {project.images.map((image) => (
              <ProjectImages
                src={image}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.2, delay: 0.2 },
                }}
                viewport={{ once: true }}
              />
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
