import React from "react";
import logo from "../assets/biglogo.svg";
import styled from "styled-components";

const main = () => {
  return (
    <>
      <Container>
        <Logo src={logo} alt="logo" />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img``;

export default main;
