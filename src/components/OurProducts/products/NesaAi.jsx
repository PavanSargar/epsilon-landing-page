import React from "react";
import styled from "styled-components";
import { Grid, GridItem } from "../../../lib/Grid";
import Title from "../../../lib/Title";
import Para from "../../../lib/Para";

import IMG from "../../../assets/nesaai.png";
import IMG2 from "../../../assets/ep3.webp";

import { englishContent } from "../../../content";

const NesaAi = ({ animation }) => {
  return (
    <Container data-aos={animation}>
      <Grid container justifyContent="center" alignItems="center">
        <GridItem md="6" sm="12" xs="12">
          <Image className="logo-img" src={IMG} alt="" />
          <Title className="md ">{englishContent.products.nesaAi.title}</Title>
          <Para className="md left ">
            {englishContent.products.nesaAi.description}
          </Para>
          <br />
          <Para className="md left bold link gd">
            {englishContent.products.nesaAi.tapBtn}
          </Para>
          <br />
          <Para className="md left ">
            {englishContent.products.nesaAi.description2}
          </Para>
        </GridItem>
        <GridItem md="6" sm="12" xs="12">
          <Image className="img" alt="" src={IMG2} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default NesaAi;

const Container = styled.div`
  padding: ${(props) => props.theme.sectionMargin};
  background-color: ${(props) => props.theme.bgColor};
  /* background: linear-gradient(135deg, #475ac3, #8b55d0); */
`;

const Image = styled.img`
  position: static;
  width: 40vw;
  max-width: 600px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &.img {
    margin-left: 1rem;

    @media screen and (max-width: 992px) {
      width: 60vw;
      margin: 1rem auto 0;
      /* margin-left: 60px; */
    }
  }

  &.logo-img {
    background-color: transparent;
    width: 10vw;
    max-width: 200px;
    box-shadow: none;
    margin-left: -1rem;

    @media screen and (max-width: 992px) {
      width: 30vw;
      max-width: 200px;
      margin-left: -1rem;
    }
  }
`;
