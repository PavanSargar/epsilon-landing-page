import React from "react";
import styled from "styled-components";

import { Grid, GridItem } from "../../../lib/Grid";
import Para from "../../../lib/Para";
import Title from "../../../lib/Title";
import IMG from "../../../assets/nesalink.png";
import { englishContent } from "../../../content";

const Nesalink = ({ animation }) => {
  return (
    <Container data-aos={animation}>
      <Grid container justifyContent="center" alignItems="center">
        <GridItem md="6" sm="12" xs="12">
          <Image
            src="https://uploads-ssl.webflow.com/62d7d2c09b7ee74d5f86ea61/6385e41760f044c88bed0d15_Group_247_1_1_optimized-p-500.webp"
            alt=""
          />
        </GridItem>
        <GridItem md="6" sm="12" xs="12">
          <Image className="logo-img" src={IMG} alt="" />
          <Title className="md left">
            {englishContent.products.nesalink.title}
          </Title>
          <Para className="left md">
            {englishContent.products.nesalink.description}
          </Para>
          <br />
          <Para className="left md bold gd">
            {englishContent.products.nesalink.tabBtn}
          </Para>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Nesalink;

const Container = styled.div`
  padding: ${(props) => props.theme.sectionMargin};
  background-color: ${(props) => props.theme.bgColor};
`;

const Image = styled.img`
  position: relative;
  left: 100px;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  max-width: 245px;
  margin-right: 8vw;
  margin-bottom: 0;
  margin-left: auto;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: 50% 0%;
  object-position: 50% 0%;

  @media screen and (max-width: 992px) {
    width: 60vw;

    margin-left: -20px;
  }

  &.logo-img {
    background-color: transparent;
    width: 15vw;
    max-width: 200px;

    margin-left: -9rem;
  }
`;
