"use client";
import styled from "styled-components";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const FooterContainer = styled.footer`
  padding: 4rem 5% 3rem;
  /* CORRECTED: Using the approved text color from your theme */
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  a {
    color: ${({ theme }) => theme.colors.background};
    font-size: 1.5rem;
    transition: color 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 1rem;
  opacity: 0.7;
  margin: 0;
  letter-spacing: 0.5px;
`;

const FollowText = styled.div`
  font-size: 1.1rem;
  letter-spacing: 1px;
`;

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <FollowText>
        FOLLOW US! <strong>@justpitaandbar</strong>
      </FollowText>
      <SocialLinks>
        <a
          href="https://www.instagram.com/justpitaandbar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FiInstagram />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FiFacebook />
        </a>
      </SocialLinks>
    </FooterContent>
    <Copyright>&copy; {new Date().getFullYear()} Just Pita & Bar</Copyright>
  </FooterContainer>
);

export default Footer;
