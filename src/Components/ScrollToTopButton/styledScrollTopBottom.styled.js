import styled from "styled-components";

export const ArrowButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;

  width: 170px;
  height: 50px;
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(5px);

  color: ${({ theme }) => theme.colors.mainPallet.standard.white};

  border: none;
  cursor: pointer;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? "all" : "none")};

  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(20px)"};

  transition: all 0.3s ease;
  z-index: 999;

  svg {
    font-size: 18px;
  }

  &:hover {
    transform: translateY(-3px);
  }
`;
