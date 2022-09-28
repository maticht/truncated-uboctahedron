import React from "react";
import styled from "styled-components";


export default function HeroBackground() {
  return (
    <Wrapper/>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 475px;
  background: linear-gradient(180deg, #3a3a3a 6.33%, #494949 39.13%);
  text-align: center;
  overflow: hidden;
`;


