import React from "react";
import styled from "styled-components";
import Para from "../../lib/Para";
import Title from "../../lib/Title";

const About = () => {
  return (
    <Container id="about">
      {/* <Title>Epsilon Beta Technologies</Title> */}
      <Title className="center gd">About Us</Title>
      <br />
      <Para className="md">
        <span className="bold gd">Epsilon Beta Technologies</span> is an innovative provider of health services
        solutions. We are strategic partners to the world's leading payer,
        provider, MedTech and life sciences companies to drive innovation,
        businesa transformation and industry wide convergence. We play a deep
        and meaningful role in accelerating digital innovation, driving
        sustainable value and helping improve outcomes across the healthcare
        ecosystem.
      </Para>
      <br />
      <Para className="md">
        We deliver specialized solutions, services and products that enable our
        clients to accelerate their digital transformation journey. Our deep
        commitment to world-class quality and customer satisfaction drives all
        clients our engagements.
      </Para>
    </Container>
  );
};

export default About;

const Container = styled.div`
  padding: ${(props) => props.theme.sectionMargin};
  background-color: ${(props) => props.theme.bgColor};
`;
