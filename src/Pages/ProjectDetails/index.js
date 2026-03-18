import { useParams } from "react-router-dom";
import { ProjectDetailsBox } from "./styledProjectDetails.styled";
import { projects } from "../../Data/Projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <h1>Project not found</h1>;
  return (
    <ProjectDetailsBox>
      <p>project is: {project.title}</p>
    </ProjectDetailsBox>
  );
}

export default ProjectDetails;
