import styled from "styled-components";

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
    opacity: 0.3;
    pointer-events: none;
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
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 18px;
  background: #081620;
  border: 0;
  color: ${({ theme }) => theme.colors.mainPallet.text};
  font-size: ${({ theme }) => theme.fontSize.bodySmall};
  font-family: inherit;
  resize: vertical;
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
`;
