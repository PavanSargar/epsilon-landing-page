import React from "react";
import styled from "styled-components";
import Title from "../../lib/Title";

const OurProducts = ({ animation }) => {
  return (
    <Container id="products" data-aos={animation}>
      <Title className="center gd">Our Products</Title>
    </Container>
  );
};

export default OurProducts;

const Container = styled.div`
  padding: ${(props) => props.theme.sectionMargin};
  height: 20vh;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
`;
