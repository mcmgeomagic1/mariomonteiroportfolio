import {
  CertificationBox,
  TopPart,
  CursoTitle,
  BottomPart,
} from "./styledCertificationCard";
import udemy from "../../Assets/udemy.png";
import andrey from "../../Assets/andrey.png";

export const CertificationCard = () => {
  return (
    <CertificationBox>
      <TopPart>
        <img src={udemy} alt="course instituition" />
        <span>Online</span>
      </TopPart>
      <CursoTitle>Fullstack Web Development (React.js/Node.js)</CursoTitle>
      <BottomPart>
        <img src={andrey} alt="andrey" />
        <span>By Andrey Naegoe</span>
      </BottomPart>
    </CertificationBox>
  );
};
