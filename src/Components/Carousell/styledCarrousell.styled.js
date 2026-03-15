import styled from "styled-components";

export const CarouselBox = styled.div`
  width: 886px;
  height: auto;
  position: absolute;
  top: 63%;
  transform: translateY(-63%);
  right: 0;
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`;
