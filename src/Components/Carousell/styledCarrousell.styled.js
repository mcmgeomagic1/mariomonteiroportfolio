import styled from "styled-components";

export const CarouselBox = styled.div`
  width: 886px;
  height: auto;
  position: absolute;
  top: 60%;
  transform: translateY(-60%);
  right: 0;
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }

  ${({ theme }) => `
    @media (max-height: ${theme._13inchHeight}) and (max-width: 1230px) {
      top: 50%;
      transform: translateY(-50%);
      img {
        width: 207px;
        height: 113px;
      }
    }
  `}
`;
