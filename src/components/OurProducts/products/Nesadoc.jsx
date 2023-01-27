import React from "react";
import styled from "styled-components";
import { Grid, GridItem } from "../../../lib/Grid";
import Title from "../../../lib/Title";
import Para from "../../../lib/Para";

import { englishContent } from "../../../content";
import IMG from "../../../assets/ep4.webp";
import LOGO from "../../../assets/Nesadoc.png";

const Nesadoc = ({ animation }) => {
  return (
    <Container data-aos={animation}>
      <Grid container justifyContent="center" alignItems="center">
        <GridItem md="6" sm="12" xs="12">
          <Container className="logo-img">
            <Image className="logo" src={LOGO} alt="" />
          </Container>
          <Title className="md">{englishContent.products.nesadoc.title}</Title>
          <Para className="md left">
            {englishContent.products.nesadoc.description}
          </Para>
          <br />
          <Para className="md left gd bold link">
            {englishContent.products.nesadoc.tapBtn}
          </Para>
        </GridItem>
        <GridItem md="6" sm="12" xs="12">
          <Image alt="" src={IMG} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Nesadoc;

const Container = styled.div`
  padding: ${(props) => props.theme.sectionMargin};
  background-color: ${(props) => props.theme.bgColor};
  /* background: -webkit-linear-gradient(135deg, #475ac3, #8b55d0); */

  &.logo-img {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 0;
    background-color: transparent;
  }
`;

const Image = styled.img`
  position: static;
  width: 40vw;
  max-width: 600px;

  @media screen and (max-width: 992px) {
    width: 60vw;
    margin-top: 2rem;
    /* margin-left: 20px; */
  }
  @media screen and (max-width: 768px) {
    /* margin-left: 40px; */
    
  }

  &.logo {
    width: 15vw;
    max-width: 200px;

    margin-left: -3rem;
    margin-top: 0;

    @media screen and (max-width: 992px) {
      width: 30vw;
      max-width: 200px;
      margin-left: -1rem;
    }
  }
`;
