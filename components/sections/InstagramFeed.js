"use client";
import styled from "styled-components";
import Image from "next/image";
import Button from "../ui/Button";

const FeedContainer = styled.section`
  padding: 6rem 5%;
  text-align: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 3rem 0;
`;
const ImageWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
`;

const InstagramFeed = () => (
  <FeedContainer>
    <h2>Follow The Madness</h2>
    <p>Check out our latest creations and stories on Instagram @justpitabar</p>

    {/* This is a placeholder grid. For a real feed, use an embed widget from a service like Elfsight or Juicer. */}
    <Grid>
      <ImageWrapper>
        <Image
          src="/images/pitas/la-falafabulosa.jpeg"
          alt="Insta 1"
          width={300}
          height={300}
        />
      </ImageWrapper>
      <ImageWrapper>
        <Image
          src="/images/sides/nachos.jpeg"
          alt="Insta 2"
          width={300}
          height={300}
        />
      </ImageWrapper>
      <ImageWrapper>
        <Image
          src="/images/pitas/la-toxica.jpeg"
          alt="Insta 3"
          width={300}
          height={300}
        />
      </ImageWrapper>
      <ImageWrapper>
        <Image
          src="/images/sides/bravas.jpeg"
          alt="Insta 4"
          width={300}
          height={300}
        />
      </ImageWrapper>
    </Grid>

    <Button href="https://instagram.com/YOUR_ACCOUNT" target="_blank">
      Follow Us
    </Button>
  </FeedContainer>
);
export default InstagramFeed;
