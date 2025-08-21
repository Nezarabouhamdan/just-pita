// src/components/layout/NavDropdown.js
"use client";
import { useState } from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const DropdownContainer = styled(motion.div)`
  position: relative;
`;

const DropdownLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  /* Uses the same styling as NavLink for consistency */
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    transition: transform 0.3s ease;
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 150%; /* Position it below the label with some space */
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
  z-index: 100;
  min-width: 200px;
  display: flex;
  flex-direction: column;
`;

const DropdownLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: left;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const dropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.95,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const NavDropdown = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
    >
      <DropdownLabel>
        {label}
        <FiChevronDown
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
        />
      </DropdownLabel>

      <AnimatePresence>
        {isOpen && (
          <DropdownMenu
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </DropdownMenu>
        )}
      </AnimatePresence>
    </DropdownContainer>
  );
};

// You'll import this into your main Navbar.js
export { NavDropdown, DropdownLink };
