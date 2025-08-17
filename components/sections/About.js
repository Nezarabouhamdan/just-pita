"use client";
import styled from "styled-components";
import Image from "next/image";

const Section = styled.section`
  padding: 8rem 5%;
  background: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
  gap: 5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 4rem 5%;
  }
`;
const ImageWrapper = styled.div`
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
  border-radius: 8px;
`;
const TextContent = styled.div`
  h2 {
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.1rem;
  }
  h3 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 2rem;
    font-size: 1.25rem;
  }
`;

const About = () => (
  <Section id="about">
    <ImageWrapper>
      {/* CORRECTED: Use your simple, renamed image file here */}
      <Image
        src="/images/just-pita-food-spread.jpg"
        alt="A delicious food spread at Just Pita & Bar"
        width={600}
        height={750}
        style={{ objectFit: "cover" }}
      />
    </ImageWrapper>
    <TextContent>
      <h2>Every Great Bite Tells a Story.</h2>
      <p>
        Tucked away in the vibrant streets of Barcelona, we’ve created a place
        where you can slow down, relax, and enjoy food that feels both
        comforting and exciting. Our signature pitas are the stars of the show.
      </p>
      <p>
        But the experience doesn’t end with the food. Our bar is where the magic
        continues—cocktails mixed with care, beers served ice-cold, and a drinks
        menu designed for every mood.
      </p>
      <h3>Come hungry. Leave happy.</h3>
    </TextContent>
  </Section>
);
export default About;
