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

export const Footer = () => {
  const theme = useTheme();
  return (
    <Section padding="100px 0px 30px 0" background="rgba(255, 255, 255, 0.05)">
      <Container>
        <FooterWrapper>
          <FooterContent>
            <FooterLeft>
              <Logo />
              <Role>Frontend Dev & UI/UX Designer | 5+ years experience</Role>
              <Description>
                React, Next.js, TypeScript, Figma | API integration | UX
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
                  <NavItem>
                    <Link to="/">Home</Link>
                  </NavItem>
                  <NavList>
                    <NavItem>
                      <Link to="/">Skills and Technologies</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/">Contact me</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/about">About me</Link>
                    </NavItem>
                  </NavList>
                </NavColumn>

                <NavColumn>
                  <NavTitle>Download my CV</NavTitle>
                  <NavList>
                    <NavItem>
                      <NavLink href="/cv.pdf" download>
                        English CV
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/cv-pt.pdf" download>
                        Portuguese CV
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/cv-pt.pdf" download>
                        Chinese CV
                      </NavLink>
                    </NavItem>
                  </NavList>
                </NavColumn>

                <NavColumn>
                  <NavTitle>Projects</NavTitle>
                  <NavList>
                    <NavItem>
                      <NavLink href="#project1">Easepaycar</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#project2">Lucky Dube</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#project1">Marvel App</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#project2">Beauty Embassade</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#project1">Mirempet</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#project2">Monocard</NavLink>
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
