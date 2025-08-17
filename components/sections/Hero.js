"use client";
import styled from "styled-components";

const HeroContainer = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10rem 5% 4rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* CORRECTED: Use your simple, renamed background image file here */
    background-image: url("/images/hero-background.jpeg");
    background-size: cover;
    background-position: center;
    opacity: 0.15;
  }
`;
const HeroContent = styled.div`
  position: relative;
`;
const LogoImage = styled.img`
  width: 450px;
  max-width: 90%;
  height: auto;
  margin-bottom: 2rem;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.2));
`;
const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  max-width: 500px;
  opacity: 0.95;
`;

const Hero = () => (
  <HeroContainer>
    <HeroContent>
      {/* Ensure you have a file named 'logo-white.svg' in public/images/ */}
      <LogoImage src="/images/logo-white.svg" alt="Just Pita & Bar" />
      <Subtitle>
        The best pitas and cocktails in the heart of Barcelona. Come hungry,
        leave happy.
      </Subtitle>
    </HeroContent>
  </HeroContainer>
);

export default Hero;
