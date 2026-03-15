import styled from "styled-components";

export const LogoText = styled.span`
  font-size: 24px;
`;
export const ColoredPart = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mainPallet.primary};
`;
