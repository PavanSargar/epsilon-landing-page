import React from "react";
import styled from "styled-components";

const Para = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default Para;

const Container = styled.p`
  width: 100%;
  max-width: none;
  padding-right: 0;
  font-family: Poppins, sans-serif;
  color: #5a5761;
  font-size: 22px;
  font-weight: 300;
  text-align: center;

  &.md {
    font-size: 20px;
  }

  &.white {
    color: ${(props) => props.theme.bgColor};
  }

  &.left {
    text-align: left;
  }

  @media screen and (max-width: 992px) {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: left;
  }
`;
