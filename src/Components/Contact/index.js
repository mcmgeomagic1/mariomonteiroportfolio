import { Container } from "../../styles/StyledCommon.styled";
import { Button } from "../Button";
import {
  ContactSection,
  Paragraph,
  ContactForm,
  FormGroup,
  FormRow,
  Label,
  Input,
  TextArea,
  ContactWrapper,
  SuccessModal,
  ModalContent,
  SpinnerIcon,
  SuccessIcon,
} from "./styledContact.styled";
import { FaPaperPlane } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";

function Contact() {
  const [state, handleSubmit] = useForm("mvzwyjbp");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Controlled form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Formspree will handle the submission
    await handleSubmit(e);

    setLoading(false);
  };

  // Watch for Formspree success
  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);

      // Clear the form fields
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  return (
    <ContactSection id="contact">
      <Container
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
      >
        <ContactWrapper>
          <h2>Let's work together</h2>
          <Paragraph>
            Turn ideas into fast, scalable, high-converting web experiences.
            With 5+ years in Frontend and UI/UX, I build interfaces that drive
            real business results.
          </Paragraph>

          <ContactForm onSubmit={handleFormSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </FormGroup>

            <FormRow>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Message subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Your message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </FormGroup>

            <Button
              type="primary"
              text={loading ? "Sending..." : "Send message"}
              icon={loading ? <SpinnerIcon /> : <FaPaperPlane />}
              disabled={loading}
            />
          </ContactForm>
        </ContactWrapper>
      </Container>

      {showModal && (
        <SuccessModal>
          <ModalContent>
            <SuccessIcon>
              <FaCheck />
            </SuccessIcon>
            <h4>Thanks! Your message was sent.</h4>
            <Button
              type="primary"
              text="Close"
              onClick={() => setShowModal(false)}
            />
          </ModalContent>
        </SuccessModal>
      )}
    </ContactSection>
  );
}

export default Contact;
