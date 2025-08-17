"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

const ItemContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem 0;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
`;
const Details = styled.div``;
const Name = styled.h4`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  font-weight: 700;
`;
const Description = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin: 0;
`;
const Price = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
`;
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DrinkItem = ({ name, description, price }) => (
  <ItemContainer variants={itemVariants}>
    <Details>
      <Name>{name}</Name>
      {description && <Description>{description}</Description>}
    </Details>
    <Price>{price}</Price>
  </ItemContainer>
);

export default DrinkItem;
