import React from "react";
import styled from "styled-components";
import Button from "../../lib/Button";
import { FaBars } from "react-icons/fa";

import { englishContent } from "../../content";

import LOGO from "../../assets/logo.png";

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Container className="brand">
          {/* <h1>{englishContent.title.split(" ")[0]}</h1> */}
          <Image src={LOGO} alt="" />
        </Container>

        <Container className="nav-items">
          <p>
            <span>Mission</span>
          </p>
          <p>
            <span>Technology</span>
          </p>
          <p>
            <span>Business</span>
          </p>
        </Container>
      </Container>

      <Container className="buttons">
        <span>
          <FaBars />
        </span>
        <Button className="nav-btn">Button1</Button>
        <Button className="nav-btn bg-dark">Button2</Button>
      </Container>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  padding: 1rem 2rem;

  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 999;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 100px;
  padding: 22px 3%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  background-color: hsla(0, 0%, 100%, 0.11);
  box-shadow: none;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  font-family: Poppins, sans-serif;
  font-weight: 300;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  &.brand,
  &.nav-items {
    display: flex;
    align-items: center;
    gap: 3rem;
    @media screen and (max-width: 992px) {
      gap: 2rem;
    }

    p {
      margin-top: 0.2rem;
    }

    p span {
      transition: 350ms;
      color: #534b57;
      font-size: 15px;
      font-weight: 400;
      cursor: pointer;
    }
  }

  &.nav-items {
    @media screen and (max-width: 992px) {
      margin-left: -2rem !important;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &.buttons {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      display: none;
      cursor: pointer;
      padding: 12px 16px;
      font-size: 24px;
      -webkit-tap-highlight-color: transparent;
      tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      border: 1px solid rgba(17, 17, 17, 0.1);
      border-radius: 10px;
      color: #000;

      :active {
        border-color: #111;
        background-color: #111;
        svg {
          background-color: #111;
          color: ${(props) =>
            props.theme.bgColor ? props.theme.bgColor : "#fff"};
        }
      }

      @media screen and (max-width: 992px) {
        display: inline-block;
        /* margin: 0.5rem 0 0 0; */
        svg {
          margin-top: 0.3rem;
        }
      }
    }
  }
`;

const Image = styled.img`
  width: calc(4vw + 1rem);
  height: auto;
`;
