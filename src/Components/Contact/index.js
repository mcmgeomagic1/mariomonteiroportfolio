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
  SubmitButton,
  ContactWrapper,
} from "./styledContact.styled";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <ContactSection id="contact">
      <Container
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{
          once: true,
        }}
      >
        <ContactWrapper>
          <h2>Let's work together</h2>
          <Paragraph>
            Turn ideas into fast, scalable, high-converting web experiences.
            With 5+ years in Frontend and UI/UX, I build interfaces that drive
            real business results.
          </Paragraph>

          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
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
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Message subject"
                  required
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
                required
              />
            </FormGroup>
            <Button type="primary" text="Send message" />
          </ContactForm>
        </ContactWrapper>
      </Container>
    </ContactSection>
  );
}

export default Contact;
