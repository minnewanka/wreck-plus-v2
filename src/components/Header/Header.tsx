import React from "react";
import Image from "next/image";
import styled from "styled-components";

const ImgContainer = styled.div`
  position: relative;
  height: 200px;
  @media (max-width: ${(props) => props.theme.device.md}) {
    height: 120px;
  }
`;

const Header: React.FC = () => {
  return (
    <ImgContainer>
      <Image src="images/Logo.png" alt="" fill objectFit="contain" />
    </ImgContainer>
  );
};

export default Header;
