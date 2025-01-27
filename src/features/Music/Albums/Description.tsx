import React from "react";
import Image from "next/image";
import { Col } from "react-grid-system";
import { StyledRow, Text } from "./styledComponents";
import styled from "styled-components";

const ImgContainer = styled.div`
  position: relative;
  height: 400px;
  @media (max-width: ${(props) => props.theme.device.md}) {
    width: 50%;
  }
`;

const Description: React.FC<{ cover: string; children: any }> = ({
  cover,
  children,
}) => {
  return (
    <StyledRow>
      <Col lg={4}>
        <ImgContainer>
          <Image src={cover} alt="" fill objectFit="contain" />
        </ImgContainer>
      </Col>
      <Text lg={8}>{children}</Text>
    </StyledRow>
  );
};

export default Description;
