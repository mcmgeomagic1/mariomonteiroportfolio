import { Container, Section } from "../../styles/StyledCommon.styled";
import { Logo } from "../Logo";
import {
  FooterWrapper,
  FooterContent,
  FooterLeft,
  FooterRight,
  Role,
  Description,
  SocialTitle,
  SocialIcons,
  SocialIcon,
  Copyright,
  NavGrid,
  NavColumn,
  NavTitle,
  NavList,
  NavItem,
  NavLink,
  SocialBox,
} from "./styledFooter.styled";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import resumeen from "../../Assets/mariocv17.pdf";
import resumept from "../../Assets/mariocvpt17.pdf";

export const Footer = () => {
  const theme = useTheme();
  return (
    <Section
      padding="100px 0px 30px 0"
      background={theme.colors.mainPallet.footer}
    >
      <Container>
        <FooterWrapper>
          <FooterContent>
            <FooterLeft>
              <Logo />
              <Role>Frontend Dev & UI/UX Designer · Email & SMS Design | 5+ yrs</Role>
              <Description>
                Postscript, Klavio, React, Next.js, TypeScript, Figma | API integration | UX
                research | Collaborative team player
              </Description>
              <SocialBox>
                <SocialTitle>Social medias</SocialTitle>
                <SocialIcons>
                  <SocialIcon
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </SocialIcon>
                  <SocialIcon
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </SocialIcon>
                </SocialIcons>
              </SocialBox>
            </FooterLeft>

            <FooterRight>
              <NavGrid>
                <NavColumn>
                  <NavTitle>Home</NavTitle>

                  <NavList>
                    <NavItem>
                      <Link to="/#technologies">Skills and Technologies</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/#contact">Contact me</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/about">About me</Link>
                    </NavItem>
                  </NavList>
                </NavColumn>

                <NavColumn>
                  <NavTitle>Projects</NavTitle>
                  <NavList>
                    <NavItem>
                      <a
                      href="https://www.figma.com/design/XjzrGHvZ9HF6a8E2CrmqKw/Mario-Email---SMS-Design-Portfolio?node-id=0-1&t=ULiYvzYhf7HQvhgb-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Email and Popup Design
                    </a>
                    </NavItem>
                    <NavItem>
                      <Link to="projects/1">Easepaycar</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="projects/2">Mirempet</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="projects/3">Marvel App</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="projects/4">Beauty Embassade</Link>
                    </NavItem>

                    <NavItem>
                      <Link to="projects/5">Monocard</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="projects/6">Lucky Dube</Link>
                    </NavItem>
                  </NavList>
                </NavColumn>

                <NavColumn>
                  <NavTitle>Download my CV</NavTitle>
                  <NavList>
                    <NavItem>
                      <NavLink href={resumeen} download>
                        English CV
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href={resumept} download>
                        Portuguese CV
                      </NavLink>
                    </NavItem>
                    <NavItem
                      style={{
                        opacity: 0.5,
                        cursor: "wait",
                        pointerEvents: "none",
                      }}
                    >
                      <NavLink href="/cv-pt.pdf" download>
                        Chinese CV
                      </NavLink>
                    </NavItem>
                  </NavList>
                </NavColumn>
              </NavGrid>
            </FooterRight>
          </FooterContent>

          <Copyright>
            © {new Date().getFullYear()} MARIOMONTEIRO. All rights reserved.
          </Copyright>
        </FooterWrapper>
      </Container>
    </Section>
  );
};
