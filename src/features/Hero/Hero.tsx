import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Div = styled.div`
  background-image: url("/images/stars-bg.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Hero: React.FC = () => {
  return (
    <Div>
      <div>
        <Image src="/images/Logo.png" alt="" />
      </div>
    </Div>
  );
};

export default Hero;
