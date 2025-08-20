// FILE: src/components/sections/VisitUs.js
// THIS IS THE FINAL, FULLY RESPONSIVE VERSION. NO DESIGN CHANGES.

"use client";
import styled from "styled-components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Your image data
const visitImages = [
  {
    src: "https://i.ibb.co/Jjs4qFx7/Google-AI-Studio-2025-08-19-T17-19-17-881-Z.png",
    alt: "A cozy corner of the restaurant",
  },
  {
    src: "https://i.ibb.co/C5rzh3rx/Google-AI-Studio-2025-08-19-T17-14-11-233-Z.png",
    alt: "Close-up of a delicious falafel pita",
  },
  {
    src: "https://i.ibb.co/zt8PtsN/Google-AI-Studio-2025-08-19-T17-15-18-503-Z.png",
    alt: "Atmospheric shot of the bar area at night",
  },
];

// --- STYLED COMPONENTS (REBUILT FOR RESPONSIVENESS) ---

const SectionContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.monospace};

  /* --- MOBILE FIRST LAYOUT (Flexbox Column) --- */
  display: flex;
  flex-direction: column;

  /* --- DESKTOP LAYOUT (Switches to Grid) --- */
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 45% 55%;
    min-height: 100vh; /* Re-apply min-height ONLY for desktop grid */
  }
`;

const ImageSliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh; /* A robust, responsive height for mobile */

  /* Make the image appear first on mobile */
  order: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 100vh; /* Full height for desktop */
    order: 2; /* Switch order for desktop */
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: white;
    font-size: 1.5rem;
  }
`;

const InfoContainer = styled.div`
  padding: 4rem 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Make the text appear second on mobile */
  order: 2;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    order: 1; /* Switch order for desktop */
    padding: 5rem 5%;
  }
`;

// --- (The following components needed NO changes) ---
const InfoBlock = styled.div`
  padding: 1.25rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lines};
`;

const Address = styled.div`
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  }
`;

const HoursGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const HoursRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Description = styled.div`
  padding-top: 1.25rem;
  font-size: 0.95rem;
  line-height: 1.8;
  max-width: 50ch;
  p {
    font-family: inherit;
    color: ${({ theme }) => theme.colors.subtleText};
  }
`;

// --- THE COMPONENT ---
const VisitUs = () => {
  return (
    // UPDATED ID from "about" to "visit" for correct navigation linking
    <SectionContainer id="visit">
      <ImageSliderContainer>
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation={true}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          style={{ width: "100%", height: "100%" }}
        >
          {visitImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                unoptimized={true}
                style={{ objectFit: "cover" }}
                quality={90}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ImageSliderContainer>

      <InfoContainer>
        <InfoBlock>
          {/* --- CONTENT UPDATED --- */}
          <Address>
            <a
              href="https://maps.google.com/?q=Carrer+d'Aribau,+86,+L'Eixample,+08036+Barcelona,+Spain"
              target="_blank"
              rel="noopener noreferrer"
            >
              Carrer d'Aribau, 86 - Barcelona
            </a>
            <br />
            T. ‎+34 685 06 60 49
          </Address>
        </InfoBlock>
        <InfoBlock>
          {/* --- CONTENT UPDATED --- */}
          <HoursGrid>
            <HoursRow>
              <span>SUN–THU</span>
              <span>12:00 – 02:30</span>
            </HoursRow>
            <HoursRow>
              <span>FRI–SAT</span>
              <span>12:00 – 03:00</span>
            </HoursRow>
          </HoursGrid>
        </InfoBlock>

        {/* The "WITHOUT RESERVE" block can be kept if it's still your policy */}
        <InfoBlock>
          <span>About Us</span>
        </InfoBlock>

        {/* --- "ABOUT US" CONTENT UPDATED --- */}
        <Description>
          <h4>Every great bite tells a story...</h4>
          <p>
            Ours begins with a love for fresh ingredients, bold flavors, and a
            passion for bringing people together. Tucked away in the vibrant
            streets of Barcelona, we have created a place where you can slow
            down, relax, and enjoy food that feels both comforting and exciting.
          </p>
          <p>
            The experience doesnot end with the food. Our bar is where the magic
            continues—cocktails mixed with care, beers served ice-cold, and a
            drinks menu designed for every mood. We are here for the food
            lovers, the cocktail seekers, and the weekend wanderers.
          </p>
          <p>
            <strong>Come hungry. Leave happy.</strong>
          </p>
        </Description>
      </InfoContainer>
    </SectionContainer>
  );
};

export default VisitUs;
