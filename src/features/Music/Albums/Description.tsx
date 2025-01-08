import React from "react";
import Image from "next/image";
import { Col } from "react-grid-system";
import { StyledRow, Text } from "./styledComponents";

const Description: React.FC<{ cover: string; children: any }> = ({
  cover,
  children,
}) => {
  return (
    <StyledRow>
      <Col lg={4}>
        <div>
          <Image src={cover} alt="" />
        </div>
      </Col>
      <Text lg={8}>{children}</Text>
    </StyledRow>
  );
};

export default Description;
