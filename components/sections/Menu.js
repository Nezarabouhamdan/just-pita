// components/sections/Menu.js
"use client";
import styled from "styled-components";
import { menuData } from "@/data/menuData";

const Section = styled.section`
  padding: 8rem 5%;
  background-image: url("/images/parchment-texture.png"); // NEW: Add a subtle texture
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 5rem;
`;

const CategoryTitle = styled.h3`
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  position: relative;
  display: inline-block;

  /* NEW: Decorative underline with classical feel */
  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const MenuItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0 1rem;
  align-items: center;
  padding-bottom: 1.25rem;

  &:not(:last-child) {
    border-bottom: 1px dotted ${({ theme }) => theme.colors.primary + "55"};
  }
`;

// ItemName and ItemDescription will be grouped
const ItemDetails = styled.div``;

const ItemName = styled.h4`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 700;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ItemPrice = styled.span`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-weight: normal;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ItemDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  margin: 0.25rem 0 0;
  color: ${({ theme }) => theme.colors.subtleText};
  font-weight: 400;
  line-height: 1.5;
  grid-column: 1 / 2; // Span across the first column
`;
const SectionSeparator = styled.h3`
  font-family: ${({ theme }) => theme.fonts.headings};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-size: 2.5rem;
  grid-column: 1 / -1; /* This makes it span all columns of the grid */
  margin-top: 3rem;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem 3.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MenuCategory = ({ title, items }) => (
  <div>
    <CategoryTitle>{title}</CategoryTitle>
    {items.map((item) => (
      <MenuItem key={item.name}>
        <ItemDetails>
          <ItemName>{item.name}</ItemName>
        </ItemDetails>
        <ItemPrice>{item.price}</ItemPrice>
        {item.description && (
          <ItemDescription>{item.description}</ItemDescription>
        )}
      </MenuItem>
    ))}
  </div>
);

const Menu = () => (
  // Your Menu component JSX (no changes here)
  <Section id="menu">
    <Title>Our Menu</Title>
    <MenuGrid>
      <MenuCategory title="Entrantes" items={menuData.entrantes} />
      <MenuCategory title="Pitas" items={menuData.pitas} />

      {/* NEW: Visual separator between Food and Drinks */}
      <SectionSeparator>Drinks & Cocktails</SectionSeparator>
      <MenuCategory title="Cocktails" items={menuData.cocktails} />
      <MenuCategory title="Gin" items={menuData.gin} />
      <MenuCategory title="Rum" items={menuData.rum} />
      <MenuCategory title="Wiskey" items={menuData.wiskey} />
      <MenuCategory title="Vodka" items={menuData.vodka} />
      <MenuCategory title="Tequila" items={menuData.tequila} />
      <MenuCategory title="Liquors & Digestifs" items={menuData.liquors} />
      <MenuCategory
        title="Mocktails (Non-Alcoholic)"
        items={menuData.mocktails}
      />
      <MenuCategory title="Beer & Wine" items={menuData.lowAlcohol} />
      <MenuCategory title="Soft Drinks" items={menuData.softDrinks} />
      <MenuCategory title="House Shots" items={menuData.shots} />
    </MenuGrid>
  </Section>
);

export default Menu;
