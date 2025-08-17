"use client";
import styled from "styled-components";
import Button from "../ui/Button";

const BannerContainer = styled.section`
  padding: 5rem 5%;
  background: ${({ theme }) => theme.colors.primary};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
const BannerTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1.5rem;
`;
const InvertedButton = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
`;

const CtaBanner = () => (
  <BannerContainer>
    <BannerTitle>Music & Pitas: Every Friday Night</BannerTitle>
    <p>Join us for live music, great vibes, and your favorite pita.</p>
    <InvertedButton href="#visit">Book A Table</InvertedButton>
  </BannerContainer>
);

export default CtaBanner;
