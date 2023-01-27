import React from "react";
import styled from "styled-components";
import Para from "../../lib/Para";
import Title from "../../lib/Title";

const Contact = () => {
  return (
    <Container id="contact" className="container">
      <Title className="gd">Contact Us</Title>
      <br />
      <Container>
        <Para className="md"> Dr. Fernando Ku COO </Para>
        <Para className="md"> epsilonbetatech@gmail.com </Para>
        <Para className="md">(+507) 6480 4845</Para>
        <Para className="gd bold md">
          @dr.kurachel @epsilonbetatech @nesa.link
        </Para>
      </Container>
      <br />
      <br />
      <Container>
        <Para className="md"> Dr. Saturnino Dominguez CEO</Para>
        <Para className="md"> epsilonbetatech@gmail.com </Para>
        <Para className="md">(+507) 6704 1694</Para>
        <Para className="gd bold md">@epsilonbetatech @nesa.link</Para>
      </Container>
      <br />
      <br />
      <Container>
        <Para className="md"> Victor Chan CFO</Para>
        <Para className="md"> epsilonbetatech@gmail.com </Para>
        <Para className="md">(+507) 6676 5862</Para>
        <Para className="gd bold md">@epsilonbetatech @nesa.link</Para>
      </Container>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  &.container {
    padding: ${(props) => props.theme.sectionMargin};
  }
  background-color: ${(props) => props.theme.bgColor};
`;
