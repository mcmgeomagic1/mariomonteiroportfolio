import styled from "styled-components";

export const ButtonBox = styled.button`
  border: ${(props) =>
    props.$type === "primary"
      ? `1px solid ${props.theme.colors.mainPallet.standard.white}`
      : "none"};

  /* PRIMARY HOVER */
  ${(props) =>
    props.$type === "primary" &&
    `
		&:hover {
			background-color: ${props.theme.colors.mainPallet.standard.white};
			color: ${props.theme.colors.mainPallet.standard.black};
			border: none;
		}
	`}

  /* SECONDARY HOVER */
	${(props) =>
    props.$type === "secondary" &&
    `
		svg {
			transition: transform 0.3s ease;
		}

		&:hover svg {
			transform: translateX(6px);
		}
	`}
`;
