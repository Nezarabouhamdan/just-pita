"use client";
import styled from "styled-components";
import { menuData } from "@/data/menuData";

const Section = styled.section`
  padding: 8rem 5%;
  background: ${({ theme }) => theme.colors.white};
`;
const Title = styled.h2`
  text-align: center;
  margin-bottom: 5rem;
`;
const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 4rem 3.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;
const CategoryTitle = styled.h3`
  margin-bottom: 1.5rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: 0.75rem;
  display: inline-block;
`;
const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.25rem;
  &:not(:last-child) {
    border-bottom: 1px dotted #ccc;
  }
`;
const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
`;
const ItemName = styled.h4`
  font-family: inherit; // It will inherit from GlobalStyles
  font-weight: normal; // Abril Fatface is already bold
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;
const ItemPrice = styled.span`
  font-family: inherit;
  font-weight: normal;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap; // Prevents price from wrapping
`;
const ItemDescription = styled.p`
  font-family: ${({ theme }) =>
    theme.fonts.body}; // Explicitly set font for consistency
  font-size: 1rem;
  margin: 0.25rem 0 0;
  color: #888; // Lighter color for description
  font-weight: normal;
  line-height: 1.5;
`;

const MenuCategory = ({ title, items }) => (
  <div>
    <CategoryTitle>{title}</CategoryTitle>
    {items.map((item) => (
      <MenuItem key={item.name}>
        <ItemHeader>
          <ItemName>{item.name}</ItemName>
          <ItemPrice>{item.price}</ItemPrice>
        </ItemHeader>
        {item.description && (
          <ItemDescription>{item.description}</ItemDescription>
        )}
      </MenuItem>
    ))}
  </div>
);

const Menu = () => (
  <Section id="menu">
    <Title>Our Menu</Title>
    <MenuGrid>
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
