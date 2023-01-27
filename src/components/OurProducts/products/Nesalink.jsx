import React from "react";
import styled from "styled-components";

import { Grid, GridItem } from "../../../lib/Grid";
import Para from "../../../lib/Para";
import Title from "../../../lib/Title";
import IMG from "../../../assets/nesalink.png";
import IMG1 from "../../../assets/ep1.webp";
import { englishContent } from "../../../content";

const Nesalink = ({ animation }) => {
  return (
    <Container data-aos={animation}>
      <Grid container justifyContent="center" alignItems="center">
        <GridItem md="6" sm="12" xs="12">
          <Image src={IMG1} alt="" />
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
          <Image src={IMG1} alt="" className="mobile-img" />
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
  position: static;
  width: 40vw;
  max-width: 600px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;


  &.mobile-img {
    display: none;
  }

  @media screen and (max-width: 992px) {
    /* width: 60vw; */
    margin-left: -20px;
  }

  @media screen and (max-width: 768px) {
    margin-left: -60px;
    display: none;

    &.mobile-img {
      display: flex;
      margin-left: 0px;
      margin-top: 2rem;
      width: 60vw;
    }

    &.logo-img {
      display: flex;
    }
  }

  &.logo-img {
    background-color: transparent;
    width: 10vw;
    max-width: 200px;

    margin-left: -2rem;
    box-shadow: none;

    @media screen and (max-width: 992px) {
      width: 30vw;
      max-width: 200px;
      /* margin-left: -1rem; */
    }
  }
`;
