// FILE: src/components/ui/CtaButton.js
"use client";
import styled from "styled-components";

const StyledButton = styled.a`
  padding: 0.9rem 2.2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 8px; /* Slightly more modern radius */
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  /* UPDATED LOGIC FOR FILLED VS OUTLINED STYLES */
  background-color: ${({ $primary, theme }) =>
    $primary ? theme.colors.primary : "transparent"};
  color: ${({ $primary, theme }) =>
    $primary ? theme.colors.white : theme.colors.white};
  border: 2px solid
    ${({ $primary, theme }) =>
      $primary ? theme.colors.primary : theme.colors.white};

  &:hover {
    background-color: ${({ $primary, theme }) =>
      $primary ? theme.colors.white : theme.colors.primary};
    color: ${({ $primary, theme }) =>
      $primary ? theme.colors.primary : theme.colors.white};
    border-color: ${({ theme }) => theme.colors.white};
    transform: translateY(-3px);
  }
`;

const CtaButton = ({ children, href, primary = false, target }) => (
  <StyledButton href={href} $primary={primary} target={target}>
    {children}
  </StyledButton>
);

export default CtaButton;
