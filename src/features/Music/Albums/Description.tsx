import React from "react";
import { Col } from "react-grid-system";
import { StyledRow, Img, Text } from "./styledComponents";

const Description: React.FC<{ cover: string }> = ({ cover, children }) => {
  return (
    <StyledRow>
      <Col lg={4}>
        <div>
          <Img src={cover} alt="" />
        </div>
      </Col>
      <Text lg={8}>{children}</Text>
    </StyledRow>
  );
};

export default Description;
