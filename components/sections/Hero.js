// components/sections/Hero.js
"use client";
import styled from "styled-components";
import CtaButton from "../ui/CtaButton";
import Image from "next/image";

// UPDATED: Import Swiper and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"; // NEW: Added EffectFade

// UPDATED: Import ALL necessary Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // NEW: Import fade effect styles

// NEW: Import Framer Motion for content animation
import { motion } from "framer-motion";

// --- SLIDE DATA (no changes here) ---
const slideData = [
  {
    imageSrc:
      "https://i.ibb.co/cSTq6kPF/Google-AI-Studio-2025-08-19-T17-24-22-605-Z.png",
    title: "Fresh, Bold, & A Little Crazy.",
    subtitle:
      "Our signature pitas are crafted daily with the freshest ingredients and a whole lot of flavor.",
    cta1: { text: "View The Food Menu", href: "#menu", primary: true },
    cta2: {
      text: "Order Takeaway",
      href: "YOUR_DELIVERY_LINK",
      target: "_blank",
    },
  },
  {
    imageSrc:
      "https://i.ibb.co/VW0H8GTG/Google-AI-Studio-2025-08-19-T17-24-54-511-Z.png",
    title: "Where the Magic Happens.",
    subtitle:
      "Discover our bar with craft cocktails mixed with care and a drink menu for every mood.",
    cta1: { text: "Explore The Drinks", href: "#menu", primary: true },
    cta2: { text: "Visit The Bar", href: "#visit" },
  },
  {
    imageSrc:
      "https://i.ibb.co/jkX5FmT2/Google-AI-Studio-2025-08-19-T17-24-04-348-Z.png",
    title: "Good Flavors Meet Good Vibes.",
    subtitle:
      "We're here for the food lovers, the cocktail seekers, and the weekend wanderers. Come hungry, leave happy.",
    cta1: { text: "Find Our Location", href: "#visit", primary: true },
    cta2: {
      text: "Follow Us",
      href: "https://instagram.com/justpitabar",
      target: "_blank",
    },
  },
];

// --- FRAMER MOTION ANIMATION VARIANTS (NEW) ---
const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Animates children one after the other
    },
  },
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// --- STYLED COMPONENTS (no major changes) ---
const HeroContainer = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.white};

  /* --- NEW & IMPROVED SWIPER STYLES --- */
  .swiper-button-next,
  .swiper-button-prev {
    color: white; /* The color of the arrow icon */
    background: transparent; /* Remove the ugly default background */
    width: 60px;
    height: 60px;
    transition: opacity 0.3s ease;
    opacity: 0.6;

    &::after {
      font-size: 2rem; /* Make the arrow icon larger */
      text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); /* Add shadow for visibility */
    }
    &:hover {
      opacity: 1;
    }
  }

  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.7);
    width: 10px;
    height: 10px;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary};
    transform: scale(1.2);
  }
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SlideImage = styled(Image)`
  z-index: 1;
`;

const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
  z-index: 2;
`;

// UPDATED: Changed from styled.div to motion.div for animation
const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 5%;
`;

const Title = styled(motion.h1)`
  // UPDATED to motion.h1
  font-family: ${({ theme }) => theme.fonts.headings};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.2;
  font-weight: normal;
  font-size: clamp(3rem, 7vw, 4.5rem);
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5));
`;

const Subtitle = styled(motion.p)`
  // UPDATED to motion.p
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.25rem;
  max-width: 550px;
  line-height: 1.6;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const CtaContainer = styled(motion.div)`
  // UPDATED to motion.div
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
  }
`;

// --- THE COMPONENT ---
const Hero = () => {
  return (
    <HeroContainer>
      <Swiper
        // --- SWIPER CONFIGURATION UPDATED ---
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade" // NEW: Use the fade effect
        fadeEffect={{ crossFade: true }} // NEW: For a smoother cross-fade
        speed={3000} // NEW: Slower, more elegant transition speed (1.5s)
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* The `isActive` prop from Swiper is used to trigger animations */}
            {({ isActive }) => (
              <SlideWrapper>
                <SlideImage
                  src={slide.imageSrc}
                  alt={slide.title}
                  fill // MODERN PROP: replaces layout="fill"
                  style={{ objectFit: "cover" }} // MODERN PROP: replaces objectFit prop
                  quality={90}
                  priority={index === 0}
                  unoptimized={true} // MAGIC FIX: Bypasses Next.js optimizer for this remote image
                />
                <SlideOverlay />

                {/* --- ANIMATED CONTENT --- */}
                <HeroContent
                  variants={contentContainerVariants}
                  initial="hidden"
                  animate={isActive ? "visible" : "hidden"} // Animate only on the active slide
                >
                  <Title variants={contentItemVariants}>{slide.title}</Title>
                  <Subtitle variants={contentItemVariants}>
                    {slide.subtitle}
                  </Subtitle>
                  <CtaContainer variants={contentItemVariants}>
                    {slide.cta1 && (
                      <CtaButton
                        href={slide.cta1.href}
                        primary={slide.cta1.primary}
                        target={slide.cta1.target}
                      >
                        {slide.cta1.text}
                      </CtaButton>
                    )}
                    {slide.cta2 && (
                      <CtaButton
                        href={slide.cta2.href}
                        primary={slide.cta2.primary}
                        target={slide.cta2.target}
                      >
                        {slide.cta2.text}
                      </CtaButton>
                    )}
                  </CtaContainer>
                </HeroContent>
              </SlideWrapper>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </HeroContainer>
  );
};

export default Hero;
