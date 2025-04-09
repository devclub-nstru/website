import React from "react";
import {
  FooterWrapper,
  FooterText,
  FooterLinks,
  FooterLink,
  FooterSocial,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSocial
        as="a"
        href="https://www.linkedin.com/company/dev-club-nstru"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </FooterSocial>
      <FooterSocial
        as="a"
        href="https://github.com/devclub-nstru"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </FooterSocial>
      <FooterSocial
        as="a"
        href="mailto:softwaredevg.club@rishihood.edu.in"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email
      </FooterSocial>
      <FooterSocial
        as="a"
        href="https://discord.gg/aNKGfuhk"
        target="_blank"
        rel="noopener noreferrer"
      >
        Discord
      </FooterSocial>
      <FooterText>© 2025 DevClub. Made with ❤️</FooterText>
      <FooterLinks>
        <FooterLink
          href="https://newtonschool.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          NST
        </FooterLink>
        <span>|</span>
        <FooterLink
          href="https://rishihood.edu.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          RU
        </FooterLink>
      </FooterLinks>
    </FooterWrapper>
  );
};

export default Footer;
