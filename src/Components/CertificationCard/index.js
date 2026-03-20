import {
  CertificationBox,
  TopPart,
  CursoTitle,
  BottomPart,
} from "./styledCertificationCard";

export const CertificationCard = ({
  courseImage,
  course,
  instructureImg,
  instructoreName,
  isImageLarge,
  delayProp,
}) => {
  return (
    <CertificationBox
      initial={{ opacity: 0, x: 50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.3, delay: delayProp },
      }}
      viewport={{ once: true }}
    >
      <TopPart isImageLarge={isImageLarge}>
        <img src={courseImage} alt="course instituition" />
        <span>Online</span>
      </TopPart>
      <CursoTitle>{course}</CursoTitle>
      <BottomPart>
        <img src={instructureImg} alt="andrey" />
        <span>{instructoreName}</span>
      </BottomPart>
    </CertificationBox>
  );
};
