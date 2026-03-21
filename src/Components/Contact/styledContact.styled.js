import styled, { keyframes } from "styled-components";
import { FaSpinner } from "react-icons/fa";

export const ContactSection = styled.section`
  padding: 100px 0;
  position: relative;
  min-height: 100vh;
  display: flex;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 60px 0px;
  }
`;

export const ContactWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const Paragraph = styled.p`
  width: 80%;
  margin: 24px 0 40px 0;
  opacity: 0.7;
  line-height: 1.8;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    font-size: 16px;
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  margin: 0 auto;
  text-align: left;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.mainPallet.stroke};
  padding: 60px;

  button {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 30px 20px;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 1em;
  letter-spacing: 0.5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 24px 14px;
  background: #081620;
  border: 0;
  font-size: ${({ theme }) => theme.fontSize.bodySmall};
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.colors.mainPallet.standard.white};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.mainPallet.primary};
    background: #0a1a25ff;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.mainPallet.primary}80;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #081620 inset; /* same as background */
    -webkit-text-fill-color: ${({ theme }) =>
      theme.colors.mainPallet.standard.white}; /* same as text */
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 18px;
  background: #081620;
  border: 0;
  color: ${({ theme }) => theme.colors.mainPallet.standard.white};
  font-size: ${({ theme }) => theme.fontSize.bodySmall};
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.mainPallet.primary};
    background: #0a1a25ff;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.mainPallet.primary}80;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #081620 inset; /* same as background */
    -webkit-text-fill-color: ${({ theme }) =>
      theme.colors.mainPallet.standard.white}; /* same as text */
    transition: background-color 5000s ease-in-out 0s;
  }
`;

// Modal components
export const SuccessModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.mainPallet.standard.black};
  color: ${({ theme }) => theme.colors.mainPallet.standard.white};
  padding: 40px 60px;
  border-radius: 16px;
  text-align: center;
  max-width: 800px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-gap: 1em;

  button {
    margin-top: 20px;
    width: 100%;
  }
`;

// Spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerIcon = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
  margin-left: 8px;
`;

export const SuccessIcon = styled.div`
  width: 70px;
  height: 70px;
  background-color: #74d65cff;
  color: ${({ theme }) => theme.colors.mainPallet.standard.black};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 35px;
  }
`;
