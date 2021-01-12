import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/stars-bg.jpg";
import Logo from "../../assets/images/Logo.png";

const Div = styled.div`
  background-image: url(${Background});
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
        <img src={Logo} alt="" />
      </div>
    </Div>
  );
};

export default Hero;
