"use client"; // <-- ADD THIS LINE
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const ButtonWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 14px 28px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const WhatsAppButton = () => {
  const phoneNumber = "+34685066049"; // Remember to update this

  return (
    <ButtonWrapper
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size="1.5em" />
      Contact Us
    </ButtonWrapper>
  );
};

export default WhatsAppButton;
