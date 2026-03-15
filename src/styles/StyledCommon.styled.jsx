import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: ${(props) => (props.paddingTop ? props.paddingTop : 0)}px 0px;
`;

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    width: 1100px;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
  }
`;
