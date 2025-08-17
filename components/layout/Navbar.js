"use client";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import WhatsAppButton from "../ui/Button";
import { FiMenu, FiX } from "react-icons/fi";

const NavContainer = styled.header`
  padding: 3rem 5% 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const DesktopLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none; // Hidden on mobile, replaced by hamburger
  }

  a {
    font-size: 1rem;
    font-weight: normal;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s ease;
    padding-bottom: 5px;
    border-bottom: 2px solid transparent;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      border-bottom-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const MobileHeader = styled.div`
  display: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;

const HamburgerIcon = styled.div`
  display: block; // Always have space for it, but logic controls visibility
  cursor: pointer;
  z-index: 1001;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.text};
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
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  z-index: 1000;

  a:not([href^="https"]) {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    margin: 1rem 0;
  }

  // Give the WhatsAppButton some space in the mobile menu
  & > a[href^="https"] {
    margin-top: 2rem;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <NavContainer>
        {/* Mobile Header: Logo on Left, Hamburger on Right */}
        <MobileHeader>
          <Image
            src="/public/images/logo.png"
            alt="Just Pita & Bar Logo"
            width={130}
            height={45}
          />
          <HamburgerIcon onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu />}
          </HamburgerIcon>
        </MobileHeader>

        {/* Desktop Header: Centered Logo and Links */}
        <DesktopLinks as="div">
          {" "}
          {/* Using "as" prop to avoid nested navs */}
          <Image
            src="/images/logo.svg"
            alt="Just Pita & Bar Logo"
            width={180}
            height={60}
          />
        </DesktopLinks>
        <DesktopLinks>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#visit">Visit</a>
          <WhatsAppButton />
        </DesktopLinks>
      </NavContainer>

      {/* Fullscreen Mobile Menu */}
      <MobileMenuContainer $isOpen={isOpen}>
        <HamburgerIcon
          style={{ position: "absolute", top: "3rem", right: "5%" }}
          onClick={toggleMenu}
        >
          <FiX />
        </HamburgerIcon>
        <a href="#menu" onClick={toggleMenu}>
          Menu
        </a>
        <a href="#about" onClick={toggleMenu}>
          About
        </a>
        <a href="#visit" onClick={toggleMenu}>
          Visit
        </a>
        <WhatsAppButton />
      </MobileMenuContainer>
    </>
  );
};

export default Navbar;
