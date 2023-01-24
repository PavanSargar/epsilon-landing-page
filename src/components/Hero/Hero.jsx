import React from "react";
import styled from "styled-components";
import { englishContent } from "../../content";
import Para from "../../lib/Para";
import Title from "../../lib/Title";

const Hero = ({ animation }) => {
  return (
    <Container data-aos={animation}>
      <Title className="gd">{englishContent.title}</Title>
      <Para>{englishContent.description}</Para>

      <Image
        alt=""
        src="https://uploads-ssl.webflow.com/62d7d2c09b7ee74d5f86ea61/638f69a2a4e0d993166def1c_Group_277_1_1_optimized.webp"
      />
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  margin-top: 100px;
  margin: ${(props) => props.theme.sectionMargin};
  /* height: 60vh; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Image = styled.img`
  position: static;
  width: 40vw;
  max-width: 600px;
  margin-left: -101px;

  @media screen and (max-width: 992px) {
    width: 60vw;
  }
`;
