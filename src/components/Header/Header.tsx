import React from "react";
import Image from "next/image";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ImgContainer = styled.div`
  position: relative;
  height: 200px;
  @media (max-width: ${(props) => props.theme.device.md}) {
    width: 50%;
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
