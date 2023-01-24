import React from "react";
import styled from "styled-components";
import { Grid, GridItem } from "../../../lib/Grid";
import Title from "../../../lib/Title";
import Para from "../../../lib/Para";

import IMG from "../../../assets/nesaai.png";

import { englishContent } from "../../../content";

const NesaAi = ({ animation }) => {
  return (
    <Container data-aos={animation}>
      <Grid container justifyContent="center" alignItems="center">
        <GridItem md="6" sm="12" xs="12">
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
          <Image
            alt=""
            src="https://uploads-ssl.webflow.com/62d7d2c09b7ee74d5f86ea61/6385e40b0a1e075eae4acb2b_Group_263_1_1_optimized-p-1080.webp"
          />
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

  @media screen and (max-width: 992px) {
    width: 60vw;
    margin-left: 20px;
  }
`;
