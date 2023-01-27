import React from "react";
import styled from "styled-components";
import { englishContent } from "../../content";
import Para from "../../lib/Para";
import Title from "../../lib/Title";

import IMG from "../../assets/ep2.webp";

const Hero = ({ animation }) => {
  return (
    <Container data-aos={animation}>
      <Title className="gd">{englishContent.title}</Title>
      <Para>{englishContent.description}</Para>

      <Image src={IMG} alt="" />
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
  margin-top: 3rem;
  /* margin-left: -101px; */
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media screen and (max-width: 992px) {
    width: 60vw;
  }
`;
