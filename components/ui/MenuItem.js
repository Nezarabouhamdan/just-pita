"use client";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  text-align: center;
`;
const ImageWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
`;
const ItemName = styled.h3`
  color: ${({ theme }) => theme.colors.text};
`;
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MenuItem = ({ name, image }) => (
  <Card
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <ImageWrapper>
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        style={{ width: "100%", height: "auto" }}
      />
    </ImageWrapper>
    <ItemName>{name}</ItemName>
  </Card>
);

export default MenuItem;
