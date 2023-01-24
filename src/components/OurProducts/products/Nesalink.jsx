import React from "react";
import styled from "styled-components";

import { Grid, GridItem } from "../../../lib/Grid";
import Para from "../../../lib/Para";
import Title from "../../../lib/Title";
import IMG from "../../../assets/nesalink.png";
import IMG1 from "../../../assets/nesalink-img.png";
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

  &.mobile-img {
    display: none;
  }

  @media screen and (max-width: 992px) {
    width: 60vw;
    margin-left: -20px;
  }

  @media screen and (max-width: 768px) {
    margin-left: -60px;
    display: none;

    &.mobile-img {
      display: flex;
      margin-left: -30px;
    }
  }

  &.logo-img {
    background-color: transparent;
    width: 10vw;
    max-width: 200px;

    margin-left: -8rem;

    @media screen and (max-width: 992px) {
      width: 30vw;
      max-width: 200px;
      margin-left: -1rem;
    }
  }
`;
