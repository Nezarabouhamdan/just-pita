// FILE: src/components/layout/Navbar.js
// This is the complete, self-contained code for the Navbar component.

"use client";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import WhatsAppButton from "../ui/Button";
import { FiMenu, FiX } from "react-icons/fi";
import { NavDropdown, DropdownLink } from "./NavDropdown";

// --- STYLED COMPONENTS (ALL DEFINED HERE) ---

const NavWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 5%;
  z-index: 1000;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem 5%;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0.75rem 1rem 0.75rem 2rem;

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1.5rem;

  background: rgba(240, 240, 240, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); /* For Safari */
  border-radius: 99px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.a`
  grid-column: 1 / 2;
  justify-self: start;
`;

const LinksContainer = styled.nav`
  display: none;
  grid-column: 2 / 3;
  justify-self: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }
`;

const ActionsContainer = styled.div`
  grid-column: 3 / 4;
  justify-self: end;
  display: flex;
  align-items: center;
`;

const DesktopOnlyWrapper = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

const NavLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const HamburgerIcon = styled.div`
  display: block;
  cursor: pointer;
  z-index: 1001;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  z-index: 999; /* Below the header so the X button is clickable */

  a:not(.whatsapp-button) {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.headings};
    text-decoration: none;
    margin: 1rem 0;
  }

  & > .whatsapp-button {
    margin-top: 2rem;
  }
`;

// --- THE COMPONENT ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const darkLogoSrc =
    "https://i.ibb.co/qLFwrRF5/Chat-GPT-Image-Aug-13-2025-08-31-10-PM-removebg-preview.png"; // Make sure this file exists in public/images/

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <NavWrapper>
        <NavContainer>
          {/* Item 1: Logo (Left Column) */}
          <LogoContainer href="#">
            <Image
              src={darkLogoSrc}
              alt="Just Pita & Bar Logo"
              width={130}
              height={45}
              priority={true}
            />
          </LogoContainer>

          {/* Item 2: Centered Links (Middle Column) */}
          <LinksContainer>
            <NavLink href="#">Home</NavLink>
            <NavDropdown label="Our Pitas">
              <DropdownLink href="#menu">La Falafabulosa</DropdownLink>
              <DropdownLink href="#menu">La Toxica</DropdownLink>
              <DropdownLink href="#menu">El Pollon</DropdownLink>
              <DropdownLink href="#menu">See All Pitas</DropdownLink>
            </NavDropdown>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#visit">Visit</NavLink>
          </LinksContainer>

          {/* Item 3: Actions (Right Column) */}
          <ActionsContainer>
            <DesktopOnlyWrapper>
              <WhatsAppButton />
            </DesktopOnlyWrapper>
            <HamburgerIcon onClick={toggleMenu}>
              {isOpen ? <FiX /> : <FiMenu />}
            </HamburgerIcon>
          </ActionsContainer>
        </NavContainer>
      </NavWrapper>

      {/* Fullscreen Mobile Menu (Controlled by state) */}
      <MobileMenuContainer $isOpen={isOpen}>
        <NavLink href="#" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink href="#menu" onClick={toggleMenu}>
          Menu
        </NavLink>
        <NavLink href="#about" onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink href="#visit" onClick={toggleMenu}>
          Visit
        </NavLink>
        <WhatsAppButton className="whatsapp-button" />
      </MobileMenuContainer>
    </>
  );
};

export default Navbar;
