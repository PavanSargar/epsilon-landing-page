import React, { useEffect } from "react";
import styled from "styled-components";

import Aos from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import OurProducts from "./components/OurProducts/OurProducts";
import NesaAi from "./components/OurProducts/products/NesaAi";
import Nesadoc from "./components/OurProducts/products/Nesadoc";
import Nesalink from "./components/OurProducts/products/Nesalink";
import Spacing from "./lib/Spacing";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Hero animation="fade-down" />
        <OurProducts animation="fade-down" />
        <Nesadoc animation="fade-down" />
        <Spacing />
        <Nesalink animation="fade-down" />
        <Spacing />
        <NesaAi animation="fade-down" />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  margin-top: 12rem;
`;
